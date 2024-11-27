import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // Handlers for navigation
  const handleRegisterUser = () => {
    navigate("/register");
  };
  

  return (
    <div className="bg-[#f0f4ff] m-0 p-0 overflow-hidden">
      {/* About Section and Image in Parallel */}
      <div className="flex flex-col md:flex-row gap-12 px-8 md:px-16 py-16 items-center transition-all duration-500">
        {/* About Section */}
        <div
          className="flex flex-col flex-1 justify-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-black font-serif text-4xl md:text-5xl lg:text-6xl font-bold pb-4 text-center md:text-left transition-colors duration-300 hover:text-blue-600">
            About SkillBridge
          </h2>
          <p className="text-black font-light mb-4 text-base md:text-lg lg:text-xl text-justify md:text-left leading-relaxed">
            SkillBridge Rwanda connects skilled professionals with meaningful
            employment opportunities. Our mission is to bridge the gap between job
            seekers and employers, fostering growth and driving workforce
            development in Rwanda.
          </p>
          <p className="text-black font-light mb-6 text-base md:text-lg lg:text-xl text-justify md:text-left leading-relaxed">
            We provide a platform for students and employers to connect, ensuring
            that the right talent meets the right opportunities. Join us in our
            mission to empower the workforce of tomorrow.
          </p>
          <div className="flex flex-col md:flex-row md:items-center">
            <button
              className="bg-blue-500 text-white mt-4 px-8 py-3 rounded-lg md:mx-2 hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-md"
              onClick={handleRegisterUser}
            >
              Sign Up as a Student
            </button>
            <button
              className="bg-blue-500 text-white mt-4 px-8 py-3 rounded-lg md:mx-2 hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-md"
              onClick={handleRegisterUser}
            >
              Sign Up as an Employer
            </button>
          </div>
        </div>

        {/* Main Image Section */}
        <div
          className="w-full md:w-[50%] flex items-center justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            className="rounded-lg shadow-lg object-contain h-auto max-h-[500px] transition-transform duration-500 hover:scale-105"
            src="https://npf-unlayer.s3.ap-south-1.amazonaws.com/unlayer%2Fimages%2F1707221195018-SkillBridge+Application+Portal+Banner+Option+1+%282%29.png"
            alt="SkillBridge"
          />
        </div>
      </div>

      {/* Centered Objectives Section with Background Image */}
      <div className="relative flex justify-center items-center p-4 md:p-8">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://example.com/your-background-image.jpg')" }}
        ></div>
        <div
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg rounded-lg w-full md:w-3/4 lg:w-2/3 text-center p-8 text-white relative z-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="text-3xl font-bold mb-6">Our Objectives</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Empower youth and job seekers through skill development",
              "Provide accessible and relevant skills training tailored to job market needs",
              "Enhance job matching opportunities",
              "Offer personalized career guidance and counseling",
              "Implement tools to track individual progress and career development",
              "Create a community of learners and mentors to support career growth",
            ].map((objective, index) => (
              <button
                key={index}
                className="bg-white text-blue-700 font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition duration-300 transform hover:scale-105"
              >
                {objective}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
