import React, { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className="container"
      style={{
        backgroundColor: darkMode ? "#1e293b" : "#ffffff",
        color: darkMode ? "#ffffff" : "#111827",
      }}
    >
      <h1
        style={{
          color: darkMode ? "#ffffff" : "#111827",
          fontSize: "42px",
          marginBottom: "20px",
        }}
      >
        Counter Application
      </h1>

      <h2
        style={{
          color: darkMode ? "#ffffff" : "#111827",
          fontSize: "80px",
          marginBottom: "30px",
        }}
      >
        {count}
      </h2>

      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrement
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        Switch To {darkMode ? "Light" : "Dark"} Theme
      </button>

      <p
        style={{
          color: darkMode ? "#ffffff" : "#111827",
          marginTop: "25px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Current Theme :
        {darkMode ? " Dark Mode 🌙" : " Light Mode ☀️"}
      </p>
    </div>
  );
}