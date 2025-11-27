import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dummy from "../../assets/dummy.png"; // Replace with your hero image path

const HERO_IMAGE = dummy;

const Spandan = {
  eventName: "Spandan",
  tagline: "Style that distinguishes you and walk that gives you confidence",
  BGImageLink: null,
  instagramLink: "https://www.instagram.com/spandan_mnnit",
  events: [
    // =================== EVENT 1 ===================
    {
      id: 30,
      name: "Desfile de Moda (Ramp Show)",
      desc: [
        "The Ramp Show is a celebration of fashion, creativity, and confidence.",
        "Teams will showcase themed performances that blend style with storytelling.",
        "The event will be conducted on the main day of Spandan.",
        "Themes will be revealed soon on the official Spandan Instagram page (@spandan_mnnit)."
      ],
      rules: [
        "This is a team event with 10–15 members in each team.",
        "The duration of the performance must be strictly between 10–15 minutes.",
        "Music, costumes, and makeup are to be arranged by the teams themselves.",
        "Prop usage is encouraged and should complement the theme without obstructing the flow of the performance.",
        "The ramp show should resemble a professional fashion show, emphasizing style, elegance, and confidence.",
        "Dance moves or indecent poses are strictly prohibited."
      ],
      evaluation: [
        "Teams will be judged on creativity, fashion styling, self-expression, theme interpretation, coordination, and overall presentation.",
        "Teams are encouraged to showcase innovation through their outfits and choreography.",
        "The background music must align with the chosen theme and enhance the overall impact of the performance."
      ],
      minTeamSize: 10,
      maxTeamSize: 15,
      coords: [
        { name: "Aarushi Sinha", phone: "7738898174" },
        { name: "Jaya Sharma", phone: "9098498385" }
      ]
    },

    // =================== EVENT 2 ===================
    {
      id: 31,
      name: "Mr. & Miss Spandan",
      desc: [
        "Mr. & Miss Spandan is an individual fashion and personality-based competition that celebrates confidence and self-expression.",
        "Participants will compete across three engaging rounds: Photoshoot, Personality, and Questionnaire."
      ],
      rules: [
        "This is an individual event consisting of three rounds.",

        // Round 1
        "Round 1 – Photoshoot Round:",
        "Participants must prepare 3–4 creative poses and attend the photoshoot in stylish outfits reflecting individuality, creativity, and fashion sense.",
        "Details regarding timing and venue will be shared on the official Spandan Instagram page (@spandan_mnnit).",

        // Round 2
        "Round 2 – Personality Round:",
        "Conducted on the main event day.",
        "Participants will give a brief self-introduction highlighting their personality, interests, and what fashion means to them.",
        "Participants must wear outfits that reflect their style and confidence.",

        // Round 3
        "Round 3 – Questionnaire Round:",
        "Participants will answer on-stage questions designed to test confidence, spontaneity, and presence of mind.",
        "Final results will be announced after this round.",

        // Evaluation
        "Evaluation Criteria: Creativity, fashion sense, self-expression, stage presence, and confidence.",

        // Elimination
        "Each round will be elimination-based.",
        "Round 2 and Round 3 will be conducted on the same day."
      ],
      minTeamSize: 1,
      maxTeamSize: 1,
      coords: [
        { name: "Aarushi Sinha", phone: "7738898174" },
        { name: "Jaya Sharma", phone: "9098498385" }
      ]
    }
  ]
};


const SpandanPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-black font-sans text-gray-300">
      {/* TOP IMAGE AND HEADER */}
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-20 relative">
        {/* <div className="relative flex flex-col justify-center items-center md:w-1/2">
          <img
            src={HERO_IMAGE}
            alt="Spandan Hero"
            className="w-[330px] h-[300px] object-cover brightness-90 rounded-xl shadow-lg border border-cyan-600/60 neon-shadow"
          />
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute left-10 top-6 w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-600 to-cyan-600 filter blur-[2px] border border-cyan-600 shadow-2xl"
          />
          <div className="absolute right-16 top-28 w-12 h-12 bg-gradient-to-br from-blue-700 to-cyan-600 rotate-12 rounded-xl" />
          <div className="absolute left-14 bottom-10 w-10 h-10 bg-gradient-to-tr from-fuchsia-700 to-cyan-500 rounded-full opacity-90" />
        </div> */}
        <div className="md:w-1/2 mt-12 md:mt-0 text-center md:text-center">
          <h1 className="text-5xl font-bold neon-shadow text-cyan-400 mb-4 drop-shadow-xl tracking-wide uppercase">
            FOOTPRINTS
          </h1>
          <p className="text-lg text-cyan-300 mb-8 max-w-md mx-auto">
            Style that distinguish you and Walk that gives you confidence
          </p>
        </div>
      </main>

      {/* EVENTS GRID */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[...Spandan.events]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((event) => (
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
              {/* Event Description */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  About the Event
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300">
                  {selected.desc.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </section>

              {/* Rules */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  Rules
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </section>

              {/* Coordinators */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  Coordinators
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 text-center">
                  {selected.coords.length > 0 ? (
                    selected.coords.map((coord, idx) => (
                      <li key={idx}>
                        {coord.name} — {coord.phone}
                      </li>
                    ))
                  ) : (
                    <li>No coordinators listed.</li>
                  )}
                </ul>
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpandanPage;
