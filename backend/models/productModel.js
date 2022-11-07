import mongoose from "mongoose";

const ProductShema= new mongoose.Schema(
    
    {
        name :{
            type:String,
            required: true
        },
        slug:{
            type:String,
            required:true,
            unique: true
        },
        category:{
            type:String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        seller: {
            type: String,
            required: true
        },
        countInStock:{
            type: Number,
            required: true
        },
        rating:{
            type: Number,
            required: true
        }
   
    },
    {
        timestamps: true
    }
);
const Product = mongoose.model('product', ProductShema);
export default Product;