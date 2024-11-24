import React, { createContext, useState, useContext } from "react";

// Create the context
export const SkillBridgeContext = createContext();

// Create a provider component
export const SkillBridgeProvider = ({ children }) => { // Added export here
  const [courses, setCourses] = useState([]);
  const [jobMatching, setJobMatching] = useState([]);
  const [careerGuidance, setCareerGuidance] = useState([]);
  const [progressTracking, setProgressTracking] = useState([]);

  return (
    <SkillBridgeContext.Provider
      value={{
        courses,
        setCourses,
        jobMatching,
        setJobMatching,
        careerGuidance,
        setCareerGuidance,
        progressTracking,
        setProgressTracking,
      }}
    >
      {children}
    </SkillBridgeContext.Provider>
  );
};

// Create a custom hook to use the context
export const useSkillBridgeContext = () => {
  return useContext(SkillBridgeContext);
};