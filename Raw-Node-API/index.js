
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
app.handleReqRes= handleReqRes

// start the server
app.creatServer()