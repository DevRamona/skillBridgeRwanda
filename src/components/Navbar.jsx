import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { useAuthContext } from "../context/authContext";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-[#003566] p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-xl font-bold hover:text-[#FFD60A] transition duration-300"
        >
          SkillBridge
        </Link>
        <div className="flex items-center text-white mx-4">
          <Link
            to="/courses"
            className="mx-4 hover:text-[#FFD60A] transition duration-300"
          >
            Courses
          </Link>
          <Link
            to="/job-matching"
            className="mx-4 hover:text-[#FFD60A] transition duration-300"
          >
            Job Matching
          </Link>
          <Link
            to="/career-guidance"
            className="mx-4 hover:text-[#FFD60A] transition duration-300"
          >
            Career Guidance
          </Link>
          <Link
            to="/progress-tracking"
            className="mx-4 hover:text-[#FFD60A] transition duration-300"
          >
            Progress Tracking
          </Link>
          {user ? (
            <div className="relative ml-4">
              <button
                onClick={toggleDropdown}
                className="bg-blue-600 text-[#003566] px-4 py-2 rounded hover:bg-[#FFC300] transition duration-300"
              >
                Welcome here
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-md">
                  <button
                    onClick={() => navigate("/profile")} // Navigate to profile page
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </button>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/register"
                className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;