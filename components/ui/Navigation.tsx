"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Egg } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/eggs", label: "Nutrifresh Eggs" },
  { href: "/farms", label: "Nutrifresh Farms" },
  { href: "/store-locator", label: "Store Locator", icon: MapPin },
  { href: "/become-a-farmer", label: "Become a Farmer" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-nutri-green-deep/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/10 text-nutri-cream"
            : "py-6 bg-gradient-to-b from-black/50 via-black/20 to-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group flex items-center space-x-3 z-50">
            <div className="relative w-36 h-10 lg:w-44 lg:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/logo.png"
                alt="Nutrifresh Logo"
                fill
                className="object-contain filter brightness-110"
                priority
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full flex items-center space-x-1.5 ${
                    isActive
                      ? "text-nutri-amber font-semibold"
                      : "text-nutri-cream/90 hover:text-nutri-amber hover:bg-white/5"
                  }`}
                  data-cursor-text={link.label}
                >
                  {Icon && <Icon className="w-4 h-4 text-nutri-amber animate-pulse" />}
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 rounded-full bg-nutri-amber/15 border border-nutri-amber/30 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Store Locator CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/store-locator"
              className="relative group overflow-hidden rounded-full bg-gradient-to-r from-nutri-amber to-nutri-amber-dark px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-nutri-green-deep shadow-lg shadow-nutri-amber/25 hover:shadow-nutri-amber/50 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2"
              data-cursor-text="Find Stores"
            >
              <MapPin className="w-4 h-4 text-nutri-green-deep group-hover:rotate-12 transition-transform duration-300" />
              <span>Find Near You</span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-nutri-cream hover:text-nutri-amber hover:bg-white/10 transition-colors z-50"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
