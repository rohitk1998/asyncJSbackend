const express = require('express')
import { request } from "../controllers/blogController"


const blogroute = express.Router()

blogroute.get('/posts' , request.GetAllPosts)
blogroute.post('/post' , request.addPost)

 export default blogroute ; 

 ///kiiiisiisisisisisisis

 //hello