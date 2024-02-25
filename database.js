import mongoose from "mongoose";

// Method connect to MongoDB

export const connectDB = () => {
    try {
        const db = mongoose.connect("mongodb://127.0.0.1:27017/Lab3_database");
        console.log("Connect to MongoDB success");
        return db;
    } catch (error) {
        throw new Error(error.toString());
    }
}
