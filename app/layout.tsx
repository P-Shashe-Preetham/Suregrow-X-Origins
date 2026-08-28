"use client";

import React from "react";
import "@/app/globals.css";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { PageLoader } from "@/components/ui/PageLoader";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { useLenis } from "@/hooks/useLenis";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Initialize Lenis smooth scroll across all pages
  useLenis();

  return (
    <html lang="en" className="custom-cursor-active">
      <head>
        <title>Nutrifresh — Premium Quality Free Range Eggs | Suregrow Farms</title>
        <meta
          name="description"
          content="Nutrifresh Premium Quality Free Range Eggs by Suregrow Farms Pvt. Ltd. Produced by hens raised on 100 sq. ft. per bird pastures, fed 100% vegetarian whole grains and 8 medicinal herbs with zero antibiotics."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-nutri-cream text-nutri-dark font-sans selection:bg-nutri-amber selection:text-white antialiased">
        <ScrollProgress />
        <PageLoader />
        <CustomCursor />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
