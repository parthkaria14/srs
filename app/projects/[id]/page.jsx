"use client";

import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import {
  MapPin,
  Download,
  Printer,
  Shield,
  Car,
  Flame,
  Droplets,
  Recycle,
  Building,
  Sun,
  Lightbulb,
  Trees,
  GraduationCap,
  ShoppingBag,
  Utensils,
  Heart,
  Activity,
  Home,
  Wifi,
  Camera,
  Users,
  Coffee,
  Play,
  Flower2,
  Star,
} from "lucide-react";
import { useState } from "react";

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);
  const [selectedFloorMap, setSelectedFloorMap] = useState(0);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Function to get appropriate icon for each amenity/feature
  const getIcon = (item) => {
    const itemLower = item.toLowerCase();

    // Security related
    if (itemLower.includes("security")) return Shield;

    // Parking related
    if (itemLower.includes("parking") || itemLower.includes("ample"))
      return Car;

    // Fire safety
    if (itemLower.includes("fire")) return Flame;

    // Water related
    if (itemLower.includes("water") || itemLower.includes("rainwater"))
      return Droplets;

    // Solar/Energy
    if (itemLower.includes("solar")) return Sun;

    // Lighting
    if (itemLower.includes("led") || itemLower.includes("lighting"))
      return Lightbulb;

    // Green spaces/Landscaping
    if (
      itemLower.includes("green") ||
      itemLower.includes("landscap") ||
      itemLower.includes("lawn")
    )
      return Trees;

    // Business/Commercial
    if (itemLower.includes("business") || itemLower.includes("centre"))
      return Building;

    // Management/Harvesting
    if (itemLower.includes("management") || itemLower.includes("harvesting"))
      return Recycle;

    // Education/Schools
    if (itemLower.includes("school") || itemLower.includes("education"))
      return GraduationCap;

    // Shopping/Malls
    if (
      itemLower.includes("mall") ||
      itemLower.includes("shopping") ||
      itemLower.includes("convenience")
    )
      return ShoppingBag;

    // Dining/Restaurant
    if (
      itemLower.includes("dining") ||
      itemLower.includes("restaurant") ||
      itemLower.includes("food")
    )
      return Utensils;

    // Healthcare
    if (
      itemLower.includes("health") ||
      itemLower.includes("medical") ||
      itemLower.includes("hospital")
    )
      return Heart;

    // Spiritual/Religious
    if (
      itemLower.includes("spiritual") ||
      itemLower.includes("temple") ||
      itemLower.includes("church")
    )
      return Star;

    // Gym/Fitness
    if (
      itemLower.includes("gym") ||
      itemLower.includes("fitness") ||
      itemLower.includes("club")
    )
      return Activity;

    // Location/Prime
    if (itemLower.includes("location") || itemLower.includes("prime"))
      return MapPin;

    // Internal/External planning
    if (
      itemLower.includes("planning") ||
      itemLower.includes("build") ||
      itemLower.includes("elevation")
    )
      return Home;

    // Entertainment
    if (
      itemLower.includes("entertainment") ||
      itemLower.includes("movie") ||
      itemLower.includes("lounge")
    )
      return Play;

    // Meditation/Wellness
    if (itemLower.includes("meditation") || itemLower.includes("deck"))
      return Flower2;

    // Celebration/Events
    if (itemLower.includes("celebration")) return Users;

    // Coffee/Leisure
    if (itemLower.includes("coffee") || itemLower.includes("cafe"))
      return Coffee;

    // Technology/Smart features
    if (
      itemLower.includes("smart") ||
      itemLower.includes("wifi") ||
      itemLower.includes("internet")
    )
      return Wifi;

    // Security cameras
    if (itemLower.includes("camera") || itemLower.includes("cctv"))
      return Camera;

    // Default icon for anything not matched
    return Star;
  };

  const generatePDF = async () => {
    try {
      setIsGeneratingPDF(true);

      // Create a comprehensive HTML brochure
      const brochureHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${project.name} - Property Brochure</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: 'Arial', sans-serif; 
              line-height: 1.6; 
              color: #333; 
              background: white;
            }
            .container { max-width: 800px; margin: 0 auto; padding: 20px; }
            
            /* Header */
            .header { 
              text-align: center; 
              background: linear-gradient(135deg, #134B70 0%, #1a5c8a 100%);
              color: white; 
              padding: 40px 20px; 
              margin-bottom: 30px; 
              border-radius: 15px;
            }
            .company-name { 
              font-size: 24px; 
              font-weight: bold; 
              margin-bottom: 10px; 
              color: #D4AF37;
            }
            .project-title { 
              font-size: 36px; 
              font-weight: bold; 
              margin-bottom: 15px; 
            }
            .project-subtitle { 
              font-size: 18px; 
              opacity: 0.9; 
            }

            /* Hero Image */
            .hero-image { 
              width: 100%; 
              height: 400px; 
              object-fit: cover; 
              border-radius: 15px; 
              margin-bottom: 30px; 
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            
            /* Secondary Images */
            .secondary-image {
              width: 100%;
              height: 350px;
              object-fit: cover;
              border-radius: 10px;
              margin: 20px 0;
              box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            }
            
            /* Floor Plan Images */
            .floor-plan-image {
              width: 100%;
              max-height: 500px;
              object-fit: contain;
              border-radius: 10px;
              border: 2px solid #134B70;
              background: white;
              padding: 15px;
              margin: 15px 0;
              box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            }

            /* Content Sections */
            .section { 
              margin-bottom: 40px; 
              page-break-inside: avoid;
            }
            .section-title { 
              font-size: 24px; 
              font-weight: bold; 
              color: #134B70; 
              margin-bottom: 20px; 
              border-bottom: 3px solid #D4AF37; 
              padding-bottom: 10px;
            }

            /* Description */
            .description { 
              background: #f8f9fa; 
              padding: 25px; 
              border-radius: 10px; 
              font-size: 16px; 
              line-height: 1.8; 
              margin-bottom: 20px;
            }

            /* Amenities Grid */
            .amenities-grid { 
              display: grid; 
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
              gap: 15px; 
              margin-bottom: 20px; 
            }
            .amenity-item { 
              background: #134B70; 
              color: white; 
              padding: 15px; 
              border-radius: 8px; 
              text-align: center; 
              font-weight: 500;
            }

            /* Features */
            .features-list { 
              display: grid; 
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
              gap: 15px; 
            }
            .feature-item { 
              background: white; 
              border: 2px solid #134B70; 
              padding: 15px; 
              border-radius: 8px; 
              text-align: center;
            }

            /* Address Section */
            .address-section { 
              background: #D4AF37; 
              color: #134B70; 
              padding: 25px; 
              border-radius: 10px; 
              font-weight: 500;
            }
            .address-title { 
              font-size: 20px; 
              font-weight: bold; 
              margin-bottom: 10px; 
            }

            /* Footer */
            .footer { 
              text-align: center; 
              margin-top: 40px; 
              padding-top: 30px; 
              border-top: 2px solid #134B70; 
              background: #f8f9fa; 
              padding: 30px; 
              border-radius: 10px;
            }
            .footer-company { 
              font-size: 20px; 
              font-weight: bold; 
              color: #134B70; 
              margin-bottom: 10px; 
            }
            .footer-tagline { 
              color: #666; 
              font-style: italic; 
            }
            .print-date { 
              margin-top: 20px; 
              font-size: 12px; 
              color: #999; 
            }

            /* Print Styles */
            @media print { 
              body { margin: 0; font-size: 12px; }
              .container { max-width: 100%; padding: 10px; }
              .section { page-break-inside: avoid; }
              .hero-image { height: 250px; page-break-inside: avoid; }
              .secondary-image { height: 200px; page-break-inside: avoid; }
              .floor-plan-image { 
                max-height: 300px; 
                page-break-inside: avoid; 
                page-break-before: auto;
                page-break-after: auto;
              }
              .section h2 { page-break-after: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Header -->
            <div class="header">
              <div class="company-name">SRS Property Consultants</div>
              <div class="project-title">${project.name}</div>
              <div class="project-subtitle">Premium Property Brochure</div>
            </div>

            <!-- Hero Image -->
            <img src="${project.landingPage}" alt="${
        project.name
      }" class="hero-image" />

            <!-- Project Description -->
            <div class="section">
              <h2 class="section-title">About ${project.name}</h2>
              <div class="description">
                Step into a space where elegance flows with quiet confidence. ${
                  project.name
                } reimagines everyday living with seamless design, expansive interiors, and curated amenities that reflect timeless sophistication. Every detail is crafted to match your rhythm — fluid, graceful, and thoughtfully designed. It's not just a residence, but an experience where beauty is felt in every corner. Live beautifully, live with grace.
                ${project.description ? `<br><br>${project.description}` : ""}
              </div>
              
              ${
                project.descriptionImg
                  ? `
              <!-- Interior/Design Image -->
              <img src="${project.descriptionImg}" alt="${project.name} Interior Design" class="secondary-image" />
              `
                  : ""
              }
              
              ${
                project.projectspageImg &&
                project.projectspageImg !== project.landingPage
                  ? `
              <!-- Project Showcase Image -->
              <img src="${project.projectspageImg}" alt="${project.name} Showcase" class="secondary-image" />
              `
                  : ""
              }
            </div>

            ${
              project.amenities && project.amenities.length > 0
                ? `
            <!-- Amenities -->
            <div class="section">
              <h2 class="section-title">Premium Amenities</h2>
              <div class="amenities-grid">
                ${project.amenities
                  .map(
                    (amenity) => `
                  <div class="amenity-item">${amenity}</div>
                `
                  )
                  .join("")}
              </div>
            </div>
            `
                : ""
            }

            ${
              project.features && project.features.length > 0
                ? `
            <!-- Features -->
            <div class="section">
              <h2 class="section-title">Features that Elevate Everyday Life</h2>
              <div class="features-list">
                ${project.features
                  .map(
                    (feature) => `
                  <div class="feature-item">${feature}</div>
                `
                  )
                  .join("")}
              </div>
            </div>
            `
                : ""
            }

            ${
              project.sustainableLiving && project.sustainableLiving.length > 0
                ? `
            <!-- Sustainable Living -->
            <div class="section">
              <h2 class="section-title">Essentials for Safe & Sustainable Living</h2>
              <div class="features-list">
                ${project.sustainableLiving
                  .map(
                    (item) => `
                  <div class="feature-item">${item}</div>
                `
                  )
                  .join("")}
              </div>
            </div>
            `
                : ""
            }

            ${
              project.floorMapImg && project.floorMapImg.length > 0
                ? `
            <!-- Floor Plans -->
            <div class="section">
              <h2 class="section-title">Floor Plans</h2>
              ${project.floorMapImg
                .map(
                  (floorMap, index) => `
                <div style="margin-bottom: 30px;">
                  <h3 style="color: #134B70; font-size: 18px; margin-bottom: 15px; text-align: center;">
                    ${
                      project.floorMapImg.length > 1
                        ? `Floor Plan ${index + 1}`
                        : "Floor Plan"
                    }
                  </h3>
                  <img src="${floorMap}" alt="${project.name} Floor Plan ${
                    index + 1
                  }" class="floor-plan-image" />
                </div>
              `
                )
                .join("")}
            </div>
            `
                : ""
            }

            <!-- Address -->
            <div class="section">
              <h2 class="section-title">Location</h2>
              <div class="address-section">
                <div class="address-title">Site Address:</div>
                <div>${project.name}</div>
                <div>${project.address}</div>
              </div>
            </div>

            <!-- Footer -->
            <div class="footer">
              <div class="footer-company">SRS Property Consultants</div>
              <div class="footer-tagline">Your Trusted Partner in Real Estate Excellence</div>
              <div class="print-date">Generated on: ${new Date().toLocaleDateString(
                "en-IN",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}</div>
            </div>
          </div>
        </body>
        </html>
      `;

      // Create a new window with the brochure content and trigger print
      const printWindow = window.open("", "_blank", "width=800,height=600");
      if (printWindow) {
        printWindow.document.write(brochureHTML);
        printWindow.document.close();

        // Wait for images to load before printing
        printWindow.onload = () => {
          setTimeout(() => {
            printWindow.print();
            printWindow.close();
          }, 1000);
        };
      } else {
        // Fallback: Try html2pdf if popup is blocked
        try {
          const html2pdf = (await import("html2pdf.js")).default;

          // Create a temporary container with the HTML content
          const tempContainer = document.createElement("div");
          tempContainer.innerHTML = brochureHTML;
          tempContainer.style.position = "absolute";
          tempContainer.style.left = "-9999px";
          document.body.appendChild(tempContainer);

          const opt = {
            margin: [10, 10, 10, 10],
            filename: `${project.name.replace(/\s+/g, "_")}_brochure.pdf`,
            image: { type: "jpeg", quality: 0.9 },
            html2canvas: {
              scale: 2,
              useCORS: true,
              allowTaint: true,
              backgroundColor: "#ffffff",
              logging: false,
              windowWidth: 800,
              windowHeight: 1200,
            },
            jsPDF: {
              unit: "mm",
              format: "a4",
              orientation: "portrait",
            },
          };

          await html2pdf().set(opt).from(tempContainer).save();
          document.body.removeChild(tempContainer);
        } catch (pdfError) {
          console.warn("Both print and PDF generation failed:", pdfError);
          alert(
            "Unable to generate brochure. Please check your browser settings and try again."
          );
        }
      }
    } catch (error) {
      console.error("Error generating brochure:", error);
      alert("There was an error generating the brochure. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Project Not Found
        </h1>
        <p className="text-gray-600">
          The project you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div id="project-content" className="pt-16">
        <div className="relative h-[20vh] sm:h-[40vh] lg:h-screen min-h-[300px] sm:min-h-[200px] overflow-hidden">
          <Image
            src={project.landingPage}
            alt={project.name}
            fill
            className="object-fit object-center"
            priority
          />
        </div>

        {/* Brochure Section */}
        <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[500px] sm:min-h-[600px] overflow-hidden">
          {/* Background Image */}
          <Image
            src="/P5/2nd tab.jpg"
            alt="Elegant living space"
            fill
            className="object-fit"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl lg:max-w-2xl">
                <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
                  Step into a space where elegance flows with quiet confidence.{" "}
                  {project.name} reimagines everyday living with seamless
                  design, expansive interiors, and curated amenities that
                  reflect timeless sophistication. Every detail is crafted to
                  match your rhythm — fluid, graceful, and thoughtfully
                  designed. It's not just a residence, but an experience where
                  beauty is felt in every corner. Live beautifully, live with
                  grace.
                </p>

                <div className="mb-4 sm:mb-6">
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-light mb-2">
                    All you need to
                  </h3>
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-light">
                    know, in one click
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 no-print">
                  <button
                    onClick={generatePDF}
                    disabled={isGeneratingPDF}
                    className={`${
                      isGeneratingPDF
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    } text-white px-6 sm:px-8 py-3 rounded-lg 
                                                     font-medium transition-colors duration-300 flex items-center justify-center gap-2
                                                     shadow-lg hover:shadow-xl disabled:shadow-none text-sm sm:text-base`}
                  >
                    <Download
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        isGeneratingPDF ? "animate-spin" : ""
                      }`}
                    />
                    {isGeneratingPDF ? "Generating..." : "Get the brochure"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        {project.amenities && project.amenities.length > 0 && (
          <div className="bg-[#134B70] py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">
                Amenities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
                {project.amenities.map((amenity, index) => {
                  const IconComponent = getIcon(amenity);
                  return (
                    <div key={index} className="text-center text-white group">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-6 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 shadow-lg">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37]" />
                      </div>
                      <p className="text-xs sm:text-sm font-medium leading-relaxed px-1 sm:px-2">
                        {amenity}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Sustainable Living Section */}
        {project.sustainableLiving && project.sustainableLiving.length > 0 && (
          <div className="bg-[#134B70] py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#134B70] mb-8 sm:mb-12 lg:mb-16">
                  Essentials for Safe & Sustainable Living
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
                  {project.sustainableLiving.map((item, index) => {
                    const IconComponent = getIcon(item);
                    return (
                      <div
                        key={index}
                        className="text-center group cursor-pointer"
                      >
                        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-[#134B70] rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:bg-[#0f3a5f] transition-colors duration-300 shadow-lg group-hover:shadow-xl">
                          <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                        </div>
                        <p className="text-sm sm:text-base font-semibold text-gray-700 leading-relaxed px-2 sm:px-4">
                          {item}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        {project.features && project.features.length > 0 && (
          <div className="bg-[#134B70] py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#134B70] mb-8 sm:mb-12 lg:mb-16">
                  Features that Elevate Everyday Life
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
                  {project.features.map((feature, index) => {
                    const IconComponent = getIcon(feature);
                    return (
                      <div
                        key={index}
                        className="text-center group cursor-pointer"
                      >
                        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-[#134B70] rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:bg-[#0f3a5f] transition-colors duration-300 shadow-lg group-hover:shadow-xl">
                          <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                        </div>
                        <p className="text-sm sm:text-base font-semibold text-gray-700 leading-relaxed px-2 sm:px-4">
                          {feature}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Demo Section */}
        {project.videoDemo && (
          <div className="bg-gray-900 py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">
                Virtual Walkthrough
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    poster={project.landingPage}
                  >
                    <source src={project.videoDemo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Floor Map Section */}
        {project.floorMapImg && project.floorMapImg.length > 0 && (
          <div className="bg-gray-100 py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
                Floor Map
              </h2>

              {/* Floor Plan Selector */}
              {project.floorMapImg.length > 1 && (
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
                  {project.floorMapImg.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedFloorMap(index)}
                      className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                        selectedFloorMap === index
                          ? "bg-[#134B70] text-white"
                          : "bg-white text-gray-700 hover:bg-gray-200 border border-gray-300"
                      }`}
                    >
                      Floor Plan {index + 1}
                    </button>
                  ))}
                </div>
              )}

              {/* Floor Plan Image */}
              <div className="max-w-4xl mx-auto">
                <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={project.floorMapImg[selectedFloorMap]}
                    alt={`${project.name} floor plan ${selectedFloorMap + 1}`}
                    fill
                    className="object-contain p-4 sm:p-6 lg:p-8"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Address Section */}
        <div className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Interactive Map */}
              <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] bg-gray-200 rounded-lg overflow-hidden order-2 lg:order-1">
                <iframe
                  src={project.map}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-[#134B70]" />
                  Site Address:
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  <p className="text-base sm:text-lg font-semibold text-[#134B70] mb-2">
                    {project.name}
                  </p>
                  <p className="text-sm sm:text-base">{project.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
