import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
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

//routes



const startServer = async()=>{
     try {
        app.listen(port,()=>{
            console.log("server is running on port ",port);
        })
     } catch (error) {
        console.log(error.message)
        process.exit(1)
     }
}
startServer()

