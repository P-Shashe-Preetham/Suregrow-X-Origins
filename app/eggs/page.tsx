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
      {/* SECTION 1: HERO */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-nutri-green-deep to-nutri-green text-nutri-cream relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nutri-amber/20 text-nutri-amber text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>PASTURE-RAISED EGG STORYTELLING</span>
            </span>

            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight">
              Pure Natural Eggs. <br />
              <span className="text-gradient-amber italic">The Yolk Tells The Truth.</span>
            </h1>

            <p className="text-base sm:text-lg text-nutri-cream/85 font-light leading-relaxed max-w-xl">
              Taste the difference of genuine pasture-raised eggs. Produced by hens fed whole grains, fresh green forage, and 8 medicinal herbs—never treated with growth hormones, antibiotics, or steroids.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/store-locator"
                className="bg-nutri-amber hover:bg-nutri-amber-dark text-nutri-green-deep font-bold px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all shadow-xl flex items-center space-x-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Find Retailers Near You</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl ring-4 ring-nutri-amber/30">
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

      {/* SECTION 2: WHY NUTRIFRESH VISUAL BREAKDOWN */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nutri-cream">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-nutri-amber">
              UNCOMPROMISED QUALITY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-nutri-green-deep">
              Why Nutrifresh Eggs Stand Apart
            </h2>
            <p className="text-sm sm:text-base text-nutri-dark/70 font-light">
              Every Nutrifresh egg is a result of ethical animal welfare and deep agrarian research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-nutri-cream-dark space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-nutri-amber/15 text-nutri-amber flex items-center justify-center font-bold text-xl">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-nutri-green-deep">
                Unwashed Bloom Coating
              </h3>
              <p className="text-xs text-nutri-dark/75 leading-relaxed">
                When hens lay eggs, a natural protective coating called the "bloom" seals the pores. We do not wash our eggs to prevent bacteria entry and keep them naturally fresh.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-nutri-cream-dark space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-nutri-amber/15 text-nutri-amber flex items-center justify-center font-bold text-xl">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-nutri-green-deep">
                Upright Golden Orange Yolk
              </h3>
              <p className="text-xs text-nutri-dark/75 leading-relaxed">
                The rich orange color comes from natural plant carotenoids in our herbal diet (Brahmi, Basil, Turmeric). An upright yolk signifies supreme freshness and high lecithin density.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-nutri-cream-dark space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-nutri-amber/15 text-nutri-amber flex items-center justify-center font-bold text-xl">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-nutri-green-deep">
                Zero Hormones or Antibiotics
              </h3>
              <p className="text-xs text-nutri-dark/75 leading-relaxed">
                Factory farms rely on routine prophylactic antibiotics due to crowded filth. Our uncrowded, airy barns and open pastures keep hens healthy naturally with ayurvedic care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NUTRITION COMPARISON MATRIX */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nutri-green-deep text-nutri-cream relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-nutri-amber">
              LABORATORY ANALYSIS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold">
              Pasture-Raised vs Commercial Cage Eggs
            </h2>
            <p className="text-sm sm:text-base text-nutri-cream/80 font-light">
              Independent nutritional testing highlights the power of pasture-raised farming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/15 text-center space-y-2">
              <span className="text-3xl font-serif font-bold text-nutri-amber">1/3 Less</span>
              <p className="text-xs font-bold uppercase tracking-wider text-white">Cholesterol</p>
              <p className="text-[11px] text-nutri-cream/70">33% lower cholesterol than caged eggs</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/15 text-center space-y-2">
              <span className="text-3xl font-serif font-bold text-nutri-amber">1/4 Less</span>
              <p className="text-xs font-bold uppercase tracking-wider text-white">Saturated Fat</p>
              <p className="text-[11px] text-nutri-cream/70">25% reduced saturated fat content</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/15 text-center space-y-2">
              <span className="text-3xl font-serif font-bold text-nutri-amber">2/3 More</span>
              <p className="text-xs font-bold uppercase tracking-wider text-white">Vitamin A</p>
              <p className="text-[11px] text-nutri-cream/70">Significantly higher cellular repair</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/15 text-center space-y-2">
              <span className="text-3xl font-serif font-bold text-nutri-amber">3x (300%)</span>
              <p className="text-xs font-bold uppercase tracking-wider text-white">Vitamin E</p>
              <p className="text-[11px] text-nutri-cream/70">Triple antioxidant protection</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/15 text-center space-y-2">
              <span className="text-3xl font-serif font-bold text-nutri-amber">7x (700%)</span>
              <p className="text-xs font-bold uppercase tracking-wider text-white">Beta Carotene</p>
              <p className="text-[11px] text-nutri-cream/70">700% boost from green forage & herbs</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE FAQ ACCORDION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nutri-cream">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-nutri-amber">
              EGG SCIENCE & FACTS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-nutri-green-deep">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {["All", "Farms & Welfare", "Our Eggs", "Hen Diet & Health"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFaqCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFaqCategory === cat
                    ? "bg-nutri-green-deep text-nutri-amber shadow-md"
                    : "bg-nutri-cream-dark text-nutri-dark/70 hover:bg-nutri-green-deep/10"
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
                  className="bg-white rounded-2xl border border-nutri-cream-dark overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-nutri-green-deep hover:text-nutri-amber transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-nutri-amber transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-xs sm:text-sm text-nutri-dark/80 leading-relaxed border-t border-nutri-cream-dark/50 pt-4"
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

      {/* WHERE TO BUY CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-nutri-cream-warm text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl font-bold text-nutri-green-deep">
            Ready to Experience Nutrifresh Eggs?
          </h2>
          <p className="text-sm text-nutri-dark/70">
            Check live stock levels and retail store locations in your neighborhood.
          </p>
          <Link
            href="/store-locator"
            className="inline-flex items-center space-x-2 bg-nutri-amber text-nutri-green-deep font-bold px-8 py-4 rounded-full text-xs uppercase tracking-wider hover:bg-nutri-amber-dark transition-colors shadow-lg"
          >
            <MapPin className="w-4 h-4" />
            <span>Open Google Maps Store Locator</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
