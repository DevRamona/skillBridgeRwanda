import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const JobMatchingList = () => {
  const [jobMatching, setJobMatching] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobMatching = async () => {
      try {
        const response = await axios.get("/api/job-matching"); // Replace with your API endpoint
        setJobMatching(response.data);
      } catch (err) {
        setError("Failed to fetch job matching data");
      } finally {
        setLoading(false);
      }
    };

    fetchJobMatching();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/job-matching/${id}`); // Navigate to the job matching detail page
  };

  if (loading) return <div>Loading job matches...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center">
      {jobMatching.length > 0 ? (
        jobMatching.map((job) => (
          <div key={job.id} className="col-span-1 p-0 sm:p-4 md:p-2">
            <Card data={job} onClick={handleCardClick} />
          </div>
        ))
      ) : (
        <h1 className="text-center">No job matches available</h1>
      )}
    </div>
  );
};

export default JobMatchingList;