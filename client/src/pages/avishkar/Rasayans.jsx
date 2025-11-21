import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBgMobile from "../../assets/Avishkar_bg-mobile.png";
import AvishkarBG from "../../assets/AvishkarBG.png";

const RasayansData = {
  eventName: "Rasayans",
  tagline: "Chemistry Unleashed",
  instagramLink: "",
  events: [
    {
      eventName: "Chemathlon",
      eventId: "93",
      description:
        "Chemathlon is a mock placement event with rounds simulating real recruitment processes, including resume submission, online tests, group discussions, and interviews.",
      rules: [
        "Round 1: Resume Submission",
        "Round 2: Online Test (Core / Software / Consultancy)",
        "Round 3: Group Discussion",
        "Round 4: Interviews",
        "Individual participation",
        "Branches Allowed: Chemical Engineering",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Neelansh Agrawal", contact: "8057339335" },
        { name: "Sheetal", contact: "8239391313" },
        { name: "Aaditya", contact: "9027090899" },
        { name: "Aniket Mohanty", contact: "6203830907" },
        { name: "Utkarsh Jaiswal", contact: "7905757865" },
        { name: "Abhinav Tiwari", contact: "7054425113" },
      ],
    },
    {
      eventName: "Chemexpo",
      eventId: "94",
      description:
        "Chem Expo is a flagship event where teams showcase models addressing real-life chemical engineering problems.",
      rules: [
        "Round 1: Abstract Submission",
        "Round 2: Model Showcasing",
        "Round 3: Viva",
        "Team size: Max 3 (2nd/3rd years), Max 4 (1st year)",
        "Branches Allowed: All (at least one from Chemical Engineering)",
        "Budget constraint applies",
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Varun Yadav", contact: "7084349373" },
        { name: "Arpit Mittal", contact: "6378137978" },
        { name: "Mohd Hussain Raza", contact: "9336696539" },
        { name: "Pranjal Sharma", contact: "7014144852" },
      ],
    },
    {
      eventName: "Simulenz",
      eventId: "95",
      description:
        "Simulenz challenges participants to solve industrial problems using Aspen simulation software.",
      rules: [
        "Round 1: Mid Evaluation",
        "Round 2: Presentation Round",
        "Team size: Max 3",
        "Branches Allowed: Chemical Engineering",
      ],
      maxTeamSize: 3,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Mohd Bilal", contact: "6398590762" },
        { name: "Varun Yadav", contact: "7084349373" },
        { name: "Amit Kumar", contact: "9631142204" },
      ],
    },
    {
      eventName: "Quizophilia",
      eventId: "96",
      description:
        "A quiz-based event to test participants' cognitive and analytical abilities across multiple rounds.",
      rules: [
        "Round 1: Pen and Paper",
        "Rounds 2 & 3: Surprise Rounds",
        "Team size: Max 3",
        "Cross-year and cross-branch teams allowed",
        "At least one member from Chemical Engineering",
      ],
      maxTeamSize: 3,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Amit Kumar", contact: "9631142204" },
        { name: "Prince Pal", contact: "7084349373" },
        { name: "Dharmesh Baghel", contact: "9285423732" },
        { name: "Arpit Mittal", contact: "6378137978" },
      ],
    },
    {
      eventName: "WebCode",
      eventId: "97",
      description:
        "A web development competition where participants tackle open tech stack problem statements.",
      rules: [
        "Round 1: Abstract Submission",
        "Round 2: Mid Evaluation",
        "Round 3: Final Evaluation",
        "Team size: Max 4",
        "Cross-branch teams allowed",
        "Team Leader must be from Chemical Engineering",
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Ashutosh Tewari", contact: "8795294739" },
        { name: "Aaditya", contact: "9027090899" },
        { name: "Utkarsh Jaiswal", contact: "7905757865" },
        { name: "Neelansh Agrawal", contact: "8057339335" },
      ],
    },
    {
      eventName: "Data Vision",
      eventId: "98",
      description:
        "A data science event with tasks involving machine learning, deep learning, and NLP.",
      rules: [
        "Round 1: Abstract Submission",
        "Round 2: Mid Evaluation",
        "Round 3: Final Evaluation",
        "Team size: Max 4",
        "Cross-branch teams allowed",
        "Team Leader must be from Chemical Engineering",
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Ayan Basak", contact: "9804545597" },
        { name: "Ashutosh Tewari", contact: "8795294739" },
      ],
    },
    {
      eventName: "Scavenger Hunt",
      eventId: "99",
      description:
        "A fun, cross-disciplinary event with surprise rounds and broad participation.",
      rules: [
        "Round 1: Test",
        "Rounds 2 & 3: Surprise Rounds",
        "Team size: Max 4",
        "Cross-year and cross-branch teams allowed",
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Ayan Basak", contact: "9804545597" },
        { name: "Mohd Bilal", contact: "6398590762" },
        { name: "Sheetal", contact: "8239391313" },
        { name: "Shashwat Kapoor", contact: "9696065829" },
        { name: "Dharmesh Baghel", contact: "9285423732" },
        { name: "Manoj Kumar", contact: "7563843645" },
      ],
    },
  ],
};

const RasayansPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative min-h-screen bg-black font-sans text-gray-300">
      {/* Responsive Background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src={AvishkarBgMobile}
          alt="Mobile Background"
          className="block sm:hidden w-full h-full object-cover"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        <img
          src={AvishkarBG}
          alt="Desktop Background"
          className="hidden sm:block w-full h-full object-cover"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </div>

      {/* Header */}
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-16 relative">
        <div className="md:w-1/2 mt-12 md:mt-0 text-center md:text-left">
          <h1 className="text-5xl font-bold neon-shadow text-cyan-400 mb-4 tracking-wide uppercase">
            {RasayansData.eventName}
          </h1>
          {RasayansData.tagline && (
            <p className="text-lg text-cyan-300 mb-8 max-w-md">{RasayansData.tagline}</p>
          )}
        </div>
      </main>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {RasayansData.events.map((event) => (
          <motion.div
            key={event.eventId}
            initial={{ scale: 1, boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(0,255,255,0.4)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.98 }}
            className="relative p-6 border border-cyan-600 rounded-xl bg-black/90 backdrop-blur-md shadow-md cursor-pointer text-center select-none"
            onClick={() => setSelected(event)}
          >
            <h2 className="text-2xl font-bold neon-shadow text-cyan-400 mb-2">{event.eventName}</h2>
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

      {/* Details Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-md z-50 p-8 overflow-y-auto neon-shadow"
            style={{ overscrollBehavior: "contain" }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-10 text-4xl text-cyan-400 hover:text-cyan-600 font-bold focus:outline-none"
              aria-label="Close Explore Panel"
            >
              ✕
            </button>
            <h2 className="text-4xl font-bold mt-4 neon-shadow text-cyan-400 mb-8 text-center">{selected.eventName}</h2>
            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">About the Event</h3>
                <p className="text-cyan-300 whitespace-pre-wrap">{selected.description}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Rules</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rules.map((rule, i) => (
                    <li key={i}>{rule}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Coordinators</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 text-center">
                  {selected.coordinators.map((c, i) => (
                    <li key={i}>{c.name} — {c.contact}</li>
                  ))}
                </ul>
                <p className="mt-6 text-cyan-300 text-left"><strong>Team size:</strong> {selected.minTeamSize} - {selected.maxTeamSize}</p>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RasayansPage;
