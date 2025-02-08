const express = require("express");
const router = express.Router();
const { getReviews, addReview, upvoteReview } = require("../controllers/ReviewController");

// Get all reviews
router.get("/", getReviews);

// Add a new review
router.post("/", addReview);

// Upvote a review
router.put("/:id/upvote", upvoteReview);

module.exports = router;
