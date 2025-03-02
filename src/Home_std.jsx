import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./Home.css";
import img2 from './assets/graph.jpg'

const subjectsData = [
  { code: "CS101", name: "Computer Science", faculty: "Dr. John Doe" },
  { code: "EE102", name: "Electrical Engineering", faculty: "Prof. Jane Smith" },
  { code: "ME103", name: "Mechanical Engineering", faculty: "Dr. Alan Turing" },
  { code: "AI104", name: "Artificial Intelligence", faculty: "Prof. Andrew Ng" },
  { code: "ML105", name: "Machine Learning", faculty: "Dr. Geoffrey Hinton" }
];

const HomeStudent = () => {
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("loggedInStudent"));
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("loggedInStudent");
    navigate("/");
  };

  const filteredSubjects = subjectsData.filter(
    (subject) =>
      subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.faculty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="student-home">
      {/* Fixed Header */}
      <div className="header">
        <div className="head">
          <h2 className="welcome-text">Welcome, {student?.name}!</h2>
          <div className="header-right">
            <FaUserCircle
              className="user-icon"
              onClick={() => navigate("/profile-student")}
              title={student?.email}
            />
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>

      <div className="bod">
        {/* Fixed Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search subjects..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Image Container (Newly Added) */}
        <div className="image-container">
          <img src={img2} alt="University Campus" className="home-image" />
        </div>

        {/* Scrollable Subject List */}
        <div className="subject">
          <div className="subject-list">
            {filteredSubjects.length > 0 ? (
              filteredSubjects.map((subject, index) => (
                <div key={index} className="subject-card">
                  <p><strong>Code:</strong> {subject.code}</p>
                  <p><strong>Subject:</strong> {subject.name}</p>
                  <p><strong>Faculty:</strong> {subject.faculty}</p>
                </div>
              ))
            ) : (
              <p className="no-results">No subjects found!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStudent;
