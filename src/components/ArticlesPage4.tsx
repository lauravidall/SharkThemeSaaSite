import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const ArticlesPage4 = () => {
  return (
    <div className="min-h-screen bg-[#19376D] flex flex-col items-center px-6 md:px-12 py-20">
      <article className="max-w-4xl w-full mx-auto py-8">
        {/* Article Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-white">
            Smart Dashboards: The Future of Data
          </h1>
          <h2 className="mt-2 text-xl text-[#A5D7E8]">
            See how SHARK TECH is innovating with customized dashboards.
          </h2>
        </header>

        {/* Featured Image */}
        <figure className="mt-6 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Smart Dashboards: The Future of Data"
            className="w-3/4 h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
          <figcaption className="text-gray-400 text-sm text-center mt-2">
            How intelligent dashboards are transforming data analysis.
          </figcaption>
        </figure>

        {/* Author Info */}
        <p className="mt-4 text-gray-300 text-lg text-center">
          By <span className="font-semibold text-white">SHARK TECH</span> | March 28, 2025
        </p>

        {/* Main Content */}
        <section className="mt-6 text-gray-300 text-lg leading-7 text-justify">
          <p>
            In a data-driven world, <strong>smart dashboards</strong> are revolutionizing how businesses visualize and interpret information. These interactive tools provide real-time insights, allowing companies to make informed decisions faster and more effectively.
          </p>
          <p className="mt-4">
            SHARK TECH is at the forefront of this transformation, developing <strong>customized dashboards</strong> that integrate multiple data sources seamlessly. With advanced analytics and user-friendly interfaces, businesses can track performance metrics, identify trends, and optimize operations.
          </p>
          <p className="mt-4">
            One of the key benefits of smart dashboards is their ability to <strong>automate data processing</strong>. Instead of manually compiling reports, organizations can access dynamic visualizations that update in real-time. This enhances efficiency, reduces errors, and ensures data accuracy.
          </p>
          <p className="mt-4">
            As industries continue to embrace digital transformation, the demand for intelligent data visualization tools will only grow. Companies that leverage smart dashboards gain a competitive edge by staying agile and data-driven in an ever-evolving market.
          </p>
        </section>

        {/* Back Button */}
        <footer className="mt-10 text-center">
          <Link
            to="/news"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center text-[#A5D7E8] font-semibold text-lg hover:underline"
          >
            Back to Latest News <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </footer>
      </article>
    </div>
  );
};
