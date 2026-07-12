# API Routes: `workouts.js`

## Overview
This file is responsible for mapping HTTP endpoints (URLs + HTTP Methods) to specific controller functions. It acts like a traffic director for the `/api/workouts` part of the application.

## Key Concepts

### 1. Express Router
```javascript
const express = require("express");
const router = express.Router();
```
`express.Router()` creates a modular, mountable bundle of route handlers. It behaves like a "mini-application". Instead of defining routes directly on the main `app` object in `server.js`, we define them on this router, and then mount the router in `server.js`. This keeps routing clean and organized.

### 2. HTTP Methods
The router maps different HTTP methods to different actions, adhering to RESTful API principles:

*   **`GET`**: Used to retrieve data.
    *   `router.get("/")` -> Maps to `getWorkouts` (fetch all).
    *   `router.get("/:id")` -> Maps to `getWorkout` (fetch one).
*   **`POST`**: Used to create new data.
    *   `router.post("/")` -> Maps to `createWorkout`.
*   **`DELETE`**: Used to remove data.
    *   `router.delete("/:id")` -> Maps to `deleteworkout`.
*   **`PATCH`**: Used to partially update data. (Note: `PUT` is typically for completely replacing a resource, while `PATCH` is for partial updates).
    *   `router.patch("/:id")` -> Maps to `updateWorkout`.

### 3. Route Parameters (`/:id`)
```javascript
router.delete("/:id", deleteworkout);
```
The colon `:` in `/:id` indicates a dynamic route parameter. It means this route will match URLs like `/api/workouts/123` or `/api/workouts/abc`. 
Inside the controller function, this dynamic value can be accessed using `req.params.id`.

### 4. Separation of Concerns
Notice that this file contains *no database logic whatsoever*. It simply says: "If a POST request comes to the root of this router, call the `createWorkout` function." This is an excellent architectural pattern (Model-View-Controller, or MVC) that makes the code easier to read, test, and maintain.
