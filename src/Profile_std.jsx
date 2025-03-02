import React from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const ProfileStudent = () => {
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("loggedInStudent"));

  return (
    <div className="profile-container">
      <h2>Student Profile</h2>
      {student ? (
        <>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Password:</strong> {student.password}</p>
          <button onClick={() => navigate("/home-student")}>Go Back to Home</button>
        </>
      ) : (
        <p>No student logged in</p>
      )}
    </div>
  );
};

export default ProfileStudent;
