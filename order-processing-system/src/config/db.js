const mongoose = require('mongoose');
require('dotenv').config();  // Load .env variables

const connectDB = async () => {
    try {
        console.log("🌍 Connecting to MongoDB...");
        console.log("MongoDB URI:", process.env.MONGO_URI);  // Debugging step

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed", error);
        process.exit(1);
    }
};

module.exports = connectDB;

