const mongoose = require('mongoose')
const detailSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,

    },
    LastName:{
        type:String,
        required: true,
       
    },
    email:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    }
})
const details = mongoose.model("details",detailSchema)
module.exports = details;