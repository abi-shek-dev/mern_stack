require('dotenv').config()
const dns = require('dns')
dns.setServers(['8.8.8.8', '1.1.1.1'])
const express = require('express')
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')


// express app
const app = express()

// middleware

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// routes
app.use('/api/workouts', workoutRoutes);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port http://localhost:${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

