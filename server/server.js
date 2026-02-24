import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import connectToDb from './config/connectDb.js'
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebhooks.js'
config()
const app = express()
const port = process.env.PORT || 5000

const allowedOrigins = ["http://localhost:5173"]

const corsOptions = {
    origin: allowedOrigins
}
//middleware
app.use(express.json());
app.use(cors())
app.use(clerkMiddleware())

//API to listen clerk webhooks
app.use('/api/clerk',clerkWebhooks);

//routes




const startServer = async()=>{
     try {
         await connectToDb()
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


