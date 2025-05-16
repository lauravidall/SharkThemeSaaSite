import React from "react";
import { BarChart2, Database, Globe, Cpu, Zap, Shield, Cloud, Terminal, Server } from "lucide-react";

export const Features = () => {
  return <div className="relative bg-[#19376D] py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B2447]/50" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#0B2447]/40 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#A5D7E8]">
            Advanced Analytics Platform
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Next-Generation Data Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Leverage our cutting-edge technology and AI-powered analytics to
            transform raw data into meaningful insights.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {[{
            name: "Social Listening",
            description: "Monitor online conversations to understand audience sentiment, trends, and brand perception.",
            icon: BarChart2
          }, {
            name: "Sentiment Analysis",
            description: "Analyze public opinion and emotions behind social media posts and comments to gain valuable insights.",
            icon: Zap
          }, {
            name: "Reputation Management",
            description: "Proactively manage your brand’s online reputation by detecting potential risks and opportunities.",
            icon: Shield
          }, {
            name: "Competitive Intelligence",
            description: "Track competitors' strategies, market trends, and consumer behavior to stay ahead in your industry.",
            icon: Cloud
          }, {
            name: "Modernize Brand",
            description: "Leverage data-driven insights to refresh and enhance your brand’s digital presence.",
            icon: Globe
          }, {
            name: "OSINT Pipeline",
            description: "Gather and analyze open-source intelligence to support decision-making with actionable data.",
            icon: Cpu
          }, {
            name: "Data Analysis & Dashboard",
            description: "Transform complex data into interactive dashboards for visualization and actionable insights.",
            icon: Database
          }, {
            name: "Ongoing Consulting & Capacity Building",
            description: "Expert guidance to empower data-driven decision-making teams.",
            icon: Terminal
          }, {
            name: "Scalable Data Solutions",
            description: "Optimize and expand your data infrastructure to support growth in dynamic digital landscapes.",
            icon: Server
          }].map(feature => <div key={feature.name} className="group relative flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#576CBC] to-[#19376D] group-hover:from-[#19376D] group-hover:to-[#576CBC] transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>)}
          </dl>
        </div>
      </div>
    </div>;
};