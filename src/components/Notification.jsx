import React from "react";

const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-blue-500 text-white p-6 rounded shadow-lg text-center">
        <p className="mb-4">{message}</p>
        <button 
          onClick={onClose} 
          className="bg-white text-blue-500 px-4 py-2 rounded font-bold hover:bg-gray-200 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Notification;
