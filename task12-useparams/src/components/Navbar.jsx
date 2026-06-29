import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>User Directory</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
      </div>
    </nav>
  );
}