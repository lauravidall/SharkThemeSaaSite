import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Revolution of OSINT for Businesses",
    summary: "How open-source intelligence can transform your business.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&auto=format&fit=crop&q=60",
    date: "April 1, 2025",
    category: "Technology",
    link: "/news/article1"
  },
  {
    id: 2,
    title: "Automating OSINT for Smarter Decisions",
    summary: "How automation is revolutionizing open-source intelligence analysis.",
    image: "https://images.unsplash.com/photo-1611117775350-ac3950990985?w=900&auto=format&fit=crop&q=60",
    date: "March 15, 2025",
    category: "Artificial Intelligence",
    link: "/news/article2"
  },
  {
    id: 3,
    title: "Digital Security and OSINT",
    summary: "The importance of OSINT in protecting against digital threats.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&auto=format&fit=crop&q=60",
    date: "March 20, 2025",
    category: "Cybersecurity",
    link: "/news/article3"
  },
  {
    id: 4,
    title: "Smart Dashboards: The Future of Data",
    summary: "See how SHARK TECH is innovating with customized dashboards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    date: "March 28, 2025",
    category: "Data Science",
    link: "/news/article4"
  },
  {
    id: 5,
    title: "The Role of AI in Cybersecurity",
    summary: "How artificial intelligence is enhancing cybersecurity strategies.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
    date: "March 10, 2025",
    category: "AI & Security",
    link: "/news/article5"
  },
  {
    id: 6,
    title: "Big Data and Business Intelligence",
    summary: "Leveraging big data to make smarter business decisions.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlnJTIwZGF0YXxlbnwwfHwwfHx8MA%3D%3D",
    date: "March 5, 2025",
    category: "Business",
    link: "/news/article6"
  }
];

export const BlogsPage = () => {
  const mainPost = blogPosts[2];
  const otherPosts = blogPosts.filter((post) => post.id !== mainPost.id);

  return (
    <div className="min-h-screen bg-[#19376D] flex items-center justify-center px-6 md:px-12 py-12">
      <div className="max-w-5xl w-full mx-auto py-16">
        <h2 className="text-lg font-semibold text-[#A5D7E8]">News & Insights</h2>
        <p className="mt-2 text-4xl font-bold text-white sm:text-5xl">Latest News</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-[#284985] rounded-lg overflow-hidden shadow-lg h-full hover:scale-105 transition-transform duration-300 ease-in-out">
              <img src={mainPost.image} alt={mainPost.title} className="w-full h-80 object-cover" />
              <div className="p-6">
                <span className="text-[#A5D7E8] font-semibold text-sm">{mainPost.category} | {mainPost.date}</span>
                <h2 className="text-2xl font-bold text-white mt-2">{mainPost.title}</h2>
                <p className="text-white mt-2">{mainPost.summary}</p>
                <Link to={mainPost.link} onClick={() => window.scrollTo(0, 0)} className="text-[#A5D7E8] mt-3 inline-block">Read more →</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {otherPosts.slice(0, 2).map((post) => (
              <div key={post.id} className="bg-[#284985] rounded-lg shadow-lg p-4 h-60 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ease-in-out">
                <div>
                  <span className="text-[#A5D7E8] font-semibold text-sm">{post.category} | {post.date}</span>
                  <h2 className="text-lg font-bold text-white">{post.title}</h2>
                  <p className="text-white mt-1">{post.summary}</p>
                </div>
                <Link to={post.link} onClick={() => window.scrollTo(0, 0)} className="text-[#A5D7E8] mt-1 inline-block">→</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherPosts.slice(2, 5).map((post) => (
            <div key={post.id} className="bg-[#284985] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <span className="text-[#A5D7E8] font-semibold text-sm">{post.category} | {post.date}</span>
                <h2 className="text-lg font-bold text-white mt-1">{post.title}</h2>
                <Link to={post.link} onClick={() => window.scrollTo(0, 0)} className="text-[#A5D7E8] mt-2 inline-block">Read more →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};