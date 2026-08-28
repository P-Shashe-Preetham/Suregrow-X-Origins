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
    <>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: position.x - (isHovered ? 28 : 8),
          y: position.y - (isHovered ? 28 : 8),
          scale: isHovered ? 1.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.5 }}
      >
        <div
          className={`rounded-full flex items-center justify-center transition-all duration-300 ${
            isHovered
              ? "w-14 h-14 bg-nutri-amber/80 backdrop-blur-sm text-nutri-green-deep text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-nutri-amber/30"
              : "w-4 h-4 bg-nutri-amber shadow-md shadow-nutri-amber/40 ring-2 ring-nutri-amber/30"
          }`}
        >
          {isHovered && cursorText && (
            <span className="px-1 text-center leading-tight truncate">{cursorText}</span>
          )}
        </div>
      </motion.div>
    </>
  );
}
