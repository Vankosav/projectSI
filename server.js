const express = require("express");
const connectDB = require("./configs/db");

const app = express();

// Connect to MongoDB
connectDB();

// Define API routes
app.get("/pages/api/hello.js", (req, res) => res.send("Hello World!"));

// Listen on a specific port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
