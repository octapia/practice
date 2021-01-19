const{Schema,model} = require('mongoose')

const pollSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    descriptions:{
        type: String,
        required: true,
        trim: true
    },
    totalvoat:{
        type: Number,
        default: 0
    },
    options:{
        type: [{
            name: 'string',
            vote: Number
        }]
    }
})

const Poll = model('Poll', pollSchema)

module.exports = Poll