import React from "react";

export default function Footer(){
  return (
    <footer className="bg-light text-center py-3 mt-4">
      <div className="container">
        <small>© {new Date().getFullYear()} RestroReviews</small>
      </div>
    </footer>
  );
}
