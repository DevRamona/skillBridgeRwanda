import React, { useState } from "react";
import { careerGuidanceData } from "../data/careerGuidanceData"; // Import career guidance data
import Navbar from "./Navbar"; // Import Navbar
import Footer from "./Footer"; // Import Footer

const CareerGuidance = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="bg-[#f0f4ff] min-h-screen flex flex-col">
      <Navbar /> {/* Render Navbar */}
      <div className="container mx-auto p-6 flex-1">
        <h2 className="text-3xl font-bold text-center text-[#065dff] mb-4">Career Guidance</h2>
        <p className="text-gray-700 mb-6 text-center">
          Explore resources and tips to enhance your career development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerGuidanceData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => handleOpenModal(item)}
            >
              <h3 className="text-xl font-semibold text-[#065dff] mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Modal for detailed content */}
        {selectedItem && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2">
              <h3 className="text-2xl font-bold text-[#065dff] mb-4">{selectedItem.title}</h3>
              <p className="text-gray-700 mb-6">{selectedItem.content}</p>
              <button
                className="bg-[#065dff] text-white px-4 py-2 rounded-md hover:bg-[#004bb7] transition duration-300"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer /> {/* Render Footer */}
    </div>
  );
};

export default CareerGuidance;
