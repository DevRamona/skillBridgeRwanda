import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CourseDetail from "./components/CourseDetail"; // Create this component
import JobMatchingDetail from "./components/JobMatchingDetail"; // Create this component
import CareerGuidanceList from "./components/CareerGuidanceList"; // Create this component
import ProgressTrackingDetail from "./components/CareerGuidanceList"
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/job-matching/:id" element={<JobMatchingDetail />} />
        <Route path="/career-guidance/:id" element={<CareerGuidanceList />} />
        <Route path="/progress-tracking/:id" element={<ProgressTrackingDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;





