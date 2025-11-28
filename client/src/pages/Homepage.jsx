import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Terminal,
  Cpu,
  Music,
  Zap,
  ChevronRight,
  Aperture,
  Disc,
  Radio,
  Play,
  Instagram,
} from "lucide-react";
import { Link } from "react-router";

import TimeStampCard from "../components/TimeStampCard";
// import GallerySection from "./Homepage/GallerySection";

// --- CONFIGURATION: ADD YOUR ASSETS HERE ---
// Leave as "" to use the futuristic placeholders
const LOGO_URLS = {
  main: "/img/logo_avishkar_culrav.png", // e.g., "/logos/combined-logo.png"
  culrav: "/img/culrav_logo.png", // e.g., "/logos/culrav-logo.png"
  avishkar: "/img/avishkar_logo.png", // e.g., "/logos/avishkar-logo.png"
};

const VIDEO_URLS = {
  heroBg: "/videos/hero_video.webm", // e.g., "/videos/cyberpunk-city-loop.mp4"
  teaser: "", // e.g., "/videos/fest-teaser.mp4"
};

const ARTIST_DATA = {
  name: "Javed Ali",
  image: "/img/javed_ali-1.jpg", // e.g., "/images/artist-main.jpg"
  date: "DAY 03 // 2200 HRS",
};

// --- SVG PLACEHOLDERS (Fallbacks) ---

const CombinedLogoPlaceholder = ({ className }) => (
  <div
    className={`flex items-center justify-center font-bold tracking-tighter ${className}`}
  >
    <div className="relative group cursor-pointer">
      <div className="absolute -inset-2 bg-cyan-500/20 blur-md rounded-full group-hover:bg-cyan-400/40 transition-all"></div>
      <span className="relative text-white text-xl md:text-2xl font-mono border-2 border-transparent border-b-cyan-500 pb-1">
        <span className="text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
          CUL
        </span>
        RAV
        <span className="mx-1 text-gray-500">X</span>
        <span className="text-fuchsia-500 drop-shadow-[0_0_5px_rgba(217,70,239,0.8)]">
          AVI
        </span>
        SHKAR
      </span>
    </div>
  </div>
);

// --- HELPER COMPONENTS ---

const GlitchText = ({
  text,
  className = "",
  color1 = "text-fuchsia-500",
  color2 = "text-cyan-500",
}) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        className={`absolute top-0 left-0 -z-10 w-full h-full ${color1} opacity-0 group-hover:opacity-70 animate-glitch-1 translate-x-[2px]`}
      >
        {text}
      </span>
      <span
        className={`absolute top-0 left-0 -z-10 w-full h-full ${color2} opacity-0 group-hover:opacity-70 animate-glitch-2 -translate-x-[2px]`}
      >
        {text}
      </span>
    </div>
  );
};

const SectionHeading = ({ number, title }) => (
  // Added px-4 to ensure text doesn't touch screen edges on very narrow phones
  // Reduced mb-16 to mb-10 for mobile to reduce gaps
  <div className="text-center mb-10 md:mb-16 relative z-10 px-4">
    {/* Title Header */}
    {/* 1. Changed text-4xl to text-3xl for mobile base 
       2. Added sm:text-4xl for tablets
       3. Kept md:text-6xl for desktop
    */}
    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter uppercase section-title break-words">
      {/* Number Span */}
      {/* Reduced mr-4 to mr-2 on mobile to save horizontal space */}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-xl sm:text-2xl md:text-4xl mr-2 md:mr-4 font-mono">
        {number}.
      </span>
      {title}
    </h2>

    {/* Decorative Line */}
    {/* Reduced width to w-16 on mobile, w-24 on desktop */}
    <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-cyan-500 via-white to-fuchsia-500 mx-auto skew-x-12"></div>

    {/* Subtitle */}
    {/* CRITICAL FIX: tracking-[0.5em] is too wide for mobile and causes scroll issues.
       Changed to tracking-[0.2em] for mobile, restoring 0.5em on sm/md screens.
    */}
    <div className="text-[10px] sm:text-xs font-mono text-gray-500 mt-2 tracking-[0.2em] sm:tracking-[0.5em] transition-all duration-300">
      SYSTEM_OPTIMIZED
    </div>
  </div>
);

// --- SECTIONS ---

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Main Logo */}
          <div className="flex-shrink-0 logo-trigger">
            {LOGO_URLS.main ? (
              <img
                src={LOGO_URLS.main}
                alt="Culrav x Avishkar"
                className="h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              />
            ) : (
              <CombinedLogoPlaceholder />
            )}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 font-mono text-xs md:text-sm tracking-widest">
              {["Home", "About", "Artist", "Gallery", "Events"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-400 hover:text-white transition-colors group py-2"
                >
                  <span className="absolute -left-2 opacity-0 group-hover:opacity-100 text-cyan-500 transition-opacity">
                    &gt;
                  </span>
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="relative overflow-hidden bg-cyan-600/10 border border-cyan-500 text-cyan-400 hover:text-black hover:bg-cyan-500 px-6 py-2 font-bold transition-all duration-300 skew-x-[-10deg] group">
                <span className="relative z-10 block skew-x-[10deg]">
                  GET_PASSES
                </span>
                <div className="absolute inset-0 bg-cyan-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-cyan-500/30 backdrop-blur-xl absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-2 font-mono">
            {["Home", "About", "Artist", "Gallery", "Events"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-4 border-l-2 border-transparent hover:border-cyan-500 hover:bg-white/5 text-gray-300 hover:text-cyan-400 transition-all"
              >
                0
                {["Home", "About", "Artist", "Gallery", "Events"].indexOf(
                  item
                ) + 1}{" "}
                // {item.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section
      id="home"
      // CHANGE 1: Use h-[100dvh] (Dynamic Viewport Height) to fix mobile address bar issues
      // CHANGE 2: Added min-h-[600px] to prevent squashing on extremely short screens
      className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#000_90%)]"></div>

        {VIDEO_URLS.heroBg ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-100 filter contrast-200 brightness-145"
          >
            <source src={VIDEO_URLS.heroBg} type="video/webm" />
          </video>
        ) : (
          <div className="w-full h-full bg-grid-pattern animate-grid-move opacity-30 bg-gradient-to-b from-gray-900 to-black">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-fuchsia-900/20 animate-pulse"></div>
          </div>
        )}
      </div>

      {/* Content */}
      {/* CHANGE 3: Reduced pt-16 to pt-12 for mobile to save vertical space */}
      <div className="relative z-20 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full pt-12 md:pt-16">
        {/* Intro Text Badge */}
        {/* CHANGE 4: Reduced mb-8 to mb-4 on mobile */}
        <div className="mb-4 md:mb-8 inline-flex items-center gap-3 px-4 py-1 border border-cyan-500/30 rounded-full bg-black/50 backdrop-blur-sm intro-text shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
          <span className="text-cyan-400 font-mono text-xs tracking-[0.2em]">
            SYSTEM ONLINE // 2025
          </span>
        </div>

        {/* MAIN LOGO REPLACEMENT */}
        {/* CHANGE 5: Reduced margins (mb-6) and added max-h constraints so logo doesn't get too tall */}
        <div className="hero-title mb-6 md:mb-8 w-full flex justify-center">
          {LOGO_URLS.main ? (
            <img
              src={LOGO_URLS.main}
              alt="Culrav x Avishkar Theme Logo"
              // CRITICAL FIX: Added max-h-[30vh] md:max-h-[40vh]
              // This ensures the logo never takes up more than 30% of the screen height, leaving room for buttons
              className="w-[85vw] max-w-[500px] md:max-w-[700px] lg:max-w-[800px] max-h-[30vh] md:max-h-[40vh] h-auto object-contain drop-shadow-[0_0_25px_rgba(34,211,238,0.25)] filter brightness-110 animate-float"
            />
          ) : (
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] mix-blend-difference">
              <div className="overflow-hidden">
                <span className="block transform hover:scale-105 transition-transform duration-500 cursor-default">
                  CULRAV
                </span>
              </div>
              <div className="text-2xl md:text-4xl font-mono text-gray-400 my-2 tracking-[0.5em] opacity-70">
                ×
              </div>
              <div className="overflow-hidden">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 transform hover:scale-105 transition-transform duration-500 cursor-default">
                  AVISHKAR
                </span>
              </div>
            </h1>
          )}
        </div>

        {/* Subtitle */}
        <p className="max-w-xl mx-auto text-base md:text-xl text-gray-300 font-mono hero-sub border-l-2 border-fuchsia-500 pl-4 text-left bg-black/30 backdrop-blur-sm p-2 rounded-r-lg">
          The annual convergence of{" "}
          <span className="text-cyan-400 font-bold">Technology</span> and{" "}
          <span className="text-fuchsia-500 font-bold">Culture</span>. Step into
          the glitch.
        </p>

        {/* Buttons */}
        {/* CHANGE 6: Reduced top margin (mt-6) for mobile and gap */}
        <div className="mt-6 md:mt-10 flex flex-wrap justify-center gap-4 md:gap-6 hero-btns pb-12 md:pb-0">
          <button className="group relative px-6 py-3 md:px-8 md:py-4 bg-white text-black font-bold tracking-widest overflow-hidden skew-x-[-10deg] hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <div className="absolute inset-0 w-0 bg-cyan-500 transition-all duration-300 ease-out group-hover:w-full opacity-100"></div>
            <Link
              to={"/login"}
              className="relative flex items-center gap-2 skew-x-[10deg] text-sm md:text-base"
            >
              ENTER_WORLD <ChevronRight size={20} />
            </Link>
          </button>
          <a
            href="https://www.instagram.com/reel/DRSakAxkvsq/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 md:px-8 md:py-4 border border-white/30 hover:border-fuchsia-500 text-white font-mono text-xs md:text-sm tracking-widest hover:bg-fuchsia-500/10 transition-all skew-x-[-10deg] backdrop-blur-md bg-black/20"
          >
            <span className="block skew-x-[10deg]">[ WATCH_TEASER ]</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* CHANGE 7: Position adjustment to ensure it doesn't overlap buttons on short screens */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce z-20 hidden sm:flex">
        <span className="text-[10px] font-mono tracking-widest text-cyan-500 shadow-black drop-shadow-md">
          SCROLL
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="01" title="THE_DUALITY" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* ================= CULRAV CARD (CULTURE) ================= */}
          <div className="relative group border border-white/10 bg-gradient-to-b from-fuchsia-900/10 to-black hover:border-fuchsia-500/50 transition-all duration-500 overflow-hidden about-card-left min-h-[500px] flex flex-col rounded-sm">
            {/* Large Background Icon Watermark (Visual Appeal) */}
            <div className="absolute -right-10 -top-10 text-fuchsia-500/5 group-hover:text-fuchsia-500/10 transition-colors duration-500 rotate-12 pointer-events-none">
              <Music size={300} strokeWidth={0.5} />
            </div>

            {/* Main Logo Area - Big and Wide */}
            <div className="relative h-64 md:h-80 w-full flex items-center justify-center p-8 bg-black/20 backdrop-blur-sm border-b border-white/5 group-hover:bg-fuchsia-900/10 transition-colors duration-500">
              {LOGO_URLS.culrav ? (
                <img
                  src={LOGO_URLS.culrav}
                  alt="Culrav Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(217,70,239,0.3)] group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                // Fallback Large Typographic Logo
                <div className="flex flex-col items-center justify-center w-full h-full border-2 border-dashed border-fuchsia-500/30 rounded-xl group-hover:border-fuchsia-500/60 transition-all bg-black/40">
                  <Music
                    className="text-fuchsia-500 mb-4 opacity-50 animate-bounce"
                    size={60}
                  />
                  <span className="text-4xl md:text-5xl font-black text-fuchsia-500 tracking-tighter opacity-80">
                    CULRAV
                  </span>
                </div>
              )}

              {/* Glitch Overlay on Hover */}
              <div className="absolute inset-0 bg-fuchsia-500/5 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Content Area */}
            <div className="p-8 flex flex-col flex-grow relative z-10 bg-black/40 backdrop-blur-sm">
              <div className="flex items-baseline gap-4 mb-4 border-b border-white/10 pb-4">
                <h3 className="text-3xl md:text-4xl font-black text-white font-sans tracking-wide uppercase">
                  CULRAV
                </h3>
                <span className="text-fuchsia-500 font-mono text-sm tracking-[0.3em] ml-auto">
                  10 DEC - 12 DEC
                </span>
              </div>

              <p className="text-gray-400 font-mono text-sm leading-relaxed flex-grow mb-8">
                The cultural flagship. Dance battles, fashion shows, and musical
                nights that reverberate through the campus. Immerse yourself in
                the rhythm of the future.
              </p>

              <Link
                to={"/culrav"}
                className="w-full py-4 border border-fuchsia-500/30 bg-fuchsia-500/5 hover:bg-fuchsia-500 hover:text-black text-fuchsia-400 font-bold font-mono uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 group/btn"
              >
                <span>EXPLORE EVENTS</span>
                <ChevronRight
                  size={18}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* ================= AVISHKAR CARD (TECH) ================= */}
          <div className="relative group border border-white/10 bg-gradient-to-b from-cyan-900/10 to-black hover:border-cyan-500/50 transition-all duration-500 overflow-hidden about-card-right min-h-[500px] flex flex-col rounded-sm">
            {/* Large Background Icon Watermark */}
            <div className="absolute -right-10 -top-10 text-cyan-500/5 group-hover:text-cyan-500/10 transition-colors duration-500 rotate-12 pointer-events-none">
              <Cpu size={300} strokeWidth={0.5} />
            </div>

            {/* Main Logo Area - Big and Wide */}
            <div className="relative h-64 md:h-80 w-full flex items-center justify-center p-8 bg-black/20 backdrop-blur-sm border-b border-white/5 group-hover:bg-cyan-900/10 transition-colors duration-500">
              {LOGO_URLS.avishkar ? (
                <img
                  src={LOGO_URLS.avishkar}
                  alt="Avishkar Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                // Fallback Large Typographic Logo
                <div className="flex flex-col items-center justify-center w-full h-full border-2 border-dashed border-cyan-500/30 rounded-xl group-hover:border-cyan-500/60 transition-all bg-black/40">
                  <Cpu
                    className="text-cyan-500 mb-4 opacity-50 animate-pulse"
                    size={60}
                  />
                  <span className="text-4xl md:text-5xl font-black text-cyan-500 tracking-tighter opacity-80">
                    AVISHKAR
                  </span>
                </div>
              )}

              {/* Glitch Overlay on Hover */}
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Content Area */}
            <div className="p-8 flex flex-col flex-grow relative z-10 bg-black/40 backdrop-blur-sm">
              <div className="flex items-baseline gap-4 mb-4 border-b border-white/10 pb-4">
                <h3 className="text-3xl md:text-4xl font-black text-white font-sans tracking-wide uppercase">
                  Avishkar
                </h3>
                <span className="text-cyan-500 font-mono text-sm tracking-[0.3em] ml-auto ">
                  7 DEC - 9 DEC
                </span>
              </div>

              <p className="text-gray-400 font-mono text-sm leading-relaxed flex-grow mb-8">
                The technical summit. Robo-wars, hackathons, and coding
                marathons. Where code defines reality and innovation knows no
                bounds.
              </p>

              <Link
                to={"/avishkar"}
                className="w-full py-4 border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500 hover:text-black text-cyan-400 font-bold font-mono uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 group/btn"
              >
                <span>EXPLORE TECH</span>
                <ChevronRight
                  size={18}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  // Replace 'src' with your actual local video paths (served from /public/videos)
  const galleryItems = [
    { id: 1, type: "large", title: "DJKD", src: "/videos/v4.webm" },
    { id: 2, type: "tall", title: "DJKD", src: "/videos/v2.webm" },
    // { id: 3, type: "small", title: "TECH_LAB", src: "/videos/v5.webm" },
    { id: 4, type: "small", title: "Dj Pheonix", src: "/videos/v5.webm" },
    { id: 5, type: "wide", title: "JULIE", src: "/videos/v1.webm" },
  ];

  return (
    <section id="gallery" className="py-32 bg-gray-900 relative">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading number="02" title="VISUAL_ARCHIVES" />

        {/* Masonry / Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[200px] gap-4">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden border border-gray-800 bg-black cursor-pointer
        ${item.type === "large" ? "md:col-span-2 md:row-span-2" : ""}
        ${item.type === "tall" ? "md:col-span-1 md:row-span-2" : ""}
        ${item.type === "wide" ? "md:col-span-1 md:row-span-2" : ""}
        ${item.type === "small" ? "md:col-span-1 md:row-span-1" : ""}
        gallery-item transition-all duration-500 ease-out
        hover:z-30 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:border-cyan-500/50
      `}
            >
              {/* Video Element */}
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onLoadedData={() => console.log("Gallery video loaded:", item.src)}
                onError={(e) => console.error("Gallery video error:", item.src, e)}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700

        /* MOBILE DEFAULTS (Full Color, Full Opacity) */
        grayscale-0 opacity-100

        /* DESKTOP DEFAULTS (Grayscale, Dimmed -> Color on Hover) */
        md:grayscale md:opacity-60 md:group-hover:grayscale-0 md:group-hover:opacity-100"
              >
                <source src={item.src} type="video/webm" />
              </video>

              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzhhYWGMYAEYB8RmROaABADeOQ8CXl/xfgAAAABJRU5ErkJggg==')] opacity-30 pointer-events-none"></div>

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500

      /* MOBILE DEFAULT (Light overlay so video is visible) */
      opacity-30

      /* DESKTOP DEFAULT (Dark overlay -> Light on Hover) */
      md:opacity-90 md:group-hover:opacity-30"
              ></div>

              {/* Hover Interaction Content (Big Title) - Keeping this hidden on mobile to not block video */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
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

              {/* Idle State Label - Visible on Mobile, hidden on Desktop Hover */}
              <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-gray-500 font-mono text-xs tracking-widest border border-gray-700 px-2 py-1 rounded bg-black/50">
                  [{item.title}]
                </span>
              </div>

              {/* Corner Tech Accents */}
              <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <Aperture className="text-cyan-400 w-6 h-6 animate-spin-slow drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </div>

              {/* Animated Border Frame */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 transition-colors duration-500 pointer-events-none z-20"></div>
            </div>
          ))}

          {/* "View All" Tile */}
          <Link
            to="/gallery"
            className="md:col-span-1 md:row-span-1 bg-black/50 border border-dashed border-gray-700 backdrop-blur-sm flex flex-col items-center justify-center text-gray-500 hover:text-fuchsia-400 hover:border-fuchsia-500 transition-all cursor-pointer group relative overflow-hidden"
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

const ArtistSection = () => {
  return (
    <section
      id="artist"
      className="relative py-16 lg:py-24 bg-black border-y border-white/10 overflow-hidden"
    >
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <span className="text-[15vw] font-black text-white leading-none select-none">
          HEADLINER
        </span>
      </div>

      {/* LAYOUT CHANGES: 
         1. gap-6: Reduced vertical distance between image and text on mobile (was gap-12).
         2. items-center: Vertically centers content on desktop.
      */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center relative z-10">
        {/* --- VISUAL SIDE --- */}
        <div className="relative group w-full">
          {/* Mobile Glow Effect (Design Choice): Adds depth since grayscale is off */}
          <div className="absolute inset-0 bg-fuchsia-500/20 blur-2xl rounded-full transform scale-75 lg:hidden"></div>

          <div
            className={`
            relative overflow-hidden border border-white/20 artist-visual
            aspect-[4/5] lg:aspect-square 
            
            /* 3. SIZE & ALIGNMENT: Shrink image on mobile (max-w-[90%]) and center it (mx-auto) */
            max-w-[90%] mx-auto lg:max-w-none lg:mx-0
            
            shadow-2xl shadow-fuchsia-900/20
          `}
          >
            {ARTIST_DATA.image ? (
              <img
                src={ARTIST_DATA.image}
                alt={ARTIST_DATA.name}
                className="w-full h-full object-cover transition-all duration-700
                  /* 2. COLOR LOGIC: Normal color on mobile, Grayscale->Color on Desktop */
                  grayscale-0 lg:grayscale lg:group-hover:grayscale-0"
              />
            ) : (
              <div className="w-full h-full bg-gray-900 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514525253440-b393452e8d26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110
                  mix-blend-normal opacity-80
                  lg:mix-blend-luminosity lg:opacity-60"
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/80 to-transparent mix-blend-overlay"></div>
              </div>
            )}

            {/* Floating Badge */}
            <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 bg-white text-black px-3 py-1 lg:px-4 lg:py-2 font-bold font-mono text-xs lg:text-sm transform -rotate-3 group-hover:rotate-0 transition-transform">
              STAR NIGHT
            </div>
          </div>
        </div>

        {/* --- INFO SIDE --- */}
        {/* 4. ALIGNMENT LOGIC: 
           'text-center items-center' for Mobile (aligns text with centered image).
           'lg:text-left lg:items-start' for Desktop.
        */}
        <div className="flex flex-col text-center items-center lg:text-left lg:items-start space-y-4 lg:space-y-6 artist-info">
          <div className="inline-block bg-fuchsia-500/10 text-fuchsia-400 px-3 py-1 text-[10px] lg:text-xs font-mono tracking-widest border border-fuchsia-500/30 backdrop-blur-md">
            // INCOMING TRANSMISSION
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 lg:bg-gradient-to-r">
              THE
            </span>
            {/* Ensure GlitchText handles centering if it's a block element, or wrap it */}
            <span className="text-fuchsia-500 block">{ARTIST_DATA.name}</span>
          </h2>

          {/* Description - limit width on mobile to prevent it from looking too wide compared to image */}
          <p className="text-gray-400 font-mono text-xs sm:text-sm md:text-base max-w-sm lg:max-w-md lg:border-l border-gray-700 lg:pl-4">
            Preparing for auditory override. The biggest night of the year
            featuring chart-topping beats and immersive visual synthesis.
          </p>

          <div className="flex items-center gap-4 lg:gap-6 pt-2">
            <div className="flex items-center gap-2 text-white font-bold text-lg lg:text-xl">
              <Radio className="text-red-500 animate-pulse w-5 h-5" />
              <span>LIVE</span>
            </div>
            <div className="h-6 lg:h-8 w-[1px] bg-gray-700"></div>
            <div className="font-mono text-cyan-400 text-sm lg:text-base tracking-wider">
              {ARTIST_DATA.date}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function Footer() {
  const GOOGLE_MAP_LINK =
    "https://www.google.com/maps/place/MNNIT+Allahabad+Campus,+Teliarganj,+Prayagraj,+Uttar+Pradesh+211004/@25.4921509,81.8609172,16z/data=!3m1!4b1!4m6!3m5!1s0x399aca789e0c84a5:0x2c27733a7529bf08!8m2!3d25.4918881!4d81.8675096!16s%2Fg%2F1jkyn0r0s?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D";
  return (
    <footer className="bg-black border-t border-white/10 py-16 font-mono text-sm relative overflow-hidden">
      {/* Footer Glitch Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter">
            CULRAV <span className="text-gray-600">x</span> AVISHKAR
          </h3>
          <p className="text-gray-500 max-w-xs mb-6">
            The ultimate technocultural saga. Joining forces to create an
            experience beyond reality.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-gray-900 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-colors cursor-pointer">
              {/* <div className="w-1 h-1 bg-white rounded-full"></div>
               */}
              <a
                href="https://www.instagram.com/culrav/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-2">Built by Web Team 💓 </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">
            Coordinates
          </h4>
          <ul className="space-y-2 text-gray-500">
            <li>MNNIT Allahabad</li>
            <li>Prayagraj, India</li>
            <li>211004</li>
            <a
              href={GOOGLE_MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <li className="text-cyan-500 pt-2 cursor-pointer hover:text-cyan-400">
                GET_DIRECTIONS -&gt;
              </li>
            </a>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">
            Important Links
          </h4>
          <ul className="space-y-2 text-gray-500">
            <li className="hover:text-cyan-400 cursor-pointer">
              <Link to="/login" className="hover:text-cyan-400 cursor-pointer">
                Register
              </Link>
            </li>
            <li className="hover:text-cyan-400 cursor-pointer">
              <Link
                to="/sponsors"
                className="hover:text-cyan-400 cursor-pointer"
              >
                Sponser
              </Link>
            </li>
            <li className="hover:text-cyan-400 cursor-pointer">
              <Link to="/team" className="hover:text-cyan-400 cursor-pointer">
                Team
              </Link>
            </li>
            <li className="hover:text-cyan-400 cursor-pointer">
              <Link
                to="/gallery"
                className="hover:text-cyan-400 cursor-pointer"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-900 text-center text-gray-600 text-xs flex justify-between items-center">
        <span>© 2025 FEST_OS. ALL RIGHTS RESERVED.</span>
        <span className="animate-pulse text-green-500">● SYSTEM STABLE</span>
      </div>
    </footer>
  );
}

// --- MAIN APP COMPONENT ---

export default function App() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  // Load GSAP Scripts dynamically
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    Promise.all([
      loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
      ),
      loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
      ),
    ])
      .then(() => {
        setGsapLoaded(true);
      })
      .catch((err) => console.error("GSAP Load Error", err));
  }, []);

  // Trigger Animations
  useEffect(() => {
    if (gsapLoaded && window.gsap && window.ScrollTrigger) {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // Navbar
      gsap.from(".logo-trigger", {
        duration: 1,
        y: -30,
        opacity: 0,
        ease: "power3.out",
      });

      // Hero
      const tl = gsap.timeline();
      tl.from(".intro-text", {
        duration: 0.8,
        opacity: 0,
        scale: 0.8,
        delay: 0.2,
      })
        .from(
          ".hero-title",
          { duration: 1, y: 50, opacity: 0, ease: "power4.out" },
          "-=0.4"
        )
        .from(
          ".hero-sub",
          { duration: 1, opacity: 0, x: -20, ease: "power2.out" },
          "-=0.6"
        )
        .from(
          ".hero-btns",
          { duration: 0.8, opacity: 0, y: 20, ease: "back.out(1.7)" },
          "-=0.5"
        );

      // Section Titles
      gsap.utils.toArray(".section-title").forEach((title) => {
        gsap.from(title, {
          scrollTrigger: { trigger: title, start: "top 85%" },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      // About Cards
      gsap.from(".about-card-left", {
        scrollTrigger: { trigger: "#about", start: "top 70%" },
        x: -50,
        opacity: 0,
        duration: 1,
      });
      gsap.from(".about-center", {
        scrollTrigger: { trigger: "#about", start: "top 70%" },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });
      gsap.from(".about-card-right", {
        scrollTrigger: { trigger: "#about", start: "top 70%" },
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.4,
      });

      // Artist Section
      gsap.from(".artist-visual", {
        scrollTrigger: { trigger: "#artist", start: "top 60%" },
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
      });
      gsap.from(".artist-info", {
        scrollTrigger: { trigger: "#artist", start: "top 60%" },
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
      });

      // Gallery Stagger
    }
  }, [gsapLoaded]);

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800;900&family=Share+Tech+Mono&display=swap');
        
        :root {
          --font-display: 'Orbitron', sans-serif;
          --font-mono: 'Share Tech Mono', monospace;
        }
        
        .font-sans { font-family: var(--font-display); }
        .font-mono { font-family: var(--font-mono); }

        /* Custom Animations */
        .bg-grid-pattern {
          background-size: 50px 50px;
          background-image: linear-gradient(to right, rgba(34, 211, 238, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(34, 211, 238, 0.05) 1px, transparent 1px);
        }
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        .animate-grid-move { animation: grid-move 4s linear infinite; }
        .animate-spin-slow { animation: spin 10s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        /* Glitch Animations */
        @keyframes glitch-1 {
          0% { clip-path: inset(20% 0 80% 0); }
          20% { clip-path: inset(60% 0 10% 0); }
          100% { clip-path: inset(30% 0 50% 0); }
        }
        @keyframes glitch-2 {
          0% { clip-path: inset(10% 0 60% 0); }
          20% { clip-path: inset(30% 0 20% 0); }
          100% { clip-path: inset(0% 0 80% 0); }
        }
        .animate-glitch-1 { animation: glitch-1 2.5s infinite linear alternate-reverse; }
        .animate-glitch-2 { animation: glitch-2 3s infinite linear alternate-reverse; }
        
        /* Scanlines */
        .scanlines {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.3));
          background-size: 100% 3px;
        }
      `}</style>

      {/* Overlay Effects */}
      <div className="fixed inset-0 z-[60] scanlines opacity-20 pointer-events-none h-screen w-screen"></div>
      <div className="fixed inset-0 z-[55] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>

      {/* <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      /> */}

      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ArtistSection />
      </main>

      <Footer />
    </div>
  );
}
