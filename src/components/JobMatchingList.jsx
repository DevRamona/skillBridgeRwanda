import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { sampleJobMatches } from "../data/sampleJobMatches";

const JobMatching = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [jobMatches, setJobMatches] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    const trimmedJobTitle = jobTitle.trim().toLowerCase();
    const trimmedLocation = location.trim().toLowerCase();
    const trimmedSkills = skills.trim().toLowerCase();

    if (!trimmedJobTitle && !trimmedLocation && !trimmedSkills) {
      alert("Please enter at least one search criterion.");
      return;
    }

    const matches = sampleJobMatches.filter((job) => {
      const titleMatch = job.title.toLowerCase().includes(trimmedJobTitle);
      const locationMatch = job.location.toLowerCase().includes(trimmedLocation);
      const skillsMatch = job.requirements.some((req) =>
        req.toLowerCase().includes(trimmedSkills)
      );
      return titleMatch || locationMatch || skillsMatch; // Match any criteria
    });

    setJobMatches(matches);
  };

  return (
    <div className="bg-[#f0f4ff] min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto p-6 flex-1">
        <h2 className="text-3xl font-bold text-center text-[#068FFF] mb-4">Job Matching</h2>
        <p className="text-gray-600 mb-4 text-center">
          Find the best job opportunities that match your skills and preferences.
        </p>

        {/* Form Section */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <input
              type="text"
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="p-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#068FFF]"
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#068FFF]"
            />
            <input
              type="text"
              placeholder="Skills (comma separated)"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="p-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#068FFF]"
            />
            <button
              type="submit"
              className="bg-[#068FFF] text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Search
            </button>
          </div>
        </form>

        {/* Image Section */}
        <div className="w-full flex justify-center mb-6">
          <img
            src="https://az505806.vo.msecnd.net/webcontent/sf/v1/jobseeker/features/imatch/personalized-job-match.png"
            alt="Job Matching"
            className="rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2"
          />
        </div>

        {/* Job Matches Section */}
        {jobMatches.length > 0 ? (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Job Matches</h3>
            <ul className="space-y-4">
              {jobMatches.map((job) => (
                <li key={job.id} className="bg-[#e0f7fa] p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Link to={`/job-details/${job.id}`} className="text-xl font-bold text-[#00796b] hover:underline">
                    {job.title}
                  </Link>
                  <p className="text-gray-600">Company: {job.company}</p>
                  <p className="text-gray-600">Location: {job.location}</p>
                  <p className="text-gray-600">Salary: {job.salary}</p>
                  <p className="text-gray-600">Description: {job.description}</p>
                  <p className="text-gray-600">
                    Requirements: {job.requirements.join(", ")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-600 mt-4 text-center">
            No job matches found. Please adjust your search criteria.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default JobMatching;
