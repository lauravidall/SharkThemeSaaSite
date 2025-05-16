import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const ArticlesPage2 = () => {
  return (
    <div className="min-h-screen bg-[#19376D] flex flex-col items-center px-6 md:px-12 py-20">
      <article className="max-w-4xl w-full mx-auto py-8">
        {/* Article Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-white">
            Automating OSINT for Smarter Decisions
          </h1>
          <h2 className="mt-2 text-xl text-[#A5D7E8]">
            How automation is revolutionizing open-source intelligence analysis.
          </h2>
        </header>

        {/* Featured Image */}
        <figure className="mt-6 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1611117775350-ac3950990985?w=900&auto=format&fit=crop&q=60"
            alt="Automating OSINT"
            className="w-3/4 h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
          <figcaption className="text-gray-400 text-sm text-center mt-2">
            The role of automation in OSINT-driven business intelligence.
          </figcaption>
        </figure>

        {/* Author Info */}
        <p className="mt-4 text-gray-300 text-lg text-center">
          By <span className="font-semibold text-white">SHARK TECH</span> | March 15, 2025
        </p>

        {/* Main Content */}
        <section className="mt-6 text-gray-300 text-lg leading-7 text-justify">
          <p>
            The use of <strong>automation</strong> in open-source intelligence (OSINT) is transforming the way organizations analyze and utilize publicly available data. With the rise of artificial intelligence (AI) and machine learning, businesses can now process vast amounts of information faster and more efficiently.
          </p>
          <p className="mt-4">
            Automated OSINT tools can scan and interpret data from <strong>social media, forums, government databases</strong>, and other public sources in real-time. This enables companies to detect industry trends, monitor competitors, and even identify potential security threats without manual intervention.
          </p>
          <p className="mt-4">
            In cybersecurity, automation enhances <strong>threat intelligence</strong> by rapidly identifying vulnerabilities and malicious activities. Organizations can proactively respond to risks before they escalate, strengthening their digital defenses.
          </p>
          <p className="mt-4">
            However, while automation streamlines OSINT processes, ethical concerns remain. Ensuring <strong>data privacy compliance</strong> and responsible information gathering is crucial for companies adopting automated intelligence solutions.
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
