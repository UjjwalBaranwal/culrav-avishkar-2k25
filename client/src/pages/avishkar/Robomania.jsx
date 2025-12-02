import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBG from "../../assets/a_s_bg.png";

const RobomaniaData = {
  eventName: "Robomania",
  tagline: "Where Innovation Meets Robotics",
  events: [
    // 1. TrailBlitz
    {
      eventName: "TrailBlitz",
      eventId: "01",
      description:
        "Teams design and construct an autonomous line-following robot capable of detecting and tracing a marked path. The bot must navigate turns, intersections, and checkpoints with precision, testing logic design, sensor tuning, and autonomous navigation.",
      rules: [
        "Only one bot per team.",
        "No touching or manual adjustment during the run.",
        "Once started, no team member may enter the arena.",
        "Maximum of 3 restarts allowed.",
        "Timer does not reset during restarts.",
        "Event coordinators’ decision is final and may change if needed.",
        "Team Size: 2 – 4 members.",
        "Event includes separate problem statements for 1st years & others.",
      ],
      maxTeamSize: 4,
      minTeamSize: 2,
      coordinators: [
        { name: "Dhruv Chandhok", contact: "+91 8279448621" },
        { name: "Mohammad Kaif", contact: "+91 9520046728" },
        { name: "Aryan Vishwakarma", contact: "+91 9532983109" },
        { name: "Aman Sharma", contact: "+91 9936064502" },
      ],
    },

    // 2. Sketch-O-Bot
    {
      eventName: "Sketch-O-Bot",
      eventId: "02",
      description:
        "Participants must process an image through OpenCV to extract contour data. Their autonomous bot must trace the pattern on the arena, managing pen lifts, intersections, and staying aligned with the given outline.",
      rules: [
        "Only one autonomous bot per team.",
        "No team member allowed to touch the bot or enter arena after start.",
        "Bot must start from a safe starting point inside arena.",
        "Only one member allowed near the bot initially.",
        "Run starts only on organizers’ signal.",
        "If pen/brush falls off, run is nullified.",
        "Teams must not hardcode the pattern.",
        "Participants may choose any starting point (ending point must match).",
        "Event coordinators’ decision is final.",
        "Team Size: 2 – 4 members.",
        "Separate problem statements for 1st years & others.",
      ],
      maxTeamSize: 4,
      minTeamSize: 2,
      coordinators: [
        { name: "Abhay Agrawal", contact: "+91 9695666222" },
        { name: "Abdul Basit", contact: "+91 6392081638" },
        { name: "Astha Singh", contact: "+91 9336292091" },
      ],
    },

    // 3. RoboGesture Rally
    {
      eventName: "RoboGesture Rally",
      eventId: "03",
      description:
        "Teams design and construct gesture-controlled or mobile-controlled robotic vehicles to race through an urban-style obstacle arena. Bots must demonstrate agility, obstacle handling, and quick problem-solving in dynamic terrain.",
      rules: [
        "Teams must build their own bot — no prebuilt kits allowed.",
        "Maximum 3 attempts; best timing considered.",
        "Points deducted for collisions or missed checkpoints.",
        "Intentional arena damage → disqualification.",
        "Judges’ decision is final.",
        "Team Size: 2 – 4 members.",
        "Separate problem statements for 1st years & others.",
      ],
      maxTeamSize: 4,
      minTeamSize: 2,
      coordinators: [
        { name: "Aman Sharma", contact: "+91 9936064502" },
        { name: "Ankit Upadhyay", contact: "+91 8368822483" },
        { name: "Avneesh Sahu", contact: "+91 9616520679" },
        { name: "Devanshi Gupta", contact: "+91 7081839153" },
      ],
    },

    // 4. Code Sprint
    {
      eventName: "Code Sprint",
      eventId: "04",
      description:
        "A hackathon-style coding competition with multiple problem statements for both 1st years and open-category participants. Themes span AI, ML, audio analysis, vision tasks, and more.",
      rules: [
        "Raw dataset will be provided to teams.",
        "Rules vary by theme and difficulty level.",
        "Evaluation based on accuracy and application.",
        "Event coordinators’ decision is final.",
        "Separate problem statements for 1st years & others.",
        "Themes (1st year): WorthSmith, PhytoMind, PlateNet, Signus.AI.",
        "Themes (Open): EchoMind, SynthWave, SonicTrace, RoadSage.",
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
      coordinators: [
        { name: "Ankit Upadhyay", contact: "+91 8368822483" },
        { name: "Astha Singh", contact: "+91 9336292091" },
        { name: "Aryan Vishwakarma", contact: "+91 9532983109" },
        { name: "Inam", contact: "+91 7302533510" },
      ],
    },

    // 5. BOT Warriors
    {
      eventName: "BOT Warriors",
      eventId: "05",
      description:
        "A dual-stage robotics combat challenge combining ‘Destroy the Flag’ and a mechanical Tug of War. Bots must display strength, defense, endurance, and intelligent combat strategies.",
      rules: [
        "Teams qualify by destroying opponent’s flag or defending their own.",
        "Final winner decided by Tug of War between Stage 1 victors.",
        "All bots must follow safety norms.",
        "No harmful materials, flames, liquids, or flying objects allowed.",
        "Intentional severe damage → disqualification.",
        "Team Size: Maximum 4 members.",
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
      coordinators: [
        { name: "Mohammad Kaif", contact: "+91 9520046728" },
        { name: "Abhay Agrawal", contact: "+91 9695666222" },
        { name: "Abdul Basit", contact: "+91 6392081638" },
        { name: "Avneesh Sahu", contact: "+91 9616520679" },
      ],
    },
  ],
};

const RobomaniaPage = () => {
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
      {/* Background */}
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
      <main className="relative flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide neon-shadow text-gray-100 mb-4 text-center">
          {RobomaniaData.eventName}
        </h1>

        {RobomaniaData.tagline && (
          <p className="text-gray-300 text-sm sm:text-base mt-2 text-center">
            {RobomaniaData.tagline}
          </p>
        )}
      </main>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[...RobomaniaData.events]
          .sort((a, b) => a.eventName.localeCompare(b.eventName))
          .map((event) => (
            <motion.div
              key={event.eventId}
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(255,115,0,0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              className="p-6 border border-gray-400 rounded-xl bg-black/90 backdrop-blur-md text-center cursor-pointer"
              onClick={() => setSelected(event)}
            >
              <h2 className="text-2xl font-bold text-gray-300 neon-shadow mb-2">
                {event.eventName}
              </h2>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(event);
                }}
                className="mt-4 py-2 w-full border border-gray-300 rounded-lg bg-gray-300 text-black font-semibold hover:bg-gray-200"
              >
                Explore
              </button>
            </motion.div>
          ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45 }}
            className="fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-xl z-50 p-8 overflow-y-auto"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-10 text-4xl text-gray-300 hover:text-gray-100"
            >
              ✕
            </button>

            <h2 className="text-4xl font-bold neon-shadow text-gray-400 mb-8 text-center">
              {selected.eventName}
            </h2>

            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Description */}
              <div>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">
                  About the Event
                </h3>
                <p className="text-gray-300">{selected.description}</p>
              </div>

              {/* Rules */}
              <div>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">
                  Rules
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 max-h-[60vh] overflow-y-auto text-gray-300">
                  {selected.rules.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              {/* Coordinators */}
              <div>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">
                  Coordinators
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 text-center">
                  {selected.coordinators.length==0?
                  <h1 >No coordinators listed</h1>:
                  selected.coordinators.map((c, i) => (
                    <li key={i}>
                      {c.name} — {c.contact}
                    </li>
                  ))}
                </ul>
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

export default RobomaniaPage;
