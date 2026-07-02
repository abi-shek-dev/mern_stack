const express = require("express");
const { createWorkout } = require("../controllers/workoutController");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "Get all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "Get a single workout" });
});

router.post("/", createWorkout )

router.delete("/", (req, res) => {
  res.json({ mssg: "Delete a single workout" });
});

router.patch("/", (req, res) => {
  res.json({ mssg: "Update a single workout" });
});

module.exports = router;
