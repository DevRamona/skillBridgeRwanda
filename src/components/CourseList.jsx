import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSkillBridgeContext } from "../context/SkillBridgeContext"; // Import the context
import Loader from "./Loader"; // Import a Loader component for loading state
import Navbar from "./Navbar";
import Footer from "./Footer";

// Sample course data
const sampleCourses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Master HTML, CSS, and JavaScript to build responsive websites.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJNItq1ncXuPwhiW3sWVUzpp3wQ4xNJcf_A&s",
  },
  {
    id: 2,
    title: "Data Science and Machine Learning",
    description: "Learn data analysis, visualization, and machine learning techniques.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6o-Kk1Fk-G0SniZ0dq85C6tQcEdhfSTuIZA&s",
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    description: "Understand SEO, social media, and content marketing strategies.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShSlvCV7J6xoLxeaIxdh2zVO5Gpt3jKacjwg&s",
  },
  {
    id: 4,
    title: "Graphic Design Essentials",
    description: "Learn the fundamentals of graphic design using Adobe tools.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIxw1YfIy0UJAZ-TJJgiw4xbYpCTjMVYlxg&s",
  },
];

const CourseList = () => {
  const { setCourses } = useSkillBridgeContext(); // Use the context
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching data
    const fetchCourses = () => {
      setCourses(sampleCourses); // Set sample courses in context
      setLoading(false); // Set loading to false
    };

    fetchCourses();
  }, [setCourses]);

  const handleCardClick = (id) => {
    navigate(`/courses/${id}`); // Navigate to the course detail page
  };

  if (loading) return <Loader />; // Show loader while fetching data
  if (error) return <div className="text-red-500 text-center">{error}</div>; // Display error message

  return (
    <div className="bg-[#f0f4ff]">
      <Navbar /> {/* Render Navbar */}
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-center text-[#068FFF] mb-6">Available Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleCourses.length > 0 ? (
            sampleCourses.map((course) => (
              <div key={course.id} className="col-span-1">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-[#0d1b2a]">{course.title}</h3>
                    <p className="text-gray-600 mt-2">{course.description}</p>
                    <p className="text-gray-500 mt-2">Duration: 12 weeks</p>
                    <p className="text-gray-500">Level: All Levels</p>
                    <button
                      onClick={() => handleCardClick(course.id)} // Call handleCardClick with course ID
                      className="mt-4 bg-[#068FFF] text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center text-lg">No courses available</h1>
          )}
        </div>
      </div>
      <Footer /> {/* Render Footer */}
    </div>
  );
};

export default CourseList;
