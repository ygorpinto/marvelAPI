import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI

const connectDB = async () => {
    await mongoose.connect(MONGODB_URI,{ useUnifiedTopology: true,useNewUrlParser: true })
    console.log("db connected !");
    
}

export default connectDB;