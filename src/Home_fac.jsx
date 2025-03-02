import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./home.css";

const HomeFaculty = () => {
  const navigate = useNavigate();
  const faculty = JSON.parse(localStorage.getItem("loggedInFaculty"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInFaculty");
    navigate("/");
  };

  return (
    <div className="home-container">
      <h1>Welcome, {faculty?.name}!</h1>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
      <FaUserCircle className="user-icon" onClick={() => navigate("/profile-faculty")} title={faculty?.email} />
    </div>
  );
};

export default HomeFaculty;
