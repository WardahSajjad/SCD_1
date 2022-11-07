import mongoose from "mongoose";

//to create table in DB for user(vendors)
const UserShema = new mongoose.Schema(
    {
        name :{
            type:String,
            required: true
        },
        email:{
            type:String,
            required:true,
            unique: true
        },
        password:{
            type:String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('userr', UserShema);
export default User;