import React from "react";
import { useParams } from "react-router-dom";
import { sampleJobMatches } from "../data/sampleJobMatches"; // Import the sample data

const JobMatchingDetail = () => {
  const { id } = useParams();
  const job = sampleJobMatches.find((job) => job.id === id);

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="mt-2"><strong>Company:</strong> {job.company}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <h2 className="mt-4 text-xl font-semibold">Requirements</h2>
      <ul className="list-disc pl-5">
        {job.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobMatchingDetail;