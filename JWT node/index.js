const crypto= require('crypto')
const base64url= require('base64url')

const header= {
    "alg": "HS265",
    "type": "JWT"
}
const headerB64 = base64url(JSON.stringify(header))

const payload = { foo: "Bar"}
const paylodB64 = base64url(JSON.stringify(payload))

const secret = "my secret"
const content = `${headerB64}.${paylodB64}`
const signature = crypto.createHmac('sha265', secret).update(content).digest('hex')
const token = `${content}.${signature}`
console.log(token)
