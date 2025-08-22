"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

// Helper component for individual project cards
const ProjectCard = ({ project, widthClass = "w-full" }) => (
  <div className={`p-1 ${widthClass}`}>
    <Link href={`/projects/${project.id}`}>
      <Card className="overflow-hidden border-none bg-transparent transition-all duration-300 transform hover:scale-105 cursor-pointer">
        <CardContent className="p-0 h-[300px] sm:h-[350px] md:h-[400px] relative">
          <Image
            src={project.projectspageImg}
            alt={project.name}
            fill
            className="object-fit rounded-2xl transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/400x400/134B70/ffffff?text=Image";
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 rounded-b-2xl">
            <span className="font-semibold text-white text-base sm:text-lg">
              {project.name}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  </div>
);

// Main Page Component
export default function ProjectsPage() {
  // Filter completed projects (excluding Snow White which is featured separately)
  const completedProjects = projects.filter(
    (project) => project.completed && project.id !== "sumukh-snow-white"
  );

  // Get the Snow White project for ongoing section
  const snowWhiteProject = projects.find(
    (project) => project.id === "sumukh-snow-white"
  );

  // For upcoming projects, you can create a separate array or filter
  const upcomingProjects = [
    {
      id: "sumukh-hills-phase-ii",
      name: "Sumukh Hills Phase II",
      projectspageImg: "/Projects/U1.png",
    },
    {
      id: "sumukh-signature-square",
      name: "Sumukh Signature Square",
      projectspageImg: "/Projects/U2.jpg",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <div className={`transition-all duration-1000`}>
        <Navbar />
      </div>
      {/* 1. Hero Section */}
      <section className="relative h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] mt-16">
        <div className="absolute inset-0 z-10">
          <Image
            src={"/Projects/web banner.jpg"}
            alt="Projects Banner"
            fill
            className="w-full h-full object-fit object-center"
            priority
          />
          {/* Optional overlay for better contrast */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </section>

      <main className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        {/* 2. Completed Projects Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#134B70] p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl shadow-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-white mb-6 sm:mb-8">
              Completed Projects
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-1">
                {completedProjects.map((project, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <ProjectCard project={project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white bg-white/20 hover:bg-white/30 border-none -left-2 sm:-left-4 md:-left-12" />
              <CarouselNext className="text-white bg-white/20 hover:bg-white/30 border-none -right-2 sm:-right-4 md:-right-12" />
            </Carousel>
          </div>
        </section>

        {/* 3. Ongoing Projects Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="bg-[#134B70] p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl text-white shadow-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6 sm:mb-8">
              Ongoing Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div className="w-full overflow-hidden rounded-lg shadow-lg relative aspect-[4/5] order-2 lg:order-1">
                <Image
                  src={
                    snowWhiteProject?.projectspageImg ||
                    "/Projects/SNow white.jpg"
                  }
                  alt={snowWhiteProject?.name || "Sumukh Snow White"}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x750/134B70/ffffff?text=Ongoing+Project";
                  }}
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37]">
                  {snowWhiteProject?.name || "Sumukh Snow White"}
                </h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
                  {snowWhiteProject?.description ||
                    "Welcome to Sumukh Snow White - a residence that reflects your personality and taste. Located in the prime location of Mumbai, it is a perfect blend of comfort and convenience."}
                </p>
                <Link
                  href={`/projects/${
                    snowWhiteProject?.id || "sumukh-snow-white"
                  }`}
                >
                  <Button
                    variant="outline"
                    className="mt-4 sm:mt-6 text-[#D4AF37] border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#134B70] font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base"
                  >
                    KNOW MORE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="bg-[#134B70] p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl shadow-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-white mb-6 sm:mb-8">
              Upcoming Projects
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              {upcomingProjects.map((project, index) => (
                <div
                  key={index}
                  className="p-1 w-full sm:w-auto sm:min-w-[280px] sm:max-w-[320px] md:min-w-[300px] md:max-w-[350px]"
                >
                  <Card className="overflow-hidden shadow-none border-none bg-transparent transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-0 h-[300px] sm:h-[350px] md:h-[400px] relative">
                      <Image
                        src={project.projectspageImg}
                        alt={project.name}
                        fill
                        className="object-fit rounded-2xl transition-transform duration-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://placehold.co/400x400/134B70/ffffff?text=Coming+Soon";
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 rounded-b-2xl"></div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
