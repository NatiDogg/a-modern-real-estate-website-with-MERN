import agencyModel from "../models/agenyModel.js"
import userModel from "../models/userModel.js"

export const agencyReg = async(req,res)=>{
      try {

        const {name,email,address,contact,city} = req.body

        const owner = req.user._id

        const agency = await agencyModel.findOne({
            owner
        })

        if(agency){
            return res.json({
                success:false,
                message: "Agency already Registered"
            })
        }

        await agencyModel.create({
            name, email,contact,city,address,owner
        })

        await userModel.findByIdAndUpdate(owner, {
            role: "agencyOwner"
        })

        res.json({
            success:true,
            message: "Agency Registered Successfully"

        })


        
      } catch (error) {
         console.log(error)
             res.json({
            success:false,
            message: error.message
        })
      }
}



