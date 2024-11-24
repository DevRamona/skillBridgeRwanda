import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/authContext"; // Import the custom hook

const Navbar = () => {
  const { user, logout } = useAuthContext(); // Access user and logout function

  return (
    <nav className="bg-[#caf0f8] p-6"> {/* Changed background color */}
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-[#0d1b2a] text-lg font-bold">
          SkillBridge
        </Link>
        <div className="flex items-center">
          <Link to="/courses" className="text-[#0d1b2a] mx-4">Courses</Link> {/* Link to Courses page */}
          <Link to="/job-matching" className="text-[#0d1b2a] mx-4">Job Matching</Link>
          <Link to="/career-guidance" className="text-[#0d1b2a] mx-4">Career Guidance</Link>
          <Link to="/progress-tracking" className="text-[#0d1b2a] mx-4">Progress Tracking</Link>
          {user ? (
            <button onClick={logout} className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Logout
            </button>
          ) : (
            <>
              <Link to="/register" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                Register
              </Link>
              <Link to="/login" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
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