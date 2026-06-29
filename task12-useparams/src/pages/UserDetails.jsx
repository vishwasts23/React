import { useParams } from "react-router-dom";
import users from "../data/users";

export default function UserDetails() {

  const { id } = useParams();

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div className="page">
        <h2>User Not Found</h2>
      </div>
    );
  }

  return (
    <div className="details-card">

      <h2>👤 User Details</h2>

      <p><strong>Name:</strong> {user.name}</p>

      <p><strong>Email:</strong> {user.email}</p>

      <p><strong>Phone:</strong> {user.phone}</p>

      <p><strong>Address:</strong> {user.address}</p>

      <p><strong>City:</strong> {user.city}</p>

    </div>
  );
}