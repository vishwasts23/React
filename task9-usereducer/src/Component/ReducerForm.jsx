import React, { useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  dob: "",
  city: "",
  country: "",
  address: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export default function ReducerForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!state.firstName.trim())
      newErrors.firstName = "First Name is required";

    if (!state.lastName.trim())
      newErrors.lastName = "Last Name is required";

    if (!state.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      newErrors.email = "Invalid Email";
    }

    if (!state.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(state.phone)) {
      newErrors.phone = "Enter 10 digit phone number";
    }

    if (!state.password) {
      newErrors.password = "Password is required";
    } else if (state.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (!state.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password required";
    } else if (state.password !== state.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!state.dob) newErrors.dob = "Date of Birth is required";

    if (!state.city.trim()) newErrors.city = "City is required";

    if (!state.country.trim())
      newErrors.country = "Country is required";

    if (!state.address.trim())
      newErrors.address = "Address is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);

    console.log(state);
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="container">
      <div className="form-card">
        <h1>Employee Registration Portal</h1>
        <p className="subtitle">
          
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">

            <div>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error">{errors.email}</span>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={state.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="error">{errors.phone}</span>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={state.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <span className="error">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            <div>
              <input
                type="date"
                name="dob"
                value={state.dob}
                onChange={handleChange}
              />
              {errors.dob && (
                <span className="error">{errors.dob}</span>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="City"
                name="city"
                value={state.city}
                onChange={handleChange}
              />
              {errors.city && (
                <span className="error">{errors.city}</span>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Country"
                name="country"
                value={state.country}
                onChange={handleChange}
              />
              {errors.country && (
                <span className="error">{errors.country}</span>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={state.address}
                onChange={handleChange}
              />
              {errors.address && (
                <span className="error">{errors.address}</span>
              )}
            </div>
          </div>

          <div className="button-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>

            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>

        {submitted && (
          <div className="success-box">
            Employee Registered Successfully
          </div>
        )}
      </div>
    </div>
  );
}