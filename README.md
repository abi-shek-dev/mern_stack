# MERN Stack Study Repository: Workout Buddy 🏋️‍♂️

This repository is dedicated to studying and understanding the core concepts of the **MERN Stack** (MongoDB, Express.js, React, Node.js). 
It contains a fully functional "Workout Buddy" application that allows users to create, read, and delete workout routines.

The primary purpose of this repository is **educational**. To help with your learning journey, every major component in this codebase has been thoroughly documented in the `study_notes` directory.

## 📚 Study Notes Directory

Deep-dive explanations for each file and concept can be found in the `study_notes` folder. If you want to understand how a specific part of the MERN stack works, start there!

### Backend Notes (`/study_notes/backend`)
*   [1. Server Entry Point](file:///c:/Study_Files/mern_stack/study_notes/backend/1-server.md) (`server.js`) - Express, Middleware, MongoDB connection.
*   [2. Database Model](file:///c:/Study_Files/mern_stack/study_notes/backend/2-workoutModel.md) (`workoutModel.js`) - Mongoose schemas and validation.
*   [3. Controllers](file:///c:/Study_Files/mern_stack/study_notes/backend/3-workoutController.md) (`workoutController.js`) - Async/Await, CRUD operations.
*   [4. Routes](file:///c:/Study_Files/mern_stack/study_notes/backend/4-workoutsRoutes.md) (`workouts.js`) - Express Router and RESTful endpoints.

### Frontend Notes (`/study_notes/frontend`)
*   [1. React Entry & Routing](file:///c:/Study_Files/mern_stack/study_notes/frontend/1-main_App.md) (`main.jsx` & `App.jsx`)
*   [2. Global State / Context](file:///c:/Study_Files/mern_stack/study_notes/frontend/2-WorkoutContext.md) (`WorkoutContext.jsx`) - `createContext` and `useReducer`.
*   [3. Custom Hooks](file:///c:/Study_Files/mern_stack/study_notes/frontend/3-useWorkouts.md) (`useWorkouts.js`)
*   [4. Data Fetching](file:///c:/Study_Files/mern_stack/study_notes/frontend/4-Home.md) (`Home.jsx`) - `useEffect` and the `fetch` API.
*   [5. Display Component](file:///c:/Study_Files/mern_stack/study_notes/frontend/5-WorkoutDetails.md) (`WorkoutDetails.jsx`) - Props and DELETE requests.
*   [6. Forms & Input](file:///c:/Study_Files/mern_stack/study_notes/frontend/6-WorkoutForm.md) (`WorkoutForm.jsx`) - Controlled components and POST requests.

---

## 🚀 How to Run the Project Locally

To run this project on your own machine, you will need to open **two** separate terminal windows—one for the backend and one for the frontend.

### 1. Backend Setup

1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install the required Node.js packages:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory (if it doesn't exist) and add your environment variables:
   ```env
   PORT=4000
   MONGO_URL=your_mongodb_connection_string
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup

1. Open a *second* terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install the required Node.js packages:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

The frontend will typically run on `http://localhost:5173` and will communicate with the backend running on `http://localhost:4000`.
