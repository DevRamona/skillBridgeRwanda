// src/components/Login.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import Navbar from "./Navbar"; // Import Navbar
import Footer from "./Footer"; // Import Footer

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      navigate("/"); // Redirect to home if already logged in
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:3000/auth/login", formData);
      console.log(response);
      
      setSuccess("Login successful!");
      localStorage.setItem("token", response.data.access_token);// Store the token in local storage
      localStorage.setItem("user", response.data.user);// Store the user in local storage

      navigate("/"); // Redirect to home page after successful login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="bg-[#f0f4ff]">
      <Navbar /> {/* Render Navbar */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-[#068FFF] mb-6">Login</h2>
          {isLoggedIn && <p className="text-green-500 text-center">You are already logged in!</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border text-black border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-2 border text-black border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#068FFF] text-white py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <span
              className="text-[#068FFF] cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register here
            </span>
          </p>
        </div>
      </div>
      <Footer /> {/* Render Footer */}
    </div>
  );
};

export default Login;