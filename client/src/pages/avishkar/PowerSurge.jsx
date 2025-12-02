import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBG from "../../assets/a_s_bg.png";

const PowerSurgeData = {
  eventName: "PowerSurge",
  tagline: "Ignite the Spark of Innovation",
  instagramLink: "https://www.instagram.com/powersurge/",
  events: [
    {
      eventName: "Pentathlon",
      eventId: "87",
      description:
        "A flagship multi-stage recruitment event simulating campus placements through Online Assessments, Group Discussions, Extempore and Interview rounds. Mandatory for EE students who wish to participate in other events.",
      rules: [
        "Mandatory for Electrical students to be eligible for participation in other events.",
        "Flagship recruitment simulation event of PowerSurge.",
        "Round 1: Online Assessment (Core / Software / Consultancy as per domain selection).",
        "Round 2: Group Discussion (common for all).",
        "Round 3: Personal Interview domain-specific.",
        "Eligibility: 1st, 2nd & 3rd year B.Tech.",
        "Individual event."
      ],
      minTeamSize: 1,
      maxTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "DEV SHARMA", contact: "" },
        { name: "AYUSH MAURYA", contact: "" },
        { name: "VEDANT OJHA", contact: "" },
        { name: "KARNIKA SINGH", contact: "" },
        { name: "YATHARTHA TIWARI", contact: "" }
      ]
    },
    {
      eventName: "Dev or Die",
      eventId: "88",
      description:
        "A product-development event where participants build impactful digital solutions—from web apps to tech tools. Includes aptitude screening, a development sprint and offline final evaluation.",
      rules: [
        "Round 1: Aptitude screening (elimination).",
        "Round 2: 10-day Development Sprint with problem statement + evaluation + video submission.",
        "Round 3: Offline final presentation and demo.",
        "Eligibility: B.Tech all years except final year + MCA.",
        "Minimum one EE member in every team.",
        "Team size: 2–4."
      ],
      minTeamSize: 2,
      maxTeamSize: 4,
      PsLink: "",
      coordinators: [
        { name: "CHINMAY MALVE", contact: "" },
        { name: "TEJASW AGRAWAL", contact: "" },
        { name: "AYUSH GUPTA", contact: "" }
      ]
    },
    {
      eventName: "CodeSparks",
      eventId: "89",
      description:
        "Competitive programming contest featuring algorithmic problems that test logic, time-efficiency and coding precision. Includes interview screening for top finalists.",
      rules: [
        "Round 1: Coding contest with 5–6 problems (year-wise difficulty separation).",
        "Round 2: Interview-style evaluation for shortlisted candidates.",
        "Eligibility: B.Tech except final year + MCA + M.Tech 1st year.",
        "Individual participation."
      ],
      minTeamSize: 1,
      maxTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Ayushman Tiwari", contact: "" },
        { name: "Keshav Diwakar", contact: "" }
      ]
    },
    {
      eventName: "Circuit Bizz",
      eventId: "90",
      description:
        "A concept-driven event where participants solve circuit-logic problems through bidding, written challenges and interviews—designed for electrical problem-solvers.",
      rules: [
        "Round 1: Auction-style problem allocation.",
        "Round 2: Pen-and-paper problem solving.",
        "Round 3: Interview-round evaluation.",
        "Eligibility: 1st–3rd year students."
      ],
      minTeamSize: 1,
      maxTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Umme Sidra", contact: "" },
        { name: "Akrati Singh", contact: "" },
        { name: "Nikhil Kumar Jadon", contact: "" }
      ]
    },
    {
      eventName: "Predefined Hardware",
      eventId: "91",
      description:
        "Hands-on electrical hardware development event. Teams build core electrical engineering solutions based on predefined requirements, with evaluation on execution and innovation.",
      rules: [
        "Round 1: Mid-evaluation on development progress.",
        "Round 2: Final demo + technical presentation.",
        "Eligibility: B.Tech 1st–3rd year.",
        "Team size: 3–5."
      ],
      minTeamSize: 3,
      maxTeamSize: 5,
      PsLink: "",
      coordinators: [
        { name: "Ratan Kumar", contact: "" },
        { name: "Ravula Vasu", contact: "" },
        { name: "Ishan Singh", contact: "" }
      ]
    },
    {
      eventName: "Royal Rumble",
      eventId: "93",
      description:
        "A reverse-coding + knockout DSA duel event. Decode logic from output in Round 1; battle 1v1 head-to-head in Round 2 where fastest correct submitter advances.",
      rules: [
        "Round 1: Reverse Coding challenge (time + correctness scoring).",
        "Round 2: DSA 1v1 Knockout Bracket.",
        "Eligibility: 1st–3rd year + MCA.",
        "Individual event."
      ],
      minTeamSize: 1,
      maxTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Priyanshu Anand", contact: "" },
        { name: "Priyam Raj", contact: "" }
      ]
    }
  ]
};


const PowerSurgePage = () => {
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
            {PowerSurgeData.eventName}
          </h1>

          {PowerSurgeData.tagline && (
            <p
              className="mx-auto text-gray-200 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mt-2 sm:mt-3"
            >
              {PowerSurgeData.tagline}
            </p>
          )}
        </div>
      </main>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[...PowerSurgeData.events]
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

export default PowerSurgePage;
