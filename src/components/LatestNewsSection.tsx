import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const LatestNewsSection = () => {
  const news = [
    {
      title: "The Revolution of OSINT for Businesses",
      summary: "How open-source intelligence can transform your business.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3BlbiUyMHNvdXJjZXxlbnwwfHwwfHx8MA%3D%3D", 
      link: "/news/article1"
    },
    {
      title: "Smart Dashboards: The Future of Data",
      summary: "See how SHARK TECH is innovating with customized dashboards.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      link: "/news/article4"
    }
  ];

  return (
    <div className="relative bg-[#19376D] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#A5D7E8]">
            Latest News
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stay Updated with Our Insights
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {news.map((article, index) => (
            <article
              key={index}
              className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Link to={article.link} onClick={() => window.scrollTo(0, 0)} className="absolute inset-0">
                <img
                  src={article.image}
                  alt={article.title}
                  style={{ opacity: 0.7 }}
                  className="absolute inset-0 -z-10 h-full w-full object-cover brightness-75 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              </Link>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link to={article.link} onClick={() => window.scrollTo(0, 0)} >{article.title}</Link>
              </h3>
              <p className="text-sm text-gray-300 mt-2">{article.summary}</p>
              <Link to={article.link} onClick={() => window.scrollTo(0, 0)} className="text-[#A5D7E8] mt-3 inline-block font-semibold hover:underline">Read more →</Link>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/news"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center text-[#A5D7E8] font-semibold text-lg hover:underline"
          >
            See all news <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};