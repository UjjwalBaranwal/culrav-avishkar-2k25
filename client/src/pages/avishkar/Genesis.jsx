import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



import AvishkarBgMobile from "../../assets/Avishkar_bg-mobile.png";
import AvishkarBG from "../../assets/AvishkarBG.png";

const GenesisData = {
  eventName: "Genesis",
  tagline: "",
  
  instagramLink: "",
  events: [
    {
      eventName: "Palladin",
      eventId: "57",
      description:
        "Placement-oriented event focused on preparing biotech students for upcoming placements and internship sessions through core, consultancy, and software skill assessments.",
      rules: [
        "Solo participation",
        "2 Rounds: Round 1 - CBT (Aptitude + Domain Specific), Round 2 - Group Discussion + Interview",
        "Compulsory for biotech students",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      
      PsLink: "",
      coordinators: [
        { name: "Dipesh Ladha", contact: "8560822989" },
        { name: "Ritesh Kumar Maurya", contact: "7897461387" },
        { name: "Harshita Agrawal", contact: "8303575832" },
        { name: "Siddhant Jain", contact: "9265720118" },
        { name: "Aniket", contact: "7070843109" }
      ],
    },
    {
      eventName: "Central Dogma",
      eventId: "58",
      description:
        "A core biotechnology event combining knowledge with fun, featuring rounds on biotech concepts, puzzles, anagrams, and theme-based questions.",
      rules: [
        "Team size: 3 (at least one member from biotech department)",
        "3 Rounds: Round 1 - Written test (PCM + Core BT), Round 2 - Live round with pictures, puzzles, anagrams, etc., Round 3 - Buzzer final round",
      ],
      maxTeamSize: 3,
      minTeamSize: 3,
      
      PsLink: "",
      coordinators: [
        { name: "Dipesh Ladha", contact: "8560822989" },
        { name: "Harshita Agrawal", contact: "8303575832" },
        { name: "Aniket Kumar", contact: "8083660818" },
        { name: "Vemirso", contact: "9127533498" },
      ],
    },
    {
      eventName: "Clue Quest",
      eventId: "59",
      description:
        "A fun, theme-based event that involves puzzles, TV series, anime, and more, culminating in a treasure hunt.",
      rules: [
        "Team size: 3-5",
        "Open to all branches and years",
        "3-4 Rounds, with the last round being a treasure hunt",
      ],
      maxTeamSize: 5,
      minTeamSize: 3,
    
      PsLink: "",
      coordinators: [
        { name: "Siddhant Jain", contact: "9265720118" },
        { name: "Manjeet Singh", contact: "8410156377" },
        { name: "Pratima Krishna", contact: "9660771107" },
      ],
    },
    {
      eventName: "IQ Odyssey",
      eventId: "60",
      description:
        "An event centered on current affairs combined with entertaining game activities, blending education with fun.",
      rules: [
        "Solo or Duo participation",
        "Open to all branches and years",
        "2 Rounds: Round 1 - Quiz, Round 2 - Buzzer round",
      ],
      maxTeamSize: 2,
      minTeamSize: 1,
     
      PsLink: "",
      coordinators: [
        { name: "Aniket Kumar", contact: "8083660818" },
        { name: "Vemirso Timungpi", contact: "9127533498" },
        { name: "Ritesh Kumar Maurya", contact: "7897461387" },
      ],
    },
    {
      eventName: "Case & Climb",
      eventId: "61",
      description:
        "A case study analysis event that challenges participants to apply analytical, problem-solving, and decision-making skills to real-world scenarios.",
      rules: [
        "Solo participation",
        "3 Rounds: Round 1 - Aptitude Test, Round 2 - Case Study, Round 3 - Interview",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
    
      PsLink: "",
      coordinators: [
        { name: "Dipesh Ladha", contact: "8560822989" },
        { name: "Sandip Kumar Kushwaha", contact: "9838354272" },
        { name: "Saras", contact: "9457600155" },
      ],
    },
  ],
};

const GenesisPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative min-h-screen bg-black font-sans text-gray-300">

      {/* Responsive Background Images */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src={AvishkarBgMobile}
          alt="Mobile Background"
          className="w-full h-full object-cover block sm:hidden"
        />
        <img
          src={AvishkarBG}
          alt="Desktop Background"
          className="w-full h-full object-cover hidden sm:block"
        />
      </div>

      {/* Header Section */}
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-16 relative">

        {/* 🔥 BACK BUTTON ADDED HERE */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 px-5 py-2 border border-cyan-500 text-cyan-400 rounded-lg 
                     hover:bg-cyan-500 hover:text-black transition font-semibold z-50"
        >
          ← Back
        </button>

        <div className="relative flex justify-center md:w-1/2">
          <img
            src={GenesisData.BGImageLink}
            alt={`${GenesisData.eventName} Banner`}
            className="w-[330px] h-[300px] object-cover brightness-90 rounded-xl shadow-lg border border-cyan-600/60 neon-shadow"
          />
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 text-center md:text-left">
          <h1 className="text-5xl font-bold neon-shadow text-cyan-400 mb-4 drop-shadow-xl tracking-wide uppercase">
            {GenesisData.eventName}
          </h1>

          {GenesisData.tagline && (
            <p className="text-lg text-cyan-300 mb-8 max-w-md">
              {GenesisData.tagline}
            </p>
          )}
        </div>
      </main>

      {/* Event Cards */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {GenesisData.events.map((event) => (
          <motion.div
            key={event.eventId}
            initial={{ scale: 1, boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(0,255,255,0.4)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.98 }}
            className="relative cyber-card p-6 border border-cyan-600 rounded-xl bg-black/90 backdrop-blur-md shadow-md cursor-pointer text-center select-none"
            onClick={() => setSelected(event)}
          >
            <h2 className="text-2xl font-bold neon-shadow text-cyan-400 mb-2">
              {event.eventName}
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

      {/* Event Details Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-xl border-t border-cyan-600/50 
                       z-50 p-8 overflow-y-auto neon-shadow"
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
              {selected.eventName}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

              {/* About Section */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">About the Event</h3>
                <p className="text-cyan-300 px-4 whitespace-pre-wrap break-words">
                  {selected.description}
                </p>
              </section>

              {/* Rules Section */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Rules</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rules.map((rule, i) => (
                    <li key={i}>{rule}</li>
                  ))}
                </ul>
              </section>

              {/* Coordinators Section */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Coordinators</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 text-center">
                  {selected.coordinators.map((c, i) => (
                    <li key={i}>{c.name} — {c.contact}</li>
                  ))}
                </ul>

                <div className="mt-6 text-left">
                  <p className="text-cyan-300">
                    <strong>Team Size: </strong>
                    {selected.minTeamSize} - {selected.maxTeamSize}
                  </p>
                </div>

              </section>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GenesisPage;
