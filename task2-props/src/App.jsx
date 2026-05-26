import React from "react";
import "./App.css";
import ProfileCard from "./ProfileCard";

export default function App() {
  return (

    <div>

      <h1 className="title">Employee Profiles</h1>

      <div className="container">

        <ProfileCard
          image="https://i.pravatar.cc/150?img=1"
          name="Vishwas T S"
          age="25"
          role="Frontend Engineer"
          location="Karnataka"
          skills="HTML, CSS, JavaScript"
        />

        <ProfileCard
          image="https://i.pravatar.cc/150?img=3"
          name="Rahul"
          age="23"
          role="Frontend Developer"
          location="Bangalore"
          skills="React, JavaScript"
        />

        <ProfileCard
          image="https://i.pravatar.cc/150?img=2"
          name="Anjali"
          age="22"
          role="UI Designer"
          location="Mysore"
          skills="Figma, CSS"
        />

      </div>

    </div>

  );
}