const express = require('express')
import { post_request , user_request } from "../controllers/index"


const post_route = express.Router()

post_route.get('/posts' , post_request.GetAllPosts)
post_route.post('/post' , post_request.addPost)
post_route.put('/updatepostdetails' , post_request.updatePostDetails)
post_route.post('/getauthorbypost' , post_request.getAuthorByPost)

 export default post_route ; 