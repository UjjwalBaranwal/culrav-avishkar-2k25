import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dummy from "../../assets/dummy.png";

// Dummy VR hero image as placeholder
const VR_IMAGE = dummy;

// Example event data
const Spandan = {
  eventName: "SPANDAN",
  tagline: "The Rhythm of Culture",
  events: [
    {
      id: 1,
      name: "Battle Groove",
      img: VR_IMAGE,
      desc: "A high-energy solo dance face-off.",
      rules: ["Time limit: 2 mins", "No vulgar moves allowed"],
      coords: [
        { name: "Arjun", phone: "9876543210" },
        { name: "Riya", phone: "9123456780" },
      ],
    },
    {
      id: 2,
      name: "Step Sync",
      img: VR_IMAGE,
      desc: "A group dance event focused on coordination.",
      rules: ["Team size: 4–12", "Time limit: 4 mins"],
      coords: [
        { name: "Manav", phone: "9911223344" },
        { name: "Sana", phone: "9988776655" },
      ],
    },
  ],
};

const navLinks = ["Home", "Info", "Service", "Contact"];

const SpandanPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00e5ff] to-[#7f00ff] text-white font-sans">
      {/* HEADER BAR */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-cyan-400/40">
        <div className="text-cyan-300 text-xl font-bold neon-shadow uppercase tracking-wider">
          WELCOME TO THE FUTURE
        </div>
        <nav className="flex space-x-8">
          {navLinks.map((link) => (
            <span
              key={link}
              className="relative group text-cyan-300 transition font-semibold neon-shadow cursor-pointer hover:text-white"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          ))}
        </nav>
      </header>

      {/* HERO AND SLOGAN */}
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-16 relative">
        {/* Visual Zone */}
        <div className="relative flex flex-col justify-center items-center md:w-1/2">
          <img
            src={VR_IMAGE}
            alt="VR Hero"
            className="w-[330px] h-[300px] object-cover brightness-90 rounded-xl shadow-lg border border-cyan-400/60 neon-shadow"
          />
          {/* Floating 3D Shapes/Decor */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute left-10 top-6 w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-400 filter blur-[2px] border border-cyan-300 shadow-2xl"
          />
          <div className="absolute right-16 top-28 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rotate-12 rounded-xl" />
          <div className="absolute left-14 bottom-10 w-10 h-10 bg-gradient-to-tr from-fuchsia-500 to-cyan-300 rounded-full opacity-90" />
        </div>

        {/* Slogan + Buttons */}
        <div className="md:w-1/2 mt-12 md:mt-0 text-center md:text-left">
          <h1 className="text-5xl font-bold neon-shadow text-cyan-300 mb-4 drop-shadow-xl tracking-wide uppercase">
             SPANDAN
          </h1>
          <p className="text-lg text-cyan-100 mb-8 max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
          </p>
          <div className="flex gap-7 justify-center md:justify-start mb-10">
            <button className="px-6 py-2 rounded-xl bg-cyan-400 text-black font-semibold neon-shadow transition hover:scale-105 hover:bg-cyan-200">
              Know More
            </button>
          </div>
          {/* Social Icons */}
          <div className="flex gap-7 justify-center md:justify-start">
            <span className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center neon-shadow text-black cursor-pointer transition hover:bg-cyan-300">
              {/* Facebook */}
              <svg width="22" height="22" viewBox="0 0 22 22"><path fill="currentColor" d="M21 1H1v20h11v-8H9v-3h3V7.5A3.5 3.5 0 0 1 15.5 4H18v3h-2.5A.5.5 0 0 0 15 7.5V9h3v3h-3v8h6V1z"/></svg>
            </span>
            <span className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center neon-shadow text-black cursor-pointer transition hover:bg-cyan-300">
              {/* Instagram */}
              <svg width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="5.5" stroke="currentColor" strokeWidth="2" fill="none"/><rect x="5" y="5" width="12" height="12" rx="6" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="16.5" cy="7.5" r="1" fill="currentColor"/></svg>
            </span>
            <span className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center neon-shadow text-black cursor-pointer transition hover:bg-cyan-300">
              {/* Globe */}
              <svg width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="2" fill="none"/><ellipse cx="11" cy="11" rx="4" ry="9" stroke="currentColor" strokeWidth="2" fill="none"/><line x1="2" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="2"/></svg>
            </span>
          </div>
        </div>
      </main>

      {/* EVENTS GRID */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {Spandan.events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.04 }}
            className="relative cyber-card p-4 border border-cyan-400/40 rounded-xl bg-black/40 backdrop-blur-md shadow-lg text-left"
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={event.img}
                className="w-full h-48 object-cover transition duration-700 hover:scale-110"
                alt={event.name}
              />
            </div>
            <h2 className="text-2xl font-bold neon-shadow text-cyan-300 mb-2">
              {event.name}
            </h2>
            <button
              onClick={() => setSelected(event)}
              className="w-full mt-4 py-2 border border-cyan-300 neon-shadow rounded-lg bg-cyan-400 text-black transition hover:scale-105 hover:bg-cyan-200"
            >
              Explore
            </button>
          </motion.div>
        ))}
      </div>

      {/* EXPLORE PANEL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed bottom-0 left-0 w-full h-[85vh] bg-black/95 backdrop-blur-xl border-t border-cyan-400/40 z-50 p-8 overflow-y-auto neon-shadow"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-10 text-3xl text-cyan-200 hover:text-cyan-400 font-bold"
            >
              ✕
            </button>
            <img
              src={selected.img}
              className="mx-auto w-full max-w-lg h-64 object-cover rounded-xl border border-cyan-400/40 mb-6"
              alt={selected.name}
            />
            <h2 className="text-4xl font-bold mt-4 neon-shadow text-cyan-300 mb-4">
              {selected.name}
            </h2>
            <p className="mt-3 text-gray-300">{selected.desc}</p>
            <h3 className="text-2xl font-bold mt-8 text-cyan-300 neon-shadow">Rules</h3>
            <ul className="list-disc ml-8 mt-3 text-gray-300 space-y-2">
              {selected.rules.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
            <h3 className="text-2xl font-bold mt-8 text-cyan-300 neon-shadow">Coordinators</h3>
            <ul className="mt-3 text-gray-300 space-y-2">
              {selected.coords.map((c, i) => (
                <li key={i}>{c.name} — {c.phone}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpandanPage;
