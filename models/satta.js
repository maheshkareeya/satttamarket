let mongoose = require('mongoose');


//articleSchema


let sattaSchema = mongoose.Schema({

    name: {
        type: String,
        required: false
    },
    number: {
        type: String,
        required: false
    },
    time: {
        type: String,
        required: false
    },
    time1: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    bgcolor: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    }
    ,
    color1: {
        type: String,
        required: false
    }


});


let Satta = module.exports = mongoose.model('Satta', sattaSchema);