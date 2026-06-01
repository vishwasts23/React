import React, { useState } from "react";

export default function FormValidation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
    address: "",
    city: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.firstName.trim())
      tempErrors.firstName = "First Name is required";

    if (!formData.lastName.trim())
      tempErrors.lastName = "Last Name is required";

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      tempErrors.email = "Invalid Email";

    if (!formData.phone.match(/^[0-9]{10}$/))
      tempErrors.phone = "Phone must be 10 digits";

    if (formData.password.length < 6)
      tempErrors.password = "Password minimum 6 characters";

    if (formData.confirmPassword !== formData.password)
      tempErrors.confirmPassword = "Passwords do not match";

    if (!formData.dob)
      tempErrors.dob = "Date of Birth required";

    if (formData.address.length < 5)
      tempErrors.address = "Address minimum 5 characters";

    if (!formData.city.trim())
      tempErrors.city = "City required";

    if (!formData.country.trim())
      tempErrors.country = "Country required";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess("Form Submitted Successfully");
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="form-container">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />
          <span className="error">{errors.firstName}</span>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
          />
          <span className="error">{errors.lastName}</span>
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <span className="error">{errors.email}</span>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />
          <span className="error">{errors.phone}</span>
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <span className="error">{errors.password}</span>
        </div>

        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          <span className="error">{errors.confirmPassword}</span>
        </div>

        <div className="form-group">
          <input
            type="date"
            name="dob"
            onChange={handleChange}
          />
          <span className="error">{errors.dob}</span>
        </div>

        <div className="form-group">
          <textarea
            name="address"
            placeholder="Address"
            rows="3"
            onChange={handleChange}
          />
          <span className="error">{errors.address}</span>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />
          <span className="error">{errors.city}</span>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={handleChange}
          />
          <span className="error">{errors.country}</span>
        </div>

        <button type="submit">
          Submit
        </button>

        {success && (
          <p className="success">{success}</p>
        )}

      </form>
    </div>
  );
}