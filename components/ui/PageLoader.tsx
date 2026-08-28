"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check session storage so loader only runs on first visit per session if preferred
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-nutri-green-deep text-nutri-cream flex flex-col items-center justify-between p-8 lg:p-16 select-none"
        >
          {/* Top Brand Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3 text-xs uppercase tracking-[0.3em] text-nutri-amber font-semibold"
          >
            <span>Suregrow Farms</span>
            <span className="w-1.5 h-1.5 rounded-full bg-nutri-amber" />
            <span>Farming with Integrity</span>
          </motion.div>

          {/* Center Logo & Progress */}
          <div className="flex flex-col items-center max-w-md w-full text-center space-y-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-64 h-24 lg:w-80 lg:h-32"
            >
              <Image
                src="/assets/logo.png"
                alt="Nutrifresh Logo"
                fill
                className="object-contain filter brightness-110 drop-shadow-[0_10px_20px_rgba(232,141,20,0.2)]"
                priority
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-serif text-lg lg:text-xl text-nutri-cream/80 italic font-light"
            >
              "Healthy Hens Lay Nutritious Eggs"
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-full space-y-3">
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-nutri-amber to-nutri-amber-light rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between items-center text-xs tracking-widest text-nutri-cream/60 font-mono">
                <span>PREMIUM FREE RANGE</span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>

          {/* Bottom Footer Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[11px] text-nutri-cream/50 tracking-wider font-light"
          >
            100 SQ. FT / BIRD RSPCA STANDARDS • 100% VEGETARIAN & HERBAL DIET
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
