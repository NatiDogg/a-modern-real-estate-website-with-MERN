import bookingModel from "../models/bookingModel.js"
import propertyModel from '../models/propertyModel.js'
import agencyModel from '../models/agenyModel.js'


const checkAvailability = async({checkInDate,checkOutDate,property})=>{
    try {
        const bookings = await bookingModel.find({
            property,
            checkInDate:{$lte: checkOutDate},
            checkOutDate: {$gte: checkInDate}
        })

        const isAvailable = bookings.length === 0
        return isAvailable;
    } catch (error) {
        console.log(error.message)
    }


}

export const checkBookingAvailability = async(req,res)=>{

     try {
        const {property, checkInDate, checkOutDate} = req.body
        const isAvailable = await checkAvailability({checkInDate,checkOutDate, property});


        res.json({
            success:true,
            isAvailable
        })

        
     } catch (error) {
        res.json({
            success:false,
            message: error.message
        })
     }

}

export const bookingCreate = async(req,res)=>{
   try {
     const {property, checkInDate,checkOutDate,guests} = req.body
     const user = req.user._id
     const isAvailable = await checkAvailability({checkInDate,checkOutDate,property});
     if(!isAvailable){
        return res.json({
            success:false,
            message: "Property is not available"
        })
     }

     const propertyData = await propertyModel.findById(property).populate("agency");
     let totalPrice = propertyData.price.rent 

     const checkIn = new Date(checkInDate);
     const checkOut = new Date(checkOutDate);
     const timeDiff = checkOut.getTime() - checkIn.getTime()
     const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
     totalPrice = totalPrice * nights;

     const booking = await bookingModel.create({
        user,
        property,
        agency: propertyData.agency._id,
        guests: +guests,
        checkInDate,
        checkOutDate,
        totalPrice


     })

     res.json({
        success:true,
        message: "Booking Created"
     })


   } catch (error) {
     res.json({
            success:false,
            message: error.message
        })
   }
}


export const getUserBookings = async (req,res)=>{
       try {
        const user = req.user._id
        const bookings = await bookingModel.find({user}).populate("property agency").sort({createdAt: -1})

        res.json({success:true, bookings});
       } catch (error) {
         res.json({
            success:false,
            message: "Failed to get Bookings"
        })
       }
}


export const getAgencyBookings = async(req,res)=>{
        try {
            const user = req.user._id
            const agency = await agencyModel.findOne({owner:req.auth.userId});
            if(!agency){
                return  res.json({
            success:false,
            message: "No agency Found"
        })
            }
             const bookings = (await bookingModel.find({agency: agency._id}).populate("property agency user")).sort({createdAt: -1})
             const totalBookings = bookings.length
             const totalRevenue = bookings.reduce((acc,b)=> acc + (b.isPaid ? b.totalPrice : 0),0);
             res.json({
                success:true,
                dashboardData: {
                    totalBookings,
                    totalRevenue,
                    bookings
                }
             })

        } catch (error) {
             res.json({
            success:false,
            message: "Failed to get Agency Bookings"
        })
        }
}

