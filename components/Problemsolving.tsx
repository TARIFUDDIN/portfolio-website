"use client";

import React, { useState } from "react";
import {
  FaExternalLinkAlt,
  FaCode,
  FaTrophy,
  FaFire,
  FaChartLine,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiGithub } from "react-icons/si";

const ProblemSolvingSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const platforms = [
    {
      id: 1,
      name: "LeetCode",
      icon: SiLeetcode,
      link: "https://leetcode.com/u/user9107aJ/",
      description: "Algorithmic problem solving and coding challenges",
      stats: {
        solved: "600+",
        rank: "Knight",
        streak: "104 days",
      },
      gradient: "from-orange-500 via-yellow-500 to-orange-600",
      glowColor: "rgba(251, 146, 60, 0.5)",
      bgPattern: "leetcode",
      achievements: [
        { icon: FaTrophy, text: "200 Day Badge", color: "text-yellow-400" },
        {
          icon: FaFire,
          text: "Contest Rating 1500+",
          color: "text-orange-400",
        },
        { icon: FaChartLine, text: "Top 10% Global", color: "text-green-400" },
      ],
    },
    {
      id: 2,
      name: "GitHub",
      icon: SiGithub,
      link: "https://github.com/TARIFUDDIN",
      description: "Open source contributions and project repositories",
      stats: {
        repos: "45+",
        stars: "100+",
        contributions: "250+",
      },
      gradient: "from-gray-700 via-gray-600 to-gray-800",
      glowColor: "rgba(107, 114, 128, 0.5)",
      bgPattern: "github",
      achievements: [
        { icon: FaCode, text: "45+ Repositories", color: "text-blue-400" },
        { icon: FaTrophy, text: "Arctic Code Vault", color: "text-cyan-400" },
        { icon: FaFire, text: "300+ Contributions", color: "text-green-400" },
      ],
    },
    {
      id: 3,
      name: "GeeksforGeeks",
      icon: SiGeeksforgeeks,
      link: "https://www.geeksforgeeks.org/user/rafiuddiid40/",
      description: "Data structures, algorithms and technical articles",
      stats: {
        problems: "300+",
        score: "1000+",
        streak: "50+",
      },
      gradient: "from-green-500 via-emerald-500 to-green-600",
      glowColor: "rgba(34, 197, 94, 0.5)",
      bgPattern: "gfg",
      achievements: [
        { icon: FaTrophy, text: "Institute Rank 27", color: "text-yellow-400" },
        { icon: FaCode, text: "300+ Problems", color: "text-green-400" },
        { icon: FaChartLine, text: "1000+ Score", color: "text-blue-400" },
      ],
    },
  ];

  const backgroundPatterns = {
    leetcode: (
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 text-6xl transform rotate-12">
          ⚡
        </div>
        <div className="absolute bottom-6 left-6 text-4xl transform -rotate-12">
          🔥
        </div>
        <div className="absolute top-1/2 right-1/4 text-3xl">💡</div>
      </div>
    ),
    github: (
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 text-5xl transform rotate-12">
          ⭐
        </div>
        <div className="absolute bottom-6 left-6 text-4xl transform -rotate-12">
          🚀
        </div>
        <div className="absolute top-1/3 right-1/3 text-3xl">💻</div>
      </div>
    ),
    gfg: (
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 text-5xl transform rotate-12">
          🏆
        </div>
        <div className="absolute bottom-6 left-6 text-4xl transform -rotate-12">
          📊
        </div>
        <div className="absolute top-1/2 right-1/4 text-3xl">🎯</div>
      </div>
    ),
  };

  const handleCardClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="py-20 px-4" id="problem-solving">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
            style={{
              textShadow: `
                0 0 10px rgba(168, 85, 247, 0.5),
                0 0 20px rgba(168, 85, 247, 0.3),
                0 0 30px rgba(168, 85, 247, 0.2)
              `,
              filter: "drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))",
            }}
          >
            Problem Solving
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>
        <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
          Passionate about algorithmic challenges and competitive programming.
          Here&apos;s my journey across different coding platforms.
        </p>
      </div>

      {/* Platform Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {platforms.map((platform, index) => {
          const IconComponent = platform.icon;
          return (
            <div
              key={platform.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(platform.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(platform.link)}
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Main Card */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-gray-600/70 transition-all duration-500 group-hover:transform group-hover:scale-105">
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
                  style={{
                    filter: "blur(1px)",
                  }}
                ></div>

                {/* Background Pattern */}
                {
                  backgroundPatterns[
                    platform.bgPattern as keyof typeof backgroundPatterns
                  ]
                }

                {/* Glowing Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
                  style={{
                    background: `radial-gradient(circle at center, ${platform.glowColor} 0%, transparent 70%)`,
                    filter: "blur(20px)",
                    transform: "scale(1.1)",
                  }}
                ></div>

                {/* Card Content */}
                <div className="relative h-full flex flex-col p-6">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${platform.gradient} group-hover:scale-110 transition-transform duration-300`}
                      style={{
                        boxShadow:
                          hoveredCard === platform.id
                            ? `0 0 20px ${platform.glowColor}`
                            : "none",
                      }}
                    >
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {platform.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {platform.description}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-6">
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(platform.stats).map(
                        ([key, value], idx) => (
                          <div
                            key={key}
                            className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 group-hover:bg-gray-700/50 transition-all duration-300"
                            style={{
                              animationDelay: `${idx * 100}ms`,
                            }}
                          >
                            <div className="text-lg font-bold text-white">
                              {value}
                            </div>
                            <div className="text-xs text-gray-400 capitalize">
                              {key}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">
                      Achievements
                    </h4>
                    <div className="space-y-2">
                      {platform.achievements.map((achievement, idx) => {
                        const AchievementIcon = achievement.icon;
                        return (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-2 rounded-lg bg-gray-800/30 group-hover:bg-gray-700/40 transition-all duration-300"
                            style={{
                              animationDelay: `${idx * 150}ms`,
                            }}
                          >
                            <AchievementIcon
                              className={`text-sm ${achievement.color}`}
                            />
                            <span className="text-gray-300 text-sm">
                              {achievement.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Visit Button */}
                  <div
                    className="mt-6 group/btn relative overflow-hidden flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 font-medium hover:scale-105"
                    style={{
                      boxShadow:
                        hoveredCard === platform.id
                          ? `0 0 20px ${platform.glowColor}`
                          : "none",
                    }}
                  >
                    <span className="relative z-10">Visit Profile</span>
                    <FaExternalLinkAlt className="text-sm relative z-10 group-hover/btn:translate-x-1 transition-transform duration-200" />

                    {/* Button glow effect */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"
                      style={{
                        filter: "blur(2px)",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400/50 rounded-full animate-pulse group-hover:bg-purple-400 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-blue-400/30 rounded-full animate-bounce group-hover:bg-blue-400/70 transition-colors duration-300"></div>
              </div>

              {/* Card Shadow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-20"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${platform.glowColor} 0%, transparent 70%)`,
                  filter: "blur(25px)",
                  transform: "scale(1.1)",
                }}
              ></div>
            </div>
          );
        })}
      </div>

      {/* Bottom Stats Bar */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div
                className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-violet-400 bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 10px rgba(168, 85, 247, 0.3)",
                }}
              >
                1000+
              </div>
              <div className="text-gray-400 text-sm">Problems Solved</div>
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
              <div className="text-gray-400 text-sm">Platforms Active</div>
            </div>
            <div className="group">
              <div
                className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 10px rgba(251, 146, 60, 0.3)",
                }}
              >
                104
              </div>
              <div className="text-gray-400 text-sm">Day Streak</div>
            </div>
            <div className="group">
              <div
                className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 10px rgba(168, 85, 247, 0.3)",
                }}
              >
                Top 10%
              </div>
              <div className="text-gray-400 text-sm">Global Rank</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolvingSection;
