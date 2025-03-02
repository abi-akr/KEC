import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entry from "./Entry";
import LoginStudent from "./Login_std";
import LoginFaculty from "./Login_fac";
import RegisterStudent from "./Register_std";
import RegisterFaculty from "./Register_fac";
import HomeStudent from "./Home_std";
import HomeFaculty from "./Home_fac";
import ProfileStudent from "./Profile_std";
import ProfileFaculty from "./Profile_fac";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Entry />} />
      <Route path="/login-student" element={<LoginStudent />} />
      <Route path="/login-faculty" element={<LoginFaculty />} />
      <Route path="/register-student" element={<RegisterStudent />} />
      <Route path="/register-faculty" element={<RegisterFaculty />} />
      <Route path="/home-student" element={<HomeStudent />} />
      <Route path="/home-faculty" element={<HomeFaculty />} />
      <Route path="/profile-student" element={<ProfileStudent />} />
      <Route path="/profile-faculty" element={<ProfileFaculty />} />
    </Routes>
  );
};

export default App;


