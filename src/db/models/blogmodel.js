import mongoose from "mongoose"
// import User from "./usermodel"

const blogSchema = new mongoose.Schema({

    blog_type : String ,
    blog_title : String,
    blog_published : Boolean,
    blog_author : String ,
    blog_thumbnail:String


},{timestamps : true }
)

const Blog = mongoose.model('Blog' , blogSchema)

export default Blog; 