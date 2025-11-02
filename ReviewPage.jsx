import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../services/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function ReviewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const submitReview = async (e) => {
    e.preventDefault();
    if (!userName || !comment || rating === 0) {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "reviews"), {
        restaurantId: id,
        userName,
        rating: parseFloat(rating),
        comment,
        timestamp: serverTimestamp(),
      });
      alert("✅ Review submitted successfully!");
      navigate(`/restaurants/${id}`);
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("❌ Failed to submit review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="review-page container mt-5">
      <h2 className="text-center mb-4">Write a Review</h2>

      <form onSubmit={submitReview} className="review-form">
        <label>Name</label>
        <input
          type="text"
          className="form-control mb-3"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your name"
        />

        <label>Rating</label>
        <select
          className="form-control mb-3"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="0">Select Rating</option>
          <option value="1">⭐ 1</option>
          <option value="2">⭐⭐ 2</option>
          <option value="3">⭐⭐⭐ 3</option>
          <option value="4">⭐⭐⭐⭐ 4</option>
          <option value="5">⭐⭐⭐⭐⭐ 5</option>
        </select>

        <label>Comment</label>
        <textarea
          className="form-control mb-3"
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your review here..."
        ></textarea>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>

      <style>{`
        .review-page {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 6px 15px rgba(255,102,178,0.3);
          max-width: 600px;
          margin: auto;
        }

        h2 {
          color: #ff1a8c;
          font-weight: bold;
        }

        label {
          font-weight: 600;
          color: #ff1a8c;
        }

        .form-control {
          border-radius: 0.5rem;
          border: 2px solid #ff99cc;
          padding: 0.75rem;
        }

        .form-control:focus {
          border-color: #ff66b2;
          box-shadow: 0 0 8px rgba(255,102,178,0.4);
        }

        .btn-primary {
          background-color: #ff66b2;
          border: none;
          padding: 0.75rem;
          font-weight: bold;
          border-radius: 0.5rem;
          transition: background 0.3s;
        }

        .btn-primary:hover {
          background-color: #ff1a8c;
        }
      `}</style>
    </div>
  );
}
