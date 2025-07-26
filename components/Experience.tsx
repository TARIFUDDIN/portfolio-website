"use client";

import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaRobot,
  FaBrain,
  FaStethoscope,
  FaUtensils,
  FaTooth,
  FaGavel,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiNestjs, SiTypescript } from "react-icons/si";

const WorkExperience = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const workExperience = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "Panna Labs LLC",
      location: "Remote",
      duration: "March 2025 - Present",
      type: "Internship",
      description:
        "Specialized in AI agent development and full-stack web applications, building intelligent systems for healthcare and business automation.",
      responsibilities: [
        "Developed and deployed AI-powered appointment booking systems",
        "Built responsive web applications using Next.js and TypeScript",
        "Integrated voice AI capabilities using Ultravox and N8N workflows",
        "Collaborated on multiple AI agent projects for different industries",
        "Debugged and optimized AI chatbot systems for improved performance",
      ],
      techStack: [
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "Ultravox", icon: FaRobot, color: "text-purple-500" },
        { name: "N8N", icon: FaBrain, color: "text-green-500" },
        { name: "AI Agents", icon: FaBrain, color: "text-cyan-500" },
      ],
      projects: [
        {
          id: 1,
          name: "Suraksha AI",
          description:
            "AI-powered doctor appointment booking system with voice AI integration",
          icon: FaStethoscope,
          color: "from-blue-500 to-cyan-500",
          status: "Completed",
        },
        {
          id: 2,
          name: "ZatkaBites",
          description:
            "Restaurant receptionist AI agent for automated food ordering",
          icon: FaUtensils,
          color: "from-orange-500 to-red-500",
          status: "Completed",
        },
        {
          id: 3,
          name: "Stella",
          description:
            "AI dental clinic appointment booking system with patient management",
          icon: FaTooth,
          color: "from-green-500 to-emerald-500",
          status: "Completed",
        },
        {
          id: 4,
          name: "Law Firm AI Agent",
          description:
            "Legal consultation and appointment scheduling AI assistant",
          icon: FaGavel,
          color: "from-purple-500 to-violet-500",
          status: "In Progress",
        },
      ],
      thumbnail: "/pannalabs_logo.jpg",
      companyLogo: "pannalabs_logo.jpg",
    },
  ];

  return (
    <div className="py-20 px-4" id="experience">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h2
            className="text-4xl md:text-6xl font-bold"
            style={{
              background: "linear-gradient(to right, white, #c084fc, white)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: `
                0 0 10px rgba(168, 85, 247, 0.5),
                0 0 20px rgba(168, 85, 247, 0.3),
                0 0 30px rgba(168, 85, 247, 0.2)
              `,
              filter: "drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))",
            }}
          >
            My <span className="text-purple-400">Work Experience</span>
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>
        <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
          Building the future with AI-powered solutions and modern web
          technologies
        </p>
      </div>

      {/* Experience Cards */}
      <div className="max-w-6xl mx-auto">
        {workExperience.map((experience, index) => (
          <div key={experience.id} className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-30"></div>

            {/* Timeline Dot */}
            <div
              className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-gray-900 z-10"
              style={{
                boxShadow: `
                  0 0 10px rgba(168, 85, 247, 0.8),
                  0 0 20px rgba(59, 130, 246, 0.6)
                `,
              }}
            ></div>

            {/* Main Experience Card */}
            <div className="ml-16 mb-12">
              <div className="group relative">
                {/* Card Background with Glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ transform: "scale(1.05)" }}
                ></div>

                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 group-hover:border-purple-500/30 rounded-2xl p-8 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img
                          src={experience.companyLogo}
                          alt="Company Logo"
                          className="w-16 h-16 rounded-xl border-2 border-gray-700 group-hover:border-purple-500/50 transition-colors duration-300"
                        />
                        {/* Logo Glow */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                          style={{
                            background:
                              "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
                            filter: "blur(8px)",
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                            {experience.title}
                          </h3>
                          <p className="text-xl text-purple-400 font-semibold">
                            {experience.company}
                          </p>
                        </div>

                        <div className="flex flex-col lg:items-end gap-2">
                          <div className="flex items-center gap-2 text-gray-300">
                            <FaCalendarAlt className="text-purple-400" />
                            <span className="font-medium">
                              {experience.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <FaMapMarkerAlt className="text-blue-400" />
                            <span>{experience.location}</span>
                          </div>
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300 font-medium">
                            {experience.type}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {experience.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                          <FaCode />
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {experience.techStack.map((tech, idx) => {
                            const IconComponent = tech.icon;
                            return (
                              <div
                                key={idx}
                                className="group/tech flex items-center gap-2 px-4 py-2 bg-gray-800/60 border border-gray-600/50 rounded-lg hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                                style={{
                                  animationDelay: `${idx * 100}ms`,
                                }}
                              >
                                <IconComponent
                                  className={`text-lg ${tech.color} group-hover/tech:scale-110 transition-transform duration-200`}
                                />
                                <span className="text-gray-300 font-medium group-hover/tech:text-white transition-colors duration-200">
                                  {tech.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-purple-400 mb-3">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {experience.responsibilities.map(
                            (responsibility, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-gray-300 group-hover:text-white transition-colors duration-300"
                                style={{
                                  animationDelay: `${idx * 100}ms`,
                                }}
                              >
                                <span className="text-purple-400 mt-1 flex-shrink-0">
                                  →
                                </span>
                                <span className="leading-relaxed">
                                  {responsibility}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Projects Section */}
                      <div>
                        <h4 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                          <FaRobot />
                          Key Projects
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {experience.projects.map((project, idx) => {
                            const ProjectIcon = project.icon;
                            return (
                              <div
                                key={project.id}
                                className="group/project relative overflow-hidden bg-gray-800/40 border border-gray-600/30 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                                onMouseEnter={() =>
                                  setActiveProject(project.id)
                                }
                                onMouseLeave={() => setActiveProject(null)}
                                style={{
                                  animationDelay: `${idx * 150}ms`,
                                }}
                              >
                                {/* Project Background Glow */}
                                <div
                                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover/project:opacity-10 transition-opacity duration-300 rounded-xl`}
                                ></div>

                                <div className="relative">
                                  <div className="flex items-start gap-3 mb-3">
                                    <div
                                      className={`p-2 rounded-lg bg-gradient-to-br ${project.color}`}
                                    >
                                      <ProjectIcon className="text-white text-lg" />
                                    </div>
                                    <div className="flex-1">
                                      <h5 className="font-bold text-white group-hover/project:text-purple-300 transition-colors duration-300">
                                        {project.name}
                                      </h5>
                                      <span
                                        className={`inline-block px-2 py-1 text-xs rounded-full ${
                                          project.status === "Completed"
                                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                            : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                                        } mt-1`}
                                      >
                                        {project.status}
                                      </span>
                                    </div>
                                  </div>
                                  <p className="text-gray-400 text-sm leading-relaxed group-hover/project:text-gray-300 transition-colors duration-300">
                                    {project.description}
                                  </p>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute top-2 right-2 opacity-0 group-hover/project:opacity-100 transition-opacity duration-300">
                                  <FaExternalLinkAlt className="text-purple-400 text-sm" />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Stats */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Internship Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div
                className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purpel-400 bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 10px rgba(168, 85, 247, 0.3)",
                }}
              >
                4+
              </div>
              <div className="text-gray-400 text-sm">AI Agents Built</div>
            </div>
            <div className="group">
              <div
                className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 10px rgba(34, 197, 94, 0.3)",
                }}
              >
                3
              </div>
              <div className="text-gray-400 text-sm">Industries Served</div>
            </div>
            <div className="group">
              <div
                className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 10px rgba(251, 146, 60, 0.3)",
                }}
              >
                6+
              </div>
              <div className="text-gray-400 text-sm">Technologies Used</div>
            </div>
            <div className="group">
              <div
                className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 10px rgba(168, 85, 247, 0.3)",
                }}
              >
                100%
              </div>
              <div className="text-gray-400 text-sm">Project Success</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
