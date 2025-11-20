import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dummy from "../../assets/dummy.png"; // Replace with your hero image path

const HERO_IMAGE = dummy;

const Litmuse = {
  eventName: "Litmuse",
  tagline: "",
  events: [
    {
      id: 13,
      name: "Kavyanjali",
      desc: [
        "Poem should be written in Hindi and should be of maximum 8 mins.",
        "Poem should be an original piece of content.",
        "Participants are allowed to present more than one poem in bound time."
      ],
      rules: [
        "Poem should be written in Hindi and should be of maximum 8 mins.",
        "Poem should be an original piece of content.",
        "Participants are allowed to present more than one poem in bound time."
      ],
      coords: [],
    },
    {
      id: 14,
      name: "Poetry Slam",
      desc: [
        "The English poetry slam competition will comprise of 3 rounds.",
        "Poetry should contain the mentioned literary device at least once but is not restricted to it.",
        "The poem will be judged based on creativity, idea, thought process and development, style and structure of writing, knowledge and usage of literary devices, and overall representation."
      ],
      rules: [
        "The English poetry slam competition will comprise of 3 rounds.",
        "a. The online Elimination round: Contestants submit entries online; best are chosen.",
        "b. Impromptu Poetry writing and recitation round: Given a phrase with a literary device, write an original piece impromptu in 30 mins.",
        "c. Final Round: Recite any original work you feel best represents you.",
        "Content shouldn't be explicit or vulgar.",
        "Judging criteria: creativity, structure, literary device usage, overall representation."
      ],
      coords: [],
    },
    {
      id: 15,
      name: "Spell-bee",
      desc: [
        "A 2 round team event with a maximum of 2 members per team.",
        "Conducted only in English language."
      ],
      rules: [
        "It would be a 2 round event.",
        "It would be a team event with a maximum of 2 members a team.",
        "Events would be conducted for the English language only.",
        "Panel will pronounce words with some star marked words as tie-breakers.",
        "Participants write spellings on a sheet of paper.",
        "Specific teams qualify for Final based on previous round evaluation.",
        "Teams press buzzer; order of buzzing determines word to spell immediately.",
        "Team with most correct answers wins."
      ],
      coords: [],
    },
    {
      id: 110,
      name: "Laccuzzi",
      desc: [
        "Two-round event with eliminations.",
        "Written Round: Quiz on TV series and comics choice.",
        "Final Round: Gnosis styled quiz during Culrav on multiple topics."
      ],
      rules: [
        "Two-round event with eliminations.",
        "Written Round: Quiz on TV series: Friends, Big Bang Theory, Sherlock, etc.",
        "Choice between Comic series: DC and Marvel Universe or Anime-Manga.",
        "Final Round: Gnosis styled quiz during Culrav with diverse questions."
      ],
      coords: [],
    },
  ],
};

const LitmusePage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-black font-sans text-gray-300">

      {/* TOP IMAGE AND HEADER */}
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-16 relative">

        {/* BACK BUTTON */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 px-5 py-2 border border-cyan-500 text-cyan-400 
                     rounded-lg hover:bg-cyan-500 hover:text-black transition font-semibold z-50"
        >
          ← Back
        </button>

        <div className="relative flex flex-col justify-center items-center md:w-1/2">
          <img
            src={HERO_IMAGE}
            alt="Litmuse Hero"
            className="w-[330px] h-[300px] object-cover brightness-90 rounded-xl shadow-lg border border-cyan-600/60 neon-shadow"
          />

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute left-10 top-6 w-16 h-16 rounded-full bg-gradient-to-br 
                       from-fuchsia-600 to-cyan-600 filter blur-[2px] border border-cyan-600 shadow-2xl"
          />

          <div className="absolute right-16 top-28 w-12 h-12 bg-gradient-to-br 
                          from-blue-700 to-cyan-600 rotate-12 rounded-xl" />

          <div className="absolute left-14 bottom-10 w-10 h-10 bg-gradient-to-tr 
                          from-fuchsia-700 to-cyan-500 rounded-full opacity-90" />
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 text-center md:text-center">
          <h1 className="text-5xl font-bold neon-shadow text-cyan-400 mb-4 drop-shadow-xl tracking-wide uppercase">
            LITMUSE
          </h1>

          <p className="text-lg text-cyan-300 mb-8 max-w-md mx-auto">
            Explore literary talents ranging from poetry recitations to spelling competitions in Litmuse.
          </p>
        </div>
      </main>

      {/* EVENTS GRID */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {Litmuse.events.map((event) => (
          <motion.div
            key={event.id}
            initial={{ scale: 1, boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(0,255,255,0.4)",
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="relative cyber-card p-6 border border-cyan-600 rounded-xl bg-black/90 
                       backdrop-blur-md shadow-md cursor-pointer text-center select-none"
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
              className="mt-4 py-2 w-full border border-cyan-400 rounded-lg bg-cyan-500 
                         text-black font-semibold hover:bg-cyan-300 transition"
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
            className="fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-xl border-t 
                       border-cyan-600/50 z-50 p-8 overflow-y-auto neon-shadow"
            style={{ overflowX: "hidden", overscrollBehavior: "contain" }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-10 text-4xl text-cyan-400 hover:text-cyan-600 
                         font-bold focus:outline-none"
            >
              ✕
            </button>

            <h2 className="text-4xl font-bold mt-4 neon-shadow text-cyan-400 mb-8 text-center">
              {selected.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

              {/* Description */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">About the Event</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300">
                  {selected.desc.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </section>

              {/* Rules */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Rules</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </section>

              {/* Coordinators */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Coordinators</h3>
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

export default LitmusePage;
