import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const ArticlesPage1 = () => {
  return (
    <div className="min-h-screen bg-[#19376D] flex flex-col items-center px-6 md:px-12 py-20">
      <article className="max-w-4xl w-full mx-auto py-8">
        {/* Article Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-white">
            The Revolution of OSINT for Businesses
          </h1>
          <h2 className="mt-2 text-xl text-[#A5D7E8]">
            How open-source intelligence is transforming the corporate world.
          </h2>
        </header>

        {/* Featured Image */}
        <figure className="mt-6 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3BlbiUyMHNvdXJjZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Representation of OSINT for Businesses"
            className="w-3/4 h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
          <figcaption className="text-gray-400 text-sm text-center mt-2">
            Open-source intelligence (OSINT) and its impact on businesses.
          </figcaption>
        </figure>

        {/* Author Info */}
        <p className="mt-4 text-gray-300 text-lg text-center">
          By <span className="font-semibold text-white">SHARK SAAS</span> | April 1, 2025
        </p>

        {/* Main Content */}
        <section className="mt-6 text-gray-300 text-lg leading-7 text-justify">
          <p>
            <strong>Open-source intelligence (OSINT)</strong> is revolutionizing the way businesses collect and analyze data. With the growing availability of public information, companies can now gain valuable insights into market trends, competitor strategies, and customer behaviors. OSINT is widely used in sectors such as finance, cybersecurity, marketing, and risk assessment.
          </p>
          <p className="mt-4">
            By leveraging sources like <strong>social media, news articles, government reports</strong>, and <strong>public records</strong>, organizations can make data-driven decisions. Monitoring competitor activity and customer preferences allows businesses to refine marketing campaigns and product development. 
          </p>
          <p className="mt-4">
            OSINT also plays a crucial role in <strong>cybersecurity</strong>. Security professionals use open-source data to identify vulnerabilities, analyze hacker tactics, and prevent cyberattacks. It has become an essential tool for threat intelligence and proactive defense strategies.
          </p>
          <p className="mt-4">
            However, businesses must use OSINT responsibly, ensuring compliance with <strong>data privacy regulations</strong>. Ethical intelligence gathering is essential to maintain trust and avoid legal risks. Companies investing in OSINT tools should also prioritize secure data handling and ethical frameworks.
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
