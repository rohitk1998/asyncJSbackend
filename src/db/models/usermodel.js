import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   firstname : String , 
   lastname : String , 
   active : Boolean ,
},
{ timestamps: true });

const User = mongoose.model("users", userSchema);

export default User;