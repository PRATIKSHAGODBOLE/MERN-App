//using of model send data to database (Collection)

const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:String,
    body:String,
    latest:Boolean,
    oldest:Boolean,
    liked:Boolean,
    disliked:Boolean
 }

)

const Post = mongoose.model('posts', postSchema) //posts is collection

module.exports = Post