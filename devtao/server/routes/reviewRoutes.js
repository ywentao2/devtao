const express = require("express");
const router = express.Router();
const { addOrUpdateReview, getBuildingHierarchy, getFloorReviews } = require("../controllers/ReviewController");

// Ensure the function exists before using it
if (!addOrUpdateReview) {
  console.error("❌ ERROR: addOrUpdateReview is not defined in reviewController.js");
}

// POST: Add or update a review (Building → Floor → Review)
router.post("/", addOrUpdateReview);

// GET: Entire hierarchy of a building
router.get("/building/:building", getBuildingHierarchy);

// GET: All reviews from a specific floor in a building
router.get("/building/:building/floor/:floor", getFloorReviews);

module.exports = router;
