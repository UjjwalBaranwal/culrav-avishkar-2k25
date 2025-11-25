import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Clock, Loader } from "lucide-react";

const SimpleCyberCard = () => {
  const cardRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // 1. Animate the card container (glitch/fade in)
      tl.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.98, x: -10 },
        { opacity: 1, scale: 1, x: 0, duration: 0.6 }
      );

      // 2. Animate the two lines of text with a staggered drop-in
      tl.fromTo(
        ".status-line",
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.4 },
        "-=0.4" // Start before the card finishes its animation
      );

      // 3. Subtle pulsing glow for the border (infinite loop)
      gsap.to(".cyber-border", {
        boxShadow:
          "0 0 10px rgba(6, 182, 212, 1), 0 0 20px rgba(192, 38, 211, 0.5)",
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
      });
    },
    { scope: cardRef }
  );

  return (
    <div className="p-8 w-full max-w-sm mx-auto my-12 bg-black text-white font-mono rounded-lg relative overflow-hidden">
      {/* Dynamic Animated Border */}
      <div
        ref={cardRef}
        className="cyber-border absolute inset-0 rounded-lg border-2 border-cyan-500/50 transition-all duration-300"
      ></div>

      {/* Main Content */}
      <div className="relative z-10 p-4 text-center">
        {/* Line 1: Stay Tuned */}
        <div className="status-line flex items-center justify-center gap-3 mb-2">
          <Loader className="w-5 h-5 text-fuchsia-400 animate-spin-slow" />
          <h2 className="text-xl md:text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white drop-shadow-[0_0_5px_rgba(6,182,212,0.8)] uppercase">
            Event Schedule
          </h2>
        </div>

        {/* Line 2: The Date */}
        <p className="status-line text-lg md:text-xl text-fuchsia-400 tracking-wider">
          07 — 12 DECEMBER
        </p>

        {/* Line 3: Small CTA */}
        <p className="status-line text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
          <Clock className="w-3 h-3" />
          REGISTRATION ONLINE SOON
        </p>
      </div>
    </div>
  );
};

export default SimpleCyberCard;
