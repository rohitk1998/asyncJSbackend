import express from "express"
import { post_request , user_request } from "../controllers/index"


const user_route = express.Router()

user_route.get('/users' , user_request.getAllUsers )
user_route.post('/create-user' , user_request.createUser)
user_route.put('/update-user' , user_request.updateUserDetails)
user_route.post('/getallpostsbyuser' , user_request.getAllPostsByUser)


export default user_route ; 