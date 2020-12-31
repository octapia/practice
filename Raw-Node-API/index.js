
// up time Monitor Application

const http = require('http')
const { handleReqRes } = require('./handlers/routeHandlers/handleReqRes')

const app = {}

app.config = {
    port:3000
}

// create server
app.creatServer = () => {
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, ()=>{
        console.log(`Listening to port ${app.config.port}`)
    })

}

// handle Request Response
app.handleReqRes= (req , res) =>{
    // handle request
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname
    const trimedpath = path.replace(/\/+|\/+$/g, '')
    const method = req.method.toLowerCase()
    const queryStringObject = parsedUrl.query
    const headerObject = req.headers
    const decodar = new StringDecoder('utf-8')
    const realData = decodar.decode

    console.log(parsedUrl)
    res.end('Hello world')
}
// start the server
app.creatServer()
