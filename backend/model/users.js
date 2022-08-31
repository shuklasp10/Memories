import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    given_name:{type:'String', required:true },
    family_name:{type:'string', requires:true},
    email:String,
    password:String
})

const User = mongoose.model('User',userSchema);

export default User;