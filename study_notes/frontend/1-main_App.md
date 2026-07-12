# React Entry Point & Routing: `main.jsx` and `App.jsx`

## Overview
These two files are the foundation of the React application. `main.jsx` is the entry point that mounts the React app to the HTML DOM, and `App.jsx` defines the root component and the routing structure.

## Key Concepts (`main.jsx`)

### 1. Mounting the React App
```jsx
import { createRoot } from "react-dom/client";
createRoot(document.getElementById("root")).render(...)
```
React needs a place to attach itself in the actual HTML document (`index.html`). It looks for an element with the ID `root` and uses `createRoot` to render the entire React application inside it.

### 2. Context Providers
```jsx
<WorkoutsContextProvider>
  <App />
</WorkoutsContextProvider>
```
By wrapping the `<App />` component in `<WorkoutsContextProvider>`, the entire application (and all of its child components) gains access to the global workout state. If this was placed deeper in the tree, only the children of that specific component would have access.

### 3. Routing Provider (`BrowserRouter`)
```jsx
<BrowserRouter> ... </BrowserRouter>
```
`BrowserRouter` from `react-router-dom` enables client-side routing. It keeps the UI in sync with the URL. By wrapping the app in it, any component inside can use routing features (like `<Link>` or `<Routes>`).

---

## Key Concepts (`App.jsx`)

### 1. Defining Routes
```jsx
import { Route, Routes } from "react-router-dom";
// ...
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
```
The `<Routes>` component acts as a switch. It looks at the current URL and renders the component specified in the `element` prop of the matching `<Route>`. 
In this case, when the URL is exactly `/` (the root path), it will render the `<Home />` component.

### 2. Persistent Layout Elements
```jsx
<div className="App">
  <Navbar />
  <div className="pages"> ... </div>
</div>
```
Notice that the `<Navbar />` component is placed *outside* of the `<Routes>` block. This means the Navbar will always be visible, regardless of which page the user navigates to. Only the content inside `<div className="pages">` will change based on the URL.
