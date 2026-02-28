import express from 'express'
import { bookingCreate, checkBookingAvailability, getAgencyBookings, getUserBookings } from '../controllers/bookingController.js';
import {authUser} from '../middlewares/authMiddleware.js'


const bookingRouter = express.Router();

bookingRouter.post("/check-availability", authUser,checkBookingAvailability)
bookingRouter.post("/book",authUser,bookingCreate)
bookingRouter.post("/user",authUser,getUserBookings)
bookingRouter.post("/agency",authUser,getAgencyBookings)
export default bookingRouter;