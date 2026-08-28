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
    <footer className="bg-nutri-green-deep text-nutri-cream relative overflow-hidden pt-20 pb-12 border-t border-white/10">
      {/* Background Radial Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-nutri-amber/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Banner CTA: Store Locator & Farm Pickups */}
        <div className="bg-gradient-to-r from-nutri-green-light to-nutri-green p-8 lg:p-12 rounded-3xl border border-white/15 shadow-2xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nutri-amber/20 text-nutri-amber text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fresh Daily Stockists</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-4xl text-white font-bold leading-tight">
              Looking for Genuine Free Range Eggs Nearby?
            </h3>
            <p className="text-nutri-cream/80 text-sm lg:text-base max-w-2xl">
              Locate authorized organic supermarkets, gourmet outlets, and direct Suregrow farm hubs across major cities.
            </p>
          </div>

          <Link
            href="/store-locator"
            className="flex-shrink-0 bg-gradient-to-r from-nutri-amber to-nutri-amber-dark text-nutri-green-deep font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-nutri-amber/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3 text-sm uppercase tracking-wider"
          >
            <MapPin className="w-5 h-5" />
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
            <p className="text-nutri-cream/70 text-sm leading-relaxed max-w-sm">
              Nutrifresh Premium Quality Free Range Eggs are produced by Suregrow Farms Pvt. Ltd. (Est. 2015). Raised on 100 sq. ft. per bird pastures with clean air, herbal diet, and zero antibiotics.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center space-x-2 text-xs text-nutri-amber font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>RSPCA Standards (100 Sq Ft / Bird)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-nutri-amber font-bold">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
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
                    className="text-nutri-cream/70 hover:text-nutri-amber transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-nutri-amber/40">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Brand USPs & Facts */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-nutri-amber font-bold">
              Nutrifresh Guarantee
            </h4>
            <ul className="space-y-2.5 text-xs text-nutri-cream/75">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-nutri-amber mt-0.5 flex-shrink-0" />
                <span>100% Vegetarian & Herbal Diet (8 Botanicals)</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-nutri-amber mt-0.5 flex-shrink-0" />
                <span>0 Antibiotics, Growth Hormones or Steroids</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-nutri-amber mt-0.5 flex-shrink-0" />
                <span>Unwashed Shell preserving natural Bloom Coating</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-nutri-amber mt-0.5 flex-shrink-0" />
                <span>Upright Rich Golden Orange Yolks</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-nutri-amber mt-0.5 flex-shrink-0" />
                <span>No De-Beaking & Ethical Hen Protection</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-nutri-amber font-bold">
              Join Our Farm Journal
            </h4>
            <p className="text-xs text-nutri-cream/70 leading-relaxed">
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
                  className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-nutri-amber transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-nutri-amber text-nutri-green-deep px-3 rounded-full hover:bg-nutri-amber-light transition-colors flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-nutri-amber font-medium">
                  ✓ Thank you for subscribing to Nutrifresh!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-nutri-cream/50">
          <div>
            © {new Date().getFullYear()} SUREGROW FARMS Pvt. Ltd. — Farming with Integrity. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/eggs" className="hover:text-nutri-amber transition-colors">Egg Quality Promise</Link>
            <Link href="/farms" className="hover:text-nutri-amber transition-colors">Pasture Standards</Link>
            <Link href="/store-locator" className="hover:text-nutri-amber transition-colors">Find Retail Outlets</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
