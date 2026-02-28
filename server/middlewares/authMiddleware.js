import userModel from '../models/userModel.js'


export const authUser = async(req,res,next)=>{
   console.log("Auth Data:", req.auth());
     const {userId} = req.auth();

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