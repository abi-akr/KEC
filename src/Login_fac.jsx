import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginFaculty = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let facultyList = JSON.parse(localStorage.getItem("faculty")) || [];

    const facultyUser = facultyList.find((fac) => fac.email === formData.email);

    if (facultyUser) {
      // ✅ Correct password checking mechanism
      if (facultyUser.password === formData.password) {
        setSuccess(true);
        setError("");

        localStorage.setItem("loggedInFaculty", JSON.stringify(facultyUser));

        setTimeout(() => {
          navigate("/home-faculty");
        }, 2000);
      } else {
        setError("Incorrect password!");
        setSuccess(false);
      }
    } else {
      setError("User not found!");
      setSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Faculty Login</h2>
      {success && <p className="success">Login Successful! Redirecting...</p>}
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginFaculty;
