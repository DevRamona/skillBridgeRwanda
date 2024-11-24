import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data, type }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navigate to the detail page based on the type of data
    switch (type) {
      case "course":
        navigate(`/courses/${data.id}`); // Adjust the path as necessary
        break;
      case "job":
        navigate(`/job-matching/${data.id}`); // Adjust the path as necessary
        break;
      case "guidance":
        navigate(`/career-guidance/${data.id}`); // Adjust the path as necessary
        break;
      case "progress":
        navigate(`/progress-tracking/${data.id}`); // Adjust the path as necessary
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-3 cursor-pointer" onClick={handleCardClick}>
      <div className="relative">
        <img
          src={data.image || data.img} // Use data.image or data.img based on your data structure
          alt={data.name || data.title} // Use data.name or data.title based on your data structure
          className="object-cover w-full h-48"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h2 className="text-xl font-semibold text-white">
            {data.name || data.title} {/* Use data.name or data.title based on your data structure */}
          </h2>
        </div>
      </div>
      <div className="px-4 py-2 text-gray-700">
        <p>
          <span className="font-bold">Description</span>: {data.description || data.details} {/* Use data.description or data.details based on your data structure */}
        </p>
        {data.location && (
          <p>
            <span className="font-bold">Location</span>: {data.location}
          </p>
        )}
        {data.phone && (
          <p>
            <span className="font-bold">Phone Number</span>: {data.phone}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;