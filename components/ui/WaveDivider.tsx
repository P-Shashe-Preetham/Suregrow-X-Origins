"use client";

import React from "react";

interface WaveDividerProps {
  fillColor?: string;
  flip?: boolean;
  className?: string;
}

export function WaveDivider({ fillColor = "#FCF8F2", flip = false, className = "" }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        className="relative block w-full h-12 sm:h-16 lg:h-24"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
