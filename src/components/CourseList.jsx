import React, { useEffect, useState } from "react";
import Card from "./Card"; // Ensure you have a Card component
import { useNavigate } from "react-router-dom";
import { useSkillBridgeContext } from "../context/SkillBridgeContext"; // Import the context
import Loader from "./Loader"; // Import a Loader component for loading state

const CourseList = () => {
  const { setCourses } = useSkillBridgeContext(); // Use the context
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Sample course data
  const sampleCourses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description: "Master HTML, CSS, and JavaScript to build responsive websites.",
      image: "https://via.placeholder.com/300x200?text=Web+Development",
    },
    {
      id: 2,
      title: "Data Science and Machine Learning",
      description: "Learn data analysis, visualization, and machine learning techniques.",
      image: "https://via.placeholder.com/300x200?text=Data+Science",
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      description: "Understand SEO, social media, and content marketing strategies.",
      image: "https://via.placeholder.com/300x200?text=Digital+Marketing",
    },
    {
      id: 4,
      title: "Graphic Design Essentials",
      description: "Learn the fundamentals of graphic design using Adobe tools.",
      image: "https://via.placeholder.com/300x200?text=Graphic+Design",
    },
  ];

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
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-[#068FFF] mb-6">Available Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleCourses.length > 0 ? (
          sampleCourses.map((course) => (
            <div key={course.id} className="col-span-1">
              <Card data={course} type="course" onClick={() => handleCardClick(course.id)} />
            </div>
          ))
        ) : (
          <h1 className="text-center text-lg">No courses available</h1>
        )}
      </div>
    </div>
  );
};

export default CourseList;