import mongoose from 'mongoose'

const connectToDb = async()=>{
       try {
         await mongoose.connect(`${process.env.MONGODB_URL}`);
         console.log("db connected successfully!")
       } catch (error) {
         console.log("db connected failed: ",error.message);
       }
}

export default connectToDb;