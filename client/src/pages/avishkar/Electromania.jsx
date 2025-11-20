import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBgMobile from "../../assets/Avishkar_bg-mobile.png";
import AvishkarBG from "../../assets/AvishkarBG.png";

// Dummy card image (replace with actual if you like)
import dummy from "../../assets/dummy.png";

const TOP_IMAGE = dummy;

const departmentCoords = [
  "Abhishek Kumar Yadav",
  "Akshat Mahanth",
  "Amrisha",
];
const eventCoords = [
  "Aryan Kesharwani",
  "Atharva Antapurkar",
  "Dheeraj Vuddagiri",
  "Meemansha Singh",
  "Nandre Harish",
  "Saurabh Gupta",
  "Shresth Gadhwala",
  "Shreyansh Shah",
  "Soumya Das",
  "Yogesh Kumar",
  "Chetanya Mishra",
];
const subevents = [
  {
    id: 1,
    name: "QUINTATHALON",
    coords: [
      "Aryan Kesharwani", "Saurabh Gupta", "Shresth Gadhwala", "Yogesh Kumar", "Shreyansh Shah"
    ],
    desc: [
      "Flagship Event - Replicates the actual interview process of recruitment during internship and placement sessions. Structured to help students access their interview skills.",
      "Mandatory for ECE students to participate in other events."
    ],
    rounds: [
      "Round 1: OA (CS/Hardware Fundamentals + Aptitude + Coding) (Online)",
      "Round 2: 2 Interviews (Tech + Behavioural) (Offline)",
    ],
    eligibility: "1st, 2nd & 3rd year ECE ONLY. Individual Event.",
    expectedRegistrations: "500",
    goodies: "9",
  },
  {
    id: 2,
    name: "INNODEV",
    coords: [
      "Abhishek Kumar Yadav", "Amrisha", "Nandre Harish", "Meemansha Singh"
    ],
    desc: [
      "A software development team event featuring AI powered unique problem statements built with creative and innovative ideas.",
    ],
    rounds: [
      "Round 1: Abstract Submission (Online)",
      "Round 2: Mid-Evaluation (Online)",
      "Round 3: Final Evaluation (Offline)",
      "Round 4: Presentation and Q&A (Offline)",
    ],
    eligibility: "2nd & 3rd year BTech (ECE+EE) (at least 1 ECE). Team size: 2 to 4.",
    expectedRegistrations: "50",
    goodies: "4",
  },
  {
    id: 3,
    name: "CODOTRON",
    coords: [
      "Abhishek Kumar Yadav", "Aryan Kesharwani", "Nandre Harish"
    ],
    desc: [
      "Individual/team event to benchmark problem-solving, teamwork, and competitive coding skills.",
    ],
    rounds: [
      "Round 1: Contest (5 to 6 questions, team/individual)",
      "Round 2: Debugging Round (Individual Relay Like)",
    ],
    eligibility: "BTech-2nd,3rd (ECE+EE), MTech-1st yr. Team size: 1 to 3 (at least 1 ECE).",
    expectedRegistrations: "20",
    goodies: "3",
  },
  {
    id: 4,
    name: "KAGGLE_SPRINT",
    coords: [
      "Atharva Antapurkar", "Soumya Das"
    ],
    desc: [
      "AI/ML model development Kaggle competition to develop understanding of end-to-end model building and compete on a live leaderboard.",
    ],
    rounds: [
      "Round 1: Abstract Submission (Online)",
      "Round 2: Mid Evaluation (Online)",
      "Round 3: Final Evaluation & Presentation (Offline)",
    ],
    eligibility: "1st,2nd,3rd year. Team size: 2 to 3 (at least one ECE).",
    expectedRegistrations: "New Event",
    goodies: "4",
  },
  {
    id: 5,
    name: "MARKETPULSE",
    coords: [
      "Akshat Mahanth", "Amrisha", "Shreyansh Shah"
    ],
    desc: [
      "Market simulation game testing quick thinking and communication. Teams act as companies making strategic decisions and trading on the market. Winner determined by market cap after six financial quarters.",
    ],
    rounds: [],
    eligibility: "Open participation from all courses and years. Team size: 2 to 4.",
    expectedRegistrations: "New Event",
    goodies: "3",
  },
  {
    id: 6,
    name: "RTL_RUSH",
    coords: [
      "Akshat Mahanth", "Chetanya Mishra", "Dheeraj Vuddagiri"
    ],
    desc: [
      "Design and implement hardware problems using Verilog HDL. Separate problems for 2nd & 3rd Year released one week before Avishkar. Submit Verilog code, schematics, waveforms.",
    ],
    rounds: [],
    eligibility: "2nd & 3rd year. Team size: 2 to 4 (at least one ECE).",
    expectedRegistrations: "20",
    goodies: "3",
  },
  {
    id: 7,
    name: "CIRCUIT_OF_THE_DAY",
    coords: [
      "Akshat Mahanth", "Chetanya Mishra", "Dheeraj Vuddagiri", "Saurabh Gupta"
    ],
    desc: [
      "Week-long circuit design event with increasing difficulty. Daily problems posted, submissions via LogisimEvolution before 3PM next day.",
    ],
    rounds: [],
    eligibility: "1st, 2nd & 3rd year. Team size: 2 to 4 (at least one ECE).",
    expectedRegistrations: "70",
    goodies: "9",
  },
  {
    id: 8,
    name: "ENCODEWARS",
    coords: [
      "Akshat Mahanth", "Atharva Antapurkar", "Soumya Das"
    ],
    desc: [
      "Decoding skill test using core and software domain knowledge. Fastest answers, style quiz, hidden keywords in mixed-format problems (bitstream, characters, images). Use of internet allowed; AI use prohibited and monitored."
    ],
    rounds: [],
    eligibility: "1st, 2nd & 3rd year. Team size: 2 to 4 (at least one ECE).",
    expectedRegistrations: "New Event",
    goodies: "4",
  },
  {
    id: 9,
    name: "TO_BEE_OR_NOT_TO_BEE",
    coords: [
      "Abhishek Kumar Yadav", "Aryan Kesharwani", "Chetanya Mishra"
    ],
    desc: [
      "Fun quiz event, multiple puzzle rounds: IDEA BEE, SPELL BEE, Integration Bee Bingo.",
    ],
    rounds: [
      "Round 1: IDEA BEE",
      "Round 2: SPELL BEE",
      "Round 3: Integration Bee Bingo",
    ],
    eligibility: "1st, 2nd & 3rd year. Team size: 3 (at least one ECE member).",
    expectedRegistrations: "New Event",
    goodies: "4",
  },
];

const ElectromaniaPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative min-h-screen bg-black font-sans text-gray-300">
      {/* Responsive Background Images */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src={AvishkarBgMobile}
          alt="Mobile Background"
          className="w-full h-full object-cover block sm:hidden"
        />
        <img
          src={AvishkarBG}
          alt="Laptop Background"
          className="w-full h-full object-cover hidden sm:block"
        />
      </div>

      {/* TOP IMAGE AND HEADER */}
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-16 relative">

        {/* 🔥 BACK BUTTON ADDED */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 px-5 py-2 border border-cyan-500 text-cyan-400 rounded-lg 
                     hover:bg-cyan-500 hover:text-black transition font-semibold z-50"
        >
          ← Back
        </button>

        <div className="relative flex flex-col justify-center items-center md:w-1/2">
          <img
            src={TOP_IMAGE}
            alt="Event Hero"
            className="w-[330px] h-[300px] object-cover brightness-90 rounded-xl shadow-lg border border-cyan-600/60 neon-shadow"
          />
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 text-center md:text-center">
          <h1 className="text-5xl font-bold neon-shadow text-cyan-400 mb-4 drop-shadow-xl tracking-wide uppercase">
            ELECTROMANIA 2K25
          </h1>
        </div>
      </main>

      {/* EVENTS GRID */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {subevents.map((event) => (
          <motion.div
            key={event.id}
            initial={{ scale: 1, boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(0,255,255,0.4)",
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="relative cyber-card p-6 border border-cyan-600 rounded-xl bg-black/90 backdrop-blur-md shadow-md cursor-pointer text-center select-none"
            onClick={() => setSelected(event)}
          >
            <h2 className="text-2xl font-bold neon-shadow text-cyan-400 mb-2">
              {event.name}
            </h2>
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

      {/* EXPLORE PANEL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-xl border-t border-cyan-600/50 z-50 p-8 overflow-y-auto neon-shadow"
            style={{ overflowX: "hidden", overscrollBehavior: "contain" }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-10 text-4xl text-cyan-400 hover:text-cyan-600 font-bold focus:outline-none"
              aria-label="Close Explore Panel"
            >
              ✕
            </button>

            <h2 className="text-4xl font-bold mt-4 neon-shadow text-cyan-400 mb-8 text-center">
              {selected.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              
              {/* Description */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  About the Event
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 overflow-wrap break-word">
                  {selected.desc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </section>

              {/* Rounds/Rules */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  Rules
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rounds && selected.rounds.length > 0
                    ? selected.rounds.map((rule, i) => <li key={i}>{rule}</li>)
                    : <li>No structured rounds listed.</li>}
                </ul>
              </section>

              {/* Coordinators */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  Event Coordinators
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 text-center">
                  {selected.coords.length > 0
                    ? selected.coords.map((c, i) => <li key={i}>{c}</li>)
                    : <li>No coordinators listed.</li>}
                </ul>

                <div className="mt-6 text-left">
                  <p className="text-cyan-300">
                    <span className="font-bold text-cyan-400">Eligibility:</span> {selected.eligibility}
                  </p>
                  <p className="text-cyan-300">
                    <span className="font-bold text-cyan-400">Expected Registrations:</span> {selected.expectedRegistrations}
                  </p>
                  <p className="text-cyan-300">
                    <span className="font-bold text-cyan-400">No. of Goodies:</span> {selected.goodies}
                  </p>
                </div>
              </section>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ElectromaniaPage;
