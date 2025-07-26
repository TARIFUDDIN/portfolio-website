import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // Match your data: lg:col-span-3 + lg:col-span-2 = 5 columns for large screens
        // md:col-span-3 + md:col-span-3 = 6 columns for medium screens
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "rafiuddin.tarif@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* Only show title if NOT id 3 (tech stack has custom title) */}
          {id !== 3 && (
            <div
              className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
            >
              {title}
            </div>
          )}

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech Stack Grid - COMPLETELY REDESIGNED WITH SIMPLE ICONS */}
          {id === 3 && (
            <div className="relative h-full w-full flex flex-col">
              {/* Top Title - Light Pinkish */}
              <div className="text-center pt-6 pb-4">
                <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                  Passionate About Cutting Edge Technologies
                </h2>
              </div>

              {/* Tech Stack Animation - More Space, Smaller Badges */}
              <div className="flex-1 overflow-hidden px-4">
                <div className="space-y-3 flex flex-col justify-center h-full">
                  {/* Row 1 - Frontend Technologies (Left to Right) */}
                  <div className="relative overflow-hidden">
                    <div
                      className="flex gap-2 animate-scroll-right"
                      style={{ width: "fit-content", animationDuration: "25s" }}
                    >
                      {[
                        {
                          name: "ReactJS",
                          icon: "https://cdn.simpleicons.org/react",
                        },
                        {
                          name: "Next.js",
                          icon: "https://cdn.simpleicons.org/nextdotjs/white",
                        },
                        {
                          name: "TypeScript",
                          icon: "https://cdn.simpleicons.org/typescript",
                        },
                        {
                          name: "Tailwind CSS",
                          icon: "https://cdn.simpleicons.org/tailwindcss",
                        },
                        {
                          name: "Shadcn UI",
                          icon: "https://cdn.simpleicons.org/shadcnui/white",
                        },
                        {
                          name: "SASS",
                          icon: "https://cdn.simpleicons.org/sass",
                        },
                        {
                          name: "CSS",
                          icon: "https://cdn.simpleicons.org/css3",
                        },
                        {
                          name: "HTML",
                          icon: "https://cdn.simpleicons.org/html5",
                        },
                        {
                          name: "JavaScript",
                          icon: "https://cdn.simpleicons.org/javascript",
                        },
                        {
                          name: "Material UI",
                          icon: "https://cdn.simpleicons.org/mui",
                        },
                        // Duplicate for seamless loop
                        {
                          name: "ReactJS",
                          icon: "https://cdn.simpleicons.org/react",
                        },
                        {
                          name: "Next.js",
                          icon: "https://cdn.simpleicons.org/nextdotjs/white",
                        },
                        {
                          name: "TypeScript",
                          icon: "https://cdn.simpleicons.org/typescript",
                        },
                        {
                          name: "Tailwind CSS",
                          icon: "https://cdn.simpleicons.org/tailwindcss",
                        },
                        {
                          name: "Shadcn UI",
                          icon: "https://cdn.simpleicons.org/shadcnui/white",
                        },
                        {
                          name: "SASS",
                          icon: "https://cdn.simpleicons.org/sass",
                        },
                      ].map((tech, index) => (
                        <div
                          key={`row1-${tech.name}-${index}`}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-[#10132E] border border-gray-700 text-white font-medium text-xs whitespace-nowrap hover:border-gray-500 transition-all duration-300 min-w-fit"
                        >
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-4 h-4 flex-shrink-0"
                          />
                          <span className="text-xs truncate">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Row 2 - Backend Technologies (Right to Left) */}
                  <div className="relative overflow-hidden">
                    <div
                      className="flex gap-2 animate-scroll-left"
                      style={{ width: "fit-content", animationDuration: "20s" }}
                    >
                      {[
                        {
                          name: "Node.js",
                          icon: "https://cdn.simpleicons.org/nodedotjs",
                        },
                        {
                          name: "Nest.js",
                          icon: "https://cdn.simpleicons.org/nestjs",
                        },
                        {
                          name: "Express.js",
                          icon: "https://cdn.simpleicons.org/express/white",
                        },
                        {
                          name: "PostgreSQL",
                          icon: "https://cdn.simpleicons.org/postgresql",
                        },
                        {
                          name: "NeonDB",
                          icon: "https://cdn.simpleicons.org/postgresql",
                        },
                        {
                          name: "MySQL",
                          icon: "https://cdn.simpleicons.org/mysql",
                        },
                        {
                          name: "REST API",
                          icon: "https://cdn.simpleicons.org/fastapi",
                        },
                        {
                          name: "Prisma",
                          icon: "https://cdn.simpleicons.org/prisma",
                        },
                        {
                          name: "Zod",
                          icon: "https://cdn.simpleicons.org/zod",
                        },
                        {
                          name: "Zustand",
                          icon: "https://cdn.simpleicons.org/redux/pink",
                        },
                        {
                          name: "Bun",
                          icon: "https://cdn.simpleicons.org/bun",
                        },
                        {
                          name: "Redux",
                          icon: "https://cdn.simpleicons.org/redux",
                        },
                        // Duplicate for seamless loop
                        {
                          name: "Node.js",
                          icon: "https://cdn.simpleicons.org/nodedotjs",
                        },
                        {
                          name: "Nest.js",
                          icon: "https://cdn.simpleicons.org/nestjs",
                        },
                        {
                          name: "Express.js",
                          icon: "https://cdn.simpleicons.org/express/white",
                        },
                        {
                          name: "PostgreSQL",
                          icon: "https://cdn.simpleicons.org/postgresql",
                        },
                        {
                          name: "NeonDB",
                          icon: "https://cdn.simpleicons.org/postgresql",
                        },
                        {
                          name: "MySQL",
                          icon: "https://cdn.simpleicons.org/mysql",
                        },
                      ].map((tech, index) => (
                        <div
                          key={`row2-${tech.name}-${index}`}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-[#10132E] border border-gray-700 text-white font-medium text-xs whitespace-nowrap hover:border-gray-500 transition-all duration-300 min-w-fit"
                        >
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-4 h-4 flex-shrink-0"
                          />
                          <span className="text-xs truncate">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Row 3 - DevOps and Tools (Left to Right) */}
                  <div className="relative overflow-hidden">
                    <div
                      className="flex gap-2 animate-scroll-right"
                      style={{ width: "fit-content", animationDuration: "30s" }}
                    >
                      {[
                        {
                          name: "Git",
                          icon: "https://cdn.simpleicons.org/git",
                        },
                        {
                          name: "GitHub",
                          icon: "https://cdn.simpleicons.org/github/white",
                        },
                        {
                          name: "Docker",
                          icon: "https://cdn.simpleicons.org/docker",
                        },
                        {
                          name: "Clerk",
                          icon: "https://cdn.simpleicons.org/clerk",
                        },
                        {
                          name: "Ultravox",
                          icon: "https://cdn.simpleicons.org/webrtc",
                        },
                        {
                          name: "Convex",
                          icon: "https://cdn.simpleicons.org/databricks",
                        },
                        {
                          name: "Firebase",
                          icon: "https://cdn.simpleicons.org/firebase",
                        },
                        {
                          name: "Vercel",
                          icon: "https://cdn.simpleicons.org/vercel/white",
                        },
                        {
                          name: "Cal.com",
                          icon: "https://cdn.simpleicons.org/calendly",
                        },
                        {
                          name: "Stripe",
                          icon: "https://cdn.simpleicons.org/stripe",
                        },
                        {
                          name: "Razorpay",
                          icon: "https://cdn.simpleicons.org/razorpay",
                        },
                        // Duplicate for seamless loop
                        {
                          name: "Git",
                          icon: "https://cdn.simpleicons.org/git",
                        },
                        {
                          name: "GitHub",
                          icon: "https://cdn.simpleicons.org/github/white",
                        },
                        {
                          name: "Docker",
                          icon: "https://cdn.simpleicons.org/docker",
                        },
                        {
                          name: "Clerk",
                          icon: "https://cdn.simpleicons.org/clerk",
                        },
                        {
                          name: "Ultravox",
                          icon: "https://cdn.simpleicons.org/webrtc",
                        },
                        {
                          name: "Convex",
                          icon: "https://cdn.simpleicons.org/convex",
                        },
                      ].map((tech, index) => (
                        <div
                          key={`row3-${tech.name}-${index}`}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-[#10132E] border border-gray-700 text-white font-medium text-xs whitespace-nowrap hover:border-gray-500 transition-all duration-300 min-w-fit"
                        >
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-4 h-4 flex-shrink-0"
                          />
                          <span className="text-xs truncate">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom "Websites that stand out" section */}
              <div className="pb-6 px-6">
                <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl border border-gray-700 p-5">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 mx-3">
                      <div className="bg-gray-700 rounded-md px-3 py-1 text-sm text-gray-400 text-center">
                        ●
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-white mb-2">
                      Websites that stand out
                    </h4>
                    <p className="text-sm text-gray-400 mb-4">
                      and make a difference
                    </p>

                    <div className="flex gap-3 justify-center">
                      <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                        Get started
                      </button>
                      <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-300">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <style jsx>{`
                @keyframes scroll-left {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                @keyframes scroll-right {
                  0% {
                    transform: translateX(-50%);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }
                .animate-scroll-left {
                  animation: scroll-left linear infinite;
                }
                .animate-scroll-right {
                  animation: scroll-right linear infinite;
                }
              `}</style>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
