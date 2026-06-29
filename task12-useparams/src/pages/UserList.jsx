import { Link } from "react-router-dom";
import users from "../data/users";

export default function UserList() {
  return (
    <div className="page">
    <h1>Users</h1>

    <p>Select any user to view complete details.</p>

      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <Link to={`/user/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}