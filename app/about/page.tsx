"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Sparkles, Award, Trees, CheckCircle2 } from "lucide-react";
import { ImageReveal } from "@/components/ui/ImageReveal";

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-nutri-cream text-nutri-dark pt-24 pb-16">
      {/* HERO - CLEAN BRIGHT EGG PALETTE */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-nutri-yellow-pale via-nutri-cream to-white text-nutri-dark">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-nutri-yellow/30 border border-nutri-yellow text-nutri-dark text-xs font-black uppercase tracking-widest shadow-sm">
            <Award className="w-4 h-4 text-nutri-orange" />
            <span>SUREGROW FARMS PVT. LTD.</span>
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold max-w-4xl mx-auto leading-tight text-nutri-dark">
            Pioneering Sustainable Farming <br />
            <span className="text-nutri-orange italic">Since 2015.</span>
          </h1>

          <p className="text-base sm:text-lg text-nutri-dark/80 max-w-2xl mx-auto font-normal leading-relaxed">
            SUREGROW FARMS Pvt. Ltd. was started in 2015 to engage in sustainable, eco-friendly agricultural practices, producing healthy and nutritious food products without harmful chemicals.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nutri-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 lg:p-12 rounded-3xl border-2 border-nutri-yellow-soft shadow-xl space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-nutri-orange">OUR MISSION</span>
            <h2 className="font-serif text-3xl font-bold text-nutri-dark">Sustainable & Environment-Friendly Agriculture</h2>
            <p className="text-sm text-nutri-dark/80 font-normal leading-relaxed">
              To engage in sustainable, chemical-free agricultural practices that protect the soil, atmosphere, and animal welfare, producing healthier and better tasting products for our customers.
            </p>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-3xl border-2 border-nutri-yellow-soft shadow-xl space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-nutri-orange">OUR VISION</span>
            <h2 className="font-serif text-3xl font-bold text-nutri-dark">Pioneer Industry Leadership with Integrity</h2>
            <p className="text-sm text-nutri-dark/80 font-normal leading-relaxed">
              To lead the farming sector by raising livestock with absolute integrity, eliminating pesticides, antibiotics, and synthetic growth enhancers entirely.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY TIMELINE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nutri-yellow-pale border-t border-nutri-yellow-soft text-nutri-dark">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-nutri-orange">CHRONOLOGY</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-nutri-dark">Our Growth Timeline</h2>
          </div>

          <div className="space-y-8 relative border-l-4 border-nutri-yellow pl-6 sm:pl-10">
            <div className="relative space-y-2">
              <div className="absolute -left-[33px] sm:-left-[49px] top-1 w-5 h-5 rounded-full bg-nutri-orange border-4 border-white" />
              <span className="text-xs font-black text-nutri-orange-deep uppercase tracking-wider">2015 — Foundation</span>
              <h3 className="font-serif text-xl font-bold text-nutri-dark">Establishment of Suregrow Farms Pvt. Ltd.</h3>
              <p className="text-xs text-nutri-dark/75 leading-relaxed font-normal">Started organic crop farming and pasture-raised livestock research in Karnataka.</p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[33px] sm:-left-[49px] top-1 w-5 h-5 rounded-full bg-nutri-orange border-4 border-white" />
              <span className="text-xs font-black text-nutri-orange-deep uppercase tracking-wider">2018 — RSPCA Protocol</span>
              <h3 className="font-serif text-xl font-bold text-nutri-dark">Adoption of 100 Sq. Ft / Bird RSPCA Standard</h3>
              <p className="text-xs text-nutri-dark/75 leading-relaxed font-normal">Built rotational green pastures and airy night roost shelters.</p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[33px] sm:-left-[49px] top-1 w-5 h-5 rounded-full bg-nutri-orange border-4 border-white" />
              <span className="text-xs font-black text-nutri-orange-deep uppercase tracking-wider">2021 — Botanical Breakthrough</span>
              <h3 className="font-serif text-xl font-bold text-nutri-dark">In-House Herbal Diet Formulation</h3>
              <p className="text-xs text-nutri-dark/75 leading-relaxed font-normal">Introduced Brahmi, Neem, Basil, and Turmeric into daily feed with zero antibiotics.</p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[33px] sm:-left-[49px] top-1 w-5 h-5 rounded-full bg-nutri-orange border-4 border-white" />
              <span className="text-xs font-black text-nutri-orange-deep uppercase tracking-wider">Present — Expansion</span>
              <h3 className="font-serif text-xl font-bold text-nutri-dark">Retail Expansion & Farmer Network</h3>
              <p className="text-xs text-nutri-dark/75 leading-relaxed font-normal">Supplying premium outlets across South & West India and empowering ethical partner farmers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
