# Custom Hook: `useWorkouts.js`

## Overview
This file defines a custom React hook named `useWorkoutsContext`. Custom hooks are a way to reuse stateful logic and extract complex setup code into a simpler, reusable function.

## Key Concepts

### 1. Consuming Context (`useContext`)
```javascript
import { useContext } from "react"
import { WorkoutsContext } from "../context/WorkoutContext.jsx"
```
To read data from a Context, React provides the `useContext` hook. You pass it the actual context object you created (`WorkoutsContext`), and it returns the `value` that was provided by the `<WorkoutsContext.Provider>`.

### 2. Creating the Custom Hook
```javascript
export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)
    // ...
    return context
}
```
Instead of writing `const { workouts, dispatch } = useContext(WorkoutsContext)` in every component that needs the data, we create this custom hook. Now, components can simply call `const { workouts, dispatch } = useWorkoutsContext()`. It makes the code cleaner.

### 3. Error Handling and Scope Protection
```javascript
if (!context){
    throw Error("useWorkoutContext must be used inside an WorkoutsContextProvider")
}
```
This is the main reason this custom hook exists. A context can only be consumed by components that are nested *inside* the Provider component in the component tree.
If a developer tries to use `useWorkoutsContext` in a component that is not wrapped in `<WorkoutsContextProvider>`, `context` will be undefined. This `if` statement catches that error immediately and throws a clear, descriptive message, making debugging significantly easier.
