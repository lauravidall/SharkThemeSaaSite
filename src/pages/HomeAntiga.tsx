// pages/Home.tsx
import React from "react";
import { Hero2 } from "../components/HeroRobo";
import { Features } from "../components/Features";
import { Products } from "../components/Products";

const HomeAntiga = () => {
  return (
    <div className="w-full min-h-screen bg-[#0B2447]">
      <Hero2 />
      <Features />
      <Products />
    </div>
  );
};

export default HomeAntiga;
