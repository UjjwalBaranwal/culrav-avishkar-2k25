import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dummy from "../../assets/dummy.png"; // Replace with your hero image path

const HERO_IMAGE = dummy;

const Spandan = {
  eventName: "FOOTPRINTS",
  tagline: "Style that distinguish you and Walk that gives you confidence",
  BGImageLink: null, // Image not used in this component directly
  instagramLink: "https://www.facebook.com/genesis.avishkar.mnnit",
  events: [
    {
      id: 30,
      name: "Desfile de moda (Rampwalk)",
      desc: [
        "Style that distinguishes you and Walk that gives you confidence.",
        "When we talk about Spandan, it all comes down to Fashion.",
        "So, let's celebrate the evolution of fashion through decades by taking part in this exhilarating event called Rampwalk."
      ],
      rules: [
        "This is a team event with a team size of 10-15 members. The duration of the ramp walk will be strictly 6-10 minutes.",
        "There will be two rounds. The first is the elimination round (Elims) with the same duration, where the theme for the ramp walk is chosen by the team.",
        "The second round is the final round, taking place on the main day of Spandan, with the theme to be revealed after Elims.",
        "The team is responsible for the background music, makeup, and dresses for both rounds.",
        "Teams can use props in the final round but not in Elims.",
        "The ramp walk should resemble a professional show, without any dance steps or indecent poses."
      ],
      minTeamSize: 10,
      maxTeamSize: 15,
      coords: [
        { name: "Aadya Shukla", phone: "9518243648" },
        { name: "Aatman Upreti", phone: "8791030527" }
      ],
    },
    {
      id: 31,
      name: "Mr. and Miss Spandan",
      desc: [
        "A dream is a picture of a possibility.",
        "We should have a strong heart and a prepared mind to turn that into reality.",
        "Ever wonder about earning the title of fashion icon for the day?",
        "Here we invite you to take part in this title event and seize the opportunity to become Mr. or Miss Spandan."
      ],
      rules: [
        "This is an individual event with three rounds.",
        "The first round is a photoshoot round where participants must prepare 3-4 poses and come to the venue in decent attire for the photoshoot. More details can be found on the Spandan page @spandan_mnnit.",
        "The second round takes place on the main day. Participants should prepare an introduction and wear attire that reflects their personality in a decent manner.",
        "The final round is a questionnaire session where the judges will announce the results immediately afterward.",
        "The second and final rounds are conducted together.",
        "Each round is an elimination round, held on the main event day at MP Hall."
      ],
      coords: [
        { name: "Aadya Shukla", phone: "9518243648" },
        { name: "Aatman Upreti", phone: "8791030527" }
      ],
      minTeamSize: 1,
      maxTeamSize: 1,
    }
  ],
};

const SpandanPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-black font-sans text-gray-300">
      {/* TOP IMAGE AND HEADER */}
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-16 relative">
        <div className="relative flex flex-col justify-center items-center md:w-1/2">
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
        </div>
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
        {Spandan.events.map((event) => (
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
