import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RestaurantList from "./pages/RestaurantList";
import RestaurantDetails from "./pages/RestaurantDetails";
import ReviewPage from "./pages/ReviewPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<RestaurantList />} />
            <Route path="/restaurants/:id" element={<RestaurantDetails />} />
            <Route path="/review/:id" element={<ReviewPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />

        {/* Inline styles */}
        <style>{`
          html, body, #root {
            height: 100%;
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #ffe6f0, #fff0f5);
            color: #333;
          }

          .app-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          .main-content {
            flex: 1;
            padding: 2rem;
          }

          /* Navbar styling */
          .navbar {
            background-color: #ff66b2;
            color: white;
            padding: 1rem 2rem;
            font-weight: 600;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }

          .navbar a {
            color: white;
            margin-right: 1rem;
            text-decoration: none;
            transition: color 0.3s;
          }

          .navbar a:hover {
            color: #ffd6f0;
          }
/* Footer styling */
footer {
  background-color: #28a745; /* Green background */
  color: white;               /* Keep text white for contrast */
  text-align: center;
  padding: 1rem;
  font-weight: 500;
  box-shadow: 0 -4px 6px rgba(0,0,0,0.1);
  margin-top: auto;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
          /* Buttons */
          .btn {
            border-radius: 0.5rem;
            font-weight: 600;
            transition: transform 0.2s, box-shadow 0.2s;
          }

          .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 10px rgba(255,102,178,0.4);
          }

          /* Cards */
          .card {
            border-radius: 1rem;
            box-shadow: 0 6px 15px rgba(255,102,178,0.2);
            transition: transform 0.2s, box-shadow 0.2s;
          }

          .card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(255,102,178,0.3);
          }

          /* Inputs */
          input.form-control {
            border-radius: 0.5rem;
            border: 2px solid #ff99cc;
            padding: 0.5rem 1rem;
          }

          input.form-control:focus {
            border-color: #ff66b2;
            box-shadow: 0 0 8px rgba(255,102,178,0.5);
            outline: none;
          }

          /* Titles */
          h2, h4, h5 {
            color: #ff1a8c;
          }

          /* Images */
          img {
            border-radius: 0.5rem;
            transition: transform 0.2s;
          }

          img:hover {
            transform: scale(1.05);
          }

          .input-group {
            margin-bottom: 1rem;
          }
        `}</style>
      </div>
    </Router>
  );
}
