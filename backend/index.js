import express from 'express'; // <-- Module Style import
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import data from './data.js';
import seedRouter from './routes/seedRoutes.js';
import categoryRouter from './routes/categoryRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express()
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//router
app.use('/api/seed/', seedRouter);      
app.use('/api/category/', categoryRouter);    
app.use('/api/products/', productRouter);     
app.use('/api/user/', userRouter);     

//connection with DB
dotenv.config()
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('CONNECTED TO DB')
})
.catch((error)=>{
    console.log(error);
});

// app.get('/api/products', (req, res)=>{
//     res.send(data.products);
// })

//port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})