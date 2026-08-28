"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, User, ArrowRight, Sparkles, X } from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/lib/constants";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const filteredPosts = selectedCategory === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative overflow-hidden bg-nutri-cream text-nutri-dark pt-24 pb-16">
      {/* HERO - CLEAN BRIGHT EGG PALETTE */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-nutri-yellow-pale via-nutri-cream to-white text-nutri-dark">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nutri-yellow/30 text-nutri-dark text-xs font-black uppercase tracking-widest border border-nutri-yellow shadow-sm">
            <BookOpen className="w-4 h-4 text-nutri-orange" />
            <span>THE NUTRIFRESH JOURNAL</span>
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold max-w-4xl mx-auto leading-tight text-nutri-dark">
            Poultry Science, Nutrition & <br />
            <span className="text-nutri-orange italic">Ethical Farming Stories.</span>
          </h1>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nutri-cream">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {["All", "Nutrition", "Ethical Farming"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all shadow-sm ${
                  selectedCategory === cat
                    ? "bg-nutri-orange text-white shadow-md"
                    : "bg-white text-nutri-dark border-2 border-nutri-yellow-soft hover:bg-nutri-yellow-pale"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -6 }}
                onClick={() => setActiveArticle(post)}
                className="bg-white rounded-3xl overflow-hidden border-2 border-nutri-yellow-soft shadow-lg cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-nutri-yellow text-nutri-dark text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-md">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-3 text-xs text-nutri-dark/60 font-semibold">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-nutri-dark group-hover:text-nutri-orange transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-nutri-dark/75 leading-relaxed font-normal">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-nutri-yellow-soft mt-4">
                  <span className="text-xs font-bold text-nutri-orange group-hover:text-nutri-orange-deep transition-colors flex items-center space-x-1">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-nutri-dark max-w-3xl w-full rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto border-4 border-nutri-yellow"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-nutri-orange text-white hover:bg-nutri-orange-deep transition-colors shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <span className="inline-block bg-nutri-yellow text-nutri-dark text-xs font-extrabold px-3.5 py-1 rounded-full uppercase">
                  {activeArticle.category}
                </span>

                <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-nutri-dark">
                  {activeArticle.title}
                </h2>

                <div className="flex items-center space-x-4 text-xs text-nutri-dark/60 font-semibold pb-4 border-b border-nutri-yellow-soft">
                  <span>Author: {activeArticle.author}</span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                </div>

                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                  <Image src={activeArticle.image} alt={activeArticle.title} fill className="object-cover" />
                </div>

                <div className="space-y-4 text-sm sm:text-base text-nutri-dark/85 leading-relaxed font-normal">
                  {activeArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
