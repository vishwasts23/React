import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="logo">
        Travel Booking
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/destinations">
          Destinations
        </Link>

        <Link to="/services">
          Services
        </Link>

        <Link to="/booking">
          Booking
        </Link>

        <Link to="/contact">
          Contact
        </Link>

        <Link to="/profile">
          Profile
        </Link>

        <Link to="/users">
          Users
        </Link>
      </div>

      <button
        className="theme-btn"
        onClick={toggleTheme}
      >
        {theme === "light"
          ? "Dark Mode"
          : "Light Mode"}
      </button>
    </nav>
  );
}