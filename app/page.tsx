"use client";
import { useEffect, useState } from "react";

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Show loading screen during SSR
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <h2 className="text-white text-2xl font-semibold">
            Loading Portfolio...
          </h2>
          <p className="text-gray-400 mt-2">
            Preparing amazing content for you
          </p>
        </div>
      </div>
    );
  }

  // Only import and render components on client side
  const { navItems } = require("@/data");
  const Hero = require("@/components/Hero").default;
  const Grid = require("@/components/Grid").default;
  const Footer = require("@/components/Footer").default;
  const Clients = require("@/components/Clients").default;
  const RecentProjects = require("@/components/RecentProjects").default;
  const { FloatingNav } = require("@/components/ui/FloatingNavbar");
  const Skills = require("@/components/skills").default;
  const AboutMe = require("@/components/AboutMe").default;
  const ProblemSolvingSection = require("@/components/Problemsolving").default;
  const WorkExperience = require("@/components/Experience").default;

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Skills />
        <AboutMe />
        <Clients />
        <WorkExperience />
        <ProblemSolvingSection />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
