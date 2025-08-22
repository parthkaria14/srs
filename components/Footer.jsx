"use client";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, MessageCircle, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#134B70] to-[#0F3A5F] text-white py-12 px-8 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 relative z-10">
        <div className="group">
          <h3 className="font-bold text-xl mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
            Shree Riddhi Siddhi
          </h3>
        </div>

        <div className="group">
          <h4 className="font-semibold mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-[#D4AF37] transition-all duration-300 hover:translate-x-2 inline-block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#D4AF37] transition-all duration-300 hover:translate-x-2 inline-block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-[#D4AF37] transition-all duration-300 hover:translate-x-2 inline-block"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="hover:text-[#D4AF37] transition-all duration-300 hover:translate-x-2 inline-block"
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#D4AF37] transition-all duration-300 hover:translate-x-2 inline-block"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="group">
          <h4 className="font-semibold mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
            Get in Touch
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#D4AF37] transition-colors duration-300">
              <a
                href="https://www.google.com/maps?q=103,+Sumukh+Darshan+Behind+Parekh+Nagar,+Near+Swami+Vivekanand+International+School,+S.V.+Road+Kandivali+(West)"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37]"
              >
                Address
              </a>
            </li>
            <li className="hover:text-[#D4AF37] transition-colors duration-300">
              <a
                href="https://wa.me/912228013354"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37]"
              >
                Phone
              </a>
            </li>
            <li className="hover:text-[#D4AF37] transition-colors duration-300">
              <a
                href="mailto:info@srsgroup.in"
                className="hover:text-[#D4AF37]"
              >
                Email
              </a>
            </li>
            <li className="hover:text-[#D4AF37] transition-colors duration-300">
              Office Hours: Mon-Sat | 10 AM - 7 PM
            </li>
          </ul>
        </div>

        <div className="group">
          <h4 className="font-semibold mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:scale-125 hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-glow"
            >
              <Linkedin
                size={24}
                className="hover:brightness-125 transition-all duration-300 text-white hover:text-[#D4AF37]"
              />
            </a>
            <a
              href="#"
              className="hover:scale-125 hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-glow"
            >
              <MessageCircle
                size={24}
                className="hover:brightness-125 transition-all duration-300 text-white hover:text-[#D4AF37]"
              />
            </a>
            <a
              href="#"
              className="hover:scale-125 hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-glow"
            >
              <Facebook
                size={24}
                className="hover:brightness-125 transition-all duration-300 text-white hover:text-[#D4AF37]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
