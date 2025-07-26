"use client";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Skills from "@/components/skills";
import AboutMe from "@/components/AboutMe";
import ProblemSolvingSection from "@/components/Problemsolving";
import WorkExperience from "@/components/Experience";
import Approach from "@/components/Approach"; // Add this import
import ClientOnly from "@/components/ClientOnly"; // Import your ClientOnly wrapper

const Home = () => {
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

        {/* Wrap the Approach component that uses CanvasRevealEffect */}
        <ClientOnly
          fallback={
            <div className="w-full py-20">
              <h1 className="heading">
                My <span className="text-purple">approach</span>
              </h1>
              <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="max-w-sm w-full mx-auto p-4 lg:h-[35rem] rounded-3xl bg-gray-900 animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          }
        >
          <Approach />
        </ClientOnly>

        <ProblemSolvingSection />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
