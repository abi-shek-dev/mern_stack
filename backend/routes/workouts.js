const express = require("express");
const { createWorkout, getWorkout, getWorkouts } = require("../controllers/workoutController");

const router = express.Router();

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout )

router.delete("/", (req, res) => {
  res.json({ mssg: "Delete a single workout" });
});

router.patch("/", (req, res) => {
  res.json({ mssg: "Update a single workout" });
});

module.exports = router;
