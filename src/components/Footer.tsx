import { Twitter, Mail } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { SiBluesky, SiSubstack } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid Responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left mb-12">
          {/* Logo e descrição */}
          <div>
            <span className="text-2xl font-bold text-[#A5D7E8]">SHARK SAAS</span>
            <p className="mt-4 text-gray-400">
              We produce digital solutions that are worth sharing.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">PRODUCT</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <SiBluesky className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaYoutube className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <SiSubstack className="w-6 h-6" />
            </a>
            <a href="mailto:email@mail.com" className="text-gray-400 hover:text-white">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Parte inferior do footer */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span>Powered by</span>
            <a href="/" className="hover:text-white">
              SHARK SAAS
            </a>
          </div>

          <div className="flex space-x-6">
            <a href="/#" className="hover:text-white">
              Terms of Use
            </a>
            <a href="/#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
