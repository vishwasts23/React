import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>

      <p>
        <strong>Username:</strong> {user.username}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <p>
        <strong>Website:</strong> {user.website}
      </p>
    </div>
  );
}