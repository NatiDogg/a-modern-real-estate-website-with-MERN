import userModel from '../models/userModel.js'


export const authUser = async(req,res,next)=>{
     const {userId} = req.auth;

     if(!userId){
        res.json({
            success:false,
            message: "Not Authorized!"
        })
     }
     else{
        const user = await userModel.findById(userId)
        req.user = user;
        next()
     }
}