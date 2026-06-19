import {
  useReducer,
  useState,
  useContext,
  useEffect,
} from "react";

import { useLocation } from "react-router-dom";

import {
  bookingReducer,
  initialState,
} from "../reducer/bookingReducer";

import { BookingContext } from "../context/BookingContext";

function Booking() {
  const location = useLocation();

  const [formData, dispatch] = useReducer(
    bookingReducer,
    initialState
  );

  const [errors, setErrors] = useState({});

  const {
    bookings,
    addBooking,
    deleteBooking,
  } = useContext(BookingContext);

  // Auto-fill destination from URL
  useEffect(() => {
    const params = new URLSearchParams(
      location.search
    );

    const destination =
      params.get("destination");

    if (destination) {
      dispatch({
        type: "UPDATE_FIELD",
        field: "destination",
        value: destination,
      });
    }
  }, [location.search]);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName =
        "Customer Name is required";
    }

    if (
      !formData.email ||
      !formData.email.includes("@")
    ) {
      newErrors.email =
        "Enter valid email address";
    }

    if (!formData.destination.trim()) {
      newErrors.destination =
        "Destination is required";
    }

    if (
      !formData.travelers ||
      Number(formData.travelers) < 1
    ) {
      newErrors.travelers =
        "Minimum 1 traveler required";
    }

    if (!formData.travelDate) {
      newErrors.travelDate =
        "Travel date is required";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    addBooking({
      name: formData.customerName,
      email: formData.email,
      destination: formData.destination,
      travelers: Number(
        formData.travelers
      ),
      date: formData.travelDate,
    });

    dispatch({
      type: "RESET",
    });

    setErrors({});

    alert(
      "Booking Added Successfully"
    );
  };

  return (
    <div className="booking-container">
      <h1>Travel Booking Form</h1>

      <form
        className="booking-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
        />
        <span>{errors.customerName}</span>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <span>{errors.email}</span>

        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
        />
        <span>{errors.destination}</span>

        <input
          type="number"
          name="travelers"
          placeholder="Number of Travelers"
          value={formData.travelers}
          onChange={handleChange}
        />
        <span>{errors.travelers}</span>

        <input
          type="date"
          name="travelDate"
          value={formData.travelDate}
          onChange={handleChange}
        />
        <span>{errors.travelDate}</span>

        <button type="submit">
          Book Trip
        </button>
      </form>

      <h2>Booking Records</h2>

      {bookings.length === 0 ? (
        <h3>No Bookings Found</h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Destination</th>
              <th>Travelers</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>

                <td>{booking.email}</td>

                <td>
                  {booking.destination}
                </td>

                <td>
                  {booking.travelers}
                </td>

                <td>
                  {booking.date
                    ? new Date(
                        booking.date
                      ).toLocaleDateString()
                    : "N/A"}
                </td>

                <td>
                  <button
                    type="button"
                    onClick={() =>
                      deleteBooking(
                        booking.id
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Booking;