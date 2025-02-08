const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  building: {
    type: String,
    required: true,
    description: "The name of the building"
  },
  floor: {
    type: Number,
    required: true,
    min: 1,
    description: "Floor number, must be a positive integer"
  },
  date: {
    type: Date,
    default: Date.now,
    description: "Date of the review"
  },
  review: {
    type: String,
    required: true,
    description: "Text review of the location"
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    description: "Rating between 1 and 5"
  },
  votes: {
    upvotes: { type: Number, default: 0, min: 0, description: "Number of upvotes" },
    downvotes: { type: Number, default: 0, min: 0, description: "Number of downvotes" }
  }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
