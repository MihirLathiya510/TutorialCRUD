const mongoose = require("mongoose");
const tutorial =new mongoose.Schema({
    title: {
        type: "string",
        minlength:3,
        maxlength:100,
        required: true
    },
    description: {
        type: "string",
        minlength:1,
        maxlength:5000,
        required: true
    },
    published:{
        type: "boolean"
    }
    
},{timestamps: true});

module.exports = new mongoose.model('tutorial', tutorial);