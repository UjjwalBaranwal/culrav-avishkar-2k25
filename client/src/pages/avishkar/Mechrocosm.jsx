import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBG from "../../assets/a_s_bg.png";

const MechrocosmData = {
  eventName: "Mechrocosm",
  tagline: "",
  instagramLink: "",
  events: [
    // --------------------------------- TRIATHLON ---------------------------------
    {
      eventName: "Triathlon",
      eventId: "62",
      description:
        "A placement-simulation event designed to provide real-time exposure to campus recruitment. Participants face aptitude rounds, technical/consultancy interviews and behavioural assessments—mimicking real company hiring formats.",
      rules: [
        "Branches allowed: ME, PIE, ECM, MTE.",
        "Individual participation only.",
        "Compulsory for 1st, 2nd & 3rd year ME/PIE/ECM/Material Engg students.",
        "Participants may attempt ONLY ONE TRACK or a specified combination.",
        "CORE TRACK → (2 + 3) Rounds",
        "CONSULTANCY TRACK → (1 + 2 + 3) Rounds",
        "SOFTWARE TRACK → (1 + 2 + 3) Rounds",
        "Round 1. Aptitude / Technical Screening",
        "Round 2. HR / Behavioural + Technical Interview",
        "Round 3. Final Round (Offline)",
      ],
      minTeamSize: 1,
      maxTeamSize: 1,
      expectedParticipation: "400+",
      goodies: "24 (expected)",
      coordinators: [
        { name: "Krishnendu", contact: "" },
        { name: "Kuber", contact: "" },
        { name: "Ujjwal Gupta", contact: "" },
        { name: "Aakarsh", contact: "" },
        { name: "Manish", contact: "" },
        { name: "Kavya", contact: "" },
        { name: "Aditya Verma", contact: "" },
        { name: "Shaan", contact: "" },
        { name: "Iqra", contact: "" },
        { name: "Manmeet", contact: "" },
        { name: "Ankit", contact: "" }
      ]
    },

    // --------------------------------- CRACK THE CASE ---------------------------------
    {
      eventName: "Crack the Case",
      eventId: "CTC01",
      description:
        "A high-pressure consulting & business case championship featuring Case Solving + Guesstimates + PPT analysis rounds. One of the biggest participation events—built to test structured thinking, storytelling & decision-making.",
      rules: [
        "Eligibility: All branches (ME preference as given).",
        "Team Structure: 3 members.",
        "For 1st years → 2 ME + 1 any branch mandatory.",
        "Round 1 → Database Round (Excel / SQL / Python Libraries)",
        "Round 2 → Spot Guesstimates + Puzzles",
        "Round 3 → Business Case PPT + PowerBI dashboard presentation",
      ],
      minTeamSize: 3,
      maxTeamSize: 3,
      expectedParticipation: "900+",
      goodies: "9",
      coordinators: [
        { name: "Aditya Verma", contact: "" },
        { name: "Priyanshu", contact: "" },
        { name: "Ujjwal", contact: "" },
        { name: "Utkarsh", contact: "" }
      ]
    },

    // --------------------------------- INDUSTRIAL MONOPOLY ---------------------------------
    {
      eventName: "Industrial Monopoly",
      eventId: "IM01",
      description:
        "A business-building simulation where participants bid, acquire & grow companies. Use strategy, analysis & auction skills to dominate the market—winner builds the most profitable enterprise.",
      rules: [
        "Team Size: 3 members → (2 ME + 1 any)",
        "Inter-branch allowed, inter-year not allowed",
        "Round 1. Online Case Submission Round",
        "Round 2. Offline Auction + Bidding War",
        "Round 3. Business Plan Presentation (Offline)",
      ],
      minTeamSize: 3,
      maxTeamSize: 3,
      expectedParticipation: "Approx. 900",
      goodies: "9",
      coordinators: [
        { name: "Manish", contact: "" },
        { name: "Aakarsh", contact: "" },
        { name: "Kavya", contact: "" }
      ]
    },

    // --------------------------------- MECHATHON ---------------------------------
    {
      eventName: "Mechathon",
      eventId: "MH01",
      description:
        "A Dev + ML based product-building event where participants develop real engineering solutions through Machine Learning & Software Development modules.",
      rules: [
        "Team of 4 → 2 ME + 2 ANY",
        "( If ≤ 2 members → 1 ME compulsory )",
        "Round 1 → Abstract Submission (Online)",
        "Round 2 → Mid-Evaluation (Online)",
        "Round 3 → Final Evaluation (Offline) + PPT + QA",
      ],
      minTeamSize: 4,
      maxTeamSize: 4,
      expectedParticipation: "70+ Teams",
      goodies: "12",
      coordinators: [
        { name: "Shaan", contact: "" },
        { name: "Iqra", contact: "" },
        { name: "Ankit", contact: "" },
        { name: "Devansh", contact: "" }
      ]
    },

    // --------------------------------- DeSim (Blueprint + Automax) ---------------------------------
    {
      eventName: "DeSim (Blueprint + Automax)",
      eventId: "DS01",
      description:
        "A new simulation-based event where teams solve engineering problems in-lab and present computational analysis models for evaluation.",
      rules: [
        "NEW EVENT",
        "Team of 3 Members",
        "Round 1. Problem Statement Assessment in Lab ( Evaluated by Professors )",
        "Round 2. Simulation + Analysis Presentation Round ( Evaluated by EC )",
      ],
      minTeamSize: 3,
      maxTeamSize: 3,
      expectedParticipation: "500+",
      goodies: "9",
      coordinators: [
        { name: "Krishnendu", contact: "" },
        { name: "Manudev", contact: "" },
        { name: "Ankur", contact: "" }
      ]
    },
    
    // --------------------------------- Turbo Speed Showdown ---------------------------------
    {
      eventName: "Turbo Speed Showdown",
      eventId: "TS01",
      description:
        "A high-rush motorsport-style event—build, tune, race & compete for the ultimate speed title.",
      rules: [
        "Team Size: 4 – 6 members",
        "All Branches Allowed | Inter-branch Allowed",
        "Inter-year NOT allowed",
        "Round 1: Workshop Round",
        "Round 2: Test-n-Tune",
        "Round 3: Arena Challenge",
      ],
      minTeamSize: 4,
      maxTeamSize: 6,
      expectedParticipation: "500+",
      goodies: "9",
      coordinators: [
        { name: "Mahindra Sonkar", contact: "" },
        { name: "Kuber Agrawal", contact: "" }
      ]
    },

    // --------------------------------- Game of Codes ---------------------------------
    {
      eventName: "Game of Codes",
      eventId: "GOC01",
      description:
        "A coding battle tournament with knockout duels. Solve problems faster than opponents—No AI tools allowed. Clean logic & full test-case pass required.",
      rules: [
        "Team of 3 → 1 ME compulsory + 2 ANY",
        "NO AI Models Allowed",
        "All test cases must pass to be considered correct",
        "IF TEAMS > 16 → Round 1 Activated",
        "ROUND 1 : Online Qualifier (Timed problem solving)",
        "Ranking = Time + Accuracy",
        "ROUND 2 : Offline Knockout Bracket",
        "Head-to-head coding war → Faster team wins",
      ],
      minTeamSize: 3,
      maxTeamSize: 3,
      expectedParticipation: "30+ Teams",
      goodies: "12",
      coordinators: [
        { name: "Shaan", contact: "" },
        { name: "Ankit", contact: "" },
        { name: "Iqra", contact: "" }
      ]
    }
  ],
};


const MechrocosmPage = () => {
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
            {MechrocosmData.eventName}
          </h1>

          {MechrocosmData.tagline && (
            <p
              className="mx-auto text-gray-200 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mt-2 sm:mt-3"
            >
              {MechrocosmData.tagline}
            </p>
          )}
        </div>
      </main>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[...MechrocosmData.events]
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
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">About the Event</h3>
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
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">Coordinators</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 text-center">
                  {selected.coordinators.length==0?
                  <h1 >No coordinators listed</h1>:
                  selected.coordinators.map((c, i) => (
                    <li key={i}>
                      {c.name} — {c.contact}
                    </li>
                  ))}
                </ul>
                {/* <p className="mt-6 text-gray-300 text-left"><strong>Team size:</strong> {selected.minTeamSize} - {selected.maxTeamSize}</p> */}
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MechrocosmPage;
