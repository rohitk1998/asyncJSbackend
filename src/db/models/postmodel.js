import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    post_title: String,
    post_subtitle: String,
    post_tumbnail: String,
    post_body:String,
    post_category: String,
    post_likedby: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    post_publishedby: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    status: Boolean,
  },
  { timestamps: true }
);

const post = mongoose.model("post", postSchema);

export default post;
