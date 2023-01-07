import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nom:{
    type:String,
    required:true,
  },
  prenom:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  age:{
    type:Number,
    required:true
  },
  photo:{
    type:String,
    required:true
  }
});

 const users = new mongoose.model("users",userSchema);

 export default users;
