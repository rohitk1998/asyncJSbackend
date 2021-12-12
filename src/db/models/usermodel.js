import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    email_id: String,
    google_id: String,
    dob:String,
    is_active: Boolean,
    is_removed: Boolean,
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "post",
      },
    ],
  },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);

export default user;
