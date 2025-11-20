import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dummy from "../../assets/dummy.png"; // Replace with your image path

const TOP_IMAGE = dummy;

const Anunaad = {
  eventName: "Anunaad",
  tagline: "",
  events: [
    {
      id: 2,
      name: "Voice of Culrav",
      desc: [
        "Let your voice be heard and let the world sing along!"
      ],
      rules: [
        "Time limit for performance will be 3 minutes 30 seconds.",
        "The final round requires all shortlisted candidates to submit one choice and we'll provide a second song (from the same list). Participants have to perform both songs.",
        "The second song will be provided immediately after you submit your response, so submit early.",
        "Songs in the form are final; no additions will be made.",
        "Note: Background music is compulsory. Bring an instrumentalist or your own Karaoke for spot submission.",
        "Only singing is judged.",
        "Judging based on Pitch Accuracy, Vocal Range, Voice Quality, Improvisations, etc.",
        "Judges' decision is final."
      ],
      coords: [],
    },
    {
      id: 3,
      name: "Harmony",
      desc: [
        "Twice the talent, twice the magic."
      ],
      rules: [
        "Time allotted: 5 minutes (plus 2 minutes for sound check).",
        "Teams may use karaoke or one instrumentalist.",
        "Judged on vocals only.",
        "Judging parameters: Pitch Accuracy, Vocal Range, Voice Quality, Improvisations, Harmonization.",
        "Judges’ decision is final."
      ],
      coords: [],
    },
    {
      id: 4,
      name: "Ijaad",
      desc: [
        "Get Ready to drop the beat, Unleash the Rhythm.",
        "Non-conventional music talents (EDM, Beat-Boxing, Rapping, etc.), solo and group.",
        "Combinations highly preferred."
      ],
      rules: [
        "Performance time limit: 5 minutes (plus 2 minutes for sound check).",
        "Up to 4 participants per group; single participation only.",
        "First round is an elimination round before the main event.",
        "Second round: finale for selected contestants on main event date.",
        "Backing track/instruments allowed.",
        "Judging on complexity, creativity, etc.",
        "Original Composition gets extra points.",
        "Judges' decision is final and binding."
      ],
      coords: [],
    },
    {
      id: 5,
      name: "Rocktave",
      desc: [
        "Flagship band event: soul, rock, and energy.",
        "Two rounds: pre-elims for in-house bands (MP Hall, Swaarang Day).",
        "Finale at Gymkhana Ground.",
        "External selection by video submitted with registration."
      ],
      rules: [
        "Final round: selected bands get 25 minutes (20 mins performance + 5 mins soundcheck).",
        "Bands: 3-8 members.",
        "Each individual may join only one team.",
        "At least one vocalist, guitarist and percussionist is mandatory.",
        "No professional bands allowed.",
        "Original Composition awarded extra points.",
        "Judges’ decision is final and binding."
      ],
      coords: [],
    },
    {
      id: 6,
      name: "Vadya",
      desc: [
        "Solo/group purely instrumental event.",
        "All genres welcome.",
        "In-house screening; external screening by video.",
        "Final round at Culrav."
      ],
      rules: [
        "Up to 5 members per team.",
        "All music genres entertained.",
        "No restriction on instrument type (digital, acoustic, electric).",
        "Pieces can be composed, covered, or improvised.",
        "Stage time: 8 minutes (5 mins performance + 3 mins soundcheck).",
        "Judges’ decision is final."
      ],
      coords: [],
    },
    {
      id: 7,
      name: "Euphony",
      desc: [
        "Acoustic band event.",
        "Two rounds; pre-elims and finale at Gymkhana Ground.",
        "Finale: 15 minutes stage time (10 mins performance + 5 mins soundcheck)."
      ],
      rules: [
        "Final round: selected bands get 15 minutes (10 mins performance + 5 mins soundcheck).",
        "Bands: 3-5 members.",
        "Each individual may join only one team.",
        "At least one vocalist, guitarist and percussionist required.",
        "Only non-electrical instruments allowed (no drums/distortion).",
        "No professional bands allowed.",
        "Original Composition awarded extra points."
      ],
      coords: [],
    }
  ]
};


const SpandanPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-black font-sans text-gray-300">

      {/* TOP IMAGE + HEADER */}
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
            src={TOP_IMAGE}
            alt="Event Hero"
            className="w-[330px] h-[300px] object-cover brightness-90 rounded-xl shadow-lg border border-cyan-600/60 neon-shadow"
          />

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute left-10 top-6 w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-600 to-cyan-600 
                       filter blur-[2px] border border-cyan-600 shadow-2xl"
          />

          <div className="absolute right-16 top-28 w-12 h-12 bg-gradient-to-br from-blue-700 to-cyan-600 
                          rotate-12 rounded-xl" />

          <div className="absolute left-14 bottom-10 w-10 h-10 bg-gradient-to-tr from-fuchsia-700 
                          to-cyan-500 rounded-full opacity-90" />
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 text-center md:text-center">
          <h1 className="text-5xl font-bold neon-shadow text-cyan-400 mb-4 drop-shadow-xl tracking-wide uppercase">
            ANUNAAD
          </h1>

          <p className="text-lg text-cyan-300 mb-8 max-w-md mx-auto">
            Flagship musical events, bringing together the best talent in solo, duet, band, 
            and fusion performances across a diverse range of styles.
          </p>
        </div>
      </main>

      {/* EVENTS GRID */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {Anunaad.events.map((event) => (
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
              aria-label="Close Explore Panel"
            >
              ✕
            </button>

            <h2 className="text-4xl font-bold mt-4 neon-shadow text-cyan-400 mb-8 text-center">
              {selected.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

              {/* ABOUT */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  About the Event
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 overflow-wrap break-word">
                  {selected.desc.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </section>

              {/* RULES */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  Rules
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </section>

              {/* COORDINATORS */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  Coordinators
                </h3>

                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 text-center">
                  {selected.coords.length > 0 ? (
                    selected.coords.map((c, i) => (
                      <li key={i}>{c.name} — {c.phone}</li>
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
