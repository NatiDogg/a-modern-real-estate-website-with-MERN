import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import connectToDb from './config/connectDb.js'
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebhooks.js'
import userRouter from './routes/userRoutes.js'
import agencyRouter from './routes/agencyRoute.js'
import propertyRouter from './routes/propertyRoute.js'
import bookingRouter from './routes/bookingRoute.js'
import connectCloudinary from './config/cloudinary.js'
config()
const app = express()
const port = process.env.PORT || 5000

const allowedOrigins = ["http://localhost:5173","https://natiorria-realestate.vercel.app"]

const corsOptions = {
    origin: allowedOrigins,
    credentials: true
}
//middleware
app.use(express.json());
app.use(cors())
app.use(clerkMiddleware())

//API to listen clerk webhooks
app.use('/api/clerk',clerkWebhooks);

//routes
app.use("/api/user",userRouter);
app.use("/api/agencies",agencyRouter);
app.use("/api/properties",propertyRouter);
app.use("/api/bookings",bookingRouter);




const startServer = async()=>{
     try {
         await connectToDb()
         await connectCloudinary()
         app.get("/",(req,res)=>{
  res.send("api succesfully connected")
})
        app.listen(port,()=>{
            console.log("server is running on port ",port);
        })
     } catch (error) {
        console.log(error.message)
        process.exit(1)
     }
}
startServer()


