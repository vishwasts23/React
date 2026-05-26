import React from "react";

export default function ProfileCard({
  image,
  name,
  age,
  role,
  location,
  skills
}) {
  return (
    <div className="card">

      <img src={image} alt="profile" />

      <h2>{name}</h2>

      <p><b>Age:</b> {age}</p>

      <p><b>Role:</b> {role}</p>

      <p><b>Location:</b> {location}</p>

      <p><b>Skills:</b> {skills}</p>

    </div>
  );
}