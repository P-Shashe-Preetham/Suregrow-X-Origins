"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, Menu, Sparkles, ArrowRight, Home, Egg, Trees, HeartHandshake, Info, BookOpen, ShieldCheck } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

const NAV_DESCRIPTIONS: Record<string, string> = {
  "/": "Pasture-raised egg storytelling & daily fresh collection",
  "/eggs": "Pure natural eggs, unwashed bloom coating & nutrition facts",
  "/farms": "100 sq. ft RSPCA pasture space & botanical herbal diet",
  "/become-a-farmer": "Empowering local farmers with technical support & buyback",
  "/about": "Suregrow Farms founding story, mission & eco-philosophy",
  "/blog": "Poultry science research, culinary journal & recipes",
  "/store-locator": "Interactive Google Maps finder & live store stock",
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Scroll reaction
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when full page menu is open
  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDropdownOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      {/* HEADER BAR */}
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative flex items-center space-x-3 group z-50">
            <div className="relative w-36 sm:w-44 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/logo.png"
                alt="Nutrifresh Logo"
                fill
                className="object-contain object-left filter drop-shadow-md"
                priority
              />
            </div>
          </Link>

          {/* Right Header Buttons */}
          <div className="flex items-center space-x-3 z-50">
            {/* Quick Store Locator CTA */}
            <Link
              href="/store-locator"
              className="hidden sm:inline-flex items-center space-x-2 bg-nutri-yellow hover:bg-nutri-yellow-bright text-nutri-dark font-extrabold px-5 py-3 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MapPin className="w-4 h-4 text-nutri-orange-deep" />
              <span>Find Stores</span>
            </Link>

            {/* Menu Dropdown Toggle Button */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`px-6 py-3 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center space-x-2.5 shadow-xl border ${
                isDropdownOpen
                  ? "bg-white text-nutri-orange-deep border-white shadow-2xl scale-105"
                  : isScrolled
                  ? "bg-nutri-orange text-white border-nutri-orange-bright hover:bg-nutri-orange-bright"
                  : "bg-nutri-orange/95 text-white border-white/30 hover:bg-nutri-orange"
              }`}
              aria-label="Toggle Full Page Menu"
            >
              <span>{isDropdownOpen ? "Close" : "Menu"}</span>
              <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isDropdownOpen ? (
                  <X className="w-4 h-4 text-nutri-orange-deep" />
                ) : (
                  <Menu className="w-4 h-4 text-nutri-yellow" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      {/* FULL-PAGE DROPDOWN CURTAIN MENU OVERLAY */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            className="fixed inset-0 z-50 h-screen w-screen bg-gradient-to-br from-nutri-orange via-nutri-orange-bright to-nutri-orange-deep text-white flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
          >
            {/* Top Bar inside Dropdown Curtain */}
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between pt-2 pb-6 border-b border-white/20">
              <div className="flex items-center space-x-3">
                <span className="px-3.5 py-1.5 rounded-full bg-nutri-yellow text-nutri-dark text-xs font-black uppercase tracking-widest flex items-center space-x-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SUREGROW FARMS</span>
                </span>
                <span className="hidden sm:inline-block text-xs font-bold text-white/80">
                  100% Pasture-Raised Genuine Free Range Eggs
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsDropdownOpen(false)}
                className="bg-white hover:bg-nutri-yellow text-nutri-orange-deep hover:text-nutri-dark font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-2xl flex items-center space-x-2"
              >
                <span>Close Menu</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Menu Links Grid */}
            <div className="max-w-7xl mx-auto w-full py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
              {/* Left Column: Big Editorial Links */}
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className={`group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                          isActive
                            ? "bg-white text-nutri-orange-deep shadow-2xl scale-[1.02]"
                            : "hover:bg-white/10 text-white"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <span className={`font-mono text-sm font-bold opacity-60 ${isActive ? "text-nutri-orange-deep" : "text-nutri-yellow"}`}>
                            0{idx + 1}.
                          </span>
                          <div>
                            <h2 className={`font-serif text-2xl sm:text-4xl font-extrabold tracking-tight transition-transform duration-300 group-hover:translate-x-2 ${
                              isActive ? "text-nutri-orange-deep" : "group-hover:text-nutri-yellow"
                            }`}>
                              {link.label}
                            </h2>
                            <p className={`text-xs mt-0.5 ${isActive ? "text-nutri-dark/70 font-medium" : "text-white/70"}`}>
                              {NAV_DESCRIPTIONS[link.href]}
                            </p>
                          </div>
                        </div>

                        <ArrowRight className={`w-6 h-6 mt-2 sm:mt-0 transition-transform duration-300 ${
                          isActive
                            ? "text-nutri-orange-deep opacity-100"
                            : "text-nutri-yellow opacity-0 group-hover:opacity-100 group-hover:translate-x-2"
                        }`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Column: Bright Brand Highlight Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white text-nutri-dark rounded-3xl p-8 shadow-2xl space-y-6 border-4 border-nutri-yellow">
                  <div className="flex items-center space-x-3 text-nutri-orange-deep font-bold text-xs uppercase tracking-widest">
                    <ShieldCheck className="w-5 h-5 text-nutri-orange" />
                    <span>OUR GUARANTEE</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-nutri-dark">
                    Pasture Roaming & 8 Medicinal Herbs
                  </h3>

                  <p className="text-xs text-nutri-dark/80 leading-relaxed font-light">
                    Every Nutrifresh egg comes from hens provided 100 sq. ft per bird pasture space, fed whole grains with Brahmi, Neem, Turmeric, Nilavembu & Aloe Vera.
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/store-locator"
                      onClick={() => setIsDropdownOpen(false)}
                      className="w-full py-4 bg-nutri-orange hover:bg-nutri-orange-deep text-white font-extrabold rounded-2xl flex items-center justify-center space-x-2 shadow-xl text-xs uppercase tracking-wider transition-all"
                    >
                      <MapPin className="w-4 h-4 text-nutri-yellow" />
                      <span>Find Retailers Near You</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer inside Curtain */}
            <div className="max-w-7xl mx-auto w-full pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-xs text-white/80 gap-4">
              <p>© {new Date().getFullYear()} Nutrifresh Eggs by Suregrow Farms Pvt. Ltd. All rights reserved.</p>
              <div className="flex space-x-6 font-bold text-nutri-yellow">
                <Link href="/about" onClick={() => setIsDropdownOpen(false)}>About Us</Link>
                <Link href="/eggs" onClick={() => setIsDropdownOpen(false)}>Egg Science</Link>
                <Link href="/become-a-farmer" onClick={() => setIsDropdownOpen(false)}>Farmer Network</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
