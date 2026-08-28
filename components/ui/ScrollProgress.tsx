"use client";

import React from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const completion = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-nutri-yellow via-nutri-yellow-bright to-nutri-orange shadow-[0_0_10px_#FFC700] transition-all duration-150 ease-out"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
}
