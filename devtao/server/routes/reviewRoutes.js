const express = require("express");
const multer = require("multer");
const path = require("path");
const { addOrUpdateReview, getBuildingHierarchy, getFloorReviews } = require("../controllers/ReviewController");

const router = express.Router();

// Multer Configuration (Stores images in `/uploads`)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ✅ Handle Review Submission (Accepts Image)
router.post("/", upload.single("image"), addOrUpdateReview);

// ✅ Fetch Building Hierarchy
router.get("/building/:building", getBuildingHierarchy);

// ✅ Fetch Floor Reviews
router.get("/building/:building/floor/:floor", getFloorReviews);

module.exports = router;
