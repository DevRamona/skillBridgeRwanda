import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar
import Footer from "./Footer"; // Import Footer
import { sampleCourses } from "../data/sampleCourses"; // Import the sample courses

const CourseDetails = () => {
  const { id } = useParams(); // Get the course ID from the URL

  // Find the course based on the ID
  const course = sampleCourses.find((course) => course.id === id);

  if (!course) {
    return <div>Course not found.</div>; // Handle case where course is not found
  }

  return (
    <div className="bg-[#f0f4ff]">
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-[#068FFF] mb-4">{course.name}</h2>
        <img src={course.image} alt={course.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
        <p className="text-gray-600 mb-4">{course.description}</p>
        <p className="text-gray-500">Duration: <span className="font-semibold">{course.duration}</span></p>
        <p className="text-gray-500">Instructor: <span className="font-semibold">{course.instructor}</span></p>
        
        <h3 className="text-2xl font-semibold mt-6">Syllabus</h3>
        <ul className="list-disc list-inside mt-2 mb-4">
          {course.syllabus.map((item, index) => (
            <li key={index} className="text-gray-600">{item}</li>
          ))}
        </ul>

        <div className="text-center">
          <button className="bg-[#068FFF] text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
            Enroll Now
          </button>
        </div>
      </div>
      <Footer /> {/* Render Footer */}
    </div>
  );
};

export default CourseDetails;