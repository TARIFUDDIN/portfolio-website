"use client";

import React from "react";

const Skills = () => {
  const skillsData = [
    // Programming Languages
    {
      name: "Python",
      icon: "https://cdn.simpleicons.org/python",
      category: "language",
    },
    { name: "C", icon: "https://cdn.simpleicons.org/c", category: "language" },
    {
      name: "C++",
      icon: "https://cdn.simpleicons.org/cplusplus",
      category: "language",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript",
      category: "language",
    },
    {
      name: "Java",
      icon: "https://cdn.simpleicons.org/openjdk",
      category: "language",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript",
      category: "language",
    },

    // Frontend Frameworks
    {
      name: "Next.js",
      icon: "https://cdn.simpleicons.org/nextdotjs/white",
      category: "frontend",
    },
    {
      name: "React.js",
      icon: "https://cdn.simpleicons.org/react",
      category: "frontend",
    },
    {
      name: "HTML",
      icon: "https://cdn.simpleicons.org/html5",
      category: "frontend",
    },
    {
      name: "CSS",
      icon: "https://cdn.simpleicons.org/css3",
      category: "frontend",
    },
    {
      name: "SASS",
      icon: "https://cdn.simpleicons.org/sass",
      category: "frontend",
    },
    {
      name: "Material UI",
      icon: "https://cdn.simpleicons.org/mui",
      category: "frontend",
    },
    {
      name: "Framer Motion",
      icon: "https://cdn.simpleicons.org/framer",
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.simpleicons.org/tailwindcss",
      category: "frontend",
    },
    {
      name: "Shadcn UI",
      icon: "https://cdn.simpleicons.org/shadcnui/white",
      category: "frontend",
    },
    {
      name: "Aceternity UI",
      icon: "https://cdn.simpleicons.org/storybook",
      category: "frontend",
    },

    // Backend & State Management
    {
      name: "Node.js",
      icon: "https://cdn.simpleicons.org/nodedotjs",
      category: "backend",
    },
    {
      name: "Nest.js",
      icon: "https://cdn.simpleicons.org/nestjs",
      category: "backend",
    },
    {
      name: "Express.js",
      icon: "https://cdn.simpleicons.org/express/white",
      category: "backend",
    },
    {
      name: "Zod",
      icon: "https://cdn.simpleicons.org/zod",
      category: "backend",
    },
    {
      name: "Zustand",
      icon: "https://cdn.simpleicons.org/redux/pink",
      category: "backend",
    },
    {
      name: "Redux",
      icon: "https://cdn.simpleicons.org/redux",
      category: "backend",
    },

    // Databases
    {
      name: "MongoDB",
      icon: "https://cdn.simpleicons.org/mongodb",
      category: "database",
    },
    {
      name: "NeonDB",
      icon: "https://cdn.simpleicons.org/postgresql",
      category: "database",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.simpleicons.org/postgresql",
      category: "database",
    },
    {
      name: "MySQL",
      icon: "https://cdn.simpleicons.org/mysql",
      category: "database",
    },
    {
      name: "Prisma",
      icon: "https://cdn.simpleicons.org/prisma",
      category: "database",
    },

    // AI & ML
    {
      name: "CrewAI",
      icon: "https://cdn.simpleicons.org/openai",
      category: "ai",
    },
    {
      name: "LangGraph",
      icon: "https://cdn.simpleicons.org/langchain",
      category: "ai",
    },
    {
      name: "LangChain",
      icon: "https://cdn.simpleicons.org/langchain",
      category: "ai",
    },
    {
      name: "Anthropic Claude",
      icon: "https://cdn.simpleicons.org/anthropic",
      category: "ai",
    },
    {
      name: "MCP Protocol",
      icon: "https://cdn.simpleicons.org/anthropic",
      category: "ai",
    },

    // Trading & Finance
    {
      name: "yFinance",
      icon: "https://cdn.simpleicons.org/python",
      category: "trading",
    },
    {
      name: "Alpha Vantage",
      icon: "https://cdn.simpleicons.org/databricks",
      category: "trading",
    },
    {
      name: "Polygon.io",
      icon: "https://cdn.simpleicons.org/polygon",
      category: "trading",
    },
    {
      name: "Sentiment Analysis",
      icon: "https://cdn.simpleicons.org/tensorflow",
      category: "trading",
    },
    {
      name: "Technical Analysis",
      icon: "https://cdn.simpleicons.org/chartdotjs",
      category: "trading",
    },
    {
      name: "Risk Management",
      icon: "https://cdn.simpleicons.org/shield",
      category: "trading",
    },
    {
      name: "Plotly",
      icon: "https://cdn.simpleicons.org/plotly",
      category: "trading",
    },
    {
      name: "TradingView Charts",
      icon: "https://cdn.simpleicons.org/tradingview",
      category: "trading",
    },

    // DevOps & Tools
    { name: "Git", icon: "https://cdn.simpleicons.org/git", category: "tools" },
    {
      name: "GitHub",
      icon: "https://cdn.simpleicons.org/github/white",
      category: "tools",
    },
    { name: "Bun", icon: "https://cdn.simpleicons.org/bun", category: "tools" },
    {
      name: "Vercel",
      icon: "https://cdn.simpleicons.org/vercel/white",
      category: "tools",
    },
    {
      name: "Docker",
      icon: "https://cdn.simpleicons.org/docker",
      category: "tools",
    },
    {
      name: "Clerk",
      icon: "https://cdn.simpleicons.org/clerk",
      category: "tools",
    },
    {
      name: "Ultravox",
      icon: "https://cdn.simpleicons.org/webrtc",
      category: "tools",
    },
    {
      name: "Cal.com",
      icon: "https://cdn.simpleicons.org/calendly",
      category: "tools",
    },
    {
      name: "Firebase",
      icon: "https://cdn.simpleicons.org/firebase",
      category: "tools",
    },
    {
      name: "Convex",
      icon: "https://cdn.simpleicons.org/databricks",
      category: "tools",
    },
    {
      name: "Stripe",
      icon: "https://cdn.simpleicons.org/stripe",
      category: "tools",
    },
    {
      name: "Razorpay",
      icon: "https://cdn.simpleicons.org/razorpay",
      category: "tools",
    },
  ];

  return (
    <div className="py-20" id="skills">
      <div className="flex flex-col items-center relative">
        {/* Background Steel Flower Image */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-36 md:-translate-y-40 z-0">
          <div className="relative mx-auto size-[300px] md:size-[380px] rotate-[100deg] animate-spin-slow">
            <img
              src="https://aayushbharti.in/steel-flower.webp"
              draggable="false"
              alt="skills cover rotating image"
              className="z-10 w-full opacity-65 select-none"
            />
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            MY SKILLS
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold">
            <span className="text-white">The Secret </span>
            <span className="text-purple-400 italic glow-text">Sauce</span>
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="relative z-10 w-full max-w-6xl px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {skillsData.map((skill, index) => (
              <div key={index} className="group relative">
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-4 h-4 flex-shrink-0"
                  />
                  <span className="text-white font-medium text-xs whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Gradient Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black-100 to-transparent pointer-events-none"></div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .glow-text {
          text-shadow: 0 0 5px #a855f7, 0 0 10px #a855f7, 0 0 15px #a855f7,
            0 0 20px #a855f7, 0 0 35px #a855f7, 0 0 40px #a855f7;
          animation: glow-pulse 2s ease-in-out infinite alternate;
        }

        @keyframes glow-pulse {
          from {
            text-shadow: 0 0 5px #a855f7, 0 0 10px #a855f7, 0 0 15px #a855f7,
              0 0 20px #a855f7, 0 0 35px #a855f7, 0 0 40px #a855f7;
          }
          to {
            text-shadow: 0 0 2px #a855f7, 0 0 5px #a855f7, 0 0 8px #a855f7,
              0 0 12px #a855f7, 0 0 18px #a855f7, 0 0 25px #a855f7;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(100deg);
          }
          to {
            transform: rotate(460deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
