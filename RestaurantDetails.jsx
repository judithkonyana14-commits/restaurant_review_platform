import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../services/firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

export default function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load restaurant details (could be from Firestore or a static file)
  useEffect(() => {
    const loadRestaurant = async () => {
      try {
        const snapshot = await getDocs(collection(db, "restaurants"));
        const found = snapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .find(r => r.id === id);
        if (found) setRestaurant(found);
        else setRestaurant({ name: "Restaurant Not Found" });
      } catch (err) {
        console.error(err);
        setRestaurant({ name: "Error loading restaurant" });
      }
    };
    loadRestaurant();
  }, [id]);

  // Load reviews without needing a composite index
  useEffect(() => {
    const loadReviews = async () => {
      try {
        const q = query(collection(db, "reviews"), where("restaurantId", "==", id));
        const snapshot = await getDocs(q);
        const fetchedReviews = snapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          // Sort newest first
          .sort((a, b) => b.timestamp?.toMillis() - a.timestamp?.toMillis());
        setReviews(fetchedReviews);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };
    loadReviews();
  }, [id]);

  if (!restaurant) return <p>Loading restaurant...</p>;

  return (
    <div className="container mt-4">
      <h2>{restaurant.name}</h2>
      <p>{restaurant.address || restaurant.location?.address1}</p>
      <p>{restaurant.description || restaurant.cuisine || ""}</p>
      <Link to={`/review/${encodeURIComponent(id)}`} className="btn btn-primary mb-3">
        Write a Review
      </Link>

      <hr />
      <h4>Reviews</h4>
      {loading ? (
        <p>Loading reviews...</p>
      ) : reviews.length > 0 ? (
        reviews.map(r => (
          <div key={r.id} className="card mb-3 p-3 shadow-sm">
            <p><strong>{r.username || "Anonymous"}:</strong> {r.text}</p>
            <p>⭐ {r.rating || "N/A"}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}
