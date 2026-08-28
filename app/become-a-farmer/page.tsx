"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, ArrowRight, CheckCircle2, Sprout, Building, PhoneCall } from "lucide-react";
import { ImageReveal } from "@/components/ui/ImageReveal";
import confetti from "canvas-confetti";

export default function BecomeFarmerPage() {
  const [step, setStep] = useState(1);
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
      {/* HERO */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-nutri-green-deep to-nutri-green text-nutri-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nutri-amber/20 text-nutri-amber text-xs font-bold uppercase tracking-widest">
              <HeartHandshake className="w-4 h-4" />
              <span>SUREGROW FARMER PARTNERSHIP PROGRAM</span>
            </span>

            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight">
              Partner With Us. <br />
              <span className="text-gradient-amber italic">Grow Ethical Agriculture.</span>
            </h1>

            <p className="text-base sm:text-lg text-nutri-cream/85 font-light leading-relaxed max-w-xl">
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
            <span className="text-xs font-bold uppercase tracking-widest text-nutri-amber">
              BENEFITS & SUPPORT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-nutri-green-deep">
              Why Partner With Nutrifresh?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-nutri-cream-dark shadow-sm space-y-3">
              <Sprout className="w-8 h-8 text-nutri-amber" />
              <h3 className="font-serif font-bold text-lg text-nutri-green-deep">Technical Training</h3>
              <p className="text-xs text-nutri-dark/70">Complete guidance on pasture rotation, RSPCA barn layouts, and biosecurity.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-nutri-cream-dark shadow-sm space-y-3">
              <ShieldCheck className="w-8 h-8 text-nutri-amber" />
              <h3 className="font-serif font-bold text-lg text-nutri-green-deep">Herbal Feed Supply</h3>
              <p className="text-xs text-nutri-dark/70">Access to our proprietary 8-botanical herbal feed formulation.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-nutri-cream-dark shadow-sm space-y-3">
              <Building className="w-8 h-8 text-nutri-amber" />
              <h3 className="font-serif font-bold text-lg text-nutri-green-deep">Fair Buyback</h3>
              <p className="text-xs text-nutri-dark/70">Guaranteed buyback prices protecting farmers from market volatility.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-nutri-cream-dark shadow-sm space-y-3">
              <PhoneCall className="w-8 h-8 text-nutri-amber" />
              <h3 className="font-serif font-bold text-lg text-nutri-green-deep">Veterinary Care</h3>
              <p className="text-xs text-nutri-dark/70">24/7 access to our veterinary team for natural ayurvedic hen health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nutri-green-deep text-nutri-cream">
        <div className="max-w-3xl mx-auto bg-white/10 p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-nutri-amber">
              FARMER ONBOARDING
            </span>
            <h2 className="font-serif text-3xl font-bold">Partner Application Form</h2>
          </div>

          {submitted ? (
            <div className="text-center space-y-4 py-8">
              <CheckCircle2 className="w-16 h-16 text-nutri-amber mx-auto" />
              <h3 className="font-serif text-2xl font-bold">Application Received!</h3>
              <p className="text-sm text-nutri-cream/80 max-w-md mx-auto">
                Thank you for applying to the Suregrow Farms Farmer Program. Our agriculture field director will contact you within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold text-nutri-amber mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-nutri-amber"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-nutri-amber mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-nutri-amber"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold text-nutri-amber mb-2">City / Location</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-nutri-amber"
                    placeholder="District / State"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-nutri-amber mb-2">Available Land (Acres)</label>
                  <input
                    type="text"
                    required
                    value={formData.landSize}
                    onChange={(e) => setFormData({ ...formData, landSize: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-nutri-amber"
                    placeholder="e.g. 2 Acres"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-nutri-amber hover:bg-nutri-amber-dark text-nutri-green-deep font-bold rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg"
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
