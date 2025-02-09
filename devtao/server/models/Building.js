const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  image: { type: String, required: true }, // Store image URL or path
  votes: {
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
  },
  date: { type: Date, default: Date.now },
});

const floorSchema = new mongoose.Schema({
  floorNumber: { type: Number, required: true },
  reviews: [reviewSchema],
});

const buildingSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  floors: [floorSchema],
});

const Building = mongoose.model("Building", buildingSchema);
module.exports = Building;
