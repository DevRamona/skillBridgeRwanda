import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CareerGuidanceList = () => {
  const [careerGuidance, setCareerGuidance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCareerGuidance = async () => {
      try {
        const response = await axios.get("/api/career-guidance"); // Replace with your API endpoint
        setCareerGuidance(response.data);
      } catch (err) {
        setError("Failed to fetch career guidance data");
      } finally {
        setLoading(false);
      }
    };

    fetchCareerGuidance();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/career-guidance/${id}`); // Navigate to the career guidance detail page
  };

  if (loading) return <div>Loading career guidance...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center">
      {careerGuidance.length > 0 ? (
        careerGuidance.map((guidance) => (
          <div key={guidance.id} className="col-span-1 p-0 sm:p-4 md:p-2">
            <Card data={guidance} onClick={handleCardClick} />
          </div>
        ))
      ) : (
        <h1 className="text-center">No career guidance available</h1>
      )}
    </div>
  );
};

export default CareerGuidanceList;