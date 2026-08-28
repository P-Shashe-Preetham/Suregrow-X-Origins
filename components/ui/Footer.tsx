"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, ArrowRight, ShieldCheck, Heart, Sparkles, CheckCircle2 } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-nutri-dark text-white relative overflow-hidden pt-20 pb-12 border-t-4 border-nutri-yellow">
      {/* Background Radial Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-nutri-orange/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Banner CTA: Store Locator & Farm Pickups */}
        <div className="bg-gradient-to-r from-nutri-orange via-nutri-orange-bright to-nutri-orange-deep p-8 lg:p-12 rounded-3xl border-2 border-nutri-yellow shadow-2xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white text-nutri-orange-deep text-xs font-black uppercase tracking-wider shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-nutri-orange" />
              <span>Fresh Daily Stockists</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-4xl text-white font-extrabold leading-tight">
              Looking for Genuine Free Range Eggs Nearby?
            </h3>
            <p className="text-white/90 text-sm lg:text-base max-w-2xl font-medium">
              Locate authorized organic supermarkets, gourmet outlets, and direct Suregrow farm hubs across major cities.
            </p>
          </div>

          <Link
            href="/store-locator"
            className="flex-shrink-0 bg-nutri-yellow hover:bg-nutri-yellow-bright text-nutri-dark font-extrabold px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3 text-sm uppercase tracking-wider shadow-xl"
          >
            <MapPin className="w-5 h-5 text-nutri-orange-deep" />
            <span>Launch Store Locator</span>
          </Link>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative w-48 h-14">
              <Image
                src="/assets/logo.png"
                alt="Nutrifresh Logo"
                fill
                className="object-contain filter brightness-110"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm font-normal">
              Nutrifresh Premium Quality Free Range Eggs are produced by Suregrow Farms Pvt. Ltd. (Est. 2015). Raised on 100 sq. ft. per bird pastures with clean air, herbal diet, and zero antibiotics.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center space-x-2 text-xs text-nutri-yellow font-bold">
                <ShieldCheck className="w-4 h-4 text-nutri-orange" />
                <span>RSPCA Standards (100 Sq Ft / Bird)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-nutri-yellow font-black">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {[
                { label: "Home", href: "/" },
                { label: "Nutrifresh Eggs", href: "/eggs" },
                { label: "Nutrifresh Farms", href: "/farms" },
                { label: "Store Locator", href: "/store-locator" },
                { label: "Become a Farmer", href: "/become-a-farmer" },
                { label: "About Us", href: "/about" },
                { label: "Blog & Journal", href: "/blog" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-nutri-yellow transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-nutri-yellow/60">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Brand USPs & Facts */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-nutri-yellow font-black">
              Nutrifresh Guarantee
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-medium">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-nutri-yellow mt-0.5 flex-shrink-0" />
                <span>100% Vegetarian & Herbal Diet (8 Botanicals)</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-nutri-yellow mt-0.5 flex-shrink-0" />
                <span>0 Antibiotics, Growth Hormones or Steroids</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-nutri-yellow mt-0.5 flex-shrink-0" />
                <span>Unwashed Shell preserving natural Bloom Coating</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-nutri-yellow mt-0.5 flex-shrink-0" />
                <span>Upright Rich Golden Orange Yolks</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-nutri-yellow mt-0.5 flex-shrink-0" />
                <span>No De-Beaking & Ethical Hen Protection</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-nutri-yellow font-black">
              Join Our Farm Journal
            </h4>
            <p className="text-xs text-white/80 leading-relaxed font-normal">
              Subscribe for organic farm insights, herbal nutrition studies, and fresh stock alerts.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-xs text-white placeholder-white/50 focus:outline-none focus:border-nutri-yellow transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-nutri-yellow text-nutri-dark px-3.5 rounded-full hover:bg-nutri-yellow-bright transition-colors flex items-center justify-center font-bold"
                >
                  <ArrowRight className="w-4 h-4 text-nutri-orange-deep" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-nutri-yellow font-bold">
                  ✓ Thank you for subscribing to Nutrifresh!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60 font-medium">
          <div>
            © {new Date().getFullYear()} SUREGROW FARMS Pvt. Ltd. — Farming with Integrity. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/eggs" className="hover:text-nutri-yellow transition-colors">Egg Quality Promise</Link>
            <Link href="/farms" className="hover:text-nutri-yellow transition-colors">Pasture Standards</Link>
            <Link href="/store-locator" className="hover:text-nutri-yellow transition-colors">Find Retail Outlets</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
