import React from "react";
import { Routes, Route } from "react-router-dom";
import { SkillBridgeProvider } from "./context/SkillBridgeContext"; // Import the provider
import Home from "./components/Home";
import CourseDetail from "./components/CourseDetail"; // Create this component
import JobMatchingDetail from "./components/JobMatchingDetail"; // Create this component
import CareerGuidanceList from "./components/CareerGuidanceList"; // Create this component
import ProgressTrackingDetail from "./components/ProgressTrackingList"; // Create this component

const App = () => {
  return (
    
      <SkillBridgeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/job-matching/:id" element={<JobMatchingDetail />} />
          <Route path="/career-guidance/:id" element={<CareerGuidanceList />} />
          <Route path="/progress-tracking/:id" element={<ProgressTrackingDetail />} />
        </Routes>
      </SkillBridgeProvider>
  
  );
};

export default App;