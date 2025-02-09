const express = require("express");
const multer = require("multer");
const path = require("path");
const { addOrUpdateReview, getBuildingHierarchy, getFloorReviews } = require("../controllers/reviewController");

const router = express.Router();

// Multer Configuration (Saves Images to `/uploads`)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ✅ Route: Add Review (with Image)
router.post("/", upload.single("image"), addOrUpdateReview);

// ✅ Route: Get Building Hierarchy
router.get("/building/:building", getBuildingHierarchy);

// ✅ Route: Get Reviews by Floor
router.get("/building/:building/floor/:floor", getFloorReviews);

module.exports = router;
