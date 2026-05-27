import React from "react";

export default function ListRendering() {

  const employees = [

    {
      id: 1,
      name: "Vishwas",
      age: 25,
      role: "Frontend Developer",
      location: "Karnataka",
      skills: "HTML, CSS, JavaScript"
    },

    {
      id: 2,
      name: "Rahul",
      age: 23,
      role: "React Developer",
      location: "Bangalore",
      skills: "React, NodeJS"
    },

    {
      id: 3,
      name: "Anjali",
      age: 22,
      role: "UI Designer",
      location: "Mysore",
      skills: "Figma, CSS"
    },

    {
      id: 4,
      name: "Kumar",
      age: 25,
      role: "Backend Developer",
      location: "Chennai",
      skills: "Java, Spring Boot"
    },

    {
      id: 5,
      name: "Priya",
      age: 21,
      role: "QA Engineer",
      location: "Hyderabad",
      skills: "Testing, Selenium"
    }

  ];

  return (

    <div>

      <h1 className="title">Employee Details</h1>

      <div className="container">

        {employees.map((employee) => (

          <div className="card" key={employee.id}>

            <h2>{employee.name}</h2>

            <p><b>Age:</b> {employee.age}</p>

            <p><b>Role:</b> {employee.role}</p>

            <p><b>Location:</b> {employee.location}</p>

            <p><b>Skills:</b> {employee.skills}</p>

          </div>

        ))}

      </div>

    </div>

  );
}