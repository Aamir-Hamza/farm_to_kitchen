import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export function User_Registration({ onRegister }) {
  const [data, setData] = useState({
    name: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    onRegister(data);
    navigate("/login");
  };

  return (
    <div className="registration-container">
      <h2 className="registration-heading">Farmer Register</h2>
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
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}
