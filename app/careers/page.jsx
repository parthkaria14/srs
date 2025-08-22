"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerForm from "@/components/careers/CareerForm";
import ContactForm from "@/components/careers/ContactForm";
import AddressSection from "@/components/careers/AddressSection";

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div>
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="py-12 pt-28">
        <div className="container mx-auto px-4 space-y-12">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#134B70] mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our growing
              team. Whether you're interested in real estate, property
              management, or customer service, we'd love to hear from you.
            </p>
          </div>

          {/* Career Application Form */}
          <section id="careers" className="mb-16">
            <CareerForm />
          </section>

          {/* Contact Form */}
          <section id="contact" className="mb-16">
            <ContactForm />
          </section>

          {/* Address Section */}
          <section id="address" className="mb-16">
            <AddressSection />
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
