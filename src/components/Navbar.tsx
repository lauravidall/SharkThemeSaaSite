import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import img from "./barbatanaazul.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-[#0B2447]/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={img} alt="Shark Tech Logo" className="w-10 h-8 mr-2" />
            <span className="text-[#A5D7E8] text-xl font-bold">SHARK TECH</span>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
              { name: "News", path: "/news" }
            ].map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`text-lg font-medium px-3 py-2 transition-all duration-200 ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-[#A5D7E8] hover:text-white hover:text-xl"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#A5D7E8] hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#0B2447] shadow-lg">
          <a href="/" className="block text-[#A5D7E8] hover:text-white px-4 py-3">Home</a>
          <a href="/services" className="block text-[#A5D7E8] hover:text-white px-4 py-3">Services</a>
          <a href="/contact" className="block text-[#A5D7E8] hover:text-white px-4 py-3">Contact</a>
          <a href="/news" className="block text-[#A5D7E8] hover:text-white px-4 py-3">News</a>
        </div>
      )}
    </nav>
  );
};