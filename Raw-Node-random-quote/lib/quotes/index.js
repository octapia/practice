
// dependencies
const fs = require('fs')

const quotes ={}

quotes.allQuotes = function allQuotes(){
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf-8')
    const arrayOfQuotes = fileContents.split(/\r?\n/)
    return arrayOfQuotes
    }

module.exports = quotes