import React from "react";
import { useParams } from "react-router-dom";
import { sampleCourses } from "../data/sampleCourses"; // Import the sample data

const CourseDetail = () => {
  const { id } = useParams();
  const course = sampleCourses.find((course) => course.id === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{course.name}</h1>
      <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
      <p className="mt-2"><strong>Description:</strong> {course.description}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <h2 className="mt-4 text-xl font-semibold">Syllabus</h2>
      <ul className="list-disc pl-5">
        {course.syllabus.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;