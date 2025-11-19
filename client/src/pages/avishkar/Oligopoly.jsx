import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBgMobile from "../../assets/Avishkar_bg-mobile.png";
import AvishkarBG from "../../assets/AvishkarBG.png";

const OligopolyData = {
  eventName: "Oligopoly",
  tagline: "",
  instagramLink: "",
  events: [
    {
      eventName: "Ad Hole",
      eventId: "70",
      description:
        "A multi-round advertising competition involving quizzes, video analysis, and ad creation.",
      rules: [
        "Team size: 1 to 2 members.",
        "Round 1: Brain Teaser - 15-minute quiz on advertisement basics (20 questions).",
        "Round 2: Evolution - Write an analysis of a shown video ad on an A4 sheet within 20 minutes.",
        "Round 3: Thinkistaan - Create a 1.5 to 3-minute ad and present in Q&A round.",
      ],
      maxTeamSize: 2,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Kajal Singh", contact: "7999637764" },
        { name: "Anjali Yadav", contact: "9630293924" },
        { name: "Babita", contact: "7905851053" },
      ],
    },
    {
      eventName: "Trading Strategist",
      eventId: "71",
      description:
        "An individual competition on stock market trading, consisting of fundamental and practical rounds. We are pleased to announce the Trading Strategist competition, designed to enhance participants' knowledge and skills in stock market trading. This competition consists of three stages, each focusing on different aspects of trading. Participation is individual, and all rounds are elementary in nature.",
      rules: [
        "Individual participation.",
        "Round 1: Financial Forum - Answer questions about stock market basics.",
        "Round 2: Trading Turf - Simulated trading with analysis-driven trades for performance evaluation.",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Vaibhav Mishra", contact: "7238082878" },
        { name: "Harsh Yadav", contact: "8709726849" },
        { name: "Anjali Yadav", contact: "8303600726" },
      ],
    },
    {
      eventName: "Pitchers",
      eventId: "72",
      description:
        "Startup idea competition with quiz and presentation rounds.",
      rules: [
        "Team size: 1-3 members.",
        "Round 1: Quiz on Startups and Entrepreneurship (40 MCQs).",
        "Round 2: Present a startup idea in a 10-slide PowerPoint.",
      ],
      maxTeamSize: 3,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Prakash Kumar", contact: "8287522862" },
        { name: "Om Prakash Kumar", contact: "9693093526" },
        { name: "Harsh Yadav", contact: "9761473867" },
      ],
    },
    {
      eventName: "Solo Lobo",
      eventId: "73",
      description:
        "A solo event testing skills in leadership, communication, and problem-solving.",
      rules: [
        "Individual participation.",
        "Round 1: Group Discussion on assigned topics.",
        "Round 2: Mock HR Interview.",
        "Round 3: Corporate Strategy - Plan and present solutions to a corporate scenario.",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Shubhangi Mishra", contact: "8318072660" },
        { name: "Prakash Kumar", contact: "9336293343" },
        { name: "Harshita Dubey", contact: "9305886537" },
      ],
    },
  ],
};

const OligopolyPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative min-h-screen bg-black font-sans text-gray-300">
      {/* Responsive Background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src={AvishkarBgMobile}
          alt="Mobile Background"
          className="block sm:hidden w-full h-full object-cover"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        <img
          src={AvishkarBG}
          alt="Desktop Background"
          className="hidden sm:block w-full h-full object-cover"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </div>

      {/* Header */}
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-16 relative">
        <div className="md:w-1/2 mt-12 md:mt-0 text-center md:text-left">
          <h1 className="text-5xl font-bold neon-shadow text-cyan-400 mb-4 tracking-wide uppercase">
            {OligopolyData.eventName}
          </h1>
          {OligopolyData.tagline && (
            <p className="text-lg text-cyan-300 mb-8 max-w-md">{OligopolyData.tagline}</p>
          )}
        </div>
      </main>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {OligopolyData.events.map((event) => (
          <motion.div
            key={event.eventId}
            initial={{ scale: 1, boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(0,255,255,0.4)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.98 }}
            className="relative p-6 border border-cyan-600 rounded-xl bg-black/90 backdrop-blur-md shadow-md cursor-pointer text-center select-none"
            onClick={() => setSelected(event)}
          >
            <h2 className="text-2xl font-bold neon-shadow text-cyan-400 mb-2">{event.eventName}</h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(event);
              }}
              className="mt-4 py-2 w-full border border-cyan-400 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-300 transition"
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
            className="fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-md z-50 p-8 overflow-y-auto neon-shadow"
            style={{ overscrollBehavior: "contain" }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-10 text-4xl text-cyan-400 hover:text-cyan-600 font-bold focus:outline-none"
              aria-label="Close Explore Panel"
            >
              ✕
            </button>
            <h2 className="text-4xl font-bold mt-4 neon-shadow text-cyan-400 mb-8 text-center">{selected.eventName}</h2>
            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  About the Event
                </h3>
                <p className="text-cyan-300 whitespace-pre-wrap">{selected.description}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Rules</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rules.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  Coordinators
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 text-center">
                  {selected.coordinators.map((c, i) => (
                    <li key={i}>
                      {c.name} — {c.contact}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-cyan-300 text-left">
                  <strong>Team size:</strong> {selected.minTeamSize} -{" "}
                  {selected.maxTeamSize}
                </p>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OligopolyPage;
