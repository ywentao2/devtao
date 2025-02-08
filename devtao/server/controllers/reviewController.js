const Review = require("../models/Review");

// Get all reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
};

// Add a new review
const addReview = async (req, res) => {
  try {
    const { building, floor, review, rating } = req.body;
    const newReview = new Review({ building, floor, review, rating });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: "Error adding review" });
  }
};

// Upvote a review
const upvoteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (review) {
      review.votes.upvotes += 1;
      await review.save();
      res.json(review);
    } else {
      res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error upvoting review" });
  }
};

module.exports = { getReviews, addReview, upvoteReview };
