import React from "react";
import { careerGuidanceData } from "../data/careerGuidanceData"; // Import career guidance data
import Navbar from "./Navbar"; // Import Navbar
import Footer from "./Footer"; // Import Footer

const CareerGuidance = () => {
  return (
    <div className="bg-[#f0f4ff] min-h-screen flex flex-col">
      <Navbar /> {/* Render Navbar */}
      <div className="container mx-auto p-6 flex-1">
        <h2 className="text-3xl font-bold text-center text-[#068FFF] mb-4">Career Guidance</h2>
        <p className="text-gray-600 mb-4 text-center">
          Explore resources and tips to enhance your career development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {careerGuidanceData.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <a href={`#${item.id}`} className="text-[#068FFF] hover:underline">Read More</a>
              <div id={item.id} className="hidden">
                <p className="mt-2">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer /> {/* Render Footer */}
    </div>
  );
};

export default CareerGuidance;