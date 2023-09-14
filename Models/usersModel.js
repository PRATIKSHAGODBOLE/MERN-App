const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    name:{type:String, default:"Guest"},
    role: {type:String, default:"Visitor"}



})


const User = mongoose.model('users', userSchema)

module.exports = User