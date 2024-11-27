import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSkillBridgeContext } from "../context/SkillBridgeContext";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const CoursesPage = () => {
  const { courses, setCourses } = useSkillBridgeContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    duration: "",
    level: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/courses");
        setCourses(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch courses. Please try again later.");
        setLoading(false);
      }
    };

    fetchCourses();
  }, [setCourses]);

  const handleCardClick = (id) => {
    navigate(`/courses/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For the duration, validate to ensure it is a positive number
    if (name === "duration") {
      const numericValue = value.replace(/\D/g, ""); // Allow only numbers
      setCourseData((prevData) => ({ ...prevData, [name]: numericValue }));
    } else {
      setCourseData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!courseData.title || !courseData.description || !courseData.duration || !courseData.level) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/courses", courseData);
      console.log(response)
      setCourses((prevCourses) => [...prevCourses, response.data]);
      setSuccess("Course added successfully!");
      setCourseData({
        title: "",
        description: "",
        duration: "",
        level: "",
      });
    } catch (err) {
      setError("Failed to add course. Please try again.");
    }
  };

  if (loading) return <Loader />;
  if (error && !success) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        {/* Add Course Form Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Add New Course</h2>
          {error && <p className="text-red-500 mb-3">{error}</p>}
          {success && <p className="text-green-500 mb-3">{success}</p>}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-blue-700 text-sm mb-1" htmlFor="title">
                Course Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={courseData.title}
                onChange={handleChange}
                required
                placeholder="Enter course title"
                className="w-full p-3 border border-gray-300 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-blue-700 text-sm mb-1" htmlFor="level">
                Level
              </label>
              <input
                type="text"
                name="level"
                id="level"
                value={courseData.level}
                onChange={handleChange}
                required
                placeholder="e.g., Beginner, Intermediate"
                className="w-full p-3 border border-gray-300 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-blue-700 text-sm mb-1" htmlFor="description">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={courseData.description}
                onChange={handleChange}
                required
                placeholder="Brief course description"
                className="w-full p-3 border border-gray-300 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-blue-700 text-sm mb-1" htmlFor="duration">
                Duration (hours)
              </label>
              <input
                type="text"
                name="duration"
                id="duration"
                value={courseData.duration}
                onChange={handleChange}
                required
                placeholder="Enter duration in hours"
                className="w-full p-3 border border-gray-300 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div className="md:col-span-2 text-right">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Add Course
              </button>
            </div>
          </form>
        </div>

        {/* Courses List Section */}
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Available Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
                  <p className="text-gray-600 mt-2">{course.description}</p>
                  <p className="text-gray-500 mt-2">Duration: {course.duration} hours</p>
                  <p className="text-gray-500">Level: {course.level}</p>
                  <button
                    onClick={() => handleCardClick(course.id)}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center text-lg">No courses available</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
