import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import sharkdash from "./sharkdash.jpeg";
import sharkdash2 from "./sharkdash2.jpeg";
import sharkdash3 from "./sharkdash3.jpg";
import sharkdash4 from "./sharkdash4.jpeg";
import sharkdash5 from "./sharkdash5.jpeg";
import sharkdash6 from "./sharkdash6.jpeg";

export const OurServices = () => {

  const navigate = useNavigate();
  
  const services = [{
    name: "Digital Planning",
    description: "Strategically align your digital presence with business goals, ensuring consistency, efficiency, and long-term success.",
    features: ["Strategic alignment", "Long-term planning", "Efficiency optimization"],
    image: sharkdash3
  }, {
    name: "SEO / SERP / SEM",
    description: "Enhance your search engine visibility with data-driven SEO, SERP analysis, and search strategies.",
    features: ["Keyword optimization", "SERP tracking", "Search strategies"],
    image: sharkdash2
  }, {
    name: "App & Website Development",
    description: "Design and build high-performance websites and applications tailored to your business needs.",
    features: ["Custom web solutions", "Scalable applications", "User-centric design"],
    image: sharkdash4
  }, {
    name: "Data Analysis – Data Visualization – Digital Audit",
    description: "Transform raw data into actionable insights with cutting-edge analytics, visualization, and auditing tools.",
    features: ["Advanced analytics", "Custom dashboards", "Data-driven decision-making"],
    image: sharkdash
  }, {
    name: "Digital Marketing Automation",
    description: "Automate and optimize your digital marketing efforts for greater efficiency and performance.",
    features: ["AI-driven automation", "Campaign optimization", "Personalized engagement"],
    image: sharkdash5
  }, {
    name: "Digital Campaign Management",
    description: "Plan, execute, and optimize high-impact digital campaigns to maximize engagement and conversions.",
    features: ["Targeted strategies", "Performance tracking", "Multi-channel execution"],
    image: sharkdash6
  }];

  return (
    <div className="bg-[#0B2447] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#A5D7E8]">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Transforming Data into Insights</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">Unlock powerful insights with our cutting-edge data analytics solutions tailored for modern enterprises.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((product) => (
            <article
            key={product.name}
            className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 cursor-pointer"
            onClick={() => {
              navigate('/contact');
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 100);
            }}
          >
            <img src={product.image} alt={product.name} style={{ opacity: 0.7 }} className="absolute inset-0 -z-10 h-full w-full object-cover brightness-75 transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              {product.features.map((feature, index) => (
                <div key={feature} className="mr-2">
                  {index > 0 && <span className="mr-2">•</span>}
                  {feature}
                </div>
              ))}
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
              <span className="absolute inset-0" />
              {product.name}
            </h3>
            <div className="flex justify-between items-center mt-3">
              <p className="text-sm text-gray-300">{product.description}</p>
              <ArrowRight className="h-5 w-5 text-[#A5D7E8] transform group-hover:translate-x-1 transition-transform" />
            </div>
          </article>          
          ))}
        </div>
      </div>
    </div>
  );
};
