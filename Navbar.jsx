import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-brand">RestroReviews 🍽️</h2>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/restaurants">Restaurants</Link></li>
          <li><Link to="/review/1">Review Page</Link></li>
          <li><Link to="/restaurants/1">Restaurant Details</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>

      {/* Inline Navbar Styles */}
      <style>{`
        .navbar {
          background: linear-gradient(90deg, #ff66b2, #ff99cc, #ffb6c1);
          color: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1200px;
        }

        .navbar-brand {
          font-family: 'Poppins', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.3);
        }

        .navbar-links {
          list-style: none;
          display: flex;
          gap: 1.5rem;
          margin: 0;
        }

        .navbar-links a {
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: color 0.3s, transform 0.2s;
        }

        .navbar-links a:hover {
          color: #ffd6f0;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .navbar-links {
            flex-direction: column;
            background-color: rgba(255,102,178,0.9);
            position: absolute;
            top: 70px;
            right: 0;
            width: 100%;
            text-align: center;
            padding: 1rem 0;
          }
        }
      `}</style>
    </nav>
  );
}
