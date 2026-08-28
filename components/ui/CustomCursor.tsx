"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop with fine pointers
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest("a, button, [role='button'], input, textarea, .cursor-hover");
      if (hoverable) {
        setIsHovered(true);
        const textAttr = hoverable.getAttribute("data-cursor-text");
        setCursorText(textAttr || "");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] hidden lg:block"
      animate={{
        x: position.x - (isHovered ? 28 : 10),
        y: position.y - (isHovered ? 28 : 10),
        scale: isHovered ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.4 }}
    >
      <div
        className={`rounded-full flex items-center justify-center transition-all duration-200 border-2 border-nutri-dark shadow-2xl pointer-events-none ${
          isHovered
            ? "w-14 h-14 bg-nutri-yellow text-nutri-dark text-[10px] font-black uppercase tracking-wider shadow-black/40 ring-4 ring-white/60"
            : "w-5 h-5 bg-nutri-yellow shadow-black/30 ring-2 ring-white/90"
        }`}
      >
        {isHovered && cursorText && (
          <span className="px-1 text-center leading-tight truncate pointer-events-none">{cursorText}</span>
        )}
      </div>
    </motion.div>
  );
}
