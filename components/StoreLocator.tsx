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
              { elementType: "geometry", stylers: [{ color: "#1b3b2b" }] },
              { elementType: "labels.text.stroke", stylers: [{ color: "#11261b" }] },
              { elementType: "labels.text.fill", stylers: [{ color: "#fcf8f2" }] },
              { featureType: "water", stylers: [{ color: "#11261b" }] },
              { featureType: "road", elementType: "geometry", stylers: [{ color: "#2d5a40" }] },
              { featureType: "poi", elementType: "geometry", stylers: [{ color: "#244835" }] },
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-nutri-amber/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Search & Filter Controls Header */}
        <div className="bg-nutri-green-deep text-nutri-cream p-6 lg:p-8 rounded-3xl shadow-xl border border-white/10 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-nutri-amber/20 text-nutri-amber text-xs font-bold uppercase tracking-wider mb-2">
                <Store className="w-3.5 h-3.5" />
                <span>Nutrifresh Stockist Finder</span>
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white">
                Find Fresh Nutrifresh Eggs Near You
              </h2>
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-nutri-amber" />
              <input
                type="text"
                placeholder="Search city, area, pincode or retailer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-full pl-12 pr-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-nutri-amber transition-colors"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs">
            {/* City Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-nutri-cream/60 font-semibold uppercase tracking-wider mr-1">City:</span>
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-1.5 rounded-full font-medium transition-all ${
                    selectedCity === city
                      ? "bg-nutri-amber text-nutri-green-deep font-bold shadow-md shadow-nutri-amber/30"
                      : "bg-white/10 text-nutri-cream/80 hover:bg-white/20"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-nutri-cream/60 font-semibold uppercase tracking-wider mr-1">Type:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-nutri-green-light text-white font-bold border border-nutri-amber/50"
                      : "bg-white/5 text-nutri-cream/70 hover:bg-white/15"
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
            <div className="flex items-center justify-between text-xs text-nutri-dark/60 font-semibold uppercase tracking-wider px-2">
              <span>Showing {filteredStores.length} Retail Outlets</span>
              <span>Sorted by Nearest</span>
            </div>

            {filteredStores.length === 0 ? (
              <div className="p-8 bg-white rounded-2xl text-center border border-nutri-amber/20 space-y-3">
                <MapPin className="w-10 h-10 text-nutri-amber mx-auto animate-bounce" />
                <p className="font-serif text-lg font-bold">No retail stores found</p>
                <p className="text-xs text-nutri-dark/70">
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
                    className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-nutri-green-deep text-nutri-cream border-nutri-amber shadow-xl shadow-nutri-green-deep/20 ring-2 ring-nutri-amber/40"
                        : "bg-white text-nutri-dark border-nutri-cream-dark hover:border-nutri-amber/50 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <span
                          className={`inline-block text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-0.5 rounded-full ${
                            isSelected
                              ? "bg-nutri-amber/20 text-nutri-amber"
                              : "bg-nutri-green/10 text-nutri-green"
                          }`}
                        >
                          {store.category}
                        </span>
                        <h3 className={`font-serif text-lg font-bold leading-snug ${isSelected ? "text-white" : "text-nutri-dark"}`}>
                          {store.name}
                        </h3>
                      </div>
                      <div className="flex-shrink-0 flex items-center space-x-1 text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-md">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>In Stock</span>
                      </div>
                    </div>

                    <p className={`text-xs mt-3 leading-relaxed ${isSelected ? "text-nutri-cream/80" : "text-nutri-dark/70"}`}>
                      {store.address}
                    </p>

                    <div className={`mt-4 pt-3 border-t flex items-center justify-between text-xs ${isSelected ? "border-white/10 text-nutri-cream/70" : "border-nutri-cream-dark text-nutri-dark/60"}`}>
                      <div className="flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-nutri-amber" />
                        <span>{store.hours}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Phone className="w-3.5 h-3.5 text-nutri-amber" />
                        <span>{store.phone}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between pt-2">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.name + " " + store.address)}`}
                        target="_blank"
                        rel="noreferrer"
                        className={`text-xs font-bold flex items-center space-x-1 hover:underline ${
                          isSelected ? "text-nutri-amber" : "text-nutri-green"
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
          <div className="lg:col-span-7 h-[600px] bg-nutri-green-deep rounded-3xl overflow-hidden shadow-2xl relative border border-white/10">
            {/* Real Google Map Container */}
            <div ref={mapRef} className="w-full h-full" />

            {/* Fallback Interactive Map Graphic if Google Maps API key is not present */}
            {!mapLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-nutri-green-deep via-[#152e22] to-nutri-green-light flex flex-col items-center justify-between p-8 text-nutri-cream select-none">
                {/* Map Header Overlay */}
                <div className="w-full bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs font-mono text-nutri-amber font-semibold ml-2">
                      SUREGROW FARMS GPS MAP SYSTEM
                    </span>
                  </div>
                  <span className="text-[11px] text-nutri-cream/60">
                    LAT: {activeStore.lat} • LNG: {activeStore.lng}
                  </span>
                </div>

                {/* Simulated Pins & Topography */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#E88D14_1px,transparent_1px)] [background-size:24px_24px]" />

                  {/* Active Store Pin */}
                  <motion.div
                    key={activeStore.id}
                    initial={{ scale: 0, y: -20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative z-20 flex flex-col items-center"
                  >
                    <div className="bg-nutri-amber text-nutri-green-deep text-xs font-extrabold px-4 py-2 rounded-xl shadow-2xl shadow-nutri-amber/50 border-2 border-white flex items-center space-x-2">
                      <MapPin className="w-4 h-4 fill-nutri-green-deep" />
                      <span>{activeStore.name}</span>
                    </div>
                    <div className="w-4 h-4 bg-nutri-amber rotate-45 -mt-2 border-r-2 border-b-2 border-white" />
                    <div className="w-12 h-3 bg-black/50 rounded-full blur-sm mt-1 animate-pulse" />
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
                        <div className="bg-white/90 text-nutri-dark text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md group-hover:bg-nutri-amber group-hover:text-nutri-green-deep transition-colors">
                          {s.name.split("-")[0]}
                        </div>
                        <MapPin className="w-6 h-6 text-nutri-amber drop-shadow-md group-hover:scale-125 transition-transform" />
                      </div>
                    );
                  })}
                </div>

                {/* Map Footer Overlay Card */}
                <div className="w-full bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
                  <div className="space-y-1 text-center sm:text-left">
                    <p className="text-xs text-nutri-amber font-bold uppercase tracking-wider">
                      Selected Retail Outlet
                    </p>
                    <p className="font-serif font-bold text-white text-base">
                      {activeStore.name}
                    </p>
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeStore.name + " " + activeStore.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-nutri-amber hover:bg-nutri-amber-light text-nutri-green-deep font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider flex items-center space-x-2 transition-transform transform hover:scale-105"
                  >
                    <Navigation className="w-4 h-4" />
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
