"use client";

import React from "react";
import { FaLocationArrow, FaGithub } from "react-icons/fa6";

interface TechStack {
  frontend?: string[];
  backend?: string[];
  ai?: string[];
  integrations?: string[];
  tools?: string[];
  streaming?: string[];
  ui?: string[];
  monitoring?: string[];
  agents?: string[];
  protocols?: string[];
  analytics?: string[];
}

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  techStack: TechStack;
  img: string;
  liveLink: string;
  githubLink: string;
  color: string;
  borderColor: string;
}

const RecentProjects = () => {
  // Enhanced tech stack icons mapping
  const techIcons: { [key: string]: string } = {
    // Frontend
    "Next.js": "https://cdn.simpleicons.org/nextdotjs/white",
    "Next.js 14": "https://cdn.simpleicons.org/nextdotjs/white",
    "Next.js 15": "https://cdn.simpleicons.org/nextdotjs/white",
    React: "https://cdn.simpleicons.org/react",
    "React 19": "https://cdn.simpleicons.org/react",
    TypeScript: "https://cdn.simpleicons.org/typescript",
    "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss",
    "Shadcn-ui": "https://cdn.simpleicons.org/shadcnui/white",
    JavaScript: "https://cdn.simpleicons.org/javascript",
    CSS: "https://cdn.simpleicons.org/css3",
    HTML: "https://cdn.simpleicons.org/html5",
    Gradio: "https://cdn.simpleicons.org/python",

    // Backend
    "Node.js": "https://cdn.simpleicons.org/nodedotjs",
    NestJS: "https://cdn.simpleicons.org/nestjs",
    Bun: "https://cdn.simpleicons.org/bun",
    Prisma: "https://cdn.simpleicons.org/prisma",
    MySQL: "https://cdn.simpleicons.org/mysql",
    NeonDB: "https://cdn.simpleicons.org/postgresql",
    PostgreSQL: "https://cdn.simpleicons.org/postgresql",
    "Socket.io": "https://cdn.simpleicons.org/socketdotio/white",
    Python: "https://cdn.simpleicons.org/python",
    FastAPI: "https://cdn.simpleicons.org/fastapi",
    SQLite: "https://cdn.simpleicons.org/sqlite",

    // AI & APIs
    "Gemini API": "https://cdn.simpleicons.org/google",
    AssemblyAI: "https://cdn.simpleicons.org/openai",
    "Amazon Polly": "https://cdn.simpleicons.org/aws",
    "Google Gemini API": "https://cdn.simpleicons.org/google",
    "Ultravox Voice AI": "https://cdn.simpleicons.org/webrtc",
    Inngest: "https://cdn.simpleicons.org/databricks",
    OpenAI: "https://cdn.simpleicons.org/openai",
    "CrewAI": "https://cdn.simpleicons.org/openai",
    "LangGraph": "https://cdn.simpleicons.org/langchain",
    "LangChain": "https://cdn.simpleicons.org/langchain",
    "Anthropic Claude": "https://cdn.simpleicons.org/anthropic",
    "MCP Protocol": "https://cdn.simpleicons.org/anthropic",

    // Trading & Finance
    "yFinance": "https://cdn.simpleicons.org/yahoo",
    "Alpha Vantage": "https://cdn.simpleicons.org/databricks",
    "Polygon.io": "https://cdn.simpleicons.org/polygon",
    "Sentiment Analysis": "https://cdn.simpleicons.org/tensorflow",
    "Technical Analysis": "https://cdn.simpleicons.org/chartdotjs",
    "Risk Management": "https://cdn.simpleicons.org/shield",

    // Tools & Services
    Vercel: "https://cdn.simpleicons.org/vercel/white",
    Git: "https://cdn.simpleicons.org/git",
    GitHub: "https://cdn.simpleicons.org/github/white",
    "Stripe Connect": "https://cdn.simpleicons.org/stripe",
    Clerk: "https://cdn.simpleicons.org/clerk",
    "Cal.com": "https://cdn.simpleicons.org/calendly",
    Convex: "https://cdn.simpleicons.org/databricks",
    WebRTC: "https://cdn.simpleicons.org/webrtc",
    "Stream API": "https://cdn.simpleicons.org/webrtc",
    WebSocket: "https://cdn.simpleicons.org/socketdotio/white",
    Docker: "https://cdn.simpleicons.org/docker",

    // Analytics & Visualization
    Plotly: "https://cdn.simpleicons.org/plotly",
    "TradingView Charts": "https://cdn.simpleicons.org/tradingview",
    Pandas: "https://cdn.simpleicons.org/pandas",
    NumPy: "https://cdn.simpleicons.org/numpy",

    // UI Libraries
    "Framer Motion": "https://cdn.simpleicons.org/framer/white",
    "Aceternity UI": "https://cdn.simpleicons.org/react",
    Sentry: "https://cdn.simpleicons.org/sentry",

    // Generic fallbacks
    "Speech Recognition": "https://cdn.simpleicons.org/googledaemon",
    "Voice Processing": "https://cdn.simpleicons.org/googledaemon",
    "Real-time data handling": "https://cdn.simpleicons.org/socketdotio/white",
    "Email Automation": "https://cdn.simpleicons.org/maildotru",
  };

  const getTechIcon = (tech: string): string => {
    return techIcons[tech] || "https://cdn.simpleicons.org/dotenv";
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "MultiVendor SaaS Website Builder & Project Management",
      shortDescription:
        "A comprehensive SaaS platform enabling businesses to create and manage multiple sub-accounts with seamless payment processing.",
      fullDescription:
        "Designed and developed a SaaS platform enabling businesses to create and manage multiple sub-accounts with seamless payment processing. Features include multi-agency & sub-account management, live notifications & funnel performance monitoring, comprehensive website and funnel builder with drag-and-drop interface, unlimited hosting, and real-time performance tracking.",
      features: [
        "Multi-agency & sub-account management with live notifications",
        "Comprehensive website and funnel builder with drag-and-drop interface",
        "Stripe Connect integration for payments & subscriptions",
        "Kanban board & project management system",
        "Real-time analytics dashboards for performance tracking",
      ],
      techStack: {
        frontend: ["Next.js 14", "TypeScript", "Tailwind CSS", "Shadcn-ui"],
        backend: ["Bun", "Prisma", "MySQL", "Stripe Connect"],
        tools: ["Vercel", "Git", "GitHub"],
      },
      img: "/plura image.png",
      liveLink: "https://plura-website.vercel.app",
      githubLink: "https://github.com/TARIFUDDIN/Plura-app",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/50",
    },
    {
      id: 2,
      title: "AI-Powered Multi-Agent Trading Platform",
      shortDescription:
        "Enterprise-grade AI trading platform with 5 specialized agents, real-time sentiment analysis, risk management, and modern dashboard achieving 85%+ prediction accuracy.",
      fullDescription:
        "Built an enterprise-grade AI trading platform using Multi-Agent Systems (MCP, CrewAI, LangGraph) with real-time market data processing, sentiment analysis, and automated risk management across 4 specialized trading agents. Features advanced sentiment analysis using enhanced financial lexicons achieving 85% accuracy in market sentiment prediction with real-time WebSocket streaming for live market data.",
      features: [
        "Multi-Agent trading system with 5 specialized AI traders (Warren, George, Ray, Cathie)",
        "Real-time sentiment analysis with 85%+ accuracy using enhanced financial lexicons",
        "Comprehensive risk management with VaR calculations and automated position sizing",
        "Professional trading dashboard with real-time performance tracking and analytics",
        "WebSocket integration for live market data streaming and instant notifications",
      ],
      techStack: {
        backend: ["Python", "FastAPI", "SQLite"],
        ai: ["OpenAI", "CrewAI", "LangGraph", "Anthropic Claude"],
        protocols: ["MCP Protocol"],
        agents: ["Sentiment Analysis", "Technical Analysis", "Risk Management"],
        analytics: ["yFinance", "Alpha Vantage", "Plotly", "TradingView Charts"],
        frontend: ["Gradio", "WebSocket"],
        tools: ["Docker", "Git", "GitHub"],
      },
      img: "/ai-trading-platform.png",
      liveLink: "https://trading-platform-demo.vercel.app",
      githubLink: "https://github.com/TARIFUDDIN/ai-trading-platform",
      color: "from-purple-600 to-blue-600",
      borderColor: "border-purple-500/50",
    },
    {
      id: 3,
      title: "AI-Powered Multifunctionality Career Coach",
      shortDescription:
        "An intelligent career assistant using Next.js, React, and AI APIs for job search, resume building, and interview preparation.",
      fullDescription:
        "Built an AI-powered career assistant using Next.js 15, React 19, Prisma, NeonDB, Clerk, and Inngest. Features include multi-portal job search, Gemini AI integration for resume building and mock interviews, AI-powered resume analyzer for ATS compatibility, and AI resume builder with Markdown support and PDF export.",
      features: [
        "Multi-Portal Job Search across LinkedIn, Naukri, Indeed, and more",
        "Gemini AI integration for resume building, mock interviews, and career insights",
        "AI-powered resume analyzer for ATS compatibility and improvement suggestions",
        "Authentication, onboarding workflows, and AI-driven interview preparation",
        "AI resume builder with Markdown support and PDF export",
      ],
      techStack: {
        frontend: ["Next.js 15", "React 19", "Tailwind CSS", "Shadcn-ui"],
        backend: ["Prisma", "NeonDB", "Clerk"],
        ai: ["Gemini API", "Inngest"],
        tools: ["Vercel", "Git", "GitHub"],
      },
      img: "/ai-career-coach.png",
      liveLink: "https://future-build-v-40.vercel.app/",
      githubLink: "https://github.com/TARIFUDDIN/FutureBuild",
      color: "from-teal-900 to-cyan-800",
      borderColor: "border-teal-600/50",
    },
    {
      id: 4,
      title: "FuturePrep AI - Educational Voice Assistant",
      shortDescription:
        "An AI-powered voice agent for educational purposes using Next.js, React, Tailwind CSS, Convex, and AssemblyAI.",
      fullDescription:
        "Developed an AI-powered voice agent for educational purposes using Next.js, React, Tailwind CSS, Convex, AssemblyAI, Amazon Polly, and Google Gemini API. This AI voice assistant helps students with topic-based interactive learning, answering queries, tech/non-tech mock interviews, notes generation based on conversation, and recommendations for improvement.",
      features: [
        "Topic-based interactive learning with voice interaction",
        "AI-powered query answering for academic subjects",
        "Tech and non-tech mock interviews with real-time feedback",
        "Automatic notes generation based on conversation",
        "Personalized recommendations for improvement",
      ],
      techStack: {
        frontend: ["Next.js", "React", "Tailwind CSS"],
        backend: ["Convex", "Real-time data handling"],
        ai: ["AssemblyAI", "Amazon Polly", "Google Gemini API"],
        tools: ["Speech Recognition", "Voice Processing"],
      },
      img: "/interview.png",
      liveLink: "https://futureprep.vercel.app/",
      githubLink: "https://github.com/TARIFUDDIN/futureprep",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/50",
    },
    {
      id: 5,
      title: "Suraksha AI - Doctor Appointment Booking System",
      shortDescription:
        "AI-Powered Virtual Receptionist for appointment scheduling & emergency medical assistance with voice AI integration.",
      fullDescription:
        "Developed Suraksha AI, an AI-Powered Receptionist for Appointment Scheduling & Emergency Medical Assistance using Next.js, TypeScript, NestJS, Ultravox, Cal.com, Prisma, and NeonDB. The AI Virtual Receptionist manages appointments, provides basic medical advice, and reduces manual effort through intelligent automation.",
      features: [
        "AI Virtual Receptionist for automated appointment management",
        "Emergency medical assistance with basic medical advice",
        "Voice AI integration for natural conversation",
        "Automated email scheduling and notifications",
        "Real-time appointment tracking and management",
      ],
      techStack: {
        frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
        backend: ["NestJS", "Prisma", "NeonDB"],
        ai: ["Ultravox Voice AI"],
        integrations: ["Cal.com", "Email Automation"],
        tools: ["Vercel", "Git", "GitHub"],
      },
      img: "/surakshaai.png",
      liveLink: "https://suraksha-ai.vercel.app",
      githubLink: "https://github.com/TARIFUDDIN/surakshaai",
      color: "from-violet-500 to-purple-500",
      borderColor: "border-violet-500/50",
    },
    {
      id: 6,
      title: "Zoom Clone - Video Conferencing App",
      shortDescription:
        "A modern video conferencing application with real-time communication features and seamless user experience.",
      fullDescription:
        "Developed a comprehensive video conferencing application similar to Zoom with features including real-time video/audio calls, screen sharing, meeting scheduling, chat functionality, and recording capabilities. Built with modern web technologies for optimal performance and user experience.",
      features: [
        "Real-time video and audio conferencing",
        "Screen sharing and presentation mode",
        "Meeting scheduling and calendar integration",
        "In-meeting chat and file sharing",
        "Meeting recording and playback",
      ],
      techStack: {
        frontend: ["Next.js", "React", "Tailwind CSS"],
        backend: ["Node.js", "Socket.io"],
        streaming: ["WebRTC", "Stream API"],
        tools: ["Vercel", "Git", "GitHub"],
      },
      img: "/p2.svg",
      liveLink:
        "https://loom-videoconferencing-app-ul89.vercel.app/sign-in?redirect_url=https%3A%2F%2Floom-videoconferencing-app-ul89.vercel.app%2F",
      githubLink: "https://github.com/TARIFUDDIN/Loom_videoconferencing_app",
      color: "from-red-500 to-orange-500",
      borderColor: "border-red-500/50",
    },
    {
      id: 7,
      title: "Personal Modern Developer Portfolio",
      shortDescription:
        "A stunning personal portfolio showcasing modern web design with sleek layouts, smooth animations, and project highlights.",
      fullDescription:
        "Created a personal portfolio showcasing modern web design and user experience with sleek layouts, smooth animations, and highlights of skills and projects. Integrated Sentry for efficient error tracking and data handling. Built with Next.js and TypeScript for performance and scalability, featuring Framer Motion, Aceternity UI, and Tailwind for seamless animations and user experience.",
      features: [
        "Modern and responsive design with smooth animations",
        "Interactive project showcases and skill demonstrations",
        "Integrated contact forms and social media links",
        "Performance optimized with Next.js and TypeScript",
        "Error tracking and monitoring with Sentry integration",
      ],
      techStack: {
        frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
        ui: ["Framer Motion", "Aceternity UI", "Shadcn-ui"],
        monitoring: ["Sentry"],
        tools: ["Vercel", "Git", "GitHub"],
      },
      img: "/portfolio.png",
      liveLink: "https://your-portfolio.vercel.app",
      githubLink: "https://github.com/yourusername/portfolio",
      color: "from-indigo-500 to-blue-500",
      borderColor: "border-indigo-500/50",
    },
  ];

  return (
    <div className="py-20" id="projects">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
        A small selection of{" "}
        <span className="text-purple-400">recent projects</span>
      </h1>

      <div className="space-y-20 mt-16">
        {projects.map((project: Project, index: number) => (
          <div key={project.id} className="relative">
            {/* Project Container */}
            <div
              className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 w-full">
                <div
                  className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${project.color} p-1 group`}
                >
                  <div className="bg-gray-900 rounded-xl overflow-hidden">
                    <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400/50 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 w-full space-y-6">
                {/* Enhanced Title with Glowing Colors */}
                <div className="relative group">
                  <h2
                    className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent hover:from-purple-400 hover:via-white hover:to-purple-400 transition-all duration-500 cursor-default"
                    style={{
                      textShadow: `
                        0 0 10px rgba(168, 85, 247, 0.5),
                        0 0 20px rgba(168, 85, 247, 0.3),
                        0 0 30px rgba(168, 85, 247, 0.2),
                        0 0 40px rgba(168, 85, 247, 0.1)
                      `,
                      filter: "drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))",
                    }}
                  >
                    {project.title}
                  </h2>

                  {/* Animated underline with glow */}
                  <div
                    className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-700 ease-out"
                    style={{
                      boxShadow: `
                        0 0 10px rgba(168, 85, 247, 0.8),
                        0 0 20px rgba(59, 130, 246, 0.6),
                        0 0 30px rgba(168, 85, 247, 0.4)
                      `,
                    }}
                  ></div>

                  {/* Multi-layered glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                    {/* Inner glow */}
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.3) 0%, rgba(59, 130, 246, 0.2) 30%, transparent 70%)",
                        filter: "blur(10px)",
                      }}
                    ></div>
                    {/* Outer glow */}
                    <div
                      className="absolute inset-0 rounded-lg scale-110"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.2) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 80%)",
                        filter: "blur(20px)",
                      }}
                    ></div>
                  </div>

                  {/* Glowing particles effect */}
                  <div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                    style={{
                      boxShadow: `
                        0 0 8px rgba(168, 85, 247, 0.8),
                        0 0 16px rgba(168, 85, 247, 0.6),
                        0 0 24px rgba(168, 85, 247, 0.4)
                      `,
                    }}
                  ></div>
                  <div
                    className="absolute top-1/2 -left-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"
                    style={{
                      boxShadow: `
                        0 0 8px rgba(59, 130, 246, 0.8),
                        0 0 16px rgba(59, 130, 246, 0.6),
                        0 0 24px rgba(59, 130, 246, 0.4)
                      `,
                      animationDelay: "200ms",
                    }}
                  ></div>

                  {/* Additional ambient glow */}
                  <div
                    className="absolute -inset-4 opacity-0 group-hover:opacity-50 transition-opacity duration-700"
                    style={{
                      background:
                        "conic-gradient(from 0deg at 50% 50%, rgba(168, 85, 247, 0.1) 0deg, rgba(59, 130, 246, 0.1) 120deg, rgba(147, 51, 234, 0.1) 240deg, rgba(168, 85, 247, 0.1) 360deg)",
                      filter: "blur(25px)",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>

                {/* Short Description */}
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-purple-400">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features
                      .slice(0, 3)
                      .map((feature: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300 group hover:text-white transition-colors duration-200"
                          style={{
                            animationDelay: `${idx * 100}ms`,
                          }}
                        >
                          <span className="text-purple-400 mt-1 group-hover:scale-110 transition-transform duration-200">
                            →
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Enhanced Tech Stack */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-purple-400">
                    Tech Stack:
                  </h4>
                  <div className="space-y-4">
                    {Object.entries(project.techStack).map(
                      (
                        [category, technologies]: [string, string[]],
                        categoryIdx: number
                      ) => (
                        <div key={category} className="space-y-2">
                          <span className="text-sm font-medium text-gray-400 capitalize block">
                            {category}:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {technologies.map((tech: string, idx: number) => (
                              <div
                                key={idx}
                                className="group relative overflow-hidden"
                                style={{
                                  animationDelay: `${
                                    (categoryIdx * technologies.length + idx) *
                                    50
                                  }ms`,
                                }}
                              >
                                <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm text-gray-300 text-sm rounded-full border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 group-hover:from-gray-700/90 group-hover:to-gray-600/90">
                                  <img
                                    src={getTechIcon(tech)}
                                    alt={tech}
                                    className="w-4 h-4 object-contain group-hover:scale-110 transition-transform duration-200"
                                    onError={(e) => {
                                      (
                                        e.target as HTMLImageElement
                                      ).style.display = "none";
                                    }}
                                  />
                                  <span className="font-medium group-hover:text-white transition-colors duration-200">
                                    {tech}
                                  </span>
                                </div>
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white rounded-lg transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <span className="relative z-10">View Live Site</span>
                    <FaLocationArrow className="text-sm relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white rounded-lg transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg hover:shadow-gray-500/10 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm"
                  >
                    <FaGithub className="group-hover:rotate-12 transition-transform duration-200" />
                    <span>GitHub</span>
                    {/* Button border glow */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced Separator Line */}
            {index < projects.length - 1 && (
              <div className="mt-20 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;