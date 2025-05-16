// pages/Home.tsx
import React from "react";
import { Hero2 } from "../components/HeroRobo";
import { Videos } from "../components/VideoSection";
import { Products } from "../components/Products";
import { LatestNewsSection } from "../components/LatestNewsSection";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#0B2447]">
      <Hero2 />
      <Videos />
      <Products />
      < LatestNewsSection />
    </div>
  );
};

export default Home;
