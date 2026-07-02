const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "Get all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "Get a single workout" });
});

router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/", (req, res) => {
  res.json({ mssg: "Delete a single workout" });
});

router.patch("/", (req, res) => {
  res.json({ mssg: "Update a single workout" });
});

module.exports = router;
