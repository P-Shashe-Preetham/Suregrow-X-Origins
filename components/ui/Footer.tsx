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
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-nutri-yellow/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Banner CTA: Store Locator & Farm Pickups */}
        <div className="bg-gradient-to-r from-nutri-yellow via-nutri-yellow-bright to-nutri-orange p-8 lg:p-12 rounded-3xl border-2 border-nutri-yellow shadow-2xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-nutri-dark">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nutri-dark text-white text-xs font-black uppercase tracking-wider shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-nutri-yellow" />
              <span>Fresh Daily Stockists</span>
            </div>
            <h3 className="font-serif text-2xl lg:text-4xl text-nutri-dark font-extrabold leading-tight">
              Looking for Genuine Free Range Eggs Nearby?
            </h3>
            <p className="text-nutri-dark/90 text-sm lg:text-base max-w-2xl font-medium">
              Locate authorized organic supermarkets, gourmet outlets, and direct Suregrow farm hubs across major cities.
            </p>
          </div>

          <Link
            href="/store-locator"
            className="flex-shrink-0 bg-nutri-dark hover:bg-nutri-orange-deep text-white font-extrabold px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3 text-sm uppercase tracking-wider shadow-xl"
          >
            <MapPin className="w-5 h-5 text-nutri-yellow" />
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
            <p className="text-xs text-white/80 leading-relaxed font-normal max-w-sm">
              SUREGROW FARMS PVT. LTD. engages in sustainable, chemical-free agricultural practices. Producing 100% pasture-raised genuine free range eggs with RSPCA welfare standards and botanical ayurvedic feed.
            </p>
            <div className="flex items-center space-x-3 text-xs text-nutri-yellow font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5 text-nutri-orange" />
              <span>100 Sq. Ft / Bird Pasture Space</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-nutri-yellow">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-medium">
              <li>
                <Link href="/" className="hover:text-nutri-yellow transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/eggs" className="hover:text-nutri-yellow transition-colors">Egg Science & Nutrition</Link>
              </li>
              <li>
                <Link href="/farms" className="hover:text-nutri-yellow transition-colors">Suregrow Farms Ecosystem</Link>
              </li>
              <li>
                <Link href="/become-a-farmer" className="hover:text-nutri-yellow transition-colors">Farmer Network</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-nutri-yellow transition-colors">Founding Story & Mission</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-nutri-yellow transition-colors">Journal & Science Articles</Link>
              </li>
              <li>
                <Link href="/store-locator" className="hover:text-nutri-yellow transition-colors">Google Maps Store Finder</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Corporate Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-nutri-yellow">Corporate Office</h4>
            <div className="space-y-3 text-xs text-white/80 font-normal">
              <p>Suregrow Farms Pvt. Ltd.</p>
              <p className="leading-relaxed">
                Registered Agri-Zone, Karnataka & Corporate Distribution Offices in Bengaluru & Hyderabad, India.
              </p>
              <p className="pt-2 text-nutri-yellow font-bold">Inquiries: info@suregrowfarms.com</p>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-nutri-yellow">Pasture Journal</h4>
            <p className="text-xs text-white/80 font-normal">
              Subscribe for monthly research on egg nutrition, poultry welfare, and fresh batch releases.
            </p>

            {subscribed ? (
              <div className="flex items-center space-x-2 text-xs text-nutri-yellow font-bold p-3 bg-white/10 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-nutri-orange" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/50 focus:outline-none focus:border-nutri-yellow"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-nutri-orange hover:bg-nutri-orange-deep text-white font-extrabold rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} Nutrifresh Eggs by Suregrow Farms Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>RSPCA Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
