

import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleRegisterUser = () => {
    navigate("/register-user");
  };
  const handleRegisterHospital = () => {
    navigate("/register-hospital");
  };

  return (
    <div className="mt-20 md:mt-32 flex flex-col md:flex-row text-[#068FFF] bg-white gap-3 p-6">
      <div className="flex flex-col flex-1 justify-center sm:mt-8 md:mt-0 md:px-12 lg:px-24 xl:px-32">
        <h2 className="text-black font-serif text-2xl md:text-4xl pb-3">
          About
        </h2>
        <p className="text-black font-normal">
        SkillBridge Rwanda connects skilled professionals with meaningful employment opportunities. Our mission is to bridge the gap between job seekers and employers, 
        fostering growth and driving workforce development in Rwanda.
        </p>
        <div className="flex flex-col md:flex-row md:items-center md:mb-8">
          <button
            className="bg-black text-white mt-4 px-6 py-2 rounded-lg md:mx-2"
            onClick={handleRegisterUser}
          >
            Sign Up as a student
          </button>
          <button
            className="bg-black text-white mt-4 px-6 py-2 rounded-lg md:mx-2"
            onClick={handleRegisterHospital}
          >
            Sign Up as an employer
          </button>
        </div>
      </div>

      <div className="w-full md:w-[50%] mt-6 md:mt-0">
        <img
          className="rounded-lg shadow-md object-cover w-full h-auto mx-auto"
          src="https://npf-unlayer.s3.ap-south-1.amazonaws.com/unlayer%2Fimages%2F1707221195018-SkillBridge+Application+Portal+Banner+Option+1+%282%29.png"
          alt="SkillBridge"
        />
      </div>
    </div>
  );
};

export default Header;
