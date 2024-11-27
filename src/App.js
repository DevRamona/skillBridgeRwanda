import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { SkillBridgeProvider } from "./context/SkillBridgeContext";
import { AuthContextProvider } from "./context/authContext";
import Home from "./components/Home";
import CourseList from "./components/CourseList";
import JobMatchingDetail from "./components/JobMatchingDetail";
import CareerGuidanceList from "./components/CareerGuidanceList";
import ProgressTrackingDetail from "./components/ProgressTrackingList";
import Register from "./components/Register";
import Login from "./components/Login";
import CourseDetails from "./components/CourseDetails";
import JobMatchingList from "./components/JobMatchingList";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <SkillBridgeProvider>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
          <Route element={<PrivateRoute />}>
            <Route path="/courses" element={<CourseList />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/job-matching" element={<JobMatchingList />} />
            <Route path="/job-details/:id" element={<JobMatchingDetail />} />
            <Route path="/career-guidance" element={<CareerGuidanceList />} />
            <Route path="/progress-tracking" element={<ProgressTrackingDetail />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </SkillBridgeProvider>
  );
};

export default App;