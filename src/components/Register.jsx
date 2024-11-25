// src/components/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import Navbar from "./Navbar"; // Import Navbar
import Footer from "./Footer"; // Import Footer

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student", // Default role in lowercase
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate that password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/auth/register", formData);
      console.log(response);
      
      setSuccess("Registration successful! You can now log in.");
      setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "", role: "student" }); // Reset form

      // Redirect to login page after a short delay
      setTimeout(() => {
        navigate("/login"); // Redirect to login page
      }, 2000); // Redirect after 2 seconds
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="bg-[#f0f4ff] flex flex-col min-h-screen">
      <Navbar /> {/* Render Navbar */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
          <h2 className="text-2xl font-bold text-center text-[#068FFF] mb-6">Register</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-center mb-4">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#068FFF] focus:border-[#068FFF]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#068FFF] focus:border-[#068FFF]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#068FFF] focus:border-[#068FFF]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#068FFF] focus:border-[#068FFF]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#068FFF] focus:border-[#068FFF]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="role">Role</label>
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#068FFF] focus:border-[#068FFF]"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#068FFF] text-white py-3 rounded hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-700">
            Already have an account?{" "}
            <span
              className="text-[#068FFF] cursor-pointer underline"
              onClick={() => navigate("/login")}
            >
              Login here
            </span>
          </p>
        </div>
      </div>
      <Footer /> {/* Render Footer */}
    </div>
  );
};

export default Register;