import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function RegistrationForm() {
  const { theme, setTheme } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter valid email";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <div className="form-card">
      <h2>Registration Form</h2>

      <button
        className="theme-btn"
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Switch To {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <span className="error">{errors.name}</span>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <span className="error">{errors.email}</span>

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <span className="error">{errors.password}</span>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <span className="error">{errors.confirmPassword}</span>

        <input
          type="text"
          name="city"
          placeholder="Enter City"
          onChange={handleChange}
        />
        <span className="error">{errors.city}</span>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;