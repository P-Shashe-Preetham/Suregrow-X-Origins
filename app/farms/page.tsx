"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Sun, ShieldCheck, Heart, Sparkles, Trees, RefreshCw, Feather } from "lucide-react";
import { ImageReveal } from "@/components/ui/ImageReveal";

export default function FarmsPage() {
  return (
    <div className="relative overflow-hidden bg-nutri-cream text-nutri-dark pt-24 pb-16">
      {/* HERO */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-nutri-green-deep to-nutri-green text-nutri-cream relative">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-nutri-amber/20 text-nutri-amber text-xs font-bold uppercase tracking-widest">
            <Trees className="w-4 h-4" />
            <span>SUREGROW FARMS ECOSYSTEM</span>
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto leading-tight">
            Pastures Built For Health, <br />
            <span className="text-gradient-amber italic">Farming With Integrity.</span>
          </h1>

          <p className="text-base sm:text-lg text-nutri-cream/85 max-w-2xl mx-auto font-light leading-relaxed">
            Welcome to Suregrow Farms Pvt. Ltd. Founded in 2015, we are pioneers in sustainable pasture-raised farming where animal protection and environmental care take center stage.
          </p>
        </div>
      </section>

      {/* FARM STORY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nutri-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-nutri-amber">
              ETHICAL HUSBANDRY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-nutri-green-deep">
              100 Sq. Ft per Hen RSPCA Space Standard
            </h2>
            <p className="text-sm sm:text-base text-nutri-dark/80 font-light leading-relaxed">
              Unlike factory farms that lock birds inside dark wire cages, our hens spend their days roaming open pastures. They bask in warm sunshine, dust-bathe, socialize, fly, and engage in natural chicken behavior.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-bold text-nutri-green-deep">
              <div className="p-4 bg-nutri-cream-warm rounded-2xl border border-nutri-cream-dark flex items-center space-x-3">
                <Sun className="w-6 h-6 text-nutri-amber" />
                <span>Daily Outdoor Basking</span>
              </div>
              <div className="p-4 bg-nutri-cream-warm rounded-2xl border border-nutri-cream-dark flex items-center space-x-3">
                <Feather className="w-6 h-6 text-nutri-amber" />
                <span>No De-Beaking Ever</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ImageReveal
              src="/assets/farm_landscape.png"
              alt="Suregrow Farms Open Pasture"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* 5-STAGE FARM PROCESS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-nutri-green-deep text-nutri-cream">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-nutri-amber">
              DAY IN THE LIFE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold">
              The Journey Through Our Pastures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/10 rounded-3xl border border-white/15 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-nutri-amber">STAGE 1</span>
              <h3 className="font-serif text-xl font-bold">Rotational Green Pastures</h3>
              <p className="text-xs text-nutri-cream/75 leading-relaxed">
                Fields are rotated regularly to maintain rich organic grass, herbal forage, and nutrient soil full of bugs and seeds.
              </p>
            </div>

            <div className="p-8 bg-white/10 rounded-3xl border border-white/15 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-nutri-amber">STAGE 2</span>
              <h3 className="font-serif text-xl font-bold">In-House Botanical Diet</h3>
              <p className="text-xs text-nutri-cream/75 leading-relaxed">
                Whole grains mixed with Brahmi, Basil, Neem, Turmeric, Nilavembu, and Aloe Vera formulated in-house daily.
              </p>
            </div>

            <div className="p-8 bg-white/10 rounded-3xl border border-white/15 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-nutri-amber">STAGE 3</span>
              <h3 className="font-serif text-xl font-bold">Airy Night Shelters</h3>
              <p className="text-xs text-nutri-cream/75 leading-relaxed">
                Hens retire safely to clean night shelters providing 2 sq. ft space per bird with wooden perches and private nest boxes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
