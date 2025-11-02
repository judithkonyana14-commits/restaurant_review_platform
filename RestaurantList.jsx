import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../services/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function RestaurantList() {
  const [savedRestaurants, setSavedRestaurants] = useState([]);

  // Load saved restaurants from Firestore
  const loadSaved = async () => {
    const snapshot = await getDocs(collection(db, "restaurants"));
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setSavedRestaurants(data);
  };

  useEffect(() => {
    loadSaved();
  }, []);

  return (
    <div className="container mt-4">
      <h2>🍴 Maseru Restaurants</h2>
      {savedRestaurants.length > 0 ? (
        savedRestaurants.map((r) => (
          <div key={r.id} className="card mb-3 p-3 shadow-sm">
            <h5>{r.name}</h5>
            <p>{r.address}</p>
            <p>⭐ {r.rating}</p>
            <p>Cuisine: {r.cuisine}</p>

            {/* Display 5 images */}
            <div className="d-flex gap-2 mb-2">
              {(r.images || []).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${r.name} ${idx + 1}`}
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
              ))}
            </div>

            <Link to={`/restaurants/${r.id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        ))
      ) : (
        <p>No restaurants saved yet.</p>
      )}
    </div>
  );
}
