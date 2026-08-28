"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, ChevronDown, Sparkles, ArrowRight, Home, Egg, Trees, HeartHandshake, Info, BookOpen } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { MagneticButton } from "./MagneticButton";

const NAV_ICONS: Record<string, React.ReactNode> = {
  "/": <Home className="w-5 h-5 text-nutri-amber" />,
  "/eggs": <Egg className="w-5 h-5 text-nutri-amber" />,
  "/farms": <Trees className="w-5 h-5 text-nutri-amber" />,
  "/become-a-farmer": <HeartHandshake className="w-5 h-5 text-nutri-amber" />,
  "/about": <Info className="w-5 h-5 text-nutri-amber" />,
  "/blog": <BookOpen className="w-5 h-5 text-nutri-amber" />,
  "/store-locator": <MapPin className="w-5 h-5 text-nutri-amber" />,
};

const NAV_DESCRIPTIONS: Record<string, string> = {
  "/": "Pasture-raised egg storytelling & fresh daily collection",
  "/eggs": "Pure natural eggs, bloom coating & nutrition lab matrix",
  "/farms": "100 sq. ft RSPCA pasture space & botanical herbal diet",
  "/become-a-farmer": "Empowering local farmers with technical support & buyback",
  "/about": "Suregrow Farms founding story, mission & eco-philosophy",
  "/blog": "Poultry science research, culinary journal & recipes",
  "/store-locator": "Interactive Google Maps finder & live stock indicator",
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Header Container */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="relative flex items-center space-x-3 group">
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

          {/* Right Action Controls */}
          <div className="flex items-center space-x-3">
            {/* Quick Store Locator CTA */}
            <Link
              href="/store-locator"
              className="hidden sm:inline-flex items-center space-x-2 bg-nutri-amber hover:bg-nutri-amber-dark text-nutri-green-deep font-bold px-4 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Find Stores</span>
            </Link>

            {/* Dropdown Menu Toggle Button */}
            <MagneticButton>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center space-x-2.5 shadow-xl border backdrop-blur-md ${
                  isDropdownOpen
                    ? "bg-nutri-amber text-nutri-green-deep border-nutri-amber ring-2 ring-nutri-amber/50"
                    : isScrolled
                    ? "bg-nutri-green-deep/90 text-nutri-cream border-white/20 hover:bg-nutri-green-deep"
                    : "bg-nutri-green-deep/80 text-nutri-cream border-nutri-amber/30 hover:bg-nutri-green-deep"
                }`}
                aria-label="Toggle Navigation Menu"
              >
                <span>{isDropdownOpen ? "Close Menu" : "Menu"}</span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDropdownOpen ? (
                    <X className="w-4 h-4 text-nutri-green-deep" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-nutri-amber" />
                  )}
                </motion.div>
              </button>
            </MagneticButton>
          </div>
        </div>
      </header>

      {/* DROPDOWN MENU & BACKDROP */}
      <AnimatePresence>
        {isDropdownOpen && (
          <>
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsDropdownOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Floating Dropdown Card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-20 right-4 sm:right-8 w-[calc(100vw-32px)] sm:w-[540px] max-h-[82vh] overflow-y-auto bg-nutri-green-deep/95 backdrop-blur-2xl border border-nutri-amber/40 rounded-3xl shadow-2xl p-6 sm:p-8 text-nutri-cream z-50 scrollbar-thin scrollbar-thumb-nutri-amber/30"
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/15 text-xs font-bold text-nutri-amber uppercase tracking-widest">
                <span className="flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Nutrifresh Navigation</span>
                </span>
                <span className="text-[10px] text-nutri-cream/60">Suregrow Farms</span>
              </div>

              {/* Navigation Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 pb-4">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className={`group p-3.5 rounded-2xl border transition-all duration-300 flex items-start space-x-3 ${
                          isActive
                            ? "bg-nutri-amber text-nutri-green-deep border-nutri-amber shadow-lg font-bold"
                            : "bg-white/5 border-white/10 hover:bg-white/15 hover:border-nutri-amber/50 text-nutri-cream"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-xl flex-shrink-0 transition-colors ${
                            isActive
                              ? "bg-nutri-green-deep text-nutri-amber"
                              : "bg-white/10 text-nutri-amber group-hover:bg-nutri-amber group-hover:text-nutri-green-deep"
                          }`}
                        >
                          {NAV_ICONS[link.href]}
                        </div>

                        <div className="space-y-0.5 min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-serif font-bold text-sm tracking-wide group-hover:text-nutri-amber transition-colors">
                              {link.label}
                            </span>
                            <ArrowRight
                              className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 ${
                                isActive ? "text-nutri-green-deep opacity-100" : "text-nutri-amber"
                              }`}
                            />
                          </div>
                          <p
                            className={`text-[11px] leading-tight line-clamp-1 ${
                              isActive ? "text-nutri-green-deep/80" : "text-nutri-cream/60"
                            }`}
                          >
                            {NAV_DESCRIPTIONS[link.href]}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Action Footer */}
              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs">
                <span className="text-nutri-cream/70">100% Free Range Pasture Eggs</span>
                <Link
                  href="/store-locator"
                  onClick={() => setIsDropdownOpen(false)}
                  className="text-nutri-amber font-bold flex items-center space-x-1 hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Maps Finder →</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
