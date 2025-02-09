const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const reviewRoutes = require("./routes/reviewRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/reviews", reviewRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));