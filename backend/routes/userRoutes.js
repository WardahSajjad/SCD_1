import express from 'express'
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

const userRouter = express.Router();
//for login
userRouter.post('/login', async(req,res)=>{
    const user = await User.findOne({email:req.body.email});
    //if user exists
    if (user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                email:user.email,
                address:user.address,
                phone:user.phone
            });
            return;
        }
    }
    res.status(401).send({message: 'Invalid Email or Password'});
});

//for register
userRouter.post('/register', async(req,res)=>{
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        address: req.body.address,
        phone: req.body.phone
    });
    const user = await newUser.save();
    res.send({
        _id: user._id,
        name: user.name,
        email:user.email,
        address:user.address,
        phone:user.phone
    });
});

//update
userRouter.post('/update', async (req,res)=>{
    const user = await User.findById(req.body._id);
    //if user exists
    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.address = req.body.address|| user.address;
        user.phone = req.body.phone || user.phone;
        if (req.body.password){
            user.password = bcrypt.hashSync(req.body.password);  
        }

        const updateUser = await user.save();
        res.send(
            {
                _id: user._id,
                name: user.name,
                email:user.email,
                address:user.address,
                phone:user.phone
            });
    }
    else{
        res.status(401).send({message: 'User not found!'});
    }
})


export default userRouter;