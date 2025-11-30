import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBG from "../../assets/a_s_bg.png";

const NirmaanData = {
  eventName: "Nirmaan",
  tagline: "Self-Development Through Self-Awareness",
  instagramLink: "",
 events: [
  {
    eventName: "COGNIZANCE ",
    eventId: "01",
    description:
      "An exclusive mock placement event for Civil Engineers.",
    rules: [
      "Individual Participation",
      "Round 1: Online Test",
      "Round 2: Group Discussion",
      "Round 3: Interview"
    ],
    maxTeamSize: 1,
    minTeamSize: 1,
    PsLink: "",
    coordinators: [
      { name: "Shreyas Mishra", contact: "" },
      { name: "Priyanshu Ranjan", contact: "" },
      { name: "Shrey Srivastav", contact: "" },
    ],
  },
  {
    eventName: "LINKIDGE",
    eventId: "02",
    description:
      "A Popsicle Stick Bridge Building competition.",
    rules: [
      "Team Event",
      "Round 1: Abstract Submission",
      "Round 2: Mid Evaluation & Viva",
      "Round 3: Testing Phase"
    ],
    maxTeamSize: 4,
    minTeamSize: 3,
    PsLink: "",
    coordinators: [
      { name: "Siddhant Singh Bisht", contact: "" },
      { name: "Rishikesh Kumar", contact: "" },
      { name: "Modasshir Khan", contact: "" },
    ],
  },
  {
    eventName: "CONSTRENGTHO",
    eventId: "03",
    description:
      "A Concrete Mix Design Challenge to create the strongest block while maximizing efficiency.",
    rules: [
      "Team Event",
      "Round 1: Online Test",
      "Round 2: Abstract Submission",
      "Round 3: Laboratory Testing"
    ],
    maxTeamSize: 4,
    minTeamSize: 4,
    PsLink: "",
    coordinators: [
      { name: "Kushagra Tiwari", contact: "" },
      { name: "Shweta Sinha", contact: "" },
      { name: "Tanya Singh", contact: "" },
    ],
  },
  {
    eventName: "ZIGGURARE",
    eventId: "04",
    description:
      "The ultimate AutoCAD and building design showdown.\n Design Top view and plan of existing building.\n Design views with surprise constraints.",
    rules: [
      "Team Event",
      "Round 1: Building Top View & Plan Drafting",
      "Round 2: Constraint Based Redesigning",
      "Round 3: Design + Analysis Presentation"
    ],
    maxTeamSize: 4,
    minTeamSize: 3,
    PsLink: "",
    coordinators: [
      { name: "Abhay", contact: "" },
      { name: "Abhijit Rai", contact: "" },
      { name: "Chandani", contact: "" },
    ],
  },
  {
    eventName: "CODIGO",
    eventId: "05",
    description:
      "A coding odyssey to test innovation, problem-solving skills & technical depth. Designed to prepare students for placements.",
    rules: [
      "Solo Participation",
      "Round 1: CS Fundamentals Test",
      "Round 2: Coding Challenge",
      "Round 3: Interview"
    ],
    maxTeamSize: 1,
    minTeamSize: 1,
    PsLink: "",
    coordinators: [
      { name: "Swetabh Salampuria", contact: "" },
      { name: "Shreyas Mishra", contact: "" },
      { name: "Saurabh Khare", contact: "" },
    ],
  },
  {
    eventName: "CaseFlow",
    eventId: "06",
    description:
      "The Consulting Challenge focusing on case studies, guesstimates, and real-world business problems.",
    rules: [
      "Solo Event",
      "Round 1: Pen and Paper Test",
      "Round 2: Presentation",
    ],
    maxTeamSize: 1,
    minTeamSize: 1,
    PsLink: "",
    coordinators: [
      { name: "Vivek Saroj", contact: "" },
      { name: "Priyeranjan", contact: "" },
      { name: "Upasna Verma", contact: "" },
    ],
  },
  // {
  //   eventName: "TERRAQUIZ",
  //   eventId: "07",
  //   description:
  //     "Nirmaan Fun Event featuring rounds such as 'Real vs Reel' and Treasure Hunt.",
  //   rules: [
  //     "Team Event",
  //     "Round 1: Quiz Round",
  //     "Round 2: Surprise Round",
  //     "Round 3: Treasure Hunt"
  //   ],
  //   maxTeamSize: 3,
  //   minTeamSize: 3,
  //   PsLink: "",
  //   coordinators: [
  //     { name: "Swetabh Salampuria", contact: "" },
  //     { name: "Prakhar Srivastav", contact: "" },
  //     { name: "Abhay", contact: "" },
  //   ],
  // },
  {
    eventName: "SAMADHAN",
    eventId: "08",
    description:
      "The Engineering Ideathon where teams identify a societal issue and propose a civil engineering solution.",
    rules: [
      "Team Event",
      "Round 1: Problem Statement Evaluation",
      "Round 2: Draft Submission",
      "Round 3: Final Presentation"
    ],
    maxTeamSize: 4,
    minTeamSize: 3,
    PsLink: "",
    coordinators: [
      { name: "Saksham Singh", contact: "" },
      { name: "Suvendra Singh", contact: "" },
      { name: "Tanya Singh", contact: "" },
    ],
  }
]

};

const NirmaanPage = () => {
  const [selected, setSelected] = useState(null);

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
            {NirmaanData.eventName}
          </h1>

          {NirmaanData.tagline && (
            <p
              className="mx-auto text-gray-200 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mt-2 sm:mt-3"
            >
              {NirmaanData.tagline}
            </p>
          )}
        </div>
      </main>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[...NirmaanData.events]
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
                  {selected.rules.map((rule, i) => (
                    <li key={i}>{rule}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">Coordinators</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 text-left">
                  {selected.coordinators.map((c, i) => (
                    <li key={i}>{c.name} {c.contact}</li>
                  ))}
                </ul>
                {/* <p className="mt-6 text-gray-300 text-left">
                  <strong>Team size:</strong> {selected.minTeamSize} - {selected.maxTeamSize}
                </p> */}
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NirmaanPage;
