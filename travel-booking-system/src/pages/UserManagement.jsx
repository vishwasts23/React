import { useState, useContext } from "react";
import useUsersAPI from "../hooks/useUsersAPI";
import { BookingContext } from "../context/BookingContext";

export default function UserManagement() {
  const {
    users: apiUsers,
    loading,
    error,
  } = useUsersAPI();

  const {
    bookings,
    deleteBooking,
  } = useContext(BookingContext);

  const [localUsers, setLocalUsers] = useState(
    JSON.parse(
      localStorage.getItem("localUsers")
    ) || []
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const saveLocalUsers = (data) => {
    setLocalUsers(data);

    localStorage.setItem(
      "localUsers",
      JSON.stringify(data)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      const updatedUsers =
        localUsers.map((user) =>
          user.id === editId
            ? {
                ...user,
                name,
                email,
              }
            : user
        );

      saveLocalUsers(updatedUsers);

      alert("User Updated Successfully");

      setEditId(null);
    } else {
      const newUser = {
        id: Date.now(),
        name,
        email,
      };

      saveLocalUsers([
        ...localUsers,
        newUser,
      ]);

      alert("User Added Successfully");
    }

    setName("");
    setEmail("");
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  const handleDelete = (id) => {
    const updatedUsers =
      localUsers.filter(
        (user) => user.id !== id
      );

    saveLocalUsers(updatedUsers);
  };

  const bookingUsers =
    bookings.map((booking) => ({
      id: booking.id,
      name:
        booking.customerName ||
        booking.name,
      email: booking.email,
      bookingUser: true,
    }));

  const allUsers = [
    ...apiUsers,
    ...bookingUsers,
    ...localUsers,
  ];

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="user-page">
      <h1>User Management</h1>

      <form
        className="crud-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button type="submit">
          {editId
            ? "Update User"
            : "Add User"}
        </button>
      </form>

      {allUsers.length === 0 ? (
        <h3>No Users Found</h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {allUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>
                  {/* Booking Users */}
                  {user.bookingUser && (
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() =>
                        deleteBooking(
                          user.id
                        )
                      }
                    >
                      Delete Booking
                    </button>
                  )}

                  {/* Local Users */}
                  {!user.bookingUser &&
                    !apiUsers.find(
                      (apiUser) =>
                        apiUser.id ===
                        user.id
                    ) && (
                      <>
                        <button
                          type="button"
                          className="edit-btn"
                          onClick={() =>
                            handleEdit(
                              user
                            )
                          }
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="delete-btn"
                          onClick={() =>
                            handleDelete(
                              user.id
                            )
                          }
                        >
                          Delete
                        </button>
                      </>
                    )}

                  {/* API Users */}
                  {!user.bookingUser &&
                    apiUsers.find(
                      (apiUser) =>
                        apiUser.id ===
                        user.id
                    ) && (
                      <span
                        style={{
                          color:
                            "#22c55e",
                          fontWeight:
                            "bold",
                        }}
                      >
                        Active
                      </span>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}