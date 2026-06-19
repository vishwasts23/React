import { useState, useEffect } from "react";

export default function useUsersAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] =
    useState(true);
  const [error, setError] =
    useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch users"
        );
      }

      const data =
        await response.json();

      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    users,
    setUsers,
    loading,
    error,
  };
}