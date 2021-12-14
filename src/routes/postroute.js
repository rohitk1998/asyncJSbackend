const express = require('express')
import { post_request } from "../controllers/index"


const post_route = express.Router()

post_route.get('/posts' , post_request.GetAllPosts)
post_route.post('/post' , post_request.addPost)
post_route.put('/updatepostdetails' , post_request.updatePostDetails)
post_route.post('/getauthorbypost' , post_request.getAuthorByPost)
post_route.post('/getpostbypostid/:postid' , post_request.getPostByPostID)

 export default post_route ; 