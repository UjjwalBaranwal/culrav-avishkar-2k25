import React, { useRef, useState, useEffect } from "react";
import { Aperture, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import dj from "/videos/dj.webm";
import posterDj from "/img/dj.webp";
import f3 from "/videos/f3.webm";
import posterF3 from "/img/f3.webp";
import f4 from "/videos/f4.webm";
import posterF4 from "/img/f4.webp";
import f1 from "/videos/f1.webm";
import posterF1 from "/img/f1.webp";
import SectionHeading from "../../components/SectionHeading";
import TimeStampCard from "../../components/TimeStampCard";
// -----------------------------------------------------

const GallerySection = () => {
  // Combine video and poster source data
  const galleryItems = [
    { id: 1, type: "large", title: "DJKD", src: dj, poster: posterDj },
    { id: 2, type: "tall", title: "DJKD", src: f3, poster: posterF3 },
    { id: 4, type: "small", title: "EDM Artist", src: f4, poster: posterF4 },
    { id: 5, type: "wide", title: "JULIE", src: f1, poster: posterF1 },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-gray-900 relative">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading number="02" title="VISUAL_ARCHIVES" />

        {/* Masonry / Bento Grid */}
        <div className="grid grid-cols-2 auto-rows-[200px] gap-4">
          {galleryItems.map((item, idx) => (
            <GalleryItem key={item.id} item={item} idx={idx} />
          ))}

          {/* "View All" Tile */}
          <Link
            to="/gallery"
            className="col-span-2 md:col-span-1 md:row-span-1 bg-black/50 border border-dashed border-gray-700 backdrop-blur-sm flex flex-col items-center justify-center text-gray-500 hover:text-fuchsia-400 hover:border-fuchsia-500 transition-all cursor-pointer group relative overflow-hidden h-full min-h-[150px]"
          >
            <div className="absolute inset-0 bg-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-14 h-14 rounded-full border border-current flex items-center justify-center mb-3 group-hover:scale-110 transition-transform relative z-10">
              <ChevronRight size={24} />
            </div>
            <span className="font-mono text-xs tracking-[0.2em] relative z-10">
              ACCESS_ALL_LOGS
            </span>
          </Link>

          <div className="col-span-2">
            <TimeStampCard />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- NEW SUB-COMPONENT FOR OPTIMIZATION ---
const GalleryItem = ({ item, idx }) => {
  const itemRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. Setup Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // If the item is visible, set isLoaded to true to start video loading
          setIsLoaded(true);
          observer.unobserve(entry.target); // Stop observing once loaded
        }
      },
      {
        root: null, // viewport
        rootMargin: "100px", // Load video when it's 100px away from view
        threshold: 0.1,
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  const gridClasses = {
    large: "col-span-2 row-span-2",
    tall: "col-span-1 row-span-2",
    wide: "col-span-2 row-span-1", // Changed wide to col-span-2, row-span-1 for standard bento layout
    small: "col-span-1 row-span-1",
  };

  return (
    <div
      ref={itemRef}
      key={item.id}
      className={`relative group overflow-hidden border border-gray-800 bg-black/80 cursor-pointer
        ${gridClasses[item.type] || gridClasses.small} 
        gallery-item transition-all duration-500 ease-out
        hover:z-30 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:border-cyan-500/50
      `}
    >
      {/* Poster or Video */}
      {isLoaded ? (
        // RENDER VIDEO ONLY WHEN IN VIEWPORT
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 
            grayscale-0 opacity-100
            md:grayscale md:opacity-60 md:group-hover:grayscale-0 md:group-hover:opacity-100"
        >
          {/* Include both WEBM (best compression) and MP4 (best compatibility) sources */}
          <source src={item.src} type="video/webm" />
          <source src={item.src.replace(".webm", ".mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // RENDER LOW-RES IMAGE POSTER BEFORE VIDEO LOADS
        <img
          src={item.poster}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 
            md:grayscale md:opacity-80"
          loading="lazy"
        />
      )}

      {/* Scanline Overlay (No Change) */}
      <div className="absolute inset-0 bg-[url('data:image/png;base64,...')] opacity-30 pointer-events-none"></div>

      {/* Gradient Overlay (No Change) */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500
          opacity-30
          md:opacity-90 md:group-hover:opacity-30"
      ></div>

      {/* Hover Interaction Content (No Change) */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        {/* ... (Your existing title/CTA content) ... */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_red]"></div>
          <span className="text-cyan-400 font-mono text-[10px] tracking-[0.2em]">
            LIVE_FEED_0{idx + 1}
          </span>
        </div>
        <h4 className="text-white font-black text-2xl uppercase tracking-tighter leading-none drop-shadow-md">
          {item.title}
        </h4>
      </div>

      {/* Idle State Label (No Change) */}
      <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
        <span className="text-gray-500 font-mono text-xs tracking-widest border border-gray-700 px-2 py-1 rounded bg-black/50">
          [{item.title}]
        </span>
      </div>

      {/* Corner Tech Accents (No Change) */}
      <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
        <Aperture className="text-cyan-400 w-6 h-6 animate-spin-slow drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
      </div>

      {/* Animated Border Frame (No Change) */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 transition-colors duration-500 pointer-events-none z-20"></div>
    </div>
  );
};
// Export the main component
export default GallerySection;
