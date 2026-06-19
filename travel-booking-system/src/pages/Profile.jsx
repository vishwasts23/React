import { useContext, useState, useEffect } from "react";
import { BookingContext } from "../context/BookingContext";

export default function Profile() {
  const { bookings } = useContext(BookingContext);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    image: "",
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const savedProfile = JSON.parse(
      localStorage.getItem("profile")
    );

    if (savedProfile) {
      setProfile(savedProfile);
    } else if (bookings.length > 0) {
      const latestBooking =
        bookings[bookings.length - 1];

      setProfile({
        name:
          latestBooking.customerName ||
          latestBooking.name ||
          "Guest User",

        email:
          latestBooking.email ||
          "guest@email.com",

        image: "",
      });
    }
  }, [bookings]);

  const saveProfile = () => {
    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

    setEditing(false);

    alert("Profile Updated Successfully");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const updatedProfile = {
        ...profile,
        image: reader.result,
      };

      setProfile(updatedProfile);

      localStorage.setItem(
        "profile",
        JSON.stringify(updatedProfile)
      );
    };

    reader.readAsDataURL(file);
  };

  const totalBookings = bookings.length;

  const totalTravelers = bookings.reduce(
    (total, booking) =>
      total +
      Number(booking.travelers || 0),
    0
  );

  const uniqueDestinations = [
    ...new Set(
      bookings.map(
        (booking) => booking.destination
      )
    ),
  ];

  return (
    <div className="profile-page">
      <div className="profile-card">

        {/* Top Section */}
        <div className="profile-top">

          <div className="profile-left">
            <img
              src={
                profile.image ||
                "https://via.placeholder.com/150"
              }
              alt="Profile"
              className="profile-image"
            />

            <label className="upload-btn">
              Upload Photo

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />
            </label>
          </div>

          <div className="profile-right">

            {editing ? (
              <div className="edit-form">

                <label>Name</label>

                <input
                  type="text"
                  className="profile-input"
                  placeholder="Enter Name"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      name: e.target.value,
                    })
                  }
                />

                <label>Email</label>

                <input
                  type="email"
                  className="profile-input"
                  placeholder="Enter Email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      email: e.target.value,
                    })
                  }
                />

                <button
                  className="save-btn"
                  onClick={saveProfile}
                >
                  Save Profile
                </button>

              </div>
            ) : (
              <>
                <h1 className="profile-name">
                  {profile.name || "Guest User"}
                </h1>

                <p className="profile-email">
                  {profile.email}
                </p>

                <span className="member-tag">
                  Premium Traveler
                </span>

                <button
                  className="edit-btn"
                  onClick={() =>
                    setEditing(true)
                  }
                >
                  Edit Profile
                </button>
              </>
            )}

          </div>

        </div>

        {/* Stats */}
        <div className="stats-grid">

          <div className="stat-card">
            <h2>{totalBookings}</h2>
            <p>Total Bookings</p>
          </div>

          <div className="stat-card">
            <h2>
              {uniqueDestinations.length}
            </h2>
            <p>Destinations</p>
          </div>

          <div className="stat-card">
            <h2>{totalTravelers}</h2>
            <p>Travelers</p>
          </div>

          <div className="stat-card">
            <h2>Active</h2>
            <p>Status</p>
          </div>

        </div>

        {/* Recent Bookings */}
        <div className="booking-section">

          <h2>Recent Bookings</h2>

          {bookings.length === 0 ? (
            <p>No bookings yet</p>
          ) : (
            <table>

              <thead>
                <tr>
                  <th>Destination</th>
                  <th>Travelers</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>

                {bookings
                  .slice()
                  .reverse()
                  .map((booking) => (
                    <tr key={booking.id}>

                      <td>
                        {booking.destination}
                      </td>

                      <td>
                        {booking.travelers}
                      </td>

                      <td>
                        {booking.travelDate ||
                          booking.date ||
                          "N/A"}
                      </td>

                    </tr>
                  ))}

              </tbody>

            </table>
          )}

        </div>

        {/* Destinations */}
        <div className="destination-section">

          <h2>
            Visited Destinations
          </h2>

          <div className="tags">

            {uniqueDestinations.length === 0 ? (
              <p>
                No destinations visited
              </p>
            ) : (
              uniqueDestinations.map(
                (
                  destination,
                  index
                ) => (
                  <span
                    key={index}
                    className="tag"
                  >
                    {destination}
                  </span>
                )
              )
            )}

          </div>

        </div>

      </div>
    </div>
  );
}