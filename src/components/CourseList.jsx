import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/api/courses"); // Replace with your API endpoint
        setCourses(response.data);
      } catch (err) {
        setError("Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/courses/${id}`); // Navigate to the course detail page
  };

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center">
      {courses.length > 0 ? (
        courses.map((course) => (
          <div key={course.id} className="col-span-1 p-0 sm:p-4 md:p-2">
            <Card data={course} onClick={handleCardClick} />
          </div>
        ))
      ) : (
        <h1 className="text-center">No courses available</h1>
      )}
    </div>
  );
};

export default CourseList;