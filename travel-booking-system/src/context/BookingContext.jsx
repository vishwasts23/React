import { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

export default function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(savedBookings);
  }, []);

  const addBooking = (newBooking) => {
    const updatedBookings = [
      ...bookings,
      {
        id: Date.now(),
        ...newBooking,
      },
    ];

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  const deleteBooking = (id) => {
    const updatedBookings =
      bookings.filter(
        (booking) => booking.id !== id
      );

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        deleteBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}