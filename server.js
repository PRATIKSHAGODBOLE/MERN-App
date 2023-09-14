const express = require("express")
const mongoose = require("mongoose")
const postRoute = require('./Routes/postsRoute')
const userRoute = require('./Routes/usersRoute')
//require cors 
const cors = require('cors')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 4000
const DB_URL = process.env.MONGODB_URL

app.get('/', (req, res)=>{
    res.send("Hello World")

})

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors)

app.use('/api/posts', postRoute)
app.use('/api/users', userRoute)
//Database Connections
mongoose
.connect(DB_URL)
.then(()=>{
    console.log("Database Connected..!!")
    app.listen(PORT, ()=>{
        console.log(`Server runing on http://localhost:${PORT}`)
       })
})
.catch(err=>{
    console.log("Database Connection issue:")
    console.log(err.message)
})