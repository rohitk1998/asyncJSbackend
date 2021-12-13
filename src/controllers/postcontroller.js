import post from "../db/models/postmodel";
const { ObjectId } = require("mongodb");


export const post_request = {
  GetAllPosts: async (req, res) => {
    console.log("req" , req)
    await post.find({} , (err , result)=> {
          return new Promise ((resolve , reject)=> {
            return err ? reject(res.json(error)) : resolve(res.json(result))
          })
    })
  },
  addPost : async (req , res)=> {
       console.log("create blog" , req.body)
       await post(req.body).save()
       .then(result => {
         return res.json(result)
       })
       .catch((error)=>{
         console.log("error" , error)
       })
  },
  updatePostDetails: async (req, res) => {
    let payload = req.body;
    let postId = ObjectId(`${req.body._id}`);
    console.log(payload);
    await post
      .findOneAndUpdate({ _id: postId }, { $set:payload})
      .then((result) => {
        console.log("RESULT :: ", result);
        res.json(result);
      })
      .catch((error) => {
        console.log("ERROR :: ", error);
        res.json({err : error})
      });
  },
  getAuthorByPost : async (req , res)=>{
    console.log("req body ::" , req.body)
    await post.findById({_id : (req.body._id)}).populate('published_by').
    exec(function (err, result) {
      if (err) res.json({err : err});
       res.json(result.published_by);
    })
  }
};
