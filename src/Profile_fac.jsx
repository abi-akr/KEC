import React from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const ProfileFaculty = () => {
  const navigate = useNavigate();
  const faculty = JSON.parse(localStorage.getItem("loggedInFaculty"));

  return (
    <div className="profile-container">
      <h2>Faculty Profile</h2>
      {faculty ? (
        <>
          <p><strong>Name:</strong> {faculty.name}</p>
          <p><strong>Email:</strong> {faculty.email}</p>
          <p><strong>Password:</strong> {faculty.password}</p>
          <button onClick={() => navigate("/home-faculty")}>Go Back to Home</button>
        </>
      ) : (
        <p>No faculty logged in</p>
      )}
    </div>
  );
};

export default ProfileFaculty;
