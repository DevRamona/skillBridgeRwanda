
import React from "react";
import { useAuthContext } from "../context/authContext"; // Import the auth context
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Profile = () => {
  const { user, logout } = useAuthContext(); // Get user and logout function from context
  const navigate = useNavigate(); // Initialize navigate

  const handleLogout = () => {
    logout(); // Call the logout function
    alert("You have been logged out."); // Show logout message
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="bg-[#f0f4ff] flex flex-col min-h-screen">
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-[#068FFF] mb-6">User Profile</h2>
          <div className="mb-4">
            <p className="text-gray-700"><strong>First Name:</strong> {user.firstName}</p>
            <p className="text-gray-700"><strong>Last Name:</strong> {user.lastName}</p>
            <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-700"><strong>Role:</strong> {user.role}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;