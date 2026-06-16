import "./App.css";
import UserCard from "./components/UserCard";
import useFetchData from "./hooks/useFetchData";

export default function App() {
  const {
    data: users,
    loading,
    error,
  } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return <h2 className="message">Loading...</h2>;
  }

  if (error) {
    return <h2 className="message">{error}</h2>;
  }

  return (
    <div className="container">
      <h1>User Directory</h1>

      <div className="card-container">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </div>
  );
}