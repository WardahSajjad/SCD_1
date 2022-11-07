import express from 'express';
import Product from '../models/productModel.js';


//to fetch proucts from db
const productRouter = express.Router();

productRouter.get('/', async(req,res)=>{
    const prod = await Product.find();
    res.send(prod)

});


export default productRouter;
