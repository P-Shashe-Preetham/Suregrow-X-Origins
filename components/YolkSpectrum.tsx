"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Sun, ShieldCheck, Heart, AlertTriangle, CheckCircle2 } from "lucide-react";

export interface YolkLevel {
  level: number;
  name: string;
  type: "Factory Layer Egg" | "Standard Free Range" | "Nutrifresh Pasture-Raised";
  colorHex: string;
  betaCarotene: string;
  vitaminE: string;
  henDiet: string;
  henLifestyle: string;
  description: string;
}

export const YOLK_LEVELS: YolkLevel[] = [
  {
    level: 1,
    name: "Pale Yellow",
    type: "Factory Layer Egg",
    colorHex: "#FDE047",
    betaCarotene: "Low (1x)",
    vitaminE: "Standard Baseline",
    henDiet: "Synthetic poultry mash & chemical additives",
    henLifestyle: "Cramped wire battery cages with zero sunlight",
    description: "Laid by stressed hens in high-density factory warehouses. Pale yolk indicates low natural carotenoids and minimal exercise."
  },
  {
    level: 3,
    name: "Light Golden",
    type: "Standard Free Range",
    colorHex: "#FACC15",
    betaCarotene: "Moderate (2x)",
    vitaminE: "1.5x Baseline",
    henDiet: "Commercial grain mix with basic forage",
    henLifestyle: "Crowded barn with limited outdoor pen access",
    description: "Standard free-range eggs. Hens have access to small pens but lack large rotational pastures and natural medicinal herbs."
  },
  {
    level: 6,
    name: "Vibrant Gold",
    type: "Nutrifresh Pasture-Raised",
    colorHex: "#F59E0B",
    betaCarotene: "High (5x)",
    vitaminE: "2.5x Baseline",
    henDiet: "Whole grains, green forage, basil & turmeric",
    henLifestyle: "100 sq. ft / bird outdoor pastures + RSPCA barns",
    description: "Rich golden yolk bursting with lecithin and antioxidants. Laid by happy hens foraging freely on rotational pastures."
  },
  {
    level: 9,
    name: "Deep Amber Orange",
    type: "Nutrifresh Pasture-Raised",
    colorHex: "#E88D14",
    betaCarotene: "700% Higher (7x)",
    vitaminE: "300% Higher (3x)",
    henDiet: "Brahmi, Sweet Basil, Neem, Turmeric, Nilavembu & Aloe Vera",
    henLifestyle: "100 sq. ft RSPCA pasture + dust baths & shade trees",
    description: "The hallmark of Nutrifresh! An upright, deep orange golden yolk rich in lutein, zeaxanthin, and omega-3s laid by hens enjoying our 8-herb botanical diet."
  }
];

export function YolkSpectrum() {
  const [selectedLevelIndex, setSelectedLevelIndex] = useState<number>(3); // Default to Nutrifresh Amber
  const activeYolk = YOLK_LEVELS[selectedLevelIndex];

  return (
    <div className="bg-nutri-green-deep text-nutri-cream rounded-3xl p-6 lg:p-12 border border-white/10 shadow-2xl space-y-8 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: `${activeYolk.colorHex}30` }}
      />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
        <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nutri-amber/20 text-nutri-amber text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-4 h-4" />
          <span>INTERACTIVE YOLK SPECTRUM SELECTOR</span>
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold">
          The Yolk Color Tells The Whole Story
        </h2>
        <p className="text-sm sm:text-base text-nutri-cream/80 font-light">
          Click or slide across the yolk spectrum below to discover how hen lifestyle, open pasture foraging, and herbal diets directly transform yolk color and nutrition.
        </p>
      </div>

      {/* Spectrum Bar Selector */}
      <div className="max-w-3xl mx-auto space-y-4 relative z-10">
        <div className="flex items-center justify-between text-xs font-bold text-nutri-cream/60 uppercase tracking-widest">
          <span>Factory Caged Egg</span>
          <span>Nutrifresh Pasture-Raised</span>
        </div>

        <div className="grid grid-cols-4 gap-3 p-3 bg-white/10 rounded-2xl border border-white/15">
          {YOLK_LEVELS.map((item, idx) => {
            const isSelected = selectedLevelIndex === idx;
            return (
              <button
                key={item.level}
                onClick={() => setSelectedLevelIndex(idx)}
                className={`py-3 px-2 rounded-xl transition-all duration-300 flex flex-col items-center space-y-2 relative ${
                  isSelected
                    ? "bg-white text-nutri-dark shadow-xl scale-105 ring-2 ring-nutri-amber"
                    : "hover:bg-white/10 text-nutri-cream"
                }`}
              >
                <div
                  className="w-8 h-8 rounded-full shadow-inner border-2 border-white transition-transform duration-300"
                  style={{ backgroundColor: item.colorHex }}
                />
                <span className="text-[11px] font-bold">Level {item.level}</span>
                <span className="text-[9px] uppercase font-extrabold opacity-75 truncate max-w-full">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Yolk Card Visual & Details */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/5 p-6 lg:p-8 rounded-2xl border border-white/10 relative z-10">
        {/* Left Interactive Egg Graphic */}
        <div className="md:col-span-5 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
            {/* Egg White */}
            <div className="absolute inset-0 bg-white/90 rounded-[45%_55%_60%_40%/50%_60%_40%_50%] shadow-2xl border border-white/50 animate-float-slow" />
            {/* Egg Yolk Dynamic Center */}
            <motion.div
              key={activeYolk.level}
              initial={{ scale: 0.5, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-2xl border-4 border-white/60 flex items-center justify-center text-white font-bold font-serif text-lg"
              style={{ backgroundColor: activeYolk.colorHex }}
            >
              <div className="absolute top-2 left-3 w-6 h-3 bg-white/40 rounded-full blur-[1px]" />
              <span>Lvl {activeYolk.level}</span>
            </motion.div>
          </div>

          <div className="space-y-1">
            <span
              className={`inline-block text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${
                activeYolk.level >= 6
                  ? "bg-nutri-amber text-nutri-green-deep"
                  : "bg-white/20 text-nutri-cream"
              }`}
            >
              {activeYolk.type}
            </span>
            <p className="font-serif text-xl font-bold text-white">{activeYolk.name} Yolk</p>
          </div>
        </div>

        {/* Right Facts & Nutrition Breakdown */}
        <div className="md:col-span-7 space-y-4">
          <p className="text-xs sm:text-sm text-nutri-cream/90 leading-relaxed font-light">
            {activeYolk.description}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10 text-xs">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-nutri-amber tracking-wider">Beta-Carotene</span>
              <p className="font-serif text-lg font-bold text-white">{activeYolk.betaCarotene}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-nutri-amber tracking-wider">Vitamin E</span>
              <p className="font-serif text-lg font-bold text-white">{activeYolk.vitaminE}</p>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-nutri-amber mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-white">Hen Diet: </strong>
                <span className="text-nutri-cream/80">{activeYolk.henDiet}</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-nutri-amber mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-white">Hen Environment: </strong>
                <span className="text-nutri-cream/80">{activeYolk.henLifestyle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
