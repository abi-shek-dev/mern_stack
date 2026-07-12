# Global State Management: `WorkoutContext.jsx`

## Overview
This file sets up React Context to manage the state of the workouts globally. Without context, if you fetched workouts in `App.jsx` and wanted to use them in a deeply nested component, you would have to pass the data down through props level by level ("prop drilling"). Context solves this by creating a global "store" that any component can access.

## Key Concepts

### 1. Creating the Context
```javascript
export const WorkoutsContext = createContext();
```
`createContext()` creates the context object. This object will be used by other components to "consume" or read the state.

### 2. The Reducer Function
```javascript
export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return { workouts: action.payload };
    case "CREATE_WORKOUT":
      return { workouts: [action.payload, ...state.workouts] };
    case "DELETE_WORKOUT":
      return { workouts: state.workouts.filter((w) => w._id !== action.payload._id) };
    default:
      return state;
  }
};
```
A reducer function dictates *how* the state should change. It takes the current `state` and an `action` (which has a `type` and usually a `payload` of data) as arguments. 
Based on the `action.type` (e.g., "CREATE_WORKOUT"), it returns a *brand new state object*.
*   **SET_WORKOUTS**: Replaces the entire workouts array with the fetched payload.
*   **CREATE_WORKOUT**: Adds the new workout (`action.payload`) to the beginning of the existing workouts array (`...state.workouts`).
*   **DELETE_WORKOUT**: Filters out the deleted workout from the array.

### 3. The Context Provider Component
```javascript
export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
```
*   **`useReducer`**: A React hook that initializes state and provides a `dispatch` function. You pass it the `workoutsReducer` function and an initial state object (`{ workouts: null }`).
*   **`dispatch`**: A function used to trigger state changes. You call `dispatch({ type: '...', payload: ... })`, which in turn calls your `workoutsReducer`.
*   **`.Provider`**: The component that actually provides the data. The `value` prop contains the data (`...state`) and the `dispatch` function, making both available to any component nested inside (`{children}`). This is the component used in `main.jsx`.
