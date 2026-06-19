import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1>Explore The World With Us</h1>

        <p>
          Book exciting tours, family vacations,
          honeymoon packages and adventure trips.
        </p>

        <button
          className="hero-btn"
          onClick={() => navigate("/booking")}
        >
          Start Your Journey
        </button>
      </div>
    </section>
  );
}