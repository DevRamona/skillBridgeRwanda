import React from "react";
import { Routes, Route } from "react-router-dom";
import { SkillBridgeProvider } from "./context/SkillBridgeContext"; // Import the provider
import Home from "./components/Home";
import CourseList from "./components/CourseList"; // Create this component
import JobMatchingDetail from "./components/JobMatchingDetail"; // Create this component
import CareerGuidanceList from "./components/CareerGuidanceList"; // Create this component
import ProgressTrackingDetail from "./components/ProgressTrackingList"; // Create this component
import Register from "./components/Register";
import Login from "./components/Login";
import CourseDetails from "./components/CourseDetails";
import JobMatchingList from "./components/JobMatchingList"; // Create this component

const App = () => {
  return (
    
      <SkillBridgeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/" element={<CourseList />} />
          <Route path="/job-matching/" element={<JobMatchingList />} />
          <Route path="/job-details/:id" element={<JobMatchingDetail />} />
          <Route path="/career-guidance" element={<CareerGuidanceList />} />
          <Route path="/progress-tracking" element={<ProgressTrackingDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
        </Routes>
      </SkillBridgeProvider>
  
  );
};

export default App;