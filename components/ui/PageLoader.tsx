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
          className="fixed inset-0 z-[10000] bg-gradient-to-br from-nutri-yellow via-nutri-yellow-bright to-nutri-orange text-nutri-dark flex flex-col items-center justify-between p-8 lg:p-16 select-none"
        >
          {/* Top Brand Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3 text-xs uppercase tracking-[0.3em] text-nutri-dark font-extrabold"
          >
            <span>Suregrow Farms</span>
            <span className="w-1.5 h-1.5 rounded-full bg-nutri-dark" />
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
                className="object-contain filter drop-shadow-xl"
                priority
              />
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden relative border border-black/10">
              <motion.div
                className="h-full bg-nutri-dark rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Counter Text */}
            <div className="flex items-baseline space-x-2 font-serif text-3xl font-extrabold text-nutri-dark">
              <span>{Math.min(progress, 100)}%</span>
            </div>
          </div>

          {/* Bottom Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[11px] uppercase tracking-widest text-nutri-dark/80 font-bold"
          >
            100% Pasture-Raised Genuine Free Range Eggs
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
