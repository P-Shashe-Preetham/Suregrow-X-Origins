"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, ArrowRight, CheckCircle2, Sprout, Building, PhoneCall } from "lucide-react";
import { ImageReveal } from "@/components/ui/ImageReveal";
import confetti from "canvas-confetti";

export default function BecomeFarmerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    landSize: "",
    experience: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div className="relative overflow-hidden bg-nutri-cream text-nutri-dark pt-24 pb-16">
      {/* HERO - CLEAN BRIGHT EGG PALETTE */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-nutri-yellow-pale via-nutri-cream to-white text-nutri-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nutri-yellow/30 text-nutri-dark text-xs font-black uppercase tracking-widest border border-nutri-yellow shadow-sm">
              <HeartHandshake className="w-4 h-4 text-nutri-orange" />
              <span>SUREGROW FARMER PARTNERSHIP PROGRAM</span>
            </span>

            <h1 className="font-serif text-4xl sm:text-6xl font-extrabold leading-tight text-nutri-dark">
              Partner With Us. <br />
              <span className="text-nutri-orange italic">Grow Ethical Agriculture.</span>
            </h1>

            <p className="text-base sm:text-lg text-nutri-dark/80 font-normal leading-relaxed max-w-xl">
              Join the Nutrifresh sustainable poultry ecosystem. We empower local farmers with veterinary support, herbal feed formulations, RSPCA barn designs, and guaranteed buyback pricing.
            </p>
          </div>

          <div className="lg:col-span-5">
            <ImageReveal
              src="/assets/farmer_portrait.png"
              alt="Nutrifresh Partner Farmer"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nutri-cream">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-nutri-orange">
              BENEFITS & SUPPORT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-nutri-dark">
              Why Partner With Nutrifresh?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border-2 border-nutri-yellow-soft shadow-md space-y-3">
              <Sprout className="w-8 h-8 text-nutri-orange" />
              <h3 className="font-serif font-bold text-lg text-nutri-dark">Technical Training</h3>
              <p className="text-xs text-nutri-dark/75 font-normal">Complete guidance on pasture rotation, RSPCA barn layouts, and biosecurity.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border-2 border-nutri-yellow-soft shadow-md space-y-3">
              <ShieldCheck className="w-8 h-8 text-nutri-orange" />
              <h3 className="font-serif font-bold text-lg text-nutri-dark">Herbal Feed Supply</h3>
              <p className="text-xs text-nutri-dark/75 font-normal">Access to our proprietary 8-botanical herbal feed formulation.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border-2 border-nutri-yellow-soft shadow-md space-y-3">
              <Building className="w-8 h-8 text-nutri-orange" />
              <h3 className="font-serif font-bold text-lg text-nutri-dark">Fair Buyback</h3>
              <p className="text-xs text-nutri-dark/75 font-normal">Guaranteed buyback prices protecting farmers from market volatility.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border-2 border-nutri-yellow-soft shadow-md space-y-3">
              <PhoneCall className="w-8 h-8 text-nutri-orange" />
              <h3 className="font-serif font-bold text-lg text-nutri-dark">Veterinary Care</h3>
              <p className="text-xs text-nutri-dark/75 font-normal">24/7 access to our veterinary team for natural ayurvedic hen health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nutri-yellow-pale border-t border-nutri-yellow-soft text-nutri-dark">
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border-2 border-nutri-yellow shadow-2xl space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-nutri-orange">
              FARMER ONBOARDING
            </span>
            <h2 className="font-serif text-3xl font-extrabold text-nutri-dark">Partner Application Form</h2>
          </div>

          {submitted ? (
            <div className="text-center space-y-4 py-8">
              <CheckCircle2 className="w-16 h-16 text-nutri-orange mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-nutri-dark">Application Received!</h3>
              <p className="text-sm text-nutri-dark/80 max-w-md mx-auto font-medium">
                Thank you for applying to the Suregrow Farms Farmer Program. Our agriculture field director will contact you within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-extrabold text-nutri-dark mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-nutri-cream border-2 border-nutri-yellow-soft rounded-xl px-4 py-3 text-sm text-nutri-dark placeholder-nutri-dark/40 focus:outline-none focus:border-nutri-orange"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-nutri-dark mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-nutri-cream border-2 border-nutri-yellow-soft rounded-xl px-4 py-3 text-sm text-nutri-dark placeholder-nutri-dark/40 focus:outline-none focus:border-nutri-orange"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-extrabold text-nutri-dark mb-2">City / Location</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-nutri-cream border-2 border-nutri-yellow-soft rounded-xl px-4 py-3 text-sm text-nutri-dark placeholder-nutri-dark/40 focus:outline-none focus:border-nutri-orange"
                    placeholder="District / State"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-nutri-dark mb-2">Available Land (Acres)</label>
                  <input
                    type="text"
                    required
                    value={formData.landSize}
                    onChange={(e) => setFormData({ ...formData, landSize: e.target.value })}
                    className="w-full bg-nutri-cream border-2 border-nutri-yellow-soft rounded-xl px-4 py-3 text-sm text-nutri-dark placeholder-nutri-dark/40 focus:outline-none focus:border-nutri-orange"
                    placeholder="e.g. 2 Acres"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-nutri-orange hover:bg-nutri-orange-deep text-white font-extrabold rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                Submit Partner Application
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
