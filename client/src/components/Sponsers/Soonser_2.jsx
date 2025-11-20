// Sponser_2.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Sponser_2 = () => {
  const glowLinesRef = useRef([]);
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (backgroundRef.current) {
      gsap.to(backgroundRef.current, {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      });
    }

    glowLinesRef.current.forEach((line, index) => {
      if (!line) return;
      gsap.fromTo(
        line,
        { x: "-20%", opacity: 0 },
        {
          x: "20%",
          opacity: 1,
          repeat: -1,
          yoyo: true,
          duration: 3 + index,
          ease: "sine.inOut",
          delay: index * 0.3,
        }
      );
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const glowPillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-cyan-100">
      {/* Background */}
      <div ref={backgroundRef} className="pointer-events-none absolute inset-0 opacity-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#22d3ee33,_transparent_60%),_radial-gradient(circle_at_bottom,_#a855f733,_transparent_60%)]" />

        <div
          className="absolute inset-0 opacity-30 mix-blend-screen"
          style={{
            backgroundImage:
              "linear-gradient(#22d3ee22 1px, transparent 1px), linear-gradient(90deg, #22d3ee22 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {[0, 1, 2].map((idx) => (
          <div
            key={idx}
            ref={(el) => (glowLinesRef.current[idx] = el)}
            className="absolute h-[2px] w-2/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[2px]"
            style={{
              top: `${20 + idx * 18}%`,
              left: idx % 2 === 0 ? "-10%" : "20%",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10 sm:px-8">
        <motion.div className="w-full max-w-4xl" variants={containerVariants} initial="hidden" animate="visible">
          
          {/* Tag */}
          <motion.div className="mb-8 flex flex-wrap items-center gap-3 justify-center sm:justify-start" variants={itemVariants}>
            <motion.span
              className="rounded-full border border-cyan-400/60 bg-cyan-400/10 px-5 py-2 text-sm sm:text-base font-bold uppercase tracking-[0.35em]"
              variants={glowPillVariants}
            >
              Incoming Transmission
            </motion.span>
          </motion.div>

          {/* Main card */}
          <motion.div className="relative overflow-hidden rounded-3xl border border-cyan-400/40 bg-slate-950/60 shadow-[0_0_55px_rgba(34,211,238,0.45)] backdrop-blur-xl" variants={itemVariants}>
            
            {/* Corners */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-0 top-0 h-2 w-20 bg-cyan-400" />
              <div className="absolute right-0 top-0 h-2 w-16 bg-fuchsia-500" />
              <div className="absolute bottom-0 right-0 h-2 w-20 bg-cyan-400" />
              <div className="absolute bottom-0 left-0 h-2 w-16 bg-fuchsia-500" />
            </div>

            <div className="flex flex-col gap-10 p-8 sm:p-12 md:p-14">
              
              {/* Heading */}
              <div className="space-y-5">
                <motion.h1 variants={itemVariants} className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-cyan-100">
                  <span className="block font-mono text-base sm:text-lg md:text-xl uppercase tracking-[0.45em] text-cyan-300/70">
                    Sponsors Will Be Revealed
                  </span>
                  <span className="mt-4 block bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
                    Soon in the Neon Grid
                  </span>
                </motion.h1>

                <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-center text-lg sm:text-xl md:text-2xl leading-relaxed text-cyan-100/80">
                  The sponsorship lineup is uploading. Expect <span className="text-cyan-300 font-bold">next-gen partners</span> to power the event. Stay tuned for the official reveal.
                </motion.p>
              </div>

              {/* Bottom strip */}
              <motion.div className="mt-4 flex flex-col gap-6 border-t border-cyan-400/30 pt-6 sm:flex-row sm:items-center sm:justify-between" variants={itemVariants}>
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.25em] text-cyan-300/70">
                  <span className="rounded-full border border-cyan-400/40 px-4 py-2">
                    Status: <span className="text-amber-300 font-bold">Initializing</span>
                  </span>
                  <span className="px-2">•</span>
                  <span>ETA: To Be Announced</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(56,189,248,0.9)" }}
                  whileTap={{ scale: 0.96 }}
                  className="group inline-flex items-center justify-center rounded-full border border-fuchsia-400/60 bg-gradient-to-r from-cyan-500/30 via-fuchsia-500/40 to-cyan-500/30 px-8 py-3 text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.25em] text-cyan-50"
                >
                  Stay Tuned
                  <span className="ml-3 h-[2px] w-7 bg-cyan-200 transition-all group-hover:w-10" />
                </motion.button>
              </motion.div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Sponser_2;
