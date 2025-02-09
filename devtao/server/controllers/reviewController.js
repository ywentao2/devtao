const Building = require("../models/Building");

// ✅ Add or Update a Review (Handles Images)
const addOrUpdateReview = async (req, res) => {
  try {
    const { building, floor, review, efficiency, quality } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    if (!imagePath) {
      return res.status(400).json({ message: "Image is required." });
    }

    let buildingDoc = await Building.findOne({ name: building });

    // If the building doesn't exist, create it
    if (!buildingDoc) {
      buildingDoc = new Building({ name: building, floors: [] });
    }

    // Check if the floor exists
    let floorDoc = buildingDoc.floors.find((f) => f.floorNumber === Number(floor));
    if (!floorDoc) {
      floorDoc = { floorNumber: Number(floor), reviews: [] };
      buildingDoc.floors.push(floorDoc);
    }

    // Add the new review to the floor
    floorDoc.reviews.push({ 
      review, 
      efficiency: Number(efficiency), 
      quality: Number(quality), 
      image: imagePath 
    });

    await buildingDoc.save();
    res.status(201).json({ message: "Review added successfully!", building: buildingDoc });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ message: "Error adding review" });
  }
};

// ✅ Fetch Entire Building (Building → Floors → Reviews)
const getBuildingHierarchy = async (req, res) => {
  try {
    const buildingName = req.params.building;
    const building = await Building.findOne({ name: buildingName });

    if (!building) {
      return res.status(404).json({ message: "Building not found" });
    }

    res.json(building);
  } catch (error) {
    console.error("Error fetching building hierarchy:", error);
    res.status(500).json({ message: "Error fetching building hierarchy" });
  }
};

// ✅ Fetch Reviews for a Specific Floor
const getFloorReviews = async (req, res) => {
  try {
    const { building, floor } = req.params;
    const buildingDoc = await Building.findOne({ name: building });

    if (!buildingDoc) {
      return res.status(404).json({ message: "Building not found" });
    }

    const floorDoc = buildingDoc.floors.find((f) => f.floorNumber == floor);

    if (!floorDoc) {
      return res.status(404).json({ message: "Floor not found in this building" });
    }

    res.json(floorDoc.reviews);
  } catch (error) {
    console.error("Error fetching floor reviews:", error);
    res.status(500).json({ message: "Error fetching floor reviews" });
  }
};

// ✅ Ensure All Functions Are Exported
module.exports = { addOrUpdateReview, getBuildingHierarchy, getFloorReviews };
