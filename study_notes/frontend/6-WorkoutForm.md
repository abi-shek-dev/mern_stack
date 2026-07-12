# Form Component: `WorkoutForm.jsx`

## Overview
This component handles the user input for creating a new workout. It manages its own local state for the input fields and sends a POST request to the backend when the form is submitted.

## Key Concepts

### 1. Controlled Components (Local State)
```javascript
const [title, setTitle] = useState("");
const [load, setLoad] = useState("");
const [reps, setReps] = useState("");
// ...
<input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
```
*   **`useState`**: This React hook creates local state variables. These variables only exist within this specific component.
*   **Controlled Inputs**: The value of the HTML `<input>` is "controlled" by React state (`value={title}`). Whenever the user types, the `onChange` event fires, calling `setTitle(e.target.value)` to update the state. This means React always has the most up-to-date value of the input.

### 2. Form Submission (POST Request)
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  // ...
```
*   **`e.preventDefault()`**: By default, submitting an HTML form causes the browser to refresh the page. This command stops that default behavior so we can handle the submission entirely with JavaScript.

```javascript
  const workout = { title, load, reps };
  const response = await fetch("http://localhost:4000/api/workouts", {
    method: "POST",
    body: JSON.stringify(workout),
    headers: { "Content-Type": "application/json" },
  });
```
*   We create an object with the data and send it via `fetch`.
*   **`body: JSON.stringify(workout)`**: The data must be converted to a JSON string before sending over HTTP.
*   **`headers`**: We must explicitly tell the backend that we are sending JSON data; otherwise, `express.json()` in the backend won't know how to parse it.

### 3. Error Handling and UI Updates
```javascript
  const json = await response.json();

  if (!response.ok) {
    setError(json.error);
    setEmptyfields(json.emptyfields);
  }
```
*   If the backend returns an error (e.g., status 400), we read the `error` message and the array of `emptyfields` sent by the backend controller. We update our local state to display the error message on screen and highlight the missing fields.
*   **Conditional Class Names**: 
    ```javascript
    className={emptyfields.includes("title") ? "error" : ""}
    ```
    This dynamically applies the CSS class `"error"` (which likely adds a red border) to the input field if "title" is in the `emptyfields` array.

### 4. Updating Global State on Success
```javascript
  if (response.ok) {
    setTitle(""); // Clear inputs
    // ... clear other states
    dispatch({ type: "CREATE_WORKOUT", payload: json });
  }
```
*   If the request is successful, we reset the form fields to empty strings.
*   Most importantly, we dispatch `"CREATE_WORKOUT"` with the newly created workout data (`json`) returned by the backend. The Context adds it to the global array, and the `Home` component instantly updates to show the new workout at the top of the list without needing a page refresh.
