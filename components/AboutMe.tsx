"use client";

import React from "react";

const AboutMe = () => {
  return (
    <div className="py-20" id="about">
      <div className="flex flex-col items-center relative">
        {/* Background Gradient Effects */}
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Header Section */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            ABOUT ME
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold">
            <span className="text-white">Know About </span>
            <span className="text-purple-400 italic glow-text">
              The Developer
            </span>
          </h3>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <h4 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Full-Stack Developer and
                <br />
                <span className="text-white">a little bit of </span>
                <span className="text-purple-400 italic glow-text">
                  everything
                </span>
              </h4>

              <div className="space-y-6 text-gray-300 leading-relaxed max-w-2xl">
                <p className="text-lg">
                  I'm a passionate full-stack developer specializing in modern
                  tech stacks like
                  <span className="text-blue-400 font-medium"> Next.js</span>,
                  <span className="text-red-400 font-medium"> NestJS</span>,
                  <span className="text-green-400 font-medium"> MERN</span>, and
                  <span className="text-blue-500 font-medium"> TypeScript</span>
                  .
                </p>

                <p className="text-lg">
                  My expertise extends beyond traditional development into the
                  realm of
                  <span className="text-purple-400 font-medium">
                    {" "}
                    AI-driven automation
                  </span>
                  , utilizing cutting-edge tools like
                  <span className="text-orange-400 font-medium"> n8n</span>,
                  <span className="text-cyan-400 font-medium"> Zep AI</span>,
                  and
                  <span className="text-pink-400 font-medium"> Ultravox</span>
                  to create intelligent solutions.
                </p>

                <p className="text-lg">
                  I specialize in building{" "}
                  <span className="text-yellow-400 font-medium">
                    scalable SaaS applications
                  </span>{" "}
                  and
                  <span className="text-green-400 font-medium">
                    {" "}
                    AI-driven products
                  </span>{" "}
                  that solve real-world problems. Recently, I've been exploring
                  <span className="text-indigo-400 font-medium">
                    {" "}
                    multi-agent AI systems
                  </span>{" "}
                  using frameworks like
                  <span className="text-emerald-400 font-medium">
                    {" "}
                    CrewAI
                  </span>{" "}
                  and
                  <span className="text-violet-400 font-medium">
                    {" "}
                    LangGraph
                  </span>{" "}
                  to build sophisticated autonomous trading platforms.
                </p>

                <p className="text-lg">
                  When I'm not immersed in code, I'm exploring emerging
                  technologies and staying curious about the endless
                  possibilities in tech.
                  <span className="text-purple-400 font-medium">
                    {" "}
                    Innovation drives me
                  </span>
                  , and I believe in waking up each day eager to make a
                  difference through technology.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                {/* Animated Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                {/* Image Container */}
                <div className="relative w-80 h-96 md:w-96 md:h-[450px] rounded-2xl overflow-hidden bg-gray-900 border border-gray-700">
                  {/* Placeholder for your image */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-900 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-700 flex items-center justify-center">
                        <svg
                          className="w-12 h-12"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <img
                        src="myimage.JPG"
                        alt="Syed Tarifuddin Ahmed"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-700"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black-100 to-transparent pointer-events-none"></div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default AboutMe;
