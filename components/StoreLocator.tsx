"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Search, Navigation, Clock, Phone, CheckCircle, ExternalLink, Sparkles, Filter, Store } from "lucide-react";
import { STORE_LOCATIONS, StoreLocation } from "@/lib/constants";
import { Loader } from "@googlemaps/js-api-loader";

export function StoreLocator() {
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeStore, setActiveStore] = useState<StoreLocation>(STORE_LOCATIONS[0]);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapInstance = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  // Unique cities & categories
  const cities = ["All", ...Array.from(new Set(STORE_LOCATIONS.map((s) => s.city)))];
  const categories = ["All", ...Array.from(new Set(STORE_LOCATIONS.map((s) => s.category)))];

  // Filtered stores
  const filteredStores = STORE_LOCATIONS.filter((store) => {
    const matchesCity = selectedCity === "All" || store.city === selectedCity;
    const matchesCategory = selectedCategory === "All" || store.category === selectedCategory;
    const matchesSearch =
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesCategory && matchesSearch;
  });

  // Attempt Google Maps API load if API key available or fallback smoothly
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (apiKey && mapRef.current) {
      const loader = new Loader({
        apiKey,
        version: "weekly",
      });

      loader
        .load()
        .then((google) => {
          const map = new google.maps.Map(mapRef.current!, {
            center: { lat: activeStore.lat, lng: activeStore.lng },
            zoom: 12,
            styles: [
              { elementType: "geometry", stylers: [{ color: "#18181B" }] },
              { elementType: "labels.text.stroke", stylers: [{ color: "#000000" }] },
              { elementType: "labels.text.fill", stylers: [{ color: "#FFC700" }] },
              { featureType: "water", stylers: [{ color: "#000000" }] },
              { featureType: "road", elementType: "geometry", stylers: [{ color: "#27272A" }] },
              { featureType: "poi", elementType: "geometry", stylers: [{ color: "#3F3F46" }] },
            ],
            disableDefaultUI: false,
          });

          googleMapInstance.current = map;
          setMapLoaded(true);

          // Update markers
          filteredStores.forEach((store) => {
            const marker = new google.maps.Marker({
              position: { lat: store.lat, lng: store.lng },
              map,
              title: store.name,
            });
            marker.addListener("click", () => {
              setActiveStore(store);
            });
            markersRef.current.push(marker);
          });
        })
        .catch((err) => {
          console.log("Google Maps API fallback mode active.");
        });
    }
  }, []);

  // Update map pan when active store changes
  useEffect(() => {
    if (googleMapInstance.current && activeStore) {
      googleMapInstance.current.panTo({ lat: activeStore.lat, lng: activeStore.lng });
      googleMapInstance.current.setZoom(14);
    }
  }, [activeStore]);

  return (
    <section className="relative bg-nutri-cream text-nutri-dark py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-nutri-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Search & Filter Controls Header */}
        <div className="bg-nutri-dark text-white p-6 lg:p-8 rounded-3xl shadow-xl border-2 border-nutri-yellow space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nutri-yellow text-nutri-dark text-xs font-black uppercase tracking-wider mb-2 shadow-sm">
                <Store className="w-3.5 h-3.5 text-nutri-orange" />
                <span>Nutrifresh Stockist Finder</span>
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl font-extrabold text-white">
                Find Fresh Nutrifresh Eggs Near You
              </h2>
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-nutri-yellow" />
              <input
                type="text"
                placeholder="Search city, area, pincode or retailer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-full pl-12 pr-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-nutri-yellow transition-colors font-medium"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/15 text-xs">
            {/* City Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-white/60 font-bold uppercase tracking-wider mr-1">City:</span>
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-1.5 rounded-full font-extrabold uppercase tracking-wider transition-all ${
                    selectedCity === city
                      ? "bg-nutri-yellow text-nutri-dark font-black shadow-md"
                      : "bg-white/10 text-white/80 hover:bg-white/20"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-white/60 font-bold uppercase tracking-wider mr-1">Type:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full font-extrabold uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? "bg-nutri-orange text-white font-black shadow-md"
                      : "bg-white/5 text-white/70 hover:bg-white/15"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main 2-Column Map & Store List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Side Panel: Store List (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 max-h-[600px] overflow-y-auto pr-1">
            <div className="flex items-center justify-between text-xs text-nutri-dark/70 font-extrabold uppercase tracking-wider px-2">
              <span>Showing {filteredStores.length} Retail Outlets</span>
              <span>Sorted by Nearest</span>
            </div>

            {filteredStores.length === 0 ? (
              <div className="p-8 bg-white rounded-2xl text-center border-2 border-nutri-yellow space-y-3 shadow-md">
                <MapPin className="w-10 h-10 text-nutri-orange mx-auto animate-bounce" />
                <p className="font-serif text-lg font-bold text-nutri-dark">No retail stores found</p>
                <p className="text-xs text-nutri-dark/70 font-medium">
                  Try searching for another city like Bengaluru, Hyderabad, or Mumbai, or visit our Direct Farm Hub.
                </p>
              </div>
            ) : (
              filteredStores.map((store) => {
                const isSelected = activeStore.id === store.id;
                return (
                  <motion.div
                    key={store.id}
                    onClick={() => setActiveStore(store)}
                    whileHover={{ scale: 1.01 }}
                    className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? "bg-nutri-dark text-white border-nutri-yellow shadow-xl ring-2 ring-nutri-yellow/40"
                        : "bg-white text-nutri-dark border-nutri-yellow-soft hover:border-nutri-orange hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <span
                          className={`inline-block text-[10px] uppercase font-black tracking-wider px-2.5 py-0.5 rounded-full ${
                            isSelected
                              ? "bg-nutri-yellow text-nutri-dark"
                              : "bg-nutri-yellow-soft text-nutri-orange-deep"
                          }`}
                        >
                          {store.category}
                        </span>
                        <h3 className={`font-serif text-lg font-bold leading-snug ${isSelected ? "text-white" : "text-nutri-dark"}`}>
                          {store.name}
                        </h3>
                      </div>
                      <div className="flex-shrink-0 flex items-center space-x-1 text-xs text-nutri-orange-deep font-black bg-nutri-yellow-pale border border-nutri-yellow px-2 py-1 rounded-md shadow-sm">
                        <CheckCircle className="w-3.5 h-3.5 text-nutri-orange" />
                        <span>In Stock</span>
                      </div>
                    </div>

                    <p className={`text-xs mt-3 leading-relaxed font-normal ${isSelected ? "text-white/80" : "text-nutri-dark/75"}`}>
                      {store.address}
                    </p>

                    <div className={`mt-4 pt-3 border-t flex items-center justify-between text-xs font-medium ${isSelected ? "border-white/15 text-white/70" : "border-nutri-yellow-soft text-nutri-dark/65"}`}>
                      <div className="flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-nutri-yellow" />
                        <span>{store.hours}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Phone className="w-3.5 h-3.5 text-nutri-yellow" />
                        <span>{store.phone}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between pt-2">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.name + " " + store.address)}`}
                        target="_blank"
                        rel="noreferrer"
                        className={`text-xs font-extrabold flex items-center space-x-1 hover:underline ${
                          isSelected ? "text-nutri-yellow" : "text-nutri-orange"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Get Directions</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>

          {/* Interactive Map Visualizer (7 Cols) */}
          <div className="lg:col-span-7 h-[600px] bg-nutri-dark rounded-3xl overflow-hidden shadow-2xl relative border-4 border-nutri-yellow">
            {/* Real Google Map Container */}
            <div ref={mapRef} className="w-full h-full" />

            {/* Fallback Interactive Map Graphic if Google Maps API key is not present */}
            {!mapLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-nutri-dark via-[#27272A] to-nutri-dark flex flex-col items-center justify-between p-8 text-white select-none">
                {/* Map Header Overlay */}
                <div className="w-full bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-center justify-between z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-nutri-orange animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-nutri-yellow" />
                    <div className="w-3 h-3 rounded-full bg-white" />
                    <span className="text-xs font-mono text-nutri-yellow font-black ml-2 uppercase tracking-wider">
                      SUREGROW GPS MAP SYSTEM
                    </span>
                  </div>
                  <span className="text-[11px] text-white/70 font-mono">
                    LAT: {activeStore.lat} • LNG: {activeStore.lng}
                  </span>
                </div>

                {/* Simulated Pins & Topography */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#FFC700_1px,transparent_1px)] [background-size:24px_24px]" />

                  {/* Active Store Pin */}
                  <motion.div
                    key={activeStore.id}
                    initial={{ scale: 0, y: -20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative z-20 flex flex-col items-center"
                  >
                    <div className="bg-nutri-yellow text-nutri-dark text-xs font-extrabold px-4 py-2 rounded-xl shadow-2xl shadow-nutri-yellow/50 border-2 border-nutri-dark flex items-center space-x-2">
                      <MapPin className="w-4 h-4 fill-nutri-dark text-nutri-yellow" />
                      <span>{activeStore.name}</span>
                    </div>
                    <div className="w-4 h-4 bg-nutri-yellow rotate-45 -mt-2 border-r-2 border-b-2 border-nutri-dark" />
                    <div className="w-12 h-3 bg-black/60 rounded-full blur-sm mt-1 animate-pulse" />
                  </motion.div>

                  {/* Other Stores Pins */}
                  {filteredStores.map((s, idx) => {
                    if (s.id === activeStore.id) return null;
                    const offsetX = (idx % 3 - 1) * 140;
                    const offsetY = (Math.floor(idx / 2) % 3 - 1) * 100;
                    return (
                      <div
                        key={s.id}
                        onClick={() => setActiveStore(s)}
                        style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
                        className="absolute cursor-pointer group flex flex-col items-center hover:z-30"
                      >
                        <div className="bg-white text-nutri-dark text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md group-hover:bg-nutri-yellow transition-colors">
                          {s.name.split("-")[0]}
                        </div>
                        <MapPin className="w-6 h-6 text-nutri-orange drop-shadow-md group-hover:scale-125 transition-transform" />
                      </div>
                    );
                  })}
                </div>

                {/* Map Footer Overlay Card */}
                <div className="w-full bg-black/70 backdrop-blur-md p-5 rounded-2xl border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
                  <div className="space-y-1 text-center sm:text-left">
                    <p className="text-xs text-nutri-yellow font-extrabold uppercase tracking-wider">
                      Selected Retail Outlet
                    </p>
                    <p className="font-serif font-extrabold text-white text-base">
                      {activeStore.name}
                    </p>
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeStore.name + " " + activeStore.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-nutri-orange hover:bg-nutri-orange-deep text-white font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider flex items-center space-x-2 transition-transform transform hover:scale-105 shadow-lg"
                  >
                    <Navigation className="w-4 h-4 text-nutri-yellow" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
