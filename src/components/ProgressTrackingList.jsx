import React, { useState } from "react";
import { progressTrackingData } from "../data/progressTrackingData"; // Import progress tracking data
import Navbar from "./Navbar"; // Import Navbar
import Footer from "./Footer"; // Import Footer

const ProgressTracking = () => {
  const [progressItems, setProgressItems] = useState(progressTrackingData);
  const [newItem, setNewItem] = useState({ title: "", status: "", date: "", notes: "" });

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.title && newItem.status && newItem.date) {
      setProgressItems([...progressItems, { ...newItem, id: (progressItems.length + 1).toString() }]);
      setNewItem({ title: "", status: "", date: "", notes: "" }); // Reset form
    }
  };

  return (
    <div className="bg-[#f0f4ff] min-h-screen flex flex-col">
      <Navbar /> {/* Render Navbar */}
      <div className="container mx-auto p-6 flex-1">
        <h2 className="text-3xl font-bold text-center text-[#065dff] mb-4">Progress Tracking</h2>
        <p className="text-gray-700 mb-6 text-center">
          Keep track of your career development activities and progress.
        </p>

        {/* Add Progress Form */}
        <form onSubmit={handleAddItem} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Title"
              value={newItem.title}
              onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#065dff]"
              required
            />
            <input
              type="text"
              placeholder="Status"
              value={newItem.status}
              onChange={(e) => setNewItem({ ...newItem, status: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#065dff]"
              required
            />
            <input
              type="date"
              value={newItem.date}
              onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#065dff]"
              required
            />
            <input
              type="text"
              placeholder="Notes"
              value={newItem.notes}
              onChange={(e) => setNewItem({ ...newItem, notes: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#065dff]"
            />
            <button
              type="submit"
              className="bg-[#065dff] text-white px-4 py-2 rounded-lg hover:bg-[#004bb7] transition duration-300"
            >
              Add Progress
            </button>
          </div>
        </form>

        {/* Display Progress Items */}
        <div className="space-y-4">
          {progressItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-[#065dff] mb-2">{item.title}</h3>
              <p className="text-gray-700">
                <span className="font-bold">Status:</span> {item.status}
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Date:</span> {item.date}
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Notes:</span> {item.notes || "No additional notes."}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer /> {/* Render Footer */}
    </div>
  );
};

export default ProgressTracking;
