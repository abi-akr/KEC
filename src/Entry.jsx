import React from "react";
import { useNavigate } from "react-router-dom";
import "./entry.css";

const Entry = () => {
  const navigate = useNavigate();

  return (
    <div className="entry-container">
      <h1>Welcome to the Portal</h1>
      <p>Select your role to continue:</p>
      <div className="buttons">
        <button className="btn" onClick={() => navigate("/login-student")}>Login as Student</button>
        <button className="btn" onClick={() => navigate("/login-faculty")}>Login as Faculty</button>
      </div>
      <p>Don't have an account? Register below.</p>
      <div className="buttons">
        <button className="btn secondary" onClick={() => navigate("/register-student")}>Register as Student</button>
        <button className="btn secondary" onClick={() => navigate("/register-faculty")}>Register as Faculty</button>
      </div>
    </div>
  );
};

export default Entry;
