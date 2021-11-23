const mongoose = require('mongoose');

const contact = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    review : {
        type : String,
        required : true
    },
});

module.exports = mongoose.model('contact', contact);