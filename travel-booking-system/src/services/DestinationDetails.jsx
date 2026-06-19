import { useParams, useNavigate } from "react-router-dom";
import destinations from "../data/destinations";

export default function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Package Not Found
      </h2>
    );
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="details-image">
          <img
            src={destination.image}
            alt={destination.name}
          />
        </div>

        <div className="details-content">
          <h1>{destination.name}</h1>

          <h2>{destination.price}</h2>

          <h3>⭐ {destination.rating} / 5</h3>

          <p>
            Enjoy an unforgettable experience at{" "}
            {destination.name}. This package
            includes sightseeing, hotel
            accommodation, local transport,
            and guided tours.
          </p>

          <ul>
            <li>✔ 3 Nights / 4 Days</li>
            <li>✔ Hotel Stay Included</li>
            <li>✔ Breakfast Included</li>
            <li>✔ Local Sightseeing</li>
            <li>✔ Travel Assistance</li>
          </ul>

          <div className="details-buttons">
            <button
              className="book-btn"
              onClick={() =>
                navigate(
                  `/booking?destination=${encodeURIComponent(
                    destination.name
                  )}`
                )
              }
            >
              Book Now
            </button>

            <button
              className="back-btn"
              onClick={() => navigate("/")}
            >
              Back Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}