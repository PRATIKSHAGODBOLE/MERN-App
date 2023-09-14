const express =  require("express")
//Function
const router = express.Router()

const {fetchAllUsers, postNewUser} = require('../Controller/userController')

//1. Get Method
router.get('/', fetchAllUsers)

//2. Post Method
router.post('/', postNewUser)

module.exports = router