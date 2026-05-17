import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_DB_URL}/${process.env.DB_NAME}`
        )
        console.log("Connected to DB, host: ", connectionInstance.connection.host)
    } catch (error) {
        console.log("MongoDb connection error, error: ", error);
        process.exit(1)
    }
}