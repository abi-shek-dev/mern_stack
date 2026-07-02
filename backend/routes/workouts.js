const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ mssg: "Get all workouts" })
})

router.get('/:id', (req, res) => {
    res.json({ mssg: "Get a single workout" })
})

router.post('/', (req, res) => {

    const {title, load, reps} = req.body;

    res.json({ mssg: "Post a new workout" })
})

router.delete('/', (req, res) => {
    res.json({ mssg: "Delete a single workout" })
})

router.patch('/', (req, res) => {
    res.json({ mssg: "Update a single workout" })
})

module.exports = router;