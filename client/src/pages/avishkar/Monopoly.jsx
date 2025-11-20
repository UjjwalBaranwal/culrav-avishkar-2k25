import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBgMobile from "../../assets/Avishkar_bg-mobile.png";
import AvishkarBG from "../../assets/AvishkarBG.png";

const MonopolyData = {
  eventName: "Monopoly",
  tagline: "",
  instagramLink: "",
  events: [
    {
      eventName: "Chanakya Neeti",
      eventId: "82",
      description:
        "A strategic thinking event with quizzes, riddles, and case study presentations.",
      rules: [
        "Team size: 1 to 2 members.",
        "Round 1: Quiz - Brain Buster Blitz.",
        "Round 2: Solve riddles in the shortest time possible.",
        "Round 3: Case Study Presentation with Q&A.",
      ],
      maxTeamSize: 2,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Kajal Singh", contact: "8319989996" },
        { name: "Anshika Goel", contact: "8765284245" },
        { name: "Shubhangi Mishra", contact: "8840537131" },
      ],
    },
    {
      eventName: "Netritva",
      eventId: "83",
      description:
        "Leadership competition testing introduction, debate, and elocution skills.",
      rules: [
        "Individual participation.",
        "Round 1: Self-introduction and leadership questions.",
        "Round 2: Debate on a given topic.",
        "Round 3: Elocution with Q&A from the audience.",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Om Prakash Kumar", contact: "9693093526" },
        { name: "Harsh Yadav", contact: "9761473867" },
        { name: "Prakash Kumar", contact: "8287522862" },
      ],
    },
    {
      eventName: "Navachar",
      eventId: "84",
      description:
        "Innovation-focused competition with a quiz, case study, and B-Plan presentation.",
      rules: [
        "Team size: 1 to 2 members.",
        "Round 1: Quiz on entrepreneurship.",
        "Round 2: Case Study analysis on an A4 sheet.",
        "Round 3: B-Plan Presentation with a 6-slide maximum limit.",
      ],
      maxTeamSize: 2,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Dharya Akansha Horo", contact: "7257992948" },
        { name: "Utsav Rani", contact: "7303501491" },
        { name: "Kajal Singh", contact: "7238082878" },
      ],
    },
    {
      eventName: "Stallmart",
      eventId: "85",
      description:
        "A team event on managing stalls, with a focus on ideation, revenue generation, and execution.",
      rules: [
        "Team size: 3-4 members.",
        "Round 1: Present stall concept and strategy.",
        "Round 2: Set up and manage a stall; evaluated on revenue and productivity.",
      ],
      maxTeamSize: 4,
      minTeamSize: 3,
      PsLink: "",
      coordinators: [
        { name: "Shubhangi Mishra", contact: "9644202510" },
        { name: "Om Prakash Kumar", contact: "8957977946" },
        { name: "Utsav Rani", contact: "8470991072" },
      ],
    },
    {
      eventName: "Reel Fiesta",
      eventId: "86",
      description:
        "A reel-making competition with trivia, brand battle, and product pitch rounds.",
      rules: [
        "Team size: 2-3 members.",
        "Round 1: Business Trivia Quiz.",
        "Round 2: Brand Battle - Reel Edition with assigned brands.",
        "Round 3: Pitch Perfect - Reel pitch of a mystery product.",
      ],
      maxTeamSize: 3,
      minTeamSize: 2,
      PsLink: "",
      coordinators: [
        { name: "Babita", contact: "7267093014" },
        { name: "Anshika Goel", contact: "7257992948" },
        { name: "Dharya Akansha Horo", contact: "8853169987" },
      ],
    },
  ],
};




const MonopolyPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative min-h-screen bg-black font-sans text-gray-300">

      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-6 left-6 px-5 py-2 border border-cyan-500 
                   text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black 
                   transition font-semibold z-50"
      >
        ← Back
      </button>

      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src={AvishkarBgMobile}
          alt="Mobile Background"
          className="block sm:hidden w-full h-full object-cover"
        />
        <img
          src={AvishkarBG}
          alt="Desktop Background"
          className="hidden sm:block w-full h-full object-cover"
        />
      </div>

      {/* --- HEADER --- */}
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-16 relative">
        <div className="md:w-1/2 mt-12 md:mt-0 text-center md:text-left">
          <h1 className="text-5xl font-bold text-cyan-400 mb-4 tracking-wide uppercase">
            {MonopolyData.eventName}
          </h1>

          {MonopolyData.tagline && (
            <p className="text-lg text-cyan-300 mb-8 max-w-md">
              {MonopolyData.tagline}
            </p>
          )}
        </div>
      </main>

      {/* --- EVENT CARDS --- */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {MonopolyData.events.map((event) => (
          <motion.div
            key={event.eventId}
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.25, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.97 }}
            className="relative p-6 border border-cyan-600 rounded-xl 
                       bg-black/80 backdrop-blur-md shadow-md cursor-pointer text-center select-none"
            onClick={() => setSelected(event)}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              {event.eventName}
            </h2>

            {/* Explore Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(event);
              }}
              className="mt-2 py-2 w-full border border-cyan-400 rounded-lg 
                         bg-cyan-500 text-black font-semibold hover:bg-cyan-300 transition duration-200"
            >
              Explore
            </button>
          </motion.div>
        ))}
      </div>

      {/* --- MODAL / DETAILS PANEL --- */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-full bg-black/85 backdrop-blur-md 
                       z-50 p-8 overflow-y-auto"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-10 text-4xl text-cyan-400 
                         hover:text-cyan-600 font-bold"
            >
              ✕
            </button>

            <h2 className="text-4xl font-bold mt-4 text-cyan-400 mb-8 text-center">
              {selected.eventName}
            </h2>

            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* About */}
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  About the Event
                </h3>
                <p className="text-cyan-300 whitespace-pre-wrap">
                  {selected.description}
                </p>
              </div>

              {/* Rules */}
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  Rules
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 
                               max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rules.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              {/* Coordinators */}
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
                  <strong>Team size:</strong> {selected.minTeamSize} – {selected.maxTeamSize}
                </p>
              </div>

            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MonopolyPage;
