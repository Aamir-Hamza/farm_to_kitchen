import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import "../App.css";
import './Register.css'

export function User_Registration() {
  const [data, setData] = useState({
    name: "",
    role: "farmer", // Default role

    farmLocation: "",
    typesOfProduce: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate passwords match

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Validate role-specific fields for farmers
    if (data.role === "farmer" && (!data.farmLocation || !data.typesOfProduce)) {
      setError("Farm location and types of produce are required for farmers.");
      return;
    }

    setError(""); // Reset error

    try {
      const response = await fetch(
        "https://farm-to-kitchen-ab130-default-rtdb.firebaseio.com/users.json", // Ensure '.json' is added to the URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("User data saved successfully!");
        navigate("/login");
      } else {
        throw new Error("Failed to save user data.");
      }
    } catch (err) {
      console.error("Error saving user data:", err);
      setError("Failed to register user. Please try again.");
    }

  };

  return (
    <div className="registration-container">

      <h2 className="registration-heading">User Registration</h2>

      <form onSubmit={handleSubmit} className="registration-form">
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          className="input-field"
        />

        <div className="form-group">
          <label htmlFor="role">Select Role</label>
          <select
            name="role"
            value={data.role}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="farmer">Farmer</option>
            <option value="customer">Customer</option>
          </select>
        </div>

        {/* Show farmer-specific fields */}
        {data.role === "farmer" && (
          <>
            <input
              type="text"
              name="farmLocation"
              value={data.farmLocation}
              onChange={handleChange}
              placeholder="Enter your farm location"
              required
              className="input-field"
            />
            <input
              type="text"
              name="typesOfProduce"
              value={data.typesOfProduce}
              onChange={handleChange}
              placeholder="E.g., Fruits, Vegetables, Grains"
              required
              className="input-field"
            />
          </>
        )}


        <input
          type="tel"
          name="contactNumber"
          value={data.contactNumber}
          onChange={handleChange}
          placeholder="Enter your contact number"
          required
          className="input-field"
        />
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="input-field"
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          className="input-field"
        />
        <input
          type="password"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          required
          className="input-field"
        />

        
        {/* Error message */}
        {error && <p className="error-message">{error}</p>}

        {/* Submit Button */}

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
        }
