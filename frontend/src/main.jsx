import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { WorkoutsContextProvider } from "./context/WorkoutContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </StrictMode>
  </BrowserRouter>,
);
