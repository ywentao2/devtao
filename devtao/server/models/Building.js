const mongoose = require("mongoose");

// Schema for individual reviews
const reviewSchema = new mongoose.Schema({
  review: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  votes: {
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
  },
  date: { type: Date, default: Date.now },
});

// Schema for floors, which contain multiple reviews
const floorSchema = new mongoose.Schema({
  floorNumber: { type: Number, required: true },
  reviews: [reviewSchema], // Array of reviews under each floor
});

// Schema for buildings, which contain multiple floors
const buildingSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  floors: [floorSchema], // Array of floors under each building
});

// Create Mongoose model
const Building = mongoose.model("Building", buildingSchema);
module.exports = Building;
