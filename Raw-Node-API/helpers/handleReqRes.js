
const url = require('url')
const{StringDecoder}= require('string_decoder')
const routes = require('../routes')
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler')

const handler = {}

handler.handleReqRes = (req,res) =>{

    // get the url and parse it 
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname
    const trimmedPath = path.replace(/^\/+|\/+$/g,'')
    console.log(trimmedPath)
    const method = req.method.toLowerCase()
    const queryStringObj = parsedUrl.query
    const headersObj = req.headers

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObj,
        headersObj,
    } 

    const decoder = new StringDecoder('utf-8');
    let realData= '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    chosenHandler(requestProperties, (statusCode , payload ) => {
            statusCode = typeof(statusCode) === 'number' ? statusCode:500;
            payload = typeof(payload) === 'object' ? payload :{};

            const payloadString = JSON.stringify(payload);

            //return the final response 
            res.writeHead(statusCode);
            res.end(payloadString);
    });

    req.on('data',(buffer) => {
        realData += decoder.write(buffer)
    });

    req.on('end', ()=>{
        realData += decoder.end()
        
    console.log(realData)
    //response handle
    res.end('Hello world')
    });
}
module.exports = handler
