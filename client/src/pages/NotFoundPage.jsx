import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function FallbackPage() {
  return (
    <div className="min-h-screen w-full bg-black text-cyan-300 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg text-center border border-cyan-400/40 bg-black/40 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgb(0,255,255,0.4)]"
      >
        <div className="flex justify-center mb-4">
          <AlertTriangle className="w-12 h-12 sm:w-16 sm:h-16 text-pink-500 animate-pulse" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-3 tracking-wider text-pink-400">
          System Redirected
        </h1>

        <p className="text-cyan-200 text-xs sm:text-sm leading-relaxed mb-6">
          You've entered an unknown or corrupted route. The mainframe couldn't
          verify your destination, so you've been redirected to a secure
          fallback zone.
        </p>

        <a
          href="/"
          className="inline-block px-5 py-3 sm:px-6 sm:py-3 text-black font-semibold bg-cyan-300 rounded-xl hover:bg-cyan-200 transition shadow-[0_0_15px_rgb(0,255,255,0.6)] text-sm sm:text-base"
        >
          Return to Home
        </a>

        <p className="text-xs text-cyan-600 mt-4 tracking-widest uppercase">
          Error Code: 404-NEXUS
        </p>
      </motion.div>
    </div>
  );
}
