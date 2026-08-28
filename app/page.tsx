"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, ShieldCheck, Heart, Award, CheckCircle2, ChevronDown, Leaf } from "lucide-react";
import { SplitText } from "@/components/ui/SplitText";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NUTRIFRESH_PRODUCTS, BLOG_POSTS } from "@/lib/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedSectionRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger for Pinned Farm-to-Table Journey
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (pinnedSectionRef.current) {
        const steps = gsap.utils.toArray(".journey-step");
        gsap.to(steps, {
          xPercent: -100 * (steps.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: pinnedSectionRef.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + pinnedSectionRef.current?.offsetWidth,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-nutri-cream text-nutri-dark">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-nutri-green-deep via-[#163023] to-nutri-green">
        {/* Background Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-nutri-amber/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-nutri-amber/20 border border-nutri-amber/30 text-nutri-amber text-xs font-bold uppercase tracking-widest"
            >
              <Sparkles className="w-4 h-4" />
              <span>SUREGROW FARMS • EST. 2015</span>
            </motion.div>

            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight">
              Genuine Free Range Eggs. <br />
              <span className="text-gradient-amber italic">Raised With Integrity.</span>
            </h1>

            <p className="text-base sm:text-lg text-nutri-cream/85 max-w-2xl leading-relaxed font-light">
              Healthy hens lay nutritious eggs. Our pasture-raised hens roam freely across <strong className="text-nutri-amber font-semibold">100 sq. ft. per bird</strong> open fields, enjoying 100% vegetarian grain and 8 medicinal herbs with zero antibiotics.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <MagneticButton>
                <Link
                  href="/eggs"
                  className="bg-gradient-to-r from-nutri-amber to-nutri-amber-dark text-nutri-green-deep font-bold px-8 py-4 rounded-full shadow-2xl shadow-nutri-amber/40 hover:shadow-nutri-amber/60 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3 text-sm uppercase tracking-wider"
                  data-cursor-text="Explore"
                >
                  <span>Explore Nutrifresh Eggs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>

              <Link
                href="/store-locator"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-4 rounded-full transition-all duration-300 flex items-center space-x-2 text-sm uppercase tracking-wider"
                data-cursor-text="Locate"
              >
                <MapPin className="w-4 h-4 text-nutri-amber" />
                <span>Find Retailers</span>
              </Link>
            </div>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 text-nutri-cream">
              <div>
                <p className="font-serif text-2xl lg:text-3xl font-bold text-nutri-amber">100 Sq. Ft</p>
                <p className="text-[11px] text-nutri-cream/70 uppercase tracking-wider font-medium">Pasture / Bird</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl font-bold text-nutri-amber">100%</p>
                <p className="text-[11px] text-nutri-cream/70 uppercase tracking-wider font-medium">Vegetarian & Herbs</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl font-bold text-nutri-amber">0%</p>
                <p className="text-[11px] text-nutri-cream/70 uppercase tracking-wider font-medium">Antibiotics / Steroids</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Egg Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px]"
            >
              <div className="absolute inset-0 bg-nutri-amber/20 rounded-full blur-3xl animate-pulse-slow" />
              <Image
                src="/assets/hero_egg.png"
                alt="Nutrifresh Golden Yolk Egg"
                fill
                className="object-cover rounded-3xl shadow-2xl ring-4 ring-nutri-amber/40"
                priority
              />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-nutri-green-deep text-nutri-cream p-4 rounded-2xl border border-nutri-amber/40 shadow-2xl flex items-center space-x-3"
              >
                <div className="w-10 h-10 rounded-full bg-nutri-amber flex items-center justify-center text-nutri-green-deep font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-bold text-nutri-amber">RSPCA Standard</p>
                  <p className="text-[11px] text-nutri-cream/70">Upright Golden Yolk</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-nutri-cream/60 text-xs tracking-widest uppercase animate-bounce">
          <span>Scroll Down</span>
          <ChevronDown className="w-4 h-4 text-nutri-amber" />
        </div>
      </section>

      {/* SECTION 2: BOLD BRAND STORY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-nutri-cream text-nutri-dark relative">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-nutri-green">
            THE NUTRIFRESH DIFFERENCE
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-nutri-green-deep">
            <SplitText text="Not All Eggs Are Created Equal. Today's Market Is Laden With Ignorance & Misinformation." />
          </h2>

          <p className="text-lg sm:text-xl text-nutri-dark/80 max-w-3xl mx-auto leading-relaxed font-light">
            Terms like "Free Range" and "Organic" are freely misused for normal caged layer eggs. Factory eggs come from stressed hens in cramped wire cages fed commercial growth enhancers and antibiotics.
          </p>

          <p className="text-base text-nutri-green font-semibold italic">
            "At Nutrifresh, our hens live in spacious airy barns with open access to outdoor pastures, scratching, dust bathing, and foraging naturally."
          </p>

          <div className="pt-6">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 text-sm font-bold text-nutri-amber hover:text-nutri-amber-dark uppercase tracking-wider border-b-2 border-nutri-amber pb-1 transition-all"
            >
              <span>Read Our Full Founding Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PRODUCTS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-nutri-cream-warm border-y border-nutri-cream-dark">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-nutri-amber">
                OUR EGG VARIETIES
              </span>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-nutri-green-deep">
                Artisanal Pasture-Raised Range
              </h2>
            </div>
            <Link
              href="/eggs"
              className="inline-flex items-center space-x-2 text-sm font-bold text-nutri-green hover:text-nutri-amber transition-colors"
            >
              <span>View All Packaging Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NUTRIFRESH_PRODUCTS.map((prod) => (
              <motion.div
                key={prod.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-nutri-cream-dark flex flex-col justify-between space-y-6 relative overflow-hidden group"
              >
                <div className="space-y-4">
                  <div className="relative w-full h-56 rounded-2xl overflow-hidden">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-nutri-amber text-nutri-green-deep text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {prod.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-nutri-green-deep">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-nutri-dark/75 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-nutri-cream-dark flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-nutri-dark/50 tracking-wider">Price</p>
                    <p className="font-serif text-xl font-bold text-nutri-amber">{prod.price}</p>
                  </div>
                  <Link
                    href="/eggs"
                    className="px-5 py-2.5 rounded-full bg-nutri-green-deep text-nutri-cream text-xs font-bold hover:bg-nutri-amber hover:text-nutri-green-deep transition-colors"
                  >
                    View Benefits
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PINNED SCROLL TRIGGER — FARM TO TABLE JOURNEY */}
      <section ref={pinnedSectionRef} className="h-screen bg-nutri-green-deep text-nutri-cream flex items-center overflow-hidden relative">
        <div className="journey-step flex-shrink-0 w-screen h-full flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-4xl space-y-6 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-nutri-amber">FARM TO TABLE • STEP 1</span>
            <h2 className="font-serif text-4xl lg:text-6xl font-bold">1. The Lush Pasture Land</h2>
            <p className="text-base lg:text-lg text-nutri-cream/80 max-w-2xl mx-auto leading-relaxed">
              Located in pristine, unpolluted agricultural zones, Suregrow Farms provides 100 sq. ft per hen of rotational green pasture with natural shade trees and fresh air.
            </p>
          </div>
        </div>

        <div className="journey-step flex-shrink-0 w-screen h-full flex items-center justify-center p-8 lg:p-16 bg-[#163023]">
          <div className="max-w-4xl space-y-6 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-nutri-amber">FARM TO TABLE • STEP 2</span>
            <h2 className="font-serif text-4xl lg:text-6xl font-bold">2. Natural Botanical Feed</h2>
            <p className="text-base lg:text-lg text-nutri-cream/80 max-w-2xl mx-auto leading-relaxed">
              Our hens forage for wild seeds, bugs, and insects while enjoying our in-house formulation of whole grains, Brahmi, Neem, Turmeric, Nilavembu, and Aloe Vera.
            </p>
          </div>
        </div>

        <div className="journey-step flex-shrink-0 w-screen h-full flex items-center justify-center p-8 lg:p-16 bg-[#12271c]">
          <div className="max-w-4xl space-y-6 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-nutri-amber">FARM TO TABLE • STEP 3</span>
            <h2 className="font-serif text-4xl lg:text-6xl font-bold">3. Fresh Daily Collection</h2>
            <p className="text-base lg:text-lg text-nutri-cream/80 max-w-2xl mx-auto leading-relaxed">
              Hens lay eggs in comfortable private nest boxes. Our farmers hand-collect eggs at regular intervals to maintain calm, clean, unwashed eggs preserving the natural protective bloom coating.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED FARMS PARALLAX */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-nutri-cream relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-nutri-green">SUREGROW FARMS PVT. LTD.</span>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-nutri-green-deep">
              Farming With Integrity Since 2015
            </h2>
            <p className="text-sm lg:text-base text-nutri-dark/80 leading-relaxed font-light">
              Started in 2015, Suregrow Farms is dedicated to sustainable, chemical-free agriculture and ethical livestock raising. We operate on the foundational belief that responsible farming protects both human health and the environment.
            </p>
            <div className="pt-4">
              <Link
                href="/farms"
                className="bg-nutri-green-deep text-nutri-cream px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-nutri-amber hover:text-nutri-green-deep transition-colors inline-flex items-center space-x-2"
              >
                <span>Tour Our Farms</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ImageReveal
              src="/assets/farm_landscape.png"
              alt="Suregrow Farms Pasture Landscape"
              aspectRatio="aspect-[16/10]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: STORE LOCATOR CTA BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nutri-green-deep text-nutri-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-nutri-amber to-nutri-amber-dark text-nutri-green-deep p-8 lg:p-16 rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest bg-nutri-green-deep text-nutri-amber px-3 py-1 rounded-full inline-block">
              Interactive Store Locator
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold">
              Find Nutrifresh Outlets Near You
            </h2>
            <p className="text-nutri-green-deep/90 text-sm lg:text-base max-w-xl font-medium">
              Locate authorized organic supermarkets, gourmet stores, and direct farm pickup locations across Bengaluru, Hyderabad, and Mumbai.
            </p>
          </div>

          <Link
            href="/store-locator"
            className="bg-nutri-green-deep text-nutri-cream font-bold px-8 py-4 rounded-full text-xs uppercase tracking-wider hover:bg-white hover:text-nutri-green-deep transition-all shadow-xl flex items-center space-x-2"
          >
            <MapPin className="w-4 h-4 text-nutri-amber" />
            <span>Launch Google Maps Finder</span>
          </Link>
        </div>
      </section>

      {/* SECTION 7: LATEST BLOG STORIES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-nutri-cream">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-nutri-amber">
                OUR JOURNAL & RESEARCH
              </span>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-nutri-green-deep">
                Stories From The Pasture
              </h2>
            </div>
            <Link href="/blog" className="text-xs font-bold uppercase tracking-wider text-nutri-green hover:text-nutri-amber transition-colors">
              Read All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} href={`/blog#${post.slug}`} className="group space-y-4">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-nutri-green-deep text-nutri-amber text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                    {post.category}
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-nutri-dark/50 font-medium">{post.date} • {post.readTime}</p>
                  <h3 className="font-serif text-lg font-bold text-nutri-green-deep group-hover:text-nutri-amber transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-nutri-dark/70 line-clamp-2">
                    {post.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
