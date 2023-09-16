//controller use for store the logic

const Post  = require('../Models/postsModel')
//Note this proceess is time consuming that way we used async await. 

//1. Get All Notes Fetch data
const fetchAllPosts = async(req,res)=>{
    console.log("fetchAllPosts")
    const Posts =  await Post.find({})
    res.json(Posts)
}
//-----------------------------------------------------------
//2. Post New Note
const postNewPost = async(req,res)=>{
     //1. Recieve Data for Storing into Database from Body
    const post = {
        title: req.body.title,
        body: req.body.body,
        latest:req.body.latest,
        oldest:req.body.oldest,
         liked:req.body.liked,
        disliked:req.body.disliked
    }

    // 2. Use Mongoose command to store data into MongoDB

    // mongoose command to store the data in DB
    // Command --> model.create(object)
       await Post.create(post)

    // 3. Respond back to user
    res.json({message:"New Note Created", post:post})
}



    //----------------------------------------------------------------

   // 3. Update a Note(PUT)
    const updatePost = async(req,res)=>{
     // 1. Get the note you want to update
    const PostID = req.params.id //perticuller id ko ya url me jo bhi mentioned usko show krne ke liye params.

     // 2. get the data off from the body (we can edit data)
    const updatedPost = {
        title: req.body.title,
        body: req.body.body,
        latest:req.body.latest,
        oldest:req.body.oldest,
         liked:req.body.liked,
        disliked:req.body.disliked
    }

     // 3. Update data in the database based on ID
    await Post.findByIdAndUpdate(PostID, updatedPost)

     // 4. Respond back to client
    res.status(200).json({message: "Note Updated", Post:updatedPost})
}
//-----------------------------------------------------------------
    // 4. Delete a Note
const deletePost = async (req,res)=>{
    // 1. Get the note you want to update
    const PostID = req.params.id
 
     //2. Based on Id from parameter, we will use Mongoose command to delete the data in the database
     const Post = await Post.findByIdAndDelete(PostID)
 
     //3. Respond back to client
     res.status(200).json({message:"Post Deleted", Post:Post})
 }
 
 //-----------------------------------------------------------------
 // 5. Fetch a Single Note
 const fetchAPost = async (req,res)=>{
      // 1. Get the note you want to update
    const PostID = req.params.id
 
    //2. Based on Id from parameter, we will use Mongoose command to fetch a Single Record from the database
    const post = await Post.findById(PostID)
    
    //3. Respond back to client
    res.status(200).json(post)
 }



    module.exports = {fetchAllPosts, postNewPost, updatePost, deletePost, fetchAPost} //function export and we can use it anywhere