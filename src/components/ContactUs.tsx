import React from "react";
import { Mail } from "lucide-react";
import img from "./chat.png";

export const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#19376D] flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Image and Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl md:text-4xl text-[#A5D7E8] font-bold mb-4">Contact Us</h1>
            <div className="flex items-center gap-2 mb-6">
              <Mail className="text-blue-500" />
              <a
                href="mailto:tecnologiasharkfm@gmail.com"
                className="text-[#A5D7E8] hover:text-blue-500 transition-colors"
              >
                tecnologiasharkfm@gmail.com
              </a>
            </div>
            <div className="relative w-full flex justify-center md:justify-start">
              <div className="absolute w-56 h-56 md:w-72 md:h-72 bg-blue-500 rounded-full opacity-30 blur-3xl"></div>
              <div className="absolute w-40 h-40 md:w-52 md:h-52 bg-blue-300 rounded-full opacity-30 blur-3xl"></div>
              <img
                src={img}
                alt="Contact Illustration"
                className="relative z-10 w-3/4 max-w-xs md:max-w-md drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right Column - Contact Options */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2] to-[#19376D] opacity-10 blur-xl"></div>
            <div className="bg-[#1B2A4E] p-10 md:p-12 rounded-2xl shadow-lg relative z-10 min-h-[300px] flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-[#A5D7E8] mb-6 text-center">
                How would you like to contact us?
              </h2>
              <div className="flex flex-col gap-6">
                <a
                  href="mailto:tecnologiasharkfm@gmail.com"
                  className="w-full px-6 py-3 text-white bg-[#4A90E2] rounded-lg shadow-lg hover:bg-[#357ABD] transition-transform transform hover:scale-105 text-center"
                >
                  Email Us
                </a>
                <a
                  href="https://shrktch.youcanbook.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 text-white bg-[#4A90E2] rounded-lg shadow-lg hover:bg-[#357ABD] transition-transform transform hover:scale-105 text-center"
                >
                  Schedule a Meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
