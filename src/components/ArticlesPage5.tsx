import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const ArticlesPage5 = () => {
  return (
    <div className="min-h-screen bg-[#19376D] flex flex-col items-center px-6 md:px-12 py-20">
      <article className="max-w-4xl w-full mx-auto py-8">
        {/* Article Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-white">
            The Role of AI in Cybersecurity
          </h1>
          <h2 className="mt-2 text-xl text-[#A5D7E8]">
            How artificial intelligence is enhancing cybersecurity strategies.
          </h2>
        </header>

        {/* Featured Image */}
        <figure className="mt-6 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D"
            alt="The Role of AI in Cybersecurity"
            className="w-3/4 h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
          <figcaption className="text-gray-400 text-sm text-center mt-2">
            AI-driven solutions are transforming modern cybersecurity.
          </figcaption>
        </figure>

        {/* Author Info */}
        <p className="mt-4 text-gray-300 text-lg text-center">
          By <span className="font-semibold text-white">SHARK SAAS</span> | March 10, 2025
        </p>

        {/* Main Content */}
        <section className="mt-6 text-gray-300 text-lg leading-7 text-justify">
          <p>
            Artificial intelligence (<strong>AI</strong>) is revolutionizing cybersecurity by enhancing threat detection, response, and prevention. With cyber threats evolving rapidly, organizations are leveraging AI-powered solutions to strengthen their digital defenses.
          </p>
          <p className="mt-4">
            AI-driven security systems analyze vast amounts of data to identify <strong>anomalies and potential cyber threats</strong> in real time. Machine learning algorithms can detect patterns associated with malware, phishing attacks, and other malicious activities, allowing businesses to respond proactively.
          </p>
          <p className="mt-4">
            One of the key advantages of AI in cybersecurity is its ability to <strong>automate threat response</strong>. Instead of relying solely on human analysts, AI can instantly recognize and neutralize security risks, reducing response times and minimizing potential damages.
          </p>
          <p className="mt-4">
            However, the increasing reliance on AI in security also raises concerns about <strong>ethical implications and adversarial AI attacks</strong>. Cybercriminals are developing AI-driven threats, making it essential for organizations to continuously adapt and innovate their security strategies.
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
