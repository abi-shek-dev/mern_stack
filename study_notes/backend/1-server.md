# Backend Entry Point: `server.js`

## Overview
`server.js` is the entry point for the backend application. It sets up the Express server, connects to the MongoDB database, configures middleware, and defines the base routes.

## Key Concepts

### 1. Environment Variables (`dotenv`)
```javascript
require('dotenv').config()
```
The `dotenv` package loads environment variables from a `.env` file into `process.env`. This is crucial for keeping sensitive information like the `MONGO_URL` and the server `PORT` secure and out of the source code.

### 2. Express Server Setup
```javascript
const express = require('express')
const app = express()
```
Express is a minimal and flexible Node.js web application framework. Here, we initialize our app instance which we will use to configure our server.

### 3. Middleware
Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` function in the application's request-response cycle.

*   **CORS (`cors`)**: Cross-Origin Resource Sharing. This middleware allows the frontend application (which runs on a different port/domain) to communicate with this backend API.
    ```javascript
    app.use(cors())
    ```
*   **JSON Body Parser**: 
    ```javascript
    app.use(express.json())
    ```
    This built-in Express middleware parses incoming requests with JSON payloads. This is how the backend receives data like the workout title, reps, and load from the frontend `WorkoutForm`.
*   **Custom Logging Middleware**:
    ```javascript
    app.use((req, res, next) => {
        console.log(req.path, req.method);
        next();
    })
    ```
    This simple middleware logs every request's path and method to the terminal, which is very helpful for debugging. The `next()` function is called to pass control to the next middleware or route handler.

### 4. Routing
```javascript
app.use('/api/workouts', workoutRoutes);
```
All routes defined in the `workoutRoutes` file are prefixed with `/api/workouts`. For example, a `GET /` inside `workoutRoutes` becomes `GET /api/workouts/`.

### 5. Database Connection (Mongoose)
```javascript
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port http://localhost:${process.env.PORT}`)
        })
    })
```
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. `mongoose.connect()` establishes a connection to the MongoDB database. 
Crucially, the server only starts listening for incoming requests (`app.listen()`) *after* the database connection is successfully established. This prevents the server from handling requests before the database is ready.
