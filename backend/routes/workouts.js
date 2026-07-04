const express = require("express");
const { createWorkout, getWorkout, getWorkouts, updateWorkout, deleteworkout } = require("../controllers/workoutController");

const router = express.Router();

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout )

router.delete("/:id", deleteworkout);

router.patch("/:id", updateWorkout);

module.exports = router;
