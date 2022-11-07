import express from 'express';
import Category from '../models/categoryModel.js';


//to fetch cateogy from db
const categoryRouter = express.Router();

categoryRouter.get('/', async(req,res)=>{
    const category = await Category.find();
    res.send(category)

});


export default categoryRouter;
