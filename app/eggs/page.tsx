"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, ChevronDown, MapPin, ShieldCheck, HeartHandshake, HelpCircle, ArrowRight } from "lucide-react";
import { NUTRIFRESH_PRODUCTS, NUTRIFRESH_FAQS } from "@/lib/constants";
import { ImageReveal } from "@/components/ui/ImageReveal";

export default function EggsPage() {
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>("All");
  const [expandedFaq, setExpandedFaq] = useState<string | null>("faq-1");

  const filteredFaqs = activeFaqCategory === "All"
    ? NUTRIFRESH_FAQS
    : NUTRIFRESH_FAQS.filter((f) => f.category === activeFaqCategory);

  return (
    <div className="relative overflow-hidden bg-nutri-cream text-nutri-dark pt-24 pb-16">
      {/* SECTION 1: HERO - CLEAN BRIGHT EGG PALETTE */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-nutri-yellow-pale via-nutri-cream to-white text-nutri-dark relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nutri-yellow/30 text-nutri-dark text-xs font-black uppercase tracking-widest border border-nutri-yellow shadow-sm">
              <Sparkles className="w-4 h-4 text-nutri-orange" />
              <span>PASTURE-RAISED EGG STORYTELLING</span>
            </span>

            <h1 className="font-serif text-4xl sm:text-6xl font-extrabold leading-tight text-nutri-dark">
              Pure Natural Eggs. <br />
              <span className="text-nutri-orange italic">The Yolk Tells The Truth.</span>
            </h1>

            <p className="text-base sm:text-lg text-nutri-dark/80 font-normal leading-relaxed max-w-xl">
              Taste the difference of genuine pasture-raised eggs. Produced by hens fed whole grains, fresh green forage, and 8 medicinal herbs—never treated with growth hormones, antibiotics, or steroids.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/store-locator"
                className="bg-nutri-orange hover:bg-nutri-orange-deep text-white font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all shadow-xl flex items-center space-x-2"
              >
                <MapPin className="w-4 h-4 text-nutri-yellow" />
                <span>Find Retailers Near You</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl ring-4 ring-nutri-yellow">
              <Image
                src="/assets/hero_egg.png"
                alt="Nutrifresh Golden Yolk Egg"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY NUTRIFRESH EGGS STAND APART */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nutri-cream">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-nutri-orange">UNCOMPROMISED QUALITY</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-nutri-dark">Why Nutrifresh Eggs Stand Apart</h2>
            <p className="text-sm text-nutri-dark/75 max-w-2xl mx-auto font-medium">
              Every Nutrifresh egg is a result of ethical animal welfare and deep agrarian research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-nutri-yellow-soft space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-nutri-yellow text-nutri-dark flex items-center justify-center font-extrabold text-lg">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-nutri-dark">Unwashed Bloom Coating</h3>
              <p className="text-xs text-nutri-dark/80 leading-relaxed font-medium">
                When hens lay eggs, a natural protective coating called the "bloom" seals the pores. We do not wash our eggs to prevent bacteria entry and keep them naturally fresh.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-nutri-yellow-soft space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-nutri-yellow text-nutri-dark flex items-center justify-center font-extrabold text-lg">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-nutri-dark">Upright Golden Orange Yolk</h3>
              <p className="text-xs text-nutri-dark/80 leading-relaxed font-medium">
                The rich orange color comes from natural plant carotenoids in our herbal diet (Brahmi, Basil, Turmeric). An upright yolk signifies supreme freshness and high lecithin density.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-nutri-yellow-soft space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-nutri-yellow text-nutri-dark flex items-center justify-center font-extrabold text-lg">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-nutri-dark">Zero Hormones or Antibiotics</h3>
              <p className="text-xs text-nutri-dark/80 leading-relaxed font-medium">
                Factory farms rely on routine prophylactic antibiotics due to crowded filth. Our uncrowded, airy barns and open pastures keep hens healthy naturally with ayurvedic care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FAQ & CONSUMER GUIDE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nutri-yellow-pale border-t border-nutri-yellow-soft">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-nutri-orange">TRANSPARENCY & KNOWLEDGE</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-nutri-dark">Frequently Asked Questions</h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {["All", "Pasture vs Commercial", "Nutrition & Herbs", "Storage & Bloom"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFaqCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all shadow-sm ${
                  activeFaqCategory === cat
                    ? "bg-nutri-orange text-white shadow-md"
                    : "bg-white text-nutri-dark border border-nutri-yellow-soft hover:bg-nutri-yellow-pale"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border-2 border-nutri-yellow-soft overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between space-x-4 bg-white hover:bg-nutri-cream/50 transition-colors"
                  >
                    <span className="font-serif text-lg font-bold text-nutri-dark">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-nutri-orange transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-xs text-nutri-dark/80 leading-relaxed border-t border-nutri-yellow-soft/50 pt-4 font-normal"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
