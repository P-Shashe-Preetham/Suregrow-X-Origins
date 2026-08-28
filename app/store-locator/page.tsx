"use client";

import React from "react";
import { StoreLocator } from "@/components/StoreLocator";
import { MapPin, Sparkles, Navigation } from "lucide-react";

export default function StoreLocatorPage() {
  return (
    <div className="relative overflow-hidden bg-nutri-cream text-nutri-dark pt-24 pb-16">
      {/* HERO BANNER - CLEAN BRIGHT EGG PALETTE */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-nutri-yellow-pale via-nutri-cream to-white text-nutri-dark text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nutri-yellow/30 text-nutri-dark text-xs font-black uppercase tracking-widest border border-nutri-yellow shadow-sm">
            <MapPin className="w-4 h-4 text-nutri-orange" />
            <span>INTERACTIVE GOOGLE MAPS STORE FINDER</span>
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold leading-tight text-nutri-dark">
            Find Nutrifresh Outlets Near You
          </h1>

          <p className="text-base sm:text-lg text-nutri-dark/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Locate authorized organic supermarkets, gourmet outlets, hypermarkets, and direct Suregrow farm pickup centers across major cities.
          </p>
        </div>
      </section>

      {/* FULL STORE LOCATOR */}
      <StoreLocator />
    </div>
  );
}
