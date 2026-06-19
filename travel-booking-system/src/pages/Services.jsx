import { Link, Outlet } from "react-router-dom";

export default function Services() {
  return (
    <div className="page">
      <h1>Travel Services</h1>

      <div className="service-links">
        <Link to="adventure">
          Adventure Trips
        </Link>

        <Link to="family">
          Family Trips
        </Link>

        <Link to="honeymoon">
          Honeymoon Packages
        </Link>
      </div>

      <Outlet />
    </div>
  );
}