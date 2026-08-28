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
      {/* HERO - CLEAN BRIGHT EGG PALETTE */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-nutri-yellow-pale via-nutri-cream to-white text-nutri-dark relative">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-nutri-yellow/30 border border-nutri-yellow text-nutri-dark text-xs font-black uppercase tracking-widest shadow-sm">
            <Trees className="w-4 h-4 text-nutri-orange" />
            <span>SUREGROW FARMS ECOSYSTEM</span>
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold max-w-4xl mx-auto leading-tight text-nutri-dark">
            Pastures Built For Health, <br />
            <span className="text-nutri-orange italic">Farming With Integrity.</span>
          </h1>

          <p className="text-base sm:text-lg text-nutri-dark/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Welcome to Suregrow Farms Pvt. Ltd. Founded in 2015, we are pioneers in sustainable pasture-raised farming where animal protection and environmental care take center stage.
          </p>
        </div>
      </section>

      {/* FARM STORY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nutri-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-nutri-orange">
              ETHICAL HUSBANDRY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-nutri-dark">
              100 Sq. Ft per Hen RSPCA Space Standard
            </h2>
            <p className="text-sm sm:text-base text-nutri-dark/80 font-normal leading-relaxed">
              Unlike factory farms that lock birds inside dark wire cages, our hens spend their days roaming open pastures. They bask in warm sunshine, dust-bathe, socialize, fly, and engage in natural chicken behavior.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-bold text-nutri-dark">
              <div className="p-4 bg-white rounded-2xl border-2 border-nutri-yellow-soft flex items-center space-x-3 shadow-md">
                <Sun className="w-6 h-6 text-nutri-orange" />
                <span>Daily Outdoor Basking</span>
              </div>
              <div className="p-4 bg-white rounded-2xl border-2 border-nutri-yellow-soft flex items-center space-x-3 shadow-md">
                <Feather className="w-6 h-6 text-nutri-orange" />
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-nutri-yellow-pale border-t border-nutri-yellow-soft text-nutri-dark">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-nutri-orange">
              DAY IN THE LIFE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-nutri-dark">
              The Journey Through Our Pastures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border-2 border-nutri-yellow-soft shadow-xl space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-nutri-orange-deep">STAGE 1</span>
              <h3 className="font-serif text-xl font-bold text-nutri-dark">Rotational Green Pastures</h3>
              <p className="text-xs text-nutri-dark/75 leading-relaxed font-normal">
                Fields are rotated regularly to maintain rich organic grass, herbal forage, and nutrient soil full of bugs and seeds.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border-2 border-nutri-yellow-soft shadow-xl space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-nutri-orange-deep">STAGE 2</span>
              <h3 className="font-serif text-xl font-bold text-nutri-dark">In-House Botanical Diet</h3>
              <p className="text-xs text-nutri-dark/75 leading-relaxed font-normal">
                Whole grains mixed with Brahmi, Basil, Neem, Turmeric, Nilavembu, and Aloe Vera formulated in-house daily.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border-2 border-nutri-yellow-soft shadow-xl space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-nutri-orange-deep">STAGE 3</span>
              <h3 className="font-serif text-xl font-bold text-nutri-dark">Airy Night Shelters</h3>
              <p className="text-xs text-nutri-dark/75 leading-relaxed font-normal">
                Hens retire safely to clean night shelters providing 2 sq. ft space per bird with wooden perches and private nest boxes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
