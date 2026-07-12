# Database Model: `workoutModel.js`

## Overview
This file defines the structure of the `Workout` document in the MongoDB database using Mongoose. It dictates what data a workout has and what format that data must follow.

## Key Concepts

### 1. Mongoose Schema
```javascript
const Schema = mongoose.Schema
const workoutSchema = new Schema({ ... })
```
MongoDB is a NoSQL database, meaning it is schema-less by default. However, Mongoose allows us to define a Schema at the application level. A schema defines the shape of the documents within a particular collection (i.e., what fields they have and their data types).

### 2. Schema Fields and Validation
```javascript
title: {
    type: String,
    required: true
}
```
*   **`type`**: Specifies the data type (e.g., `String`, `Number`). Mongoose will cast values to this type or throw an error if it cannot.
*   **`required: true`**: This is a built-in Mongoose validator. It ensures that a workout cannot be saved to the database unless it has a `title`, `reps`, and `load`. If the backend tries to create a workout without one of these, Mongoose will throw a validation error.

### 3. Timestamps
```javascript
}, {timestamps: true} )
```
Passing `{ timestamps: true }` as the second argument to the `Schema` constructor tells Mongoose to automatically add `createdAt` and `updatedAt` properties to the document. Mongoose automatically manages these properties whenever a document is created or updated. The frontend uses `createdAt` to show how long ago a workout was added using `date-fns`.

### 4. Creating and Exporting the Model
```javascript
module.exports = mongoose.model('Workout', workoutSchema)
```
A Mongoose model is a wrapper on the Mongoose schema. It provides an interface to the database for creating, querying, updating, deleting records, etc. 
The first argument, `'Workout'`, is the singular name of the collection. Mongoose automatically looks for the plural, lowercased version of this name (i.e., `workouts`) in the MongoDB database. We export this model so it can be used in our controllers to interact with the database.
