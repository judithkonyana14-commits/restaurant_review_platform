# Restaurant Review Platform (Starter Project)

This is a starter full-stack project for the **Restaurant Review Platform** (React frontend, Node.js backend, Firebase/Firestore database).  
It includes a minimal working frontend, a simple Express backend (used as an API proxy), and Firebase integration code samples.

## Features
- Browse restaurants (fetched via an external API — you must provide an API key).
- View restaurant details.
- Register / Login using Firebase Authentication.
- Create, read, update, delete reviews stored in Firestore.
- At least 5 pages: Home, RestaurantList, RestaurantDetails, ReviewPage, Login/Register (plus Navbar/Footer).

## Important: fill in your API keys / Firebase config
- Frontend: `frontend/src/services/firebase.js` — replace the placeholder config with your Firebase project values.
- Backend: `backend/.env` — add `EXTERNAL_API_KEY` and `EXTERNAL_API_BASE` if you want the backend to proxy external API requests.

## Quick first steps (run locally)
1. Install Node and npm (Node 16+ recommended).
2. In root terminal, run:
   ```bash
   # frontend
   cd frontend
   npm install
   npm start
   ```
   The frontend runs on port 3000 by default.

3. In another terminal, run the backend:
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   The backend runs on port 5000 by default.

4. Configure Firebase:
   - Create a Firebase project, enable Authentication (Email/Password), enable Firestore.
   - Copy your Firebase config into `frontend/src/services/firebase.js`.

5. External API:
   - The project expects an external restaurant API (e.g. Yelp Fusion, Zomato) for searching restaurants.
   - Either call the external API directly from `frontend/src/pages/RestaurantList.jsx` using your key, or set `EXTERNAL_API_KEY` and `EXTERNAL_API_BASE` in `backend/.env` and use the backend proxy endpoint `/api/search`.

## What is provided
- A runnable React app with pages and components.
- Firestore integration examples for adding and reading reviews.
- A simple Express backend (proxy /api/search).
- A zipped package you can extract and run.

If you want, I can now:
- Add support for a specific external API (Yelp, Zomato, etc.) — provide the API name and I'll wire an example request.
- Expand styling or add more advanced features.

Enjoy! — ChatGPT
