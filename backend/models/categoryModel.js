import mongoose from "mongoose";

//to create table in DB for user(vendors)
const CategoryShema = new mongoose.Schema(
    {
        name :{
            type:String,
            required: true
        }
    },
    {
        timestamps: true
    }

);

const Category= mongoose.model('category', CategoryShema);
export default Category;