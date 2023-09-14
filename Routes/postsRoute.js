const express =  require("express")
//Function
const router = express.Router()

const {fetchAllPosts, postNewPost, updatePost, deletePost, fetchAPost} = require('../Controller/postsController')


//APIs End Points

//1. GET Method - Fetch the Data
router.get('/',fetchAllPosts) 
//---------------------------------------------------------------
//2. POST Method (new note post)
router.post('/' , postNewPost) 

//-----------------------------------------------------------------------

//3. PUT Method //particular note want to uodate using id only.(konsa particular note update krna chahte ho)
router.put('/:id',updatePost)

//4. Delete Method //perticuller note want to Delete.
router.delete('/:id',deletePost )

//5.Fetch a Single note
router.get('/:id',fetchAPost )

module.exports =  router