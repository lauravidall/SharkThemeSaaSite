import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const ArticlesPage3 = () => {
  return (
    <div className="min-h-screen bg-[#19376D] flex flex-col items-center px-6 md:px-12 py-20">
      <article className="max-w-4xl w-full mx-auto py-8">
        {/* Article Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-white">
            Digital Security and OSINT
          </h1>
          <h2 className="mt-2 text-xl text-[#A5D7E8]">
            The importance of OSINT in protecting against digital threats.
          </h2>
        </header>

        {/* Featured Image */}
        <figure className="mt-6 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&auto=format&fit=crop&q=60"
            alt="Digital Security and OSINT"
            className="w-3/4 h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
          <figcaption className="text-gray-400 text-sm text-center mt-2">
            The role of OSINT in cybersecurity and threat prevention.
          </figcaption>
        </figure>

        {/* Author Info */}
        <p className="mt-4 text-gray-300 text-lg text-center">
          By <span className="font-semibold text-white">SHARK SAAS</span> | March 20, 2025
        </p>

        {/* Main Content */}
        <section className="mt-6 text-gray-300 text-lg leading-7 text-justify">
          <p>
            In an era of increasing cyber threats, <strong>open-source intelligence (OSINT)</strong> has become a critical tool for enhancing digital security. By collecting and analyzing publicly available information, organizations can detect vulnerabilities, monitor cybercriminal activities, and prevent security breaches.
          </p>
          <p className="mt-4">
            OSINT is widely used in <strong>cybersecurity operations</strong> to identify potential threats before they escalate. Security teams leverage data from <strong>dark web forums, leaked databases, social media,</strong> and other online sources to track emerging risks.
          </p>
          <p className="mt-4">
            Law enforcement agencies and cybersecurity firms use OSINT for <strong>threat intelligence</strong>, identifying hackers, detecting phishing schemes, and mitigating ransomware attacks. By continuously monitoring digital footprints, organizations can strengthen their defense strategies.
          </p>
          <p className="mt-4">
            However, ethical concerns and <strong>data privacy regulations</strong> must be taken into account when using OSINT for security purposes. Companies should ensure compliance with legal frameworks while responsibly gathering intelligence to protect digital assets.
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
