const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ mssg: "Get all workouts" })
})

router.get('/:id', (req, res) => {
    res.json({ mssg: "Get a single workout" })
})


module.exports = router;