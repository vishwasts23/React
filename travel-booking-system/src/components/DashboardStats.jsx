import { useState, useEffect } from "react";

export default function DashboardStats() {
  const [stats, setStats] = useState({
    travelers: 0,
    destinations: 0,
    bookings: 0,
    reviews: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setStats({
        travelers: 2500,
        destinations: 120,
        bookings: 1800,
        reviews: 950,
      });
    }, 1000);
  }, []);

  return (
    <section className="stats-section">
      <div className="stat-card">
        <h2>{stats.travelers}+</h2>
        <p>Happy Travelers</p>
      </div>

      <div className="stat-card">
        <h2>{stats.destinations}+</h2>
        <p>Destinations</p>
      </div>

      <div className="stat-card">
        <h2>{stats.bookings}+</h2>
        <p>Bookings</p>
      </div>

      <div className="stat-card">
        <h2>{stats.reviews}+</h2>
        <p>Reviews</p>
      </div>
    </section>
  );
}