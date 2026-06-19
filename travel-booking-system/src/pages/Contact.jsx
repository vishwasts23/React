import { useSearchParams } from "react-router-dom";

export default function Contact() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const city =
    searchParams.get("city") || "Goa";

  const cityData = {
    Goa: {
      phone: "+91 9876543210",
      email: "goa@travelbooking.com",
      address: "Goa Beach Road, Goa",
    },

    Manali: {
      phone: "+91 9123456780",
      email: "manali@travelbooking.com",
      address: "Mall Road, Manali",
    },

    Kerala: {
      phone: "+91 9988776655",
      email: "kerala@travelbooking.com",
      address: "Alleppey, Kerala",
    },
  };

  const details = cityData[city];

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>Contact Page</h1>

        <h2>
          Selected City : {city}
        </h2>

        <div className="city-buttons">
          <button
            onClick={() =>
              setSearchParams({
                city: "Goa",
              })
            }
          >
            Goa
          </button>

          <button
            onClick={() =>
              setSearchParams({
                city: "Manali",
              })
            }
          >
            Manali
          </button>

          <button
            onClick={() =>
              setSearchParams({
                city: "Kerala",
              })
            }
          >
            Kerala
          </button>
        </div>

        <div className="contact-info">
          <p>
            📞 Phone: {details.phone}
          </p>

          <p>
            📧 Email: {details.email}
          </p>

          <p>
            📍 Location: {details.address}
          </p>
        </div>
      </div>
    </div>
  );
}