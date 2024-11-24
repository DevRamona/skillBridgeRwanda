import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar
import Footer from "./Footer"; // Import Footer

const CourseDetails = () => {
  const { id } = useParams(); // Get the course ID from the URL

  // Sample course data (you can replace this with real data from an API or context)
  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description: "Master HTML, CSS, and JavaScript to build responsive websites.",
      image: "https://via.placeholder.com/600x400?text=Web+Development",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      syllabus: [
        "Introduction to HTML",
        "CSS Fundamentals",
        "JavaScript Basics",
        "Responsive Web Design",
        "Frontend Frameworks (React)",
        "Backend Development (Node.js)",
        "Project Work",
      ],
    },
    {
      id: 2,
      title: "Data Science and Machine Learning",
      description: "Learn data analysis, visualization, and machine learning techniques.",
      image: "https://via.placeholder.com/600x400?text=Data+Science",
      duration: "10 weeks",
      level: "Intermediate",
      syllabus: [
        "Introduction to Data Science",
        "Data Analysis with Python",
        "Data Visualization Techniques",
        "Machine Learning Algorithms",
        "Model Evaluation and Tuning",
        "Capstone Project",
      ],
    },
    // Add more courses as needed
  ];

  // Find the course based on the ID
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found.</div>; // Handle case where course is not found
  }

  return (
    <div className="bg-[#f0f4ff]">
      <Navbar /> {/* Render Navbar */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-[#068FFF] mb-6">{course.title}</h2>
        <img src={course.image} alt={course.title} className="w-full h-64 object-cover mb-4" />
        <p className="text-gray-600 mb-4">{course.description}</p>
        <p className="text-gray-500">Duration: {course.duration}</p>
        <p className="text-gray-500">Level: {course.level}</p>
        <h3 className="text-2xl font-semibold mt-6">Syllabus</h3>
        <ul className="list-disc list-inside mt-2">
          {course.syllabus.map((item, index) => (
            <li key={index} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </div>
      <Footer /> {/* Render Footer */}
    </div>
  );
};

export default CourseDetails;