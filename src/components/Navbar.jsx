// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For hamburger menu
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-blue-700 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* SkillBridge Logo */}
        <Link
          to="/"
          className="text-white text-2xl font-bold hover:scale-105 transition-transform duration-300"
        >
          SkillBridge
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center text-white space-y-4 md:space-y-0 md:space-x-6`}
        >
          {/* Navigation Links */}
          {user ? (
            <>
              {["courses", "job-matching", "career-guidance", "progress-tracking"].map(
                (path, index) => (
                  <Link
                    key={index}
                    to={`/${path}`}
                    className="block md:inline-block px-4 py-2 rounded hover:bg-blue-500 hover:shadow-md transition duration-300"
                  >
                    {path
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </Link>
                )
              )}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 hover:shadow-md transition duration-300"
                >
                  Welcome here
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-md">
                    <button
                      onClick={() => navigate("/profile")}
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
            </>
          ) : (
            <>
              {/* Register & Login Buttons */}
              <Link
                to="/register"
                className="block md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 hover:shadow-md transition duration-300"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="block md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 hover:shadow-md transition duration-300"
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