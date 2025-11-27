import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBG from "../../assets/a_s_bg.png";

const OligopolyData = {
  eventName: "Oligopoly",
  tagline: "",
  instagramLink: "",
  events: [
  {
    eventName: "Solo Lobo",
    eventId: "01",
    description:
      "A three-round corporate readiness challenge assessing communication, leadership, interview performance, and crisis handling skills.",
    rules: [
      "Individual participation only.",
      "Round 1: Group Discussion – evaluates communication, awareness, teamwork & articulation.",
      "Round 2: Mock Interview – HR-style interview based on personality, communication & persuasion.",
      "Round 3: Corporate Strategy + Risk Management – participants propose business solutions within 10 mins followed by evaluation.",
    ],
    maxTeamSize: 1,
    minTeamSize: 1,
    PsLink: "",
    coordinators: [],
  },
  {
    eventName: "Pitchers",
    eventId: "02",
    description:
      "A startup pitching challenge conducted in two stages — quiz followed by a business pitch presentation.",
    rules: [
      "Team size: 1-3 members.",
      "Round 1: Offline quiz on startups & entrepreneurship (40 MCQs, no negative marking, 30% qualifying score).",
      "Round 2: PPT Pitching Round – teams present business plan in under 10 slides (excluding cover & final slide).",
      "Presentation must include motivation, feasibility, revenue, marketing and financial strategy.",
    ],
    maxTeamSize: 3,
    minTeamSize: 1,
    PsLink: "",
    coordinators: [],
  },
  {
    eventName: "Ad-Hole",
    eventId: "03",
    description:
      "A multi-round advertising challenge involving quizzes, live ad-analysis and final ad-film production.",
    rules: [
      "Team size: 1-2 members.",
      "Round 1: Brain Teaser – 15-minute online quiz (20 advertisement-based questions) taken individually by both members.",
      "Round 2: Evolution – video advertisement shown, participants write analysis on A4 sheet within 20 minutes.",
      "Round 3: Thinkistaan – creative ad-making round (1.5 to 3-minute ad) followed by Q&A panel.",
    ],
    maxTeamSize: 2,
    minTeamSize: 1,
    PsLink: "",
    coordinators: [],
  },
  {
    eventName: "Trading Strategist",
    eventId: "04",
    description:
      "A stock-market based analytical event testing fundamentals of finance, trading mindset and portfolio strategy under simulated conditions.",
    rules: [
      "Individual participation only.",
      "Round 1: The Financial Forum – MCQ-based assessment covering stock basics, concepts & market awareness.",
      "Round 2: The Trading Turf – simulated trading session to maximize profits using strategic decisions.",
      "Eligibility: Open to all interested in stock trading.",
    ],
    maxTeamSize: 1,
    minTeamSize: 1,
    PsLink: "",
    coordinators: [],
  }
]

};

const OligopolyPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative min-h-screen font-sans text-gray-300">
      {/* Responsive Background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src={AvishkarBG}
          alt="Mobile Background"
          className="block sm:hidden w-full h-full object-cover"
        />
        <img
          src={AvishkarBG}
          alt="Desktop Background"
          className="hidden sm:block w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <main className="relative flex flex-col items-center justify-center px-4 py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-4xl text-center">
          <h1
            className="font-bold uppercase tracking-wide neon-shadow drop-shadow-xl text-gray-100 text-3xl sm:text-5xl lg:text-6xl leading-tight sm:leading-snug mb-3 sm:mb-4"
          >
            {OligopolyData.eventName}
          </h1>

          {OligopolyData.tagline && (
            <p
              className="mx-auto text-gray-200 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mt-2 sm:mt-3"
            >
              {OligopolyData.tagline}
            </p>
          )}
        </div>
      </main>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[...OligopolyData.events]
          .sort((a, b) => a.eventName.localeCompare(b.eventName))
          .map((event) => (
          <motion.div
            key={event.eventId}
            initial={{ scale: 1, boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(255,115,0,0.5)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.98 }}
            className="relative p-6 border border-gray-400 rounded-xl bg-black/90 backdrop-blur-md shadow-md cursor-pointer text-center select-none"
            onClick={() => setSelected(event)}
          >
            <h2 className="text-2xl font-bold neon-shadow text-gray-300 mb-2">{event.eventName}</h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(event);
              }}
              className="mt-4 py-2 w-full border border-gray-300 rounded-lg bg-gray-300 text-black font-semibold hover:bg-gray-200 transition"
            >
              Explore
            </button>
          </motion.div>
        ))}
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-xl border-t border-gray-300/50 z-50 p-8 overflow-y-auto neon-shadow"
            style={{ overflowX: "hidden", overscrollBehavior: "contain" }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-10 text-4xl text-gray-300 hover:text-gray-200 font-bold focus:outline-none"
              aria-label="Close Explore Panel"
            >
              ✕
            </button>
            <h2 className="text-4xl font-bold mt-4 neon-shadow text-gray-400 mb-8 text-center">{selected.eventName}</h2>
            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">
                  About the Event
                </h3>
                <p className="text-gray-300 whitespace-pre-wrap">{selected.description}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">Rules</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rules.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">
                  Coordinators
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 text-center">
                  {selected.coordinators.map((c, i) => (
                    <li key={i}>
                      {c.name} — {c.contact}
                    </li>
                  ))}
                </ul>
                {/* <p className="mt-6 text-gray-300 text-left">
                  <strong>Team size:</strong> {selected.minTeamSize} -{" "}
                  {selected.maxTeamSize}
                </p> */}
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OligopolyPage;
