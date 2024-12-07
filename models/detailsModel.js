const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
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
// Encrypt Password
detailSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
});
const details = mongoose.model("details",detailSchema)
module.exports = details;