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
          className="fixed inset-0 z-40 bg-gradient-to-br from-nutri-yellow via-nutri-yellow-bright to-nutri-orange text-nutri-dark flex flex-col justify-between p-6 pt-24 lg:hidden overflow-y-auto"
        >
          {/* Background Decorative Pattern */}
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none" />

          {/* Links List */}
          <div className="space-y-4 relative z-10">
            <p className="text-xs uppercase tracking-widest text-nutri-dark font-extrabold mb-4">
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
                    className={`flex items-center justify-between py-3 text-xl font-serif border-b border-nutri-dark/20 ${
                      isActive ? "text-white font-extrabold pl-2 border-white" : "text-nutri-dark/85 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span>{link.label}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-nutri-dark" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Store Locator Card */}
          <div className="relative z-10 pt-6 space-y-4 border-t border-nutri-dark/20">
            <div className="flex items-center space-x-2 text-xs font-black uppercase text-nutri-dark">
              <ShieldCheck className="w-4 h-4 text-nutri-orange-deep" />
              <span>Suregrow Farms Certified</span>
            </div>

            <Link
              href="/store-locator"
              onClick={onClose}
              className="w-full py-4 bg-nutri-dark text-white font-extrabold rounded-2xl flex items-center justify-center space-x-3 shadow-lg text-sm uppercase tracking-wider"
            >
              <MapPin className="w-4 h-4 text-nutri-yellow" />
              <span>Find Retailers Near You</span>
            </Link>

            <p className="text-[11px] text-center text-nutri-dark/80 font-bold">
              © {new Date().getFullYear()} Suregrow Farms Pvt. Ltd.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
