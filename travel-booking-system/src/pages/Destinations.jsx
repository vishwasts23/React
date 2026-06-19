import { Link } from "react-router-dom";

const destinations = [
  {
    id: 1,
    name: "Goa Beach",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    name: "Manali Adventure",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 3,
    name: "Kerala Backwaters",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592",
  },
  {
    id: 4,
    name: "Spiti Valley",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  },
  {
    id: 5,
    name: "Kashmir Tour",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
  },
  {
    id: 6,
    name: "Andaman Islands",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  },
];

export default function Destinations() {
  return (
    <div className="destinations-page">

      <h1>Popular Destinations</h1>

      <div className="destination-grid">

        {destinations.map((place) => (
          <div
            key={place.id}
            className="destination-card"
          >
            <img
              src={place.image}
              alt={place.name}
            />

            <div className="destination-content">

              <h3>{place.name}</h3>

              <Link
                to={`/destination/${place.id}`}
                className="explore-btn"
              >
                Explore Package
              </Link>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}