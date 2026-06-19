import { useNavigate } from "react-router-dom";

export default function DestinationCard({
  id,
  title,
  image,
  price,
  rating,
}) {
  const navigate = useNavigate();

  return (
    <div className="destination-card">

      <img
        src={image}
        alt={title}
        className="destination-image"
      />

      <div className="card-content">
        <h3>{title}</h3>

        <p>Package Price: {price}</p>

        <p>Rating: ⭐ {rating}</p>

        <button
          className="view-btn"
          onClick={() =>
            navigate(`/destination/${id}`)
          }
        >
          View Package
        </button>
      </div>

    </div>
  );
}