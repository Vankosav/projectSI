const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const connectDB = async () => {
  const uri = process.env.MONGODB_URI; // Load MONGO_URI from .env file

  if (!uri) {
    console.error("MONGODB_URI is undefined. Check your .env file.");
    process.exit(1); // Exit the process if URI is missing
  }

  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectDB;

