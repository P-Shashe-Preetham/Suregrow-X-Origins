"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 z-40 bg-nutri-green-deep text-nutri-cream flex flex-col justify-between p-6 pt-24 lg:hidden overflow-y-auto"
        >
          {/* Background Decorative Pattern */}
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-nutri-amber/10 rounded-full blur-3xl pointer-events-none" />

          {/* Links List */}
          <div className="space-y-4 relative z-10">
            <p className="text-xs uppercase tracking-widest text-nutri-amber font-bold mb-4">
              Navigation Menu
            </p>
            {NAV_LINKS.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center justify-between py-3 text-xl font-serif border-b border-white/10 ${
                      isActive ? "text-nutri-amber font-semibold pl-2 border-nutri-amber/50" : "text-nutri-cream/80 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span>{link.label}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-nutri-amber/60" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Store Locator Mobile CTA */}
          <div className="my-8 space-y-4 relative z-10">
            <Link
              href="/store-locator"
              onClick={onClose}
              className="w-full py-4 bg-gradient-to-r from-nutri-amber to-nutri-amber-dark text-nutri-green-deep font-bold rounded-2xl flex items-center justify-center space-x-3 shadow-lg shadow-nutri-amber/30 text-sm uppercase tracking-wider"
            >
              <MapPin className="w-5 h-5" />
              <span>Find Retail Outlets Near You</span>
            </Link>

            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center space-x-3 text-xs text-nutri-cream/70">
              <ShieldCheck className="w-6 h-6 text-nutri-amber flex-shrink-0" />
              <span>Suregrow Farms Pvt. Ltd. • 100% Genuine Free Range RSPCA Standards</span>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center text-xs text-nutri-cream/40 pt-4 border-t border-white/10">
            © {new Date().getFullYear()} Nutrifresh Eggs. All rights reserved.
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
