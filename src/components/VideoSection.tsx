import React from "react";
import Video2 from "./video2.gif";
import Video3 from "./horserace.gif";
import Video4 from "./gifdash2.gif";

export const Videos = () => {
  return (
    <div className="relative bg-[#19376D] py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B2447]/50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Linha 1: Texto - Imagem */}
          <div className="order-1">
            <h3 className="text-xl font-semibold text-white">Digital Planning</h3>
            <p className="text-gray-300 mt-2">
            Strategically align your digital presence with business goals, ensuring consistency, efficiency, and long-term success.
            </p>
          </div>
          <div className="flex justify-center order-2 relative">
            <div className="absolute bg-blue-500 w-56 h-60 bottom-[-50px] right-[-50px] z-0 rounded-2xl"></div>
            <img src={Video2} alt="GIF animado" width="500" className="relative z-10 rounded-xl" />
          </div>

          {/* Linha 2: Imagem - Texto no desktop, Texto - Imagem no mobile */}
          <div className="flex justify-center order-4 lg:order-3 relative">
            <div className="absolute bg-[#80D0B4] w-60 h-60 bottom-[-50px] left-[-50px] z-0 rounded-2xl"></div>
            <img src={Video4} alt="GIF animado" width="500" className="relative z-10 rounded-xl" />
          </div>
          <div className="order-3 lg:order-4">
            <h3 className="text-xl font-semibold text-white">Data Analysis</h3>
            <p className="text-gray-300 mt-2">
            Transform raw data into actionable insights, empowering smarter decisions through advanced analytics, visualization, and audits.
            </p>
          </div>

          {/* Linha 3: Texto - Imagem */}
          <div className="order-5">
            <h3 className="text-xl font-semibold text-white">Digital Campaign Management</h3>
            <p className="text-gray-300 mt-2">
            Plan, execute, and optimize high-impact campaigns to maximize reach, engagement, and conversion across digital channels.
            </p>
          </div>
          <div className="flex justify-center order-6 relative">
            <div className="absolute bg-[#9654e5] w-60 h-60 bottom-[-50px] right-[-50px] z-0 rounded-2xl"></div>
            <img src={Video3} alt="GIF animado" width="600" className="relative z-10 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};