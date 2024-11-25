import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // Handlers for navigation
  const handleRegisterUser = () => {
    navigate("/register-user");
  };
  const handleRegisterHospital = () => {
    navigate("/register-hospital");
  };

  return (
    <div className="text-[#068FFF] bg-[#f0f4ff] m-0 p-0">
      {/* About Section and Image in Parallel */}
      <div className="flex flex-col md:flex-row gap-8 p-24 items-center">
        {/* About Section */}
        <div className="flex flex-col flex-1 justify-center">
          <h2 className="text-black font-serif text-2xl md:text-3xl pb-4">
            About SkillBridge
          </h2>
          <p className="text-black font-normal mb-4">
            SkillBridge Rwanda connects skilled professionals with meaningful
            employment opportunities. Our mission is to bridge the gap between job
            seekers and employers, fostering growth and driving workforce
            development in Rwanda.
          </p>
          <p className="text-black font-normal mb-4">
            We provide a platform for students and employers to connect, ensuring
            that the right talent meets the right opportunities. Join us in our
            mission to empower the workforce of tomorrow.
          </p>
          <div className="flex flex-col md:flex-row md:items-center">
            <button
              className="bg-blue-500 text-white mt-4 px-6 py-2 rounded-lg md:mx-2 hover:bg-gray-800 transition duration-300"
              onClick={handleRegisterUser}
            >
              Sign Up as a Student
            </button>
            <button
              className="bg-blue-500 text-white mt-4 px-6 py-2 rounded-lg md:mx-2 hover:bg-gray-800 transition duration-300"
              onClick={handleRegisterHospital}
            >
              Sign Up as an Employer
            </button>
          </div>
        </div>

        {/* Main Image Section */}
        <div className="w-full md:w-[55%] flex items-center justify-center">
  <img
    className="rounded-lg shadow-md object-contain w-full h-max max-h-[800px]"
    src="https://npf-unlayer.s3.ap-south-1.amazonaws.com/unlayer%2Fimages%2F1707221195018-SkillBridge+Application+Portal+Banner+Option+1+%282%29.png"
    alt="SkillBridge"
  />
</div>
      </div>

      {/* Centered Objectives Section */}
      <div className="flex justify-center items-center p-8">
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg rounded-lg w-full md:w-3/4 lg:w-2/3 text-center p-8 text-white">
          <h3 className="text-3xl font-bold mb-6">Objectives</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-700 font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition duration-300">
              Empower youth and job seekers through skill development
            </button>
            <button className="bg-white text-blue-700 font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition duration-300">
              Provide accessible and relevant skills training tailored to job market needs
            </button>
            <button className="bg-white text-blue-700 font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition duration-300">
              Enhance job matching opportunities
            </button>
            <button className="bg-white text-blue-700 font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition duration-300">
              Offer personalized career guidance and counseling
            </button>
            <button className="bg-white text-blue-700 font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition duration-300">
              Implement tools to track individual progress and career development
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
