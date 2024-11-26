import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar"; 
import Footer from "./Footer"; 
import { sampleCourses } from "../data/sampleCourses"; 
import Notification from "./Notification"; 

const CourseDetails = () => {
  const { id } = useParams(); 
  const [showNotification, setShowNotification] = useState(false); 

  
  const course = sampleCourses.find((course) => course.id === id);

  if (!course) {
    return (
      <div className="bg-[#f0f4ff] flex items-center justify-center h-screen">
        <h2 className="text-xl font-bold text-red-500">Course not found.</h2>
      </div>
    );
  }

  const handleEnroll = () => {
    setShowNotification(true);
    const timeout = setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    
    return () => clearTimeout(timeout); 
  };
  

  return (
    <div className="bg-[#f0f4ff]">
      <Navbar /> {/* Render Navbar */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-[#068FFF] mb-4">{course.name}</h2>
        <img src={course.image} alt={course.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
        <p className="text-gray-600 text-blue-800 font-semibold mb-4">{course.description}</p>
        <p className="text-gray-500">Duration: <span className="font-semibold">{course.duration}</span></p>
        <p className="text-gray-500">Instructor: <span className="font-semibold">{course.instructor}</span></p>
        
        <h3 className="text-2xl text-blue-800 font-semibold mt-6">Syllabus</h3>
        <ul className="list-disc list-inside mt-2 mb-4">
          {course.syllabus.map((item, index) => (
            <li key={index} className="text-gray-600">{item}</li>
          ))}
        </ul>

        <div className="text-center">
          <button 
            className="bg-[#068FFF] text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
            onClick={handleEnroll} // Handle enroll button click
          >
            Enroll Now
          </button>
        </div>

        {showNotification && (
          <Notification 
            message="You have been enrolled in the course!" 
            onClose={() => setShowNotification(false)} 
          />
        )}
      </div>
      <Footer /> {/* Render Footer */}
    </div>
  );
};

export default CourseDetails;