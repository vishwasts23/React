import { useEffect, useState } from "react";

export default function UserCRUD() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email) {
      alert("Please enter Name and Email");
      return;
    }

    if (editId !== null) {
      setUsers(
        users.map((user) =>
          user.id === editId
            ? {
                ...user,
                name,
                email,
              }
            : user
        )
      );

      alert("User Updated Successfully");

      setEditId(null);
      setName("");
      setEmail("");

      return;
    }

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
          }),
        }
      );

      const newUser = await response.json();

      setUsers([
        ...users,
        {
          ...newUser,
          id: users.length + 1,
        },
      ]);

      alert("User Added Successfully");

      setName("");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  }

  function handleEdit(user) {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE",
        }
      );

      setUsers(users.filter((user) => user.id !== id));

      alert("User Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  function handleReset() {
    setName("");
    setEmail("");
    setEditId(null);
  }

  if (loading) {
    return <h2 className="loading">Loading Users...</h2>;
  }

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          {editId !== null ? "Update User" : "Add User"}
        </button>

        <button
          type="button"
          className="reset-btn"
          onClick={handleReset}
        >
          Reset
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>

              <td>{user.name}</td>

              <td>{user.email}</td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}