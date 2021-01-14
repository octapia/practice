
// Not found handler 
const handler = {}

handler.notFoundHandler =(requestProperties , callback ) =>{
    callback( 404 , { 
        message : 'Your requested url Not Found'
    })
}

module.exports = handler
