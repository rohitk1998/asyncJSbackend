import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    post_title: String,
    post_sub_title: String,
    post_body: String,
    post_category: String,
    published_by: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const post = mongoose.model("post", postSchema);

export default post;
