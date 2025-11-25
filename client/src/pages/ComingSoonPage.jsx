import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Instagram, Cpu, Zap, Terminal } from "lucide-react";

const CyberpunkLanding = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1. Initial Reveal
      tl.fromTo(
        ".cyber-grid",
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
      ).fromTo(
        ".hero-content > *",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=1"
      );

      // 2. Infinite Float Animation for the Card
      gsap.to(".cyber-card", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. Glitch Effect Loop on Title
      const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 3 });
      glitchTimeline
        .to(titleRef.current, {
          skewX: 10,
          duration: 0.1,
          ease: "power4.inOut",
        })
        .to(titleRef.current, {
          skewX: -10,
          duration: 0.1,
          ease: "power4.inOut",
        })
        .to(titleRef.current, {
          skewX: 0,
          duration: 0.1,
          ease: "power4.inOut",
        });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black text-white font-mono selection:bg-cyan-500 selection:text-black"
    >
      {/* Background Elements */}
      <div className="cyber-grid absolute inset-0 z-0 opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-0 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)] z-50"></div>

      {/* Main Content Container */}
      <main className="hero-content relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Status Badge */}
        <div className="mb-6 flex items-center gap-2 px-4 py-1 border border-cyan-500/30 rounded-full bg-cyan-950/20 backdrop-blur-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          <span className="text-xs tracking-widest text-cyan-400 font-bold uppercase">
            System: Online
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="relative text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          <span ref={titleRef} className="inline-block">
            CYBER
            <br className="md:hidden" />
            FEST '25
          </span>
        </h1>

        <p className="max-w-md text-slate-400 mb-12 text-lg md:text-xl border-l-2 border-fuchsia-500 pl-4 text-left mx-auto md:mx-0">
          The future is loading. Prepare your neural link. <br />
          <span className="text-fuchsia-400 font-bold">
            Registrations opening soon.
          </span>
        </p>

        {/* Interactive Card */}
        <div className="cyber-card group relative p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(192,38,211,0.4)]">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-50 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center gap-4">
            <Terminal className="w-8 h-8 text-fuchsia-500 mb-2" />
            <h2 className="text-xl font-bold text-white tracking-widest">
              STAY TUNED
            </h2>
            <p className="text-sm text-gray-400">
              Stay synchronized with our network.
            </p>

            <a
              href="https://www.instagram.com/culrav/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center gap-3 px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold uppercase tracking-wider transition-all clip-path-polygon hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(8,145,178,0.4)]"
              style={{
                clipPath:
                  "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
              }}
            >
              <Instagram className="w-5 h-5" />
              <span>Connect on Insta</span>
            </a>
          </div>
        </div>

        {/* Footer Decor */}
        <div className="absolute bottom-10 flex gap-8 text-cyan-900 opacity-50">
          <Cpu className="w-12 h-12 animate-pulse" />
          <Zap className="w-12 h-12 animate-pulse delay-75" />
        </div>
      </main>
    </div>
  );
};

export default CyberpunkLanding;
