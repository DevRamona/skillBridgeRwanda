import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProgressTrackingList = () => {
  const [progressTracking, setProgressTracking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProgressTracking = async () => {
      try {
        const response = await axios.get("/api/progress-tracking"); // Replace with your API endpoint
        setProgressTracking(response.data);
      } catch (err) {
        setError("Failed to fetch progress tracking data");
      } finally {
        setLoading(false);
      }
    };

    fetchProgressTracking();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/progress-tracking/${id}`); // Navigate to the progress tracking detail page
  };

  if (loading) return <div>Loading progress tracking...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center">
      {progressTracking.length > 0 ? (
        progressTracking.map((progress) => (
          <div key={progress.id} className="col-span-1 p-0 sm:p-4 md:p-2">
            <Card data={progress} onClick={handleCardClick} />
          </div>
        ))
      ) : (
        <h1 className="text-center">No progress tracking available</h1>
      )}
    </div>
  );
};

export default ProgressTrackingList;