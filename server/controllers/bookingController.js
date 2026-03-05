import bookingModel from "../models/bookingModel.js"
import propertyModel from '../models/propertyModel.js'
import agencyModel from '../models/agenyModel.js'
import transporter from "../config/nodeMailer.js"


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

     const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: req.user.email,
        subject: "Property Booking/Sale Details",
        html: `
         <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; color: #333;">
  <h2 style="color: #1a73e8; border-bottom: 2px solid #1a73e8; padding-bottom: 10px; margin-top: 0;">Your Booking Details</h2>
  
  <p style="font-size: 16px; line-height: 1.5; color: #555;">
    Thank you for your booking! We've received your request and everything is being processed. Below are your booking details:
  </p>

  <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <ul style="list-style: none; padding: 0; margin: 0;">
      <li style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">
        <strong style="color: #1a73e8;">Booking ID:</strong> ${booking._id}
      </li>
      <li style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">
        <strong style="color: #1a73e8;">Agency Name:</strong> ${propertyData.agency.name}
      </li>
      <li style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">
        <strong style="color: #1a73e8;">Location:</strong> ${propertyData.address}
      </li>
      <li style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">
        <strong style="color: #1a73e8;">Date:</strong> ${booking.checkInDate.toDateString()}
      </li>
      <li style="padding: 8px 0;">
        <strong style="color: #1a73e8;">Booking Amount:</strong> 
        <span style="font-weight: bold; color: #28a745;">$${booking.totalPrice}</span> / night
      </li>
    </ul>
  </div>

  <p style="font-size: 15px; color: #777; font-style: italic;">
    We are excited to welcome you soon. If you have any questions, please reply to this email.
  </p>
  
  <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 20px 0;">
  <p style="font-size: 12px; color: #aaa; text-align: center;">
    Sent via ${propertyData.agency.name} Booking System
  </p>
</div>
        `
     }
     await transporter.sendMail(mailOptions);

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


export const getAgencyBookings = async (req, res) => {
    try {
        // Use req.user._id which was set by your middleware
        const userId = req.user._id;

        // Find the agency owned by this user
        const agency = await agencyModel.findOne({ owner: userId });

        if (!agency) {
            return res.json({
                success: false,
                message: "No agency found for this account"
            });
        }

        // Fetch and populate bookings
        // Note: Ensure your Booking schema actually uses the strings "property", "agency", and "user"
        const bookings = await bookingModel.find({ agency: agency._id })
            .populate("property agency user")
            .sort({ createdAt: -1 });

        // Calculate stats
        const totalBookings = bookings.length;
        const totalRevenue = bookings.reduce((acc, b) => {
            // Safety check: only add if b.isPaid is true and b.totalPrice exists
            return acc + (b.isPaid && b.totalPrice ? b.totalPrice : 0);
        }, 0);

        res.json({
            success: true,
            dashboardData: {
                totalBookings,
                totalRevenue,
                bookings
            }
        });

    } catch (error) {
        console.error("Controller Error:", error);
        res.json({
            success: false,
            message: error.message // Sending the actual error helps you debug!
        });
    }
}

