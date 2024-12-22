import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch all users from Firebase
      const response = await fetch(
        "https://farm-to-kitchen-ab130-default-rtdb.firebaseio.com/users.json"
      );
      const data = await response.json();

      // Find user based on email
      const user = Object.values(data).find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (user) {
        // Save user details in local storage or state management
        localStorage.setItem("user", JSON.stringify(user));

        // Redirect based on user role
        if (user.role === "farmer") {
          navigate("/farmer"); // Navigate to farmer page
        } else if (user.role === "customer") {
          navigate("/customer"); // Navigate to customer page
        }
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("Failed to login. Please try again.");
    }
  };

  return (
    <div className="login-wrapper">
      <h2 className="login-title">Log In</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="form-input"
          />
        </div>

        {/* Password Input */}
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="form-input"
          />
        </div>

        {/* Error Message */}
        {error && <p className="form-error">{error}</p>}

        {/* Submit Button */}
        <button type="submit" className="login-button">
          Log In
        </button>

        {/* Link to Register */}
        <p className="form-footer">
          Don't have an account?{" "}
          <Link to="/register" className="form-link">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}