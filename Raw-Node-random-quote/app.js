// Dependencies 
const mathLibrary = require ('./lib/math')
const quotesLibrary = require ('./lib/quotes')

// scaffolding
const app={}

app.config = {
    timeBetweenQuotes : 1000
}

app.printAQuote = function printAQuote(){
    const allQuotes = quotesLibrary.allQuotes()

    const numberOfQuotse  = allQuotes.length

    const randomNumber = mathLibrary.getRandomNumber(1 , numberOfQuotse)

    const selectQuotes = allQuotes[randomNumber -1]

    console.log(selectQuotes)
}

app.indefiniteLoop =  function indefiniteLoop(){
    setInterval( app.printAQuote , app.config.timeBetweenQuotes)
}

app.indefiniteLoop()
