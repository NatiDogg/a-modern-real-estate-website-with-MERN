import propertyModel from "../models/propertyModel.js";
import {v2 as cloudinary} from 'cloudinary';
import agencyModel from "../models/agenyModel.js";


export const createNewProperty = async(req,res)=>{
      try {

        const {title, description, city, country, address,area,propertyType,priceRent,priceSale,bedrooms,bathrooms,garages,amenities} = req.body

        const agency = await agencyModel.findOne({owner: req.auth.userId})

        if(!agency){
            return res.json({
                success:false,
                message: "Agency not found"
            })
        }
        //upload images
        const uploadImages = req.files.map(async(file)=>{
             const response = await cloudinary.uploader.upload(file)
             return response.secure_url
        })

        const images = await Promise.all(uploadImages);

        await propertyModel.create({
            agency: agency._id,
            title, description, city, country, address,area,propertyType,
            price: {
                rent: priceRent ? +priceRent : null,
                sale: priceSale ? +priceSale : null,

                
            }
            ,
            facilities:{
                bedrooms: +bedrooms,
                bathrooms: +bathrooms,
                garages: +garages,

            }
            ,amenities:JSON.parse(amenities),
            images

        });

        res.json({
            success:true,
            message: "Property Created"
        })

        
      } catch (error) {
        
         res.json({
            success:false,
            message: error.message
        })

      }
}


export const getAllAvailableProperties = async (req,res)=>{
       try {

        const properties = await propertyModel.find({isAvailable: true}).populate({
            path: "agency",
            populate: {
                path: "owner",
                select: "image email "
            }
        });

        res.json({
            success:true,
            properties
        })


        
       } catch (error) {
          res.json({
            success:false,
            message: error.message
        })
       }
}

export const getOwnerProperties = async(req,res)=>{
     try {
        const agencyData = await agencyModel.findOne({owner: req.auth.userId});
        const properties = await propertyModel.find({agency: agencyData._id.toString()}).populate("agency")

        res.json({
            success:true,
            properties
        })

     } catch (error) {
        res.json({
            success:false,
            message: error.message
        })
     }
}

export const togglePropertyAvailability = async(req,res)=>{
          try {
            const {propertyId} = req.body
            const propertyData = await propertyModel.findById(propertyId);
            propertyData.isAvailable = !propertyData.isAvailable
            await propertyData.save();

            res.json({
                success:true,
                message: "Status Updated"
            })
          } catch (error) {
            res.json({
            success:false,
            message: error.message
        })
          }
}

