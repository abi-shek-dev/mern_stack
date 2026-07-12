# Display Component: `WorkoutDetails.jsx`

## Overview
This component is responsible for displaying the details of a single workout. It receives the workout data as a prop from its parent component (`Home.jsx`) and provides a button to delete the workout.

## Key Concepts

### 1. Receiving Props
```javascript
const WorkoutDetails = ({ workout }) => { ... }
```
Instead of writing `(props)` and then using `props.workout`, we use object destructuring `{ workout }` to directly extract the `workout` object from the properties passed by the parent.

### 2. Deleting Data (DELETE Request)
```javascript
const handleClick = async () => {
  const response = await fetch("http://localhost:4000/api/workouts/" + workout._id, {
    method: "DELETE",
  });
  const json = await response.json();

  if (response.ok) {
    dispatch({ type: "DELETE_WORKOUT", payload: json });
  }
};
```
*   When the "Delete" span is clicked, `handleClick` is triggered.
*   It uses the `fetch` API, but this time sets the HTTP `method` to `"DELETE"`.
*   The URL dynamically includes the `_id` of the specific workout to be deleted.
*   If the backend successfully deletes the workout (`response.ok`), it dispatches the `"DELETE_WORKOUT"` action to the global context. The context reducer then removes that workout from the global array, causing React to immediately remove this component from the screen.

### 3. Date Formatting
```javascript
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
// ...
<p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix:true})}</p>
```
The `date-fns` library provides utility functions for manipulating dates. `formatDistanceToNow` takes a JavaScript Date object (created from the MongoDB `createdAt` timestamp) and converts it into a human-readable string like "2 days ago" or "about 1 month ago" (`addSuffix: true` adds the "ago" part).
