const User = require('../Models/usersModel')

//1. Get All Notes Fetch data
const fetchAllUsers = async(req,res)=>{
    const Users =  await User.find({})
    res.json(Users)
}

//2. Post New Note
const postNewUser = async(req,res)=>{
    //1. Recieve Data for Storing into Database from Body
   const user = {
       email: req.body.email,
       password: req.body.password,
       name:req.body.name,
       role:req.body.role,
    
   }

   // 2. Use Mongoose command to store data into MongoDB

   // mongoose command to store the data in DB
   // Command --> model.create(object)
      await User.create(user)

   // 3. Respond back to user
   res.json({message:"New User Created", user:user})
}

module.exports={fetchAllUsers, postNewUser}