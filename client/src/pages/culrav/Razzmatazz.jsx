import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dummy from "../../assets/dummy.png"; // Adjust path to your placeholder image

const HERO_IMAGE = dummy;

const Razzmatazz = {
  eventName: "Razzmatazz",
  tagline: "",
  events: [
    {
      id: 112,
      name: "DESI SYNC",
      desc: [
        "Folklore Group Dance Competition DANCE – Defeat All Negativity (via) Creative Expression.",
        "The spirited dance moves of cultural dance charge with your energy, so as the harmonious melodies handed down precisely through ages reverberate through the air, brace yourself to live through this shared experience of humanity and a celebration of diverse cultures.",
        "Get in the groove, bring out your best moves, and set the stage of DESI SYNC on fire."
      ],
      rules: [
        "First year, Second year, and third year can participate.",
        "The time limit of the performance will be 8-11+1 minute. (1 minute is for clear and set up the stage)",
        "Props can be used for performance.",
        "Team must have a minimum of 4 active members and maximum stage limit will be 25. (Team size – unlimited)",
        "Participants should get their songs/music in a pen drive. Live music is not allowed.",
        "Decision of Judges will be supreme, everyone has to accept it.",
        "Judging criteria: synchronization (10%), choreography (10%), energy levels (10%), theme (10%), expressions (10%), creativity (10%), costumes + props (10%), overall impact (10%).",
        "Final year students can perform but won’t be a part of the competition.",
        "The performance should be in cohesion with the integrity of the fest. The song selected must not contain any vulgarity."
      ],
      coords: [
        { name: "Ananya Jain", phone: "963474830" },
        { name: "Dipesh Duhan", phone: "9813988999" },
        { name: "Abhangi Nishika", phone: "9033594565" }
      ],
    },
    {
      id: 26,
      name: "The Vault of Dance",
      desc: [
        "Western Group Dance Competition",
        "Every fall counts as a move if you own it with grace.",
        "We believe self-expression has no rules, so when you dance, it is uniquely you!",
        "If your body moves with the beats of the music as your soul syncs with the emotions, or maybe you just love to go wild and have fun, the moment is now.",
        "Get ready for the most awaited Western night of foot-stomping, toe-tapping fun as we bring the spirit of the Wild West to life with our Vault of Dance event."
      ],
      rules: [
        "Time limit: 8 minutes - 12 minutes (including performance and set up time)",
        "Team size: 6-30",
        "Points will be deducted if the performance exceeds or falls short of the specified duration.",
        "At least 4 members should be present on the stage for any 10 seconds during the performance.",
        "Participants should get their own props. All props that will be used must be specified to the event coordinator.",
        "Use of any substances or practices that may cause damage to the stage or cause any sort of inconvenience to other teams is strictly prohibited.",
        "The audio track should be mailed to dancesubmission.razzmatazz@gmail.com by 14th November 2024. The subject of the email should be in the format: VaultOfDance_TeamName_CollegeName.",
        "The decision of the judges will be final and binding.",
        "Judging criteria: Choreography and Versatility (25%), Coordination (25%), Energy + Body Language (20%), Creativity and Originality (20%), Overall impact (10%)."
      ],
      coords: [
        { name: "Sanidhya Diwakar", phone: "808502396" },
        { name: "Snehal Tripathi", phone: "9911349987" },
        { name: "Ayan Basak", phone: "9804545597" }
      ],
    },
    {
      id: 27,
      name: "REVEL",
      desc: [
        "Solo Duet Dance is the hidden language of the soul.",
        "Stepping into the spotlight, one beat at a time!",
        "Embracing the solo and duet dance vibes at Confluence, where your passion becomes the choreography.",
        "Each move is a celebration; each step is a story.",
        "Join us in this dance of self-expression at Revel."
      ],
      rules: [
        "Time limit: 2.5 minutes - 3 minutes (including performance and set-up time).",
        "Points will be deducted if the performance exceeds or falls short of the specified duration.",
        "The choice of song and dance form is open to the participants.",
        "Participants should get their own props. All props that will be used must be specified to the event coordinator.",
        "Use of any substances or practices that may cause damage to the stage or cause any sort of inconvenience to other teams is strictly prohibited.",
        "The audio track should be mailed to dancesubmission.razzmatazz@gmail.com by 14th November 2024. The subject of the email should be in the format: 'Revel_ParticipantName_CollegeName'.",
        "The decision of the judges will be final and binding.",
        "Judging criteria:",
        "1. Choreography and Versatility - 30 percent",
        "2. Coordination - 30 percent",
        "3. Energy + Body Language (expressions) - 30 percent",
        "4. Creativity and Originality - 10 percent"
      ],
      coords: [
        { name: "Srishti", phone: "9144514209" },
        { name: "Pratyush Mehta", phone: "9804545597" },
        { name: "Ayan Basak", phone: "9804545597" }
      ],
    },
    {
      id: 28,
      name: "LEAP OF FAITH",
      desc: ["Solo Dance Battle. Dancing is like dreaming with your feet."],
      rules: [
        "It will be a face-off between two participants decided by chit basis.",
        "Every round consists of 3 battles, each of 30-50 seconds.",
        "Same music will be played for both the participants and the participant with 2 out of 3 wins moves to the next round.",
        "In case of a tie, an extra battle will be conducted to decide the qualifier.",
        "Only street styles are allowed.",
        "Any kind of obscene or inappropriate action will lead to disqualification.",
        "The decision of the judges will be final and binding.",
        "Judging criteria:",
        "Musicality - 35 percent",
        "Energy - 20 percent",
        "Synchronization and execution - 20 percent",
        "Creativity and uniqueness - 15 percent",
        "Overall impact - 10 percent"
      ],
      coords: [
        { name: "Dipesh Duhan", phone: "9813988999" },
        { name: "Sanidhya Diwakar", phone: "808502396" },
        { name: "Snehal Tripathi", phone: "9911349987" }
      ],
    },
    {
      id: 29,
      name: "NRITYANJALI",
      desc: [],
      rules: [
        "First-year, second-year, and third-year students can participate.",
        "All forms of pure Indian Classical Dance recognized by Sangeet Natak Academy are allowed. Usage of props is allowed.",
        "Obscenity of any kind will lead to immediate disqualification.",
        "The time limit for the performance is 3 to 5 ± 1 minutes (1 minute for stage clearance and setup).",
        "Dance must be purely classical. Freestyle, hip-hop, or western styles (such as popping, locking, etc.) are prohibited. Any violation of this rule will result in disqualification.",
        "Participants should bring their own track in drive. Live music is not allowed.",
        "Choreography, musicality, expressions, creativity, costume and makeup, energy, stage coverage."
      ],
      coords: [],
    }
  ]
};

const RazzmatazzPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-black font-sans text-gray-300">
      {/* TOP IMAGE AND HEADER */}
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-16 relative">
        <div className="relative flex flex-col justify-center items-center md:w-1/2">
          <img
            src={HERO_IMAGE}
            alt="Razzmatazz Hero"
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
            RAZZMATAZZ
          </h1>
          <p className="text-lg text-cyan-300 mb-8 max-w-md mx-auto">
            Celebrate the spirit of dance with Razzmatazz events.
          </p>
        </div>
      </main>

      {/* EVENT CARDS */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {Razzmatazz.events.map((event) => (
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
            <h2 className="text-2xl font-bold neon-shadow text-cyan-400 mb-2">{event.name}</h2>
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
            <h2 className="text-4xl font-bold mt-4 neon-shadow text-cyan-400 mb-8 text-center">{selected.name}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Description */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">About the Event</h3>
                {selected.desc.length > 0 ? (
                  <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300">
                    {selected.desc.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-cyan-300 text-center">No description available.</p>
                )}
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
                      <li key={idx}>{coord.name} — {coord.phone}</li>
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

export default RazzmatazzPage;
