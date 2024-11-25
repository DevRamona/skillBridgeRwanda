import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar
import Footer from "./Footer"; // Import Footer
import { sampleJobMatches } from "../data/sampleJobMatches";

const JobDetails = () => {
  const { id } = useParams(); // Get the job ID from the URL
  const job = sampleJobMatches.find((job) => job.id === id); // Find the job based on the ID

  if (!job) {
    return <div className="text-center text-red-500">Job not found.</div>; // Handle case where job is not found
  }

  return (
    <div className="bg-[#f0f4ff]">
      <Navbar /> {/* Render Navbar */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-[#068FFF] mb-4">{job.title}</h2>
        <p className="text-gray-600 text-center mb-2">Company: <span className="font-semibold">{job.company}</span></p>
        <p className="text-gray-600 text-center mb-4">Location: <span className="font-semibold">{job.location}</span></p>
        <p className="text-gray-600 text-center mb-4">Salary: <span className="font-semibold">{job.salary}</span></p>

        <h3 className="text-2xl font-semibold mt-6">Job Description</h3>
        <p className="text-[#001d3d] mb-4">{job.description}</p>

        <h3 className="text-[#001d3d] font-semibold mt-6">Requirements</h3>
        <ul className="list-disc list-inside mb-4">
          {job.requirements.map((req, index) => (
            <li key={index} className="text-gray-600">{req}</li>
          ))}
        </ul>

        <div className="text-center">
          <button className="bg-[#068FFF] text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
            Apply Now
          </button>
        </div>
      </div>
      <Footer /> {/* Render Footer */}
    </div>
  );
};

export default JobDetails;