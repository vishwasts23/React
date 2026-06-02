import React, { useState, useEffect } from "react";

export default function UseEffectApi() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div className="container">
      <h1>User Data</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          {user.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.username}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
              <td>{person.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}