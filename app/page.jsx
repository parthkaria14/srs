"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Get current three projects to display
  const getCurrentProjects = () => {
    if (projects.length === 0) return [];
    const projectsToShow = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentProjectIndex + i) % projects.length;
      // Transform projects data to match the expected format
      const project = projects[index];
      projectsToShow.push({
        id: project.id,
        title: project.name,
        subtitle: project.completed ? "Completed Project" : "Under Development",
        image: project.homePageImg,
        status: project.completed ? "Completed" : "Under Construction",
        location: project.address.split(",").slice(-2).join(",").trim(), // Extract city from address
      });
    }
    return projectsToShow;
  };

  // Navigate to next projects
  const nextProjects = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  // Navigate to previous projects
  const prevProjects = () => {
    setCurrentProjectIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const currentProjects = getCurrentProjects();

  return (
    <div className="min-h-screen min-h-screen-mobile">
      {/* Header */}
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative w-full min-h-[30vh] sm:min-h-[60vh] lg:min-h-[95vh] max-h-[100vh] bg-[#134B70] text-white overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/Homepage/LandingPage.jpg"
              alt="Crafting Homes with Heart"
              fill
              className={`object-fit object-center w-full h-full min-h-[30vh] sm:min-h-[60vh] lg:min-h-[95vh] max-h-[100vh] transition-all duration-1000 ${
                heroLoaded ? "scale-100" : "scale-110"
              }`}
              quality={100}
              priority
              sizes="100vw"
            />
          </div>
        </section>

        {/* Our Legacy Section */}
        <section className="flex justify-center items-center bg-[#92C3DD] min-h-[100vh] py-12 sm:py-16 lg:py-0 relative overflow-hidden">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 px-4 sm:px-6 lg:px-8">
            {/* Left side - Building image */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-3xl overflow-hidden relative mt-4 sm:mt-8">
                {/* Building Image - Clean without any overlay */}
                <div className="h-[300px] sm:h-[400px] lg:h-[550px] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/Homepage/our legacy.jpg"
                    alt="Modern Building"
                    fill
                    className="object-fit"
                    quality={100}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <h4 className="text-3xl sm:text-3xl lg:text-3xl text-[#134B70] mb-4 sm:mb-6 font-serif font-bold">
                Our Legacy
              </h4>
              <p className="text-gray-700 text-sm sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 lg:mr-6">
                With a legacy spanning over 25 years, SRS Group has established
                itself as one of Mumbai's most trusted names in real estate.
                From crafting thoughtfully designed residential spaces to
                delivering projects with transparency and timeliness, we believe
                in building more than just structures _ we build lasting
                relationships. Our commitment to quality, customer centricity,
                and ethical practices has helped us create homes that stand the
                test of time. Whether it's a first home or a lifelong
                investment, we ensure each project reflects our core values of
                trust, integrity, and excellence in every brick laid.
              </p>
              <Button
                className="bg-[#134B70] text-white hover:bg-[#D4AF37] hover:scale-105 transform transition-all duration-300 px-6 sm:px-8 py-2 sm:py-3 rounded-md shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base"
                onClick={() => (window.location.href = "/about")}
              >
                KNOW MORE
              </Button>
            </div>
          </div>
        </section>

        {/* Group of Companies Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#92C3DD] relative">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#134B70] mb-8 sm:mb-12 hover:text-[#D4AF37] transition-colors duration-500">
              Group of Companies
            </h2>
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 group">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 items-center justify-items-center">
                {/* Company logos - responsive layout */}
                <div className="flex justify-center transform hover:scale-110 transition-all duration-300 hover:rotate-1">
                  <Image
                    src="/Homepage/logo.png"
                    alt="Shree Riddhi Siddhi Real Ventures LLP"
                    width={120}
                    height={60}
                    className="filter hover:brightness-110 transition-all duration-300 w-auto h-20 sm:h-16 lg:h-20"
                  />
                </div>
                <div className="flex justify-center transform hover:scale-110 transition-all duration-300 hover:-rotate-1">
                  <Image
                    src="/Homepage/yogsiddhi.jpg"
                    alt="Yogsiddhi Developers"
                    width={120}
                    height={60}
                    className="filter hover:brightness-110 transition-all duration-300 w-auto h-20 sm:h-16 lg:h-20"
                  />
                </div>
                <div className="flex justify-center transform hover:scale-110 transition-all duration-300 hover:rotate-1 sm:col-span-2 lg:col-span-1">
                  <Image
                    src="/Homepage/logo.png"
                    alt="Shree Riddhi Siddhi Realty Spaces LLP"
                    width={120}
                    height={60}
                    className="filter hover:brightness-110 transition-all duration-300 w-auto h-20 sm:h-16 lg:h-20"
                  />
                </div>
                <div className="flex justify-center transform hover:scale-110 transition-all duration-300 hover:-rotate-1">
                  <Image
                    src="/Homepage/logo.png"
                    alt="Shree Riddhi Siddhi Construction"
                    width={120}
                    height={60}
                    className="filter hover:brightness-110 transition-all duration-300 w-auto h-20 sm:h-16 lg:h-20"
                  />
                </div>
                <div className="flex justify-center transform hover:scale-110 transition-all duration-300 hover:rotate-1">
                  <Image
                    src="/Homepage/navdurga.jpg"
                    alt="Navdurga Constructions"
                    width={120}
                    height={60}
                    className="filter hover:brightness-110 transition-all duration-300 w-auto h-20 sm:h-16 lg:h-20"
                  />
                </div>
                <div className="flex justify-center transform hover:scale-110 transition-all duration-300 hover:-rotate-1 sm:col-span-2 lg:col-span-1">
                  <Image
                    src="/Homepage/logo.png"
                    alt="Shree Riddhi Siddhi Developers"
                    width={120}
                    height={60}
                    className="filter hover:brightness-110 transition-all duration-300 w-auto h-20 sm:h-16 lg:h-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Projects Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#92C3DD] relative overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#134B70] mb-8 sm:mb-12 hover:text-white transition-colors duration-500 transform hover:scale-105">
              Explore Projects
            </h2>

            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-700 border border-gray-100 group hover:border-[#D4AF37]/30">
              {/* Projects Display */}
              <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-8 mb-6 sm:mb-8">
                {/* Left Arrow */}
                <button
                  onClick={prevProjects}
                  className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-[#134B70] to-[#1a5c8a] hover:from-[#D4AF37] hover:to-[#f0c557] rounded-full flex items-center justify-center text-white transition-all duration-500 hover:scale-125 shadow-lg hover:shadow-2xl group/arrow transform hover:-translate-x-1 active:scale-110"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transform group-hover/arrow:scale-125 group-hover/arrow:-translate-x-0.5 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Projects Grid - Responsive display */}
                <div className="flex items-center gap-2 sm:gap-4 lg:gap-8 min-h-[300px] sm:min-h-[350px] lg:min-h-[420px] overflow-hidden">
                  {currentProjects.length > 0 ? (
                    currentProjects.map((project, index) => {
                      // Mobile: Only show center project, no hover overlay, show name directly
                      const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
                      const showAsCard = isMobile && index === 1;
                      return (
                        <div
                          key={`${project.id}-${currentProjectIndex}`}
                          className={`group/item transform transition-all duration-700 ease-out cursor-pointer ${
                            index === 1
                              ? "relative scale-105"
                              : "scale-95 hover:scale-100"
                          } hover:scale-110 animate-fade-in ${
                            // Hide side projects on mobile, show only center project
                            index !== 1 ? "hidden sm:block" : ""
                          } ${
                            // On tablet, hide third project
                            index === 2 ? "hidden lg:block" : ""
                          }`}
                          style={{
                            animationDelay: `${index * 150}ms`,
                            animationFillMode: "both",
                          }}
                          onClick={() =>
                            (window.location.href = `/projects/${project.id}`)
                          }
                        >
                          <div
                            className={`relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-500 ${
                              index === 1
                                ? "ring-2 sm:ring-4 ring-[#D4AF37]/30 shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl hover:ring-[#D4AF37]/50"
                                : "shadow-lg hover:shadow-2xl"
                            } group-hover/item:shadow-[#134B70]/20`}
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={index === 1 ? 280 : 240}
                              height={index === 1 ? 350 : 300}
                              className="object-fit transition-all duration-700 group-hover/item:scale-110 group-hover/item:brightness-110"
                            />

                            {/* Mobile view: show name and info as card, no hover */}
                            <div
                              className={`${
                                showAsCard
                                  ? "block sm:hidden absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#134B70]/90 via-[#134B70]/40 to-transparent p-4"
                                  : "hidden"
                              }`}
                            >
                              <h3 className="font-bold text-lg text-white mb-1">{project.title}</h3>
                              <p className="text-xs text-white opacity-90 mb-1">{project.subtitle}</p>
                              <p className="text-xs text-white opacity-75">📍 {project.location}</p>
                            </div>

                            {/* Desktop/tablet: hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#134B70]/90 via-[#134B70]/40 to-transparent opacity-0 group-hover/item:opacity-100 transition-all duration-500 hidden sm:block">
                              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-white transform translate-y-8 group-hover/item:translate-y-0 transition-all duration-500 delay-100">
                                <h3
                                  className={`font-bold mb-1 sm:mb-2 transform translate-y-4 group-hover/item:translate-y-0 transition-all duration-300 delay-200 ${
                                    index === 1
                                      ? "text-lg sm:text-xl lg:text-2xl"
                                      : "text-base sm:text-lg lg:text-xl"
                                  }`}
                                >
                                  {project.title}
                                </h3>
                                <p className="text-xs sm:text-sm opacity-90 mb-1 sm:mb-2 transform translate-y-4 group-hover/item:translate-y-0 transition-all duration-300 delay-300">
                                  {project.subtitle}
                                </p>
                                <p className="text-xs opacity-75 transform translate-y-4 group-hover/item:translate-y-0 transition-all duration-300 delay-400">
                                  📍 {project.location}
                                </p>
                              </div>
                            </div>

                            {/* Status Badge */}
                            {project.status && (
                              <div
                                className={`absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                                  project.status === "Completed"
                                    ? "bg-blue-500/90 text-white shadow-lg shadow-emerald-500/25"
                                    : project.status === "Under Construction"
                                    ? "bg-orange-500/90 text-white shadow-lg shadow-orange-500/25"
                                    : project.status === "Upcoming"
                                    ? "bg-red-500/90 text-white shadow-lg shadow-blue-500/25"
                                    : "bg-gray-500/90 text-white shadow-lg shadow-gray-500/25"
                                }`}
                              >
                                {project.status}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    /* Fallback loading animation */
                    <div className="flex items-center gap-2 sm:gap-4 lg:gap-8">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className={`animate-pulse ${
                            i !== 2 ? "hidden sm:block" : ""
                          } ${i === 3 ? "hidden lg:block" : ""}`}
                        >
                          <div
                            className={`bg-gray-300 rounded-2xl sm:rounded-3xl ${
                              i === 2
                                ? "w-60 sm:w-72 lg:w-80 h-72 sm:h-84 lg:h-96"
                                : "w-52 sm:w-60 lg:w-70 h-64 sm:h-72 lg:h-80"
                            }`}
                          ></div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={nextProjects}
                  className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-[#134B70] to-[#1a5c8a] hover:from-[#D4AF37] hover:to-[#f0c557] rounded-full flex items-center justify-center text-white transition-all duration-500 hover:scale-125 shadow-lg hover:shadow-2xl group/arrow transform hover:translate-x-1 active:scale-110"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transform group-hover/arrow:scale-125 group-hover/arrow:translate-x-0.5 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <Button
                className="bg-[#134B70] text-white hover:bg-[#D4AF37] px-6 sm:px-8 py-2 sm:py-3 rounded-md shadow-lg font-semibold transition-all duration-300 text-sm sm:text-base"
                onClick={() => (window.location.href = "/projects")}
              >
                KNOW MORE
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
