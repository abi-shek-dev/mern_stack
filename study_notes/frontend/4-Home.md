# Main Page Component: `Home.jsx`

## Overview
The `Home` component serves as the main dashboard of the application. It fetches the existing workouts from the backend API when the page loads, displays them in a list, and renders the form to add new workouts.

## Key Concepts

### 1. Global State Access
```javascript
const { workouts, dispatch } = useWorkoutsContext()
```
The component uses our custom hook to access the global state (`workouts`) and the function to update that state (`dispatch`).

### 2. Data Fetching with `useEffect`
```javascript
useEffect(() => {
  const fetchWorkouts = async () => {
    const response = await fetch("http://localhost:4000/api/workouts");
    const json = await response.json();

    if (response.ok) {
      dispatch({type: 'SET_WORKOUTS', payload: json})
    }
  };

  fetchWorkouts();
}, [dispatch]);
```
*   **`useEffect`**: A React hook used for running "side effects" (like fetching data, subscriptions, or manually changing the DOM).
*   By passing an array of dependencies (`[dispatch]`) as the second argument, this effect runs only when the component first mounts (loads), or if the `dispatch` function changes (which it rarely does). This prevents an infinite loop of fetching.
*   **`fetch` API**: Used to make a GET request to the backend.
*   **Updating Global State**: Once the data is successfully fetched (`response.ok`), it calls `dispatch` with the action type `SET_WORKOUTS`. This updates the global context, which in turn causes the `Home` component to re-render with the newly fetched data.

### 3. Rendering a List of Components
```javascript
{workouts && workouts.map((workout) =>(
    <WorkoutDetails key={workout._id} workout={workout}/>
))}
```
*   **Conditional Rendering**: The `{workouts && ...}` syntax ensures that the `.map()` function only runs if `workouts` is not null (i.e., after the data has been fetched). If it's null, it renders nothing instead of crashing.
*   **`.map()`**: Iterates over the `workouts` array and returns a `<WorkoutDetails />` component for each item.
*   **`key` Prop**: When rendering a list of components in React, each component *must* have a unique `key` prop. React uses this key to track which items have changed, been added, or been removed, optimizing rendering performance. We use the unique MongoDB `_id`.
*   **Props**: We pass the individual `workout` object down to the `<WorkoutDetails />` component as a prop.
