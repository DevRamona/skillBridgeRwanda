import React from "react";
import {
  BsInstagram,
  BsFacebook,
  BsTelegram,
  BsLinkedin,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#003566] text-white py-6 mt-0">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid Layout for Contact, Follow Us, and Branding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Contact Us Section */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <ul className="text-lg space-y-2">
              <li>Email: <a href="mailto:SkillsBridgeRwanda@gmail.com" className="text-[#dee2ff] hover:text-blue-600 transition duration-300">SkillsBridgeRwanda@gmail.com</a></li>
              <li>Phone: <span className="text-[#dee2ff]">11234</span></li>
              <li>Address: Kigali, Rwanda</li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-6 text-3xl">
              <a href="https://www.facebook.com" className=" text-[#dee2ff] hover:text-blue-600 transition duration-300">
                <BsFacebook />
              </a>
              <a href="https://www.instagram.com" className="text-[#dee2ff] hover:text-blue-600 transition duration-300">
                <BsInstagram />
              </a>
              <a href="https://t.me" className="text-[#dee2ff] hover:text-blue-600 transition duration-300">
                <BsTelegram />
              </a>
              <a href="https://www.linkedin.com" className="text-[#dee2ff] hover:text-blue-600 transition duration-300">
                <BsLinkedin />
              </a>
            </div>
          </div>

          {/* Branding Section */}
          <div className="flex justify-center items-center mb-6">
            <h1 className="text-4xl font-bold text-[#dee2ff]">
              SkillsBridge Rwanda
            </h1>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} SkillsBridge Rwanda. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
