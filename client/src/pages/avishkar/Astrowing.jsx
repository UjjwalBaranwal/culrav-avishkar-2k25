import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBG from "../../assets/a_s_bg.png";

const AstrowingData = {
  eventName: "Astrowing",
  tagline: "Explore the Universe of Curiosity",
  instagramLink: "",
  events: [
    {
      eventName: "Starfall Studio",
      eventId: "01",
      description:
        "A creative astrophotography challenge where participants capture night-sky shots using any device—even a phone. Learn framing, long exposure, and techniques to bring cosmic beauty to life.",
      rules: [
        "Individual participation.",
        "Participants can use DSLR or phone cameras.",
        "Photos must be original and captured by the participant.",
        "Basic editing allowed (contrast, exposure, noise reduction).",
        "Astrophotography tips will be shared during workshop.",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [],
    },
    {
      eventName: "The Death Star Escape",
      eventId: "02",
      description:
        "A puzzle-solving escape challenge inspired by cosmic mysteries, astronomy, mythology and logic. Participants solve cryptic clues to escape before time runs out.",
      rules: [
        "Team size: 2–4 members.",
        "Time-bound puzzle solving.",
        "Clues are based on astronomy, mythology & cosmic logic.",
        "Wrong answers may result in penalties.",
        "Fastest escape wins.",
      ],
      maxTeamSize: 4,
      minTeamSize: 2,
      PsLink: "",
      coordinators: [],
    },
    {
      eventName: "The Jedi Trials",
      eventId: "03",
      description:
        "A knowledge-based astronomy challenge testing speed, logic and celestial concepts. Participants compete in cosmic quizzes to earn the title of Master.",
      rules: [
        "Individual participation.",
        "Multiple quiz rounds (speed, logic, accuracy).",
        "Questions based on astronomy, space science & cosmic phenomena.",
        "Top scorers advance to final round.",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [],
    },
    {
      eventName: "The Skywalker Night",
      eventId: "04",
      description:
        "A telescope observation night where participants witness planets, galaxies, nebulae and constellations through powerful optics—like gazing from a galaxy far away.",
      rules: [
        "Open participation.",
        "Respect telescope handling protocols.",
        "No flashlight or white light near telescope zone.",
        "Photography allowed only when permitted.",
      ],
      maxTeamSize: 10,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [],
    },
    {
      eventName: "Galactic ThinkTank",
      eventId: "05",
      description:
        "An idea pitching event where participants propose innovations in space science, astronomy tools, and deep-space exploration solutions.",
      rules: [
        "Team size: 1–3 members.",
        "Ideas must be astronomy or space-tech oriented.",
        "Pitch duration: 4–6 minutes.",
        "Judging criteria: innovation, feasibility, clarity.",
      ],
      maxTeamSize: 3,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [],
    },
    {
      eventName: "AetherHack",
      eventId: "06",
      description:
        "A tech hackathon focused on astronomy-inspired challenges — AI, automation, data analysis, celestial computation, radio astronomy and more.",
      rules: [
        "Team size: 2–4 members.",
        "24-hour hackathon format.",
        "Projects must be astronomy/space themed.",
        "Use of any programming language allowed.",
        "Judging based on creativity, technical depth & impact.",
      ],
      maxTeamSize: 4,
      minTeamSize: 2,
      PsLink: "",
      coordinators: [],
    },
  ],
};

const AstrowingPage = () => {
  const [selected, setSelected] = useState(null);

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
      <main className="relative flex flex-col items-center justify-center px-4 py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-4xl text-center">
          <h1 className="font-bold uppercase tracking-wide neon-shadow text-gray-100 text-3xl sm:text-5xl lg:text-6xl mb-3">
            {AstrowingData.eventName}
          </h1>

          {AstrowingData.tagline && (
            <p className="mx-auto text-gray-200 text-sm sm:text-base mt-2">
              {AstrowingData.tagline}
            </p>
          )}
        </div>
      </main>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[...AstrowingData.events]
          .sort((a, b) => a.eventName.localeCompare(b.eventName))
          .map((event) => (
            <motion.div
              key={event.eventId}
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(255,115,0,0.5)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              className="relative p-6 border border-gray-400 rounded-xl bg-black/90 backdrop-blur-md cursor-pointer text-center"
              onClick={() => setSelected(event)}
            >
              <h2 className="text-2xl font-bold neon-shadow text-gray-300 mb-2">
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
              className="absolute top-6 right-10 text-4xl text-gray-300 hover:text-gray-200"
            >
              ✕
            </button>

            <h2 className="text-4xl font-bold mt-4 neon-shadow text-gray-400 mb-8 text-center">
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
                <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 max-h-[60vh] overflow-y-auto pr-4">
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
                  {selected.coordinators.length > 0 ? (
                    selected.coordinators.map((c, i) => (
                      <li key={i}>{c.name} — {c.contact}</li>
                    ))
                  ) : (
                    <p className="text-gray-500">To be updated</p>
                  )}
                </ul>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AstrowingPage;
