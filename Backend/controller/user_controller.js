import User from "../model/user_model.js";
import bcrypt from 'bcrypt'

export const Signup= async (req,res)=>{
    try{
      //data leneg bodu se
      const {fullname,email,password} = req.body;
      const user = await User.findOne({email});
      if(user){
        return res.status(400).json({message:"User already exist"});
      }
    const hashPassword =await bcrypt.hash(password, 10);
      const createUser = new User({
        fullname:fullname,
        email:email,
        password:hashPassword,
      });
      await createUser.save();
      res.status(201).json({message:"user created successfully",
        user:{
        _id:createUser._id,
        fullname:createUser.fullname,
        email:createUser.email,
        
      },
    });
    }catch(err){
        console.log("Error: "+ err.message)
        res.status(500).json({message:"internal server error"})
    }
};

//Login

export const login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const isMatch =await bcrypt.compare(password, user.password);

        if(!user || !isMatch){
            return res.status(400).json({message:'Invalid Usernamee and password '});
        }else{
            res.status(200).json({message:"Login Successful", user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }

    }catch(err){
        console.log("Error: "+ err.message)
        res.status(500).json({message:"internal server error"})
    }
}