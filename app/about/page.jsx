"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div>
        <Navbar />
      </div>

      <main className="pt-16">
        {/* Hero Section with Overview */}
        <section
          id="section-overview"
          className="bg-[#134B70] min-h-screen flex items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
              {/* Left side - Overview content */}
              <div className="text-white space-y-4 sm:space-y-6 order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#D4AF37] mb-6 sm:mb-8 hover:scale-105 transition-transform duration-300 animate-fade-in">
                  Overview
                </h1>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 animate-fade-in delay-300">
                  At Sumiran Group, we don't just build structures – we shape
                  lifestyles. With a legacy of delivering consistently excellent
                  homes that blend thoughtful design, quality construction, and
                  value engineering, we create Vastu-compliant spaces.
                </p>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 animate-fade-in delay-500">
                  Every project reflects our deep commitment to trust,
                  transparency, and value. Whether you're buying your first home
                  or investing for your family's future, rest assured our
                  offerings are as seamless as it is satisfying.
                </p>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-3xl overflow-hidden p-2 sm:p-4 transform hover:scale-105 transition-all duration-500 hover:shadow-4xl">
                  <div className="h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[700px] rounded-xl sm:rounded-2xl overflow-hidden relative">
                    <Image
                      src="/About/overview.jpg"
                      alt="Overview Building"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders & Leadership Section */}
        <section
          id="section-founders"
          className="bg-[#92C3DD] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col items-center justify-center mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#134B70] mb-8 sm:mb-12 lg:mb-16 text-center hover:text-[#D4AF37] transition-all duration-500">
              Founders & Leadership
            </h2>

            <div className="max-w-4xl w-full">
              {/* Single row with both founders */}
              <div className="bg-[#134B70] text-white px-6 sm:px-8 lg:px-12 py-6 sm:py-8 rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                  <div className="text-center p-3 sm:p-4 rounded-xl hover:bg-[#6190bf] transition-all duration-300 cursor-pointer">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-[#D4AF37]">
                      Mr. Vinubhai Vasani
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg opacity-90">
                      Founder & Designated Partner
                    </p>
                  </div>
                  <div className="text-center p-3 sm:p-4 rounded-xl hover:bg-[#6190bf] transition-all duration-300 cursor-pointer">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-[#D4AF37]">
                      Mr. Chirag Vasani
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg opacity-90">
                      Designated Partner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Message Section - Left Side */}
        <section
          id="section-message"
          className="bg-[#92C3DD] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              {/* Left side - Founder's Message Content */}
              <div className="space-y-4 sm:space-y-6 w-full">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#134B70] mb-6 sm:mb-8 text-center lg:text-left hover:text-[#D4AF37] transition-all duration-500">
                  Founder's Message
                </h2>

                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="space-y-4 sm:space-y-6 text-[#134B70] leading-relaxed">
                    <p className="italic text-lg sm:text-xl lg:text-2xl font-medium text-[#134B70] mb-4 sm:mb-6 text-center">
                      "Every brick has a story to tell."
                    </p>
                    <p className="text-sm sm:text-base lg:text-xl text-[#134B70]">
                      For over two decades, we've been building more than just
                      homes — we've been crafting spaces where families flourish
                      beyond the boundaries of square feet. Inspired by nature,
                      designed with purpose, our projects create environments
                      where life blossoms, communities thrive, and addresses
                      redefine themselves as 'the place near SRS'.
                    </p>
                    <p className="text-sm sm:text-base lg:text-xl text-[#134B70]">
                      Since 1995, our mission has been to create homes and
                      townships that aren't just landmarks on the map but
                      milestones in the lives of those who live there. We are
                      proud to shape the suburban landscape of Mumbai — offering
                      peaceful sanctuaries where the mind, body, and soul find
                      balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Visionary Behind the Legacy Section - Right Side */}
        <section
          id="section-visionary"
          className="bg-[#92C3DD] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-end gap-8 lg:gap-16 items-center">
              {/* Right side - Visionary Content */}
              <div className="space-y-4 sm:space-y-6 w-full">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#134B70] mb-6 sm:mb-8 text-center lg:text-right hover:text-[#D4AF37] transition-all duration-500">
                  The Visionary Behind the Legacy
                </h2>

                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="text-[#134B70] text-sm sm:text-base lg:text-xl leading-relaxed space-y-4 sm:space-y-6">
                    <p>
                      Mr. Chirag Vasani, driven by entrepreneurial instinct and
                      deep-rooted values, has steered SRS Group towards becoming
                      one of Mumbai's trusted real estate names. With a keen eye
                      for design and unmatched business acumen, he has nurtured
                      SRS Group into an organization recognized for its
                      thoughtful development, landmark projects, and commitment
                      to transforming dreams into reality.
                    </p>
                    <p>
                      Our core team blends expertise with passion — a workforce
                      of highly skilled professionals led by visionary
                      leadership, creating iconic spaces that stand the test of
                      time.
                    </p>
                    <p>
                      Through strategic vision and unwavering commitment to
                      excellence, we continue to set new benchmarks in the real
                      estate industry, ensuring that every project reflects our
                      core values of trust, quality, and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section
          id="section-philosophy"
          className="bg-[#92C3DD] min-h-screen flex items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="container mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-3xl p-6 sm:p-8 lg:p-12 max-w-7xl mx-auto hover:shadow-4xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                {/* Left side - Philosophy content */}
                <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#134B70] mb-6 sm:mb-8 text-center lg:text-left hover:text-[#D4AF37] transition-colors duration-500">
                    PHILOSOPHY
                  </h2>
                  <div className="text-gray-700 text-sm sm:text-base lg:text-xl leading-relaxed space-y-4 sm:space-y-6">
                    <p>
                      At SRS Group, we believe real estate is more than just
                      buildings — it's the foundation of progress, community,
                      and belonging. We are committed to creating spaces where
                      people can build their dreams — whether it's a home for
                      their family or an enterprise for their future.
                    </p>
                    <p>
                      Our roots are grounded in tradition, values, and
                      responsibility. We take pride in being part of India's
                      growth story, building infrastructure that strengthens
                      economies and elevates lives. Beyond construction, we
                      build communities with heart. We recognize that the hands
                      behind every structure are those of countless workers, the
                      backbone of our industry. Uplifting these unsung heroes,
                      providing opportunities, and supporting the
                      underprivileged is part of our purpose. At SRS Group, we
                      don't just construct buildings; we lay the foundation for
                      better lives, stronger communities, and a brighter, modern
                      India.
                    </p>
                  </div>
                </div>

                {/* Right side - Philosophy image */}
                <div className="relative order-1 lg:order-2">
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                    <div className="h-[250px] sm:h-[350px] lg:h-[400px] xl:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden relative">
                      <Image
                        src="/About/Philosophy.jpg"
                        alt="Philosophy"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                        quality={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section
          id="section-achievements"
          className="bg-[#92C3DD] min-h-screen flex items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#134B70] mb-6 sm:mb-8 hover:text-[#D4AF37] transition-all duration-500">
              Achievements
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-[#134B70] mb-8 sm:mb-12 lg:mb-16 font-semibold px-4">
              Over 1 million square feet delivered. 600+ families now call our
              spaces home.
            </p>

            {/* Projects Carousel */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-4 lg:p-8 max-w-6xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-700">
              <div className="flex items-center justify-center gap-1 sm:gap-2 lg:gap-8">
                {/* Left Arrow */}
                <button className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#134B70]/70 hover:bg-[#D4AF37]/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 transform hover:-translate-x-1 shadow-md">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Achievement Projects - Full Width Mobile Layout */}
                <div className="flex items-center gap-1 sm:gap-2 lg:gap-6 overflow-hidden flex-1">
                  {/* Mobile: Show only center project with full width */}
                  <div className="block sm:hidden w-full">
                    <div className="relative overflow-hidden rounded-lg transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl ring-2 ring-[#D4AF37]/30 w-full">
                      <Image
                        src="/About/A2.jpg"
                        alt="Achievement Project 2"
                        width={320}
                        height={400}
                        className="object-cover transition-transform duration-500 hover:scale-110 w-full h-[300px] sm:h-[350px]"
                      />
                      {/* Featured and Status badges for mobile */}
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-[#D4AF37] to-[#f0c557] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        ⭐ Featured
                      </div>
                      <div className="absolute top-3 right-3 bg-emerald-500/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm shadow-lg">
                        Completed
                      </div>
                    </div>
                  </div>

                  {/* Tablet and Desktop: Show multiple projects */}
                  <div className="hidden sm:flex items-center gap-2 sm:gap-3 lg:gap-6 w-full justify-center">
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl">
                      <Image
                        src="/About/A1.jpg"
                        alt="Achievement Project 1"
                        width={220}
                        height={280}
                        className="object-cover transition-transform duration-500 hover:scale-110 sm:w-[200px] sm:h-[250px] lg:w-[280px] lg:h-[350px]"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-3xl ring-2 sm:ring-4 ring-[#D4AF37]/30">
                      <Image
                        src="/About/A2.jpg"
                        alt="Achievement Project 2"
                        width={260}
                        height={320}
                        className="object-cover transition-transform duration-500 hover:scale-110 sm:w-[240px] sm:h-[300px] lg:w-[320px] lg:h-[400px]"
                      />
                      {/* Featured badge for tablet/desktop */}
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-[#D4AF37] to-[#f0c557] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        ⭐ Featured
                      </div>
                      <div className="absolute top-3 right-3 bg-emerald-500/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm shadow-lg">
                        Completed
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl hidden lg:block">
                      <Image
                        src="/About/A3.jpg"
                        alt="Achievement Project 3"
                        width={220}
                        height={280}
                        className="object-cover transition-transform duration-500 hover:scale-110 w-[280px] h-[350px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Arrow */}
                <button className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#134B70]/70 hover:bg-[#D4AF37]/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 transform hover:translate-x-1 shadow-md">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Know More Button */}
              <div className="mt-8 sm:mt-10 lg:mt-12">
                <Button
                  className="bg-gradient-to-r from-[#134B70] to-[#1a5c8a] text-white hover:from-[#D4AF37] hover:to-[#f0c557] hover:scale-110 transform transition-all duration-500 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-2xl font-bold text-sm sm:text-base lg:text-lg group relative overflow-hidden"
                  onClick={() => (window.location.href = "/projects")}
                >
                  <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    KNOW MORE
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#f0c557] translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
