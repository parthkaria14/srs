"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeLoanCalculator from "@/components/resources/HomeLoanCalculator";
import StampDutyCalculator from "@/components/resources/StampDutyCalculator";
import FAQSection from "@/components/resources/FAQSection";
import ExpertGuides from "@/components/resources/ExpertGuides";
import ResourcesStyles from "@/components/resources/ResourcesStyles";

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <ResourcesStyles />

      {/* Header */}
      <div>
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="py-12 sm:py-16 lg:py-20 pt-20 sm:pt-28 lg:pt-36 bg-[#134B70]">
        {/* Calculators Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-10 lg:mb-12">
            Financial Calculators
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
            <HomeLoanCalculator />
            <StampDutyCalculator />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Expert Guides Section */}
        <ExpertGuides />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
