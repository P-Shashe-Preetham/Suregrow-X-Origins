"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export function ImageReveal({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[4/3]",
  priority = false,
}: ImageRevealProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${aspectRatio} ${className}`}>
      {/* Clip-Path Reveal Mask */}
      <motion.div
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
        whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
        className="w-full h-full relative"
      >
        <motion.div
          initial={{ scale: 1.25 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
