import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const RegisterFaculty = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let facultyList = JSON.parse(localStorage.getItem("faculty")) || [];

    // ✅ Prevent duplicate emails
    if (facultyList.some((fac) => fac.email === formData.email)) {
      setError("Email already registered!");
      return;
    }

    facultyList.push(formData);
    localStorage.setItem("faculty", JSON.stringify(facultyList));

    setSuccess(true);
    setError("");

    setTimeout(() => {
      navigate("/login-faculty");
    }, 2000);
  };

  return (
    <div className="register-container">
      <h2>Faculty Registration</h2>
      {success && <p className="success">Registration Successful! Redirecting...</p>}
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterFaculty;
