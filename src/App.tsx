// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Article1 from "./pages/Article1";
import Article2 from "./pages/Article2";
import Article3 from "./pages/Article3";
import Article4 from "./pages/Article4";
import Article5 from "./pages/Article5";
import Article6 from "./pages/Article6";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-[#0B2447]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<Blog />} />
          <Route path="/news/article1" element={<Article1 />} />
          <Route path="/news/article2" element={<Article2 />} />
          <Route path="/news/article3" element={<Article3 />} />
          <Route path="/news/article4" element={<Article4 />} />
          <Route path="/news/article5" element={<Article5 />} />
          <Route path="/news/article6" element={<Article6 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}