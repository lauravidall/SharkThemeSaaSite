import React from "react";
import { ArrowRight } from "lucide-react";
import sharkdash4 from "./sharkdash4.jpeg";
import sharkdash5 from "./sharkdash5.jpeg";
import sharkdash6 from "./sharkdash6.jpeg";

export const Products = () => {
  const products = [
    {
      name: "Data Analysis",
      description: "Uncover deep insights with AI-driven analytics, transforming raw data into actionable intelligence for smarter decision-making.",
      features: ["AI-powered insights", "Real-time trend detection", "Customizable data models"],
      image: sharkdash4
    },
    {
      name: "Data Visualization",
      description: "Transform complex datasets into interactive, easy-to-understand visualizations that drive clarity and strategic insights.",
      features: ["Dynamic charts & graphs", "Interactive dashboards", "Seamless data integration"],
      image: sharkdash5
    },
    {
      name: "Data Automation",
      description: "Automate data processing and workflows, ensuring efficiency, accuracy, and scalability with minimal manual intervention.",
      features: ["Automated data pipelines", "AI-driven anomaly detection", "Scalable workflow automation"],
      image: sharkdash6
    }
  ];  

  return <div className="bg-[#0B2447] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#A5D7E8]">
            Our Products
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Enterprise-Grade Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover our suite of advanced data analytics products designed for
            the modern enterprise.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map(product => <article key={product.name} className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img src={product.image} alt={product.name} style={{ opacity: 0.7 }} className="absolute inset-0 -z-10 h-full w-full object-cover brightness-75 transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                {product.features.map((feature, index) => <div key={feature} className="mr-2">
                    {index > 0 && <span className="mr-2">•</span>}
                    {feature}
                  </div>)}
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <span className="absolute inset-0" />
                {product.name}
              </h3>
              <div className="flex justify-between items-center mt-3">
                <p className="text-sm text-gray-300">{product.description}</p>
                <ArrowRight className="h-5 w-5 text-[#A5D7E8] transform group-hover:translate-x-1 transition-transform" />
              </div>
            </article>)}
        </div>
      </div>
    </div>;
};