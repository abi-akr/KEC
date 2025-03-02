import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const RegisterStudent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let studentsList = JSON.parse(localStorage.getItem("students")) || [];

    // ✅ Prevent duplicate emails
    if (studentsList.some((std) => std.email === formData.email)) {
      setError("Email already registered!");
      return;
    }

    studentsList.push(formData);
    localStorage.setItem("students", JSON.stringify(studentsList));
    
    setSuccess(true);
    setError("");

    setTimeout(() => {
      navigate("/login-student");
    }, 2000);
  };

  return (
    <div className="register-container">
      <h2>Student Registration</h2>
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

export default RegisterStudent;
