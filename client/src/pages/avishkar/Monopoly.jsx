import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBG from "../../assets/a_s_bg.png";

const MonopolyData = {
  eventName: "Monopoly",
  tagline: "",
  instagramLink: "",
  events: [
    {
      eventName: "Chanakya Neeti",
      eventId: "71",
      description:
        "A strategic competition testing analytical skills through quiz, riddles and strategy-based case presentation rounds.",
      rules: [
        "Team size: 1–2 members",
        "Round 1: Brain Buster Blitz – Quiz round testing analytical aptitude",
        "Round 2: The Riddle Conundrum – Solve 5 riddles in minimum time",
        "Round 3: Strategic Mastermind – Case Study Presentation (5–7 mins + Q&A)"
      ],
      maxTeamSize: 2,
      minTeamSize: 1,
      PsLink: "",
      coordinators: []
    },

    {
      eventName: "Netrivta",
      eventId: "72",
      description:
        "A public-speaking and leadership event involving introduction round, debate segment and elocution-based final evaluation.",
      rules: [
        "Individual participation",
        "Round 1: Parichaya – Self introduction + leadership questions",
        "Round 2: Vaad-Vivad – Debate round on on-spot topic",
        "Round 3: Vaktavya – Elocution followed by judge Q&A"
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      PsLink: "",
      coordinators: []
    },

    {
      eventName: "Navachar",
      eventId: "73",
      description:
        "An innovation & entrepreneurship-based event conducted across quiz, case analysis and business-presentation rounds.",
      rules: [
        "Team size: 1–2 members",
        "Round 1: Quizoholic – Objective quiz based on startups & innovation",
        "Round 2: Business Case Study – 25 min written analysis, 100-word limit per question",
        "Round 3: B-Plan Presentation – Max 6 slides, 10 min pitch + Q&A"
      ],
      maxTeamSize: 2,
      minTeamSize: 1,
      PsLink: "",
      coordinators: []
    },

    {
      eventName: "Stall Mart",
      eventId: "74",
      description:
        "A stall-based business competition involving idea pitching, stall execution, revenue generation and market-engagement strategy.",
      rules: [
        "Team size: 3–4 members",
        "Round 1: Idea Sprint – Present stall concept, product strategy, audience appeal",
        "Round 2: Entrepreneur’s Arena – Live stall management and sales performance",
        "No gambling, objectionable content or unfair means allowed",
        "Only team members may operate inside stall",
        "First-come-first-serve stall allotment",
        "Daily balance sheet maintenance compulsory"
      ],
      maxTeamSize: 4,
      minTeamSize: 3,
      PsLink: "",
      coordinators: []
    },

    {
      eventName: "Reel Fiesta",
      eventId: "75",
      description:
        "A creative reel-based entrepreneurship challenge including quiz, brand face-off and product pitching through video creation.",
      rules: [
        "Team size: 2–3 members",
        "Round 1: Business Trivia Quiz",
        "Round 2: Brand Battle – Create humorous reel of two competing brands (45–60 sec)",
        "Round 3: Pitch Perfect – Reel-pitch of a mystery-box product (45–60 sec)"
      ],
      maxTeamSize: 3,
      minTeamSize: 2,
      PsLink: "",
      coordinators: []
    }
  ]
};


const MonopolyPage = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (link) => {
    if (link && link.trim() !== "") {
      // Open Google Form in a new tab
      window.open(link, "_blank");
    } else {
      // Redirect to Coming Soon page
      navigate("/coming-soon")
    }
  };

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
            {MonopolyData.eventName}
          </h1>

          {MonopolyData.tagline && (
            <p
              className="mx-auto text-gray-200 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mt-2 sm:mt-3"
            >
              {MonopolyData.tagline}
            </p>
          )}
        </div>
      </main>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[...MonopolyData.events]
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

            <button
              onClick={() => handleRegister(selected.registrationLink)}
              // Container classes: Fixed position, z-index, colors, borders, and sharp transitions
              className="fixed bottom-8 right-8 z-50 group px-10 py-4 bg-blackborder-[3px] border-cyan-400 text-white font-bold text-xl uppercase tracking-[0.15em] shadow-[5px_5px_0_#d946ef,-4px_-4px_0_#06b6d4] hover:shadow-[-6px_-6px_0_#d946ef,6px_6px_0_#06b6d4] hover:border-fuchsia-500 hover:text-cyan-300 transition-all duration-150 ease-linear active:translate-x-[2px] active:translate-y-[2px] active:shadow-none overflow-hidden select-none" >
              {/* Scanline Overlay Texture (CRT Monitor effect) */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.7)_50%)] bg-[length:100%_4px] pointer-events-none z-20 opacity-60"></div>

              {/* Text Content with slight glow */}
              <span className="relative z-30 flex items-center gap-3 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                Register Now
                {/* An arrow that shifts color and position sharply on hover */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-fuchsia-500 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all duration-150">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>

              {/* Optional: A subtle flicker element that appears briefly on hover start */}
              <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[25deg] group-hover:animate-[ping_0.3s_linear_1] opacity-0"></div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MonopolyPage;
