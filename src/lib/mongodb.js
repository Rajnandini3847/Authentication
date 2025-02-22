import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Mongodb");
    } catch (error) {
        console.log("Error connecting Mongodb", error)
    }
}

export default connectMongoDB;