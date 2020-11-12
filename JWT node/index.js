const crypto= require('crypto')
const base64url= require('base64url')

const header= {
    "alg": "HS265",
    "type": "JWT"
}

const headerB64 = base64url(JSON.stringifi(header))


const payload = { foo: "Bar"}
const paylodB64 = base64url(JSON.stringifi(payload))

console.log(headerB64)