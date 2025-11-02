import React from "react";
import { Link } from "react-router-dom";
"https://github.com/judithkonyana14-commits/restaurant-review-platform.git"

export default function Home() {
  const featuredRestaurants = [
    {
      name: "The Blue Lagoon",
      description: "A relaxing waterfront restaurant serving fresh seafood and cocktails.",
      image: "https://images.trvl-media.com/lodging/104000000/103670000/103663300/103663230/483db4d0.jpg"
    },
    {
      name: "Le Café du Village",
      description: "A cozy French café in the heart of Maseru known for pastries and fine coffee.",
      image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/cafe-1238604_1280.jpg"
    },
    {
      name: "Kobo Kobo Restaurant",
      description: "Experience authentic African flavors and grill specials under a modern setting.",
      image: "https://cdn.pixabay.com/photo/2017/05/31/18/00/grill-2357118_1280.jpg"
    }
  ];

  return (
    <div className="home-container text-center">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to <span className="brand">RestroReviews</span></h1>
        <p>
          Discover the best restaurants in Maseru! 🍴  
          Read reviews, explore cuisines, and share your own dining experiences.
        </p>
        <Link to="/restaurants" className="btn btn-lg browse-btn">
          🍽️ Browse Restaurants
        </Link>
      </section>

      {/* Featured Restaurants Section */}
      <section className="featured-section">
        <h2>🌟 Featured Restaurants</h2>
        <div className="featured-grid">
          {featuredRestaurants.map((r, i) => (
            <div key={i} className="restaurant-card">
              <img src={r.image} alt={r.name} />
              <h4>{r.name}</h4>
              <p>{r.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App Info Section */}
      <section className="info-section">
        <h3>Why Choose RestroReviews?</h3>
        <ul>
          <li>✅ Search for top-rated restaurants in Maseru</li>
          <li>✅ Read and write honest customer reviews</li>
          <li>✅ Save your favorite restaurants</li>
          <li>✅ Explore diverse cuisines and hidden gems</li>
        </ul>
      </section>

      {/* Inline styles */}
      <style>{`
        .home-container {
          color: #333;
          padding: 2rem;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #fff0f5, #ffe6f0);
          min-height: 100vh;
        }

        .hero-section {
          padding: 3rem 1rem;
          background: linear-gradient(135deg, #ff99cc, #ff66b2);
          color: white;
          border-radius: 1rem;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          margin-bottom: 3rem;
        }

        .brand {
          color: #fff;
          font-weight: 700;
        }

        .browse-btn {
          background-color: #fff;
          color: #ff4da6;
          font-weight: 600;
          border: none;
          margin-top: 1rem;
          padding: 0.8rem 1.5rem;
          border-radius: 0.5rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .browse-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 10px rgba(255, 77, 166, 0.4);
        }

        .featured-section {
          margin-top: 2rem;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .restaurant-card {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 4px 10px rgba(255, 102, 178, 0.3);
          padding: 1rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .restaurant-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(255, 102, 178, 0.4);
        }

        .restaurant-card img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 0.8rem;
          margin-bottom: 1rem;
        }

        .info-section {
          margin-top: 3rem;
          background-color: #fff;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 12px rgba(255, 102, 178, 0.2);
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        ul li {
          padding: 0.5rem 0;
          font-size: 1.1rem;
        }

        h1, h2, h3, h4 {
          color: #ff1a8c;
        }
      `}</style>
    </div>
  );
}
