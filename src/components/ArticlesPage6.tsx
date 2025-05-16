import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const ArticlesPage6 = () => {
  return (
    <div className="min-h-screen bg-[#19376D] flex flex-col items-center px-6 md:px-12 py-20">
      <article className="max-w-4xl w-full mx-auto py-8">
        {/* Article Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-white">
            Big Data and Business Intelligence
          </h1>
          <h2 className="mt-2 text-xl text-[#A5D7E8]">
            Leveraging big data to make smarter business decisions.
          </h2>
        </header>

        {/* Featured Image */}
        <figure className="mt-6 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlnJTIwZGF0YXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Big Data and Business Intelligence"
            className="w-3/4 h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
          <figcaption className="text-gray-400 text-sm text-center mt-2">
            The power of data in shaping modern business strategies.
          </figcaption>
        </figure>

        {/* Author Info */}
        <p className="mt-4 text-gray-300 text-lg text-center">
          By <span className="font-semibold text-white">SHARK TECH</span> | March 5, 2025
        </p>

        {/* Main Content */}
        <section className="mt-6 text-gray-300 text-lg leading-7 text-justify">
          <p>
            In today's digital age, <strong>big data</strong> has become a crucial asset for businesses seeking to stay competitive. By harnessing vast amounts of structured and unstructured data, companies can gain valuable insights to drive strategic decisions.
          </p>
          <p className="mt-4">
            <strong>Business intelligence (BI)</strong> tools transform raw data into meaningful analytics, enabling organizations to identify trends, optimize operations, and enhance customer experiences. From sales forecasting to risk management, data-driven strategies are reshaping industries worldwide.
          </p>
          <p className="mt-4">
            One of the key benefits of big data is its ability to <strong>predict consumer behavior</strong>. With machine learning and AI-powered analytics, companies can anticipate market trends, personalize offerings, and improve customer retention.
          </p>
          <p className="mt-4">
            However, the adoption of big data also presents challenges, including <strong>data security, privacy concerns, and the need for skilled professionals</strong>. Businesses must implement robust data governance policies to ensure compliance while leveraging data-driven opportunities.
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
