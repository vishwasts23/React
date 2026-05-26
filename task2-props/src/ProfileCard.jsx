import React from "react";

export default function ProfileCard(props) {
  return (
    <div className="card">

      <img src={props.image} alt="profile" />

      <h2>{props.name}</h2>

      <p><b>Age:</b> {props.age}</p>

      <p><b>Role:</b> {props.role}</p>

      <p><b>Location:</b> {props.location}</p>

      <p><b>Skills:</b> {props.skills}</p>

    </div>
  );
}