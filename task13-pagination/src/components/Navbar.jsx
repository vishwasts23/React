import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Employee Directory</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/employees?page=1">Employees</NavLink>
      </div>
    </nav>
  );
}