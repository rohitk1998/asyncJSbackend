import Blog from "../db/models/blogmodel";

export const request = {
  GetAllPosts: async (req, res) => {
    console.log("req" , req)
    await Blog.find({} , (err , result)=> {
          return new Promise ((resolve , reject)=> {

            return err ? reject(err) : resolve(res.json(result))
          })
    })
  },
  addPost : async (req , res)=> {
       console.log("create blog" , req.body)
       await Blog(req.body).save()
       .then(result => {
         return res.json(result)
       })
       .catch((error)=>{
         console.log("error" , error)
       })
  }
};
