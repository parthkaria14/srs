"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const isActivePage = (path) => {
    if (path === "/projects") {
      return pathname === path || pathname.startsWith("/projects/");
    }
    return pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-[#134B70]/70 backdrop-blur-md shadow-lg text-white py-3 px-6 sm:px-10 lg:px-16 z-50 transition-all duration-500 border-b border-white/10 min-h-[72px]">
        <div className="container mx-auto flex justify-between items-center min-h-[56px]">
          <div
            className={`flex items-center transition-all duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <Link href="/" onClick={closeMobileMenu}>
              <Image
                src="/Homepage/logo.png"
                alt="Shree Riddhi Siddhi Logo"
                width={140}
                height={48}
                className="hover:scale-105 transition-transform duration-300 cursor-pointer w-[120px] h-[48px] md:w-[140px] md:h-[124px] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex space-x-14 items-center text-[#D4AF37] transition-all duration-700 delay-300 text-lg ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0"
            }`}
          >
            <Link
              href="/"
              className={`transition-all duration-300 hover:scale-110 relative group ${
                isActivePage("/") ? "text-white" : "hover:text-white"
              }`}
            >
              Home
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                  isActivePage("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>

            <Link
              href="/about"
              className={`transition-all duration-300 hover:scale-110 relative group ${
                isActivePage("/about") ? "text-white" : "hover:text-white"
              }`}
            >
              About
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                  isActivePage("/about") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>

            <Link
              href="/projects"
              className={`transition-all duration-300 hover:scale-110 relative group ${
                isActivePage("/projects") ? "text-white" : "hover:text-white"
              }`}
            >
              Projects
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                  isActivePage("/projects")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>

            <Link
              href="/resources"
              className={`transition-all duration-300 hover:scale-110 relative group ${
                isActivePage("/resources") ? "text-white" : "hover:text-white"
              }`}
            >
              Resources
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                  isActivePage("/resources")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>

            <Link
              href="/careers"
              className={`transition-all duration-300 hover:scale-110 relative group ${
                isActivePage("/careers") ? "text-white" : "hover:text-white"
              }`}
            >
              Careers
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                  isActivePage("/careers") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden bg-white/10 backdrop-blur-sm border-none hover:bg-white/20 transition-colors duration-300 shadow-md text-white p-2 rounded-lg"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 right-0 bg-[#134B70]/95 backdrop-blur-md border-b border-white/10 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <nav className="container mx-auto py-4 px-4 space-y-4">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
              isActivePage("/")
                ? "bg-[#D4AF37] text-[#134B70] font-semibold"
                : "text-[#D4AF37] hover:bg-white/10 hover:text-white"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={closeMobileMenu}
            className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
              isActivePage("/about")
                ? "bg-[#D4AF37] text-[#134B70] font-semibold"
                : "text-[#D4AF37] hover:bg-white/10 hover:text-white"
            }`}
          >
            About
          </Link>

          <Link
            href="/projects"
            onClick={closeMobileMenu}
            className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
              isActivePage("/projects")
                ? "bg-[#D4AF37] text-[#134B70] font-semibold"
                : "text-[#D4AF37] hover:bg-white/10 hover:text-white"
            }`}
          >
            Projects
          </Link>

          <Link
            href="/resources"
            onClick={closeMobileMenu}
            className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
              isActivePage("/resources")
                ? "bg-[#D4AF37] text-[#134B70] font-semibold"
                : "text-[#D4AF37] hover:bg-white/10 hover:text-white"
            }`}
          >
            Resources
          </Link>

          <Link
            href="/careers"
            onClick={closeMobileMenu}
            className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
              isActivePage("/careers")
                ? "bg-[#D4AF37] text-[#134B70] font-semibold"
                : "text-[#D4AF37] hover:bg-white/10 hover:text-white"
            }`}
          >
            Careers
          </Link>
        </nav>
      </div>
    </>
  );
}
