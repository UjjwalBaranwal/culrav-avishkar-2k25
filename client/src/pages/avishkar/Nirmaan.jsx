import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBgMobile from "../../assets/Avishkar_bg-mobile.png";
import AvishkarBG from "../../assets/AvishkarBG.png";

const NirmaanData = {
  eventName: "Nirmaan",
  tagline: "Self-Development Through Self-Awareness",
  instagramLink: "",
  events: [
    {
      eventName: "COGNIZANCE",
      eventId: "74",
      description:
        "True self-development starts with self-awareness. Join us for COGNIZANCE, where you'll undergo a comprehensive evaluation of your competencies and versatility.",
      rules: [
        "Compulsory for all Civil Engineering students.",
        "Three rounds: Written Test, Group Discussion, Interview",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Priyanshu Ranjan Srivastava", contact: "9118272807" },
        { name: "Pawan Kumar Agarwal", contact: "9358116201" },
        { name: "Saksham Sangal", contact: "9058112901" },
      ],
    },
    {
      eventName: "Linkidge",
      eventId: "75",
      description:
        "An event about bridge construction using popsicle sticks, glue, and analysis.",
      rules: [
        "Team size: 3-4 members.",
        "Cross-year participation not allowed.",
        "Each team must include at least one Civil Engineering student.",
        "Average CPI of the group should be less than 8.",
      ],
      maxTeamSize: 4,
      minTeamSize: 3,
      PsLink: "",
      coordinators: [
        { name: "Vishal Kumawat", contact: "9571779076" },
        { name: "Nikita Raj", contact: "G-65 KNGH" },
        { name: "Anuj Kumar Lamba", contact: "7820061653" },
        { name: "Ashu Singh", contact: "9721819532" },
      ],
    },
    {
      eventName: "Constrengtho",
      eventId: "76",
      description:
        "Test your skills in mix designing to create the strongest concrete block while maximizing efficiency.",
      rules: [
        "No inter-year teams allowed.",
        "Average CPI of team < 8.",
        "Team size: 4 members.",
        "Branches allowed: Civil (2nd & 3rd year only).",
      ],
      maxTeamSize: 4,
      minTeamSize: 4,
      PsLink: "",
      coordinators: [
        { name: "Pawan Kumar Agarwal", contact: "9358116201" },
        { name: "Deepesh Baberwal", contact: "8502882858" },
        { name: "Sachin Meena", contact: "8824435162" }
      ],
    },
    {
      eventName: "ZIGGURARE",
      eventId: "77",
      description:
        "Showcase your drafting skills in this building design event.",
      rules: [
        "No inter-year teams allowed.",
        "Average CPI of team < 8.",
        "Team size: 3-4 members.",
        "At least one Civil Engineering student required.",
      ],
      maxTeamSize: 4,
      minTeamSize: 3,
      PsLink: "",
      coordinators: [
        { name: "Pawan Kumar Agarwal", contact: "9358116201" },
        { name: "Dharam Singh Meena", contact: "9621712097" },
        { name: "Shubham Saurav", contact: "8709956325" },
        { name: "Ashish Maurya", contact: "9621249054" }
      ],
    },
    {
      eventName: "CODIGO",
      eventId: "78",
      description:
        "A coding event focused on DSA, CS fundamentals, and placement preparation.",
      rules: [
        "Individual event for 2nd and 3rd years & MCA 2nd year.",
        "Branches allowed: CE, CHE, BT, PIE, ME, ECM, MCA.",
        "Multiple rounds including online tests and mock interviews.",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Shiv Gupta", contact: "" },
        { name: "Prince Kumar", contact: "6394209338" },
        { name: "Saksham Sangal", contact: "9058112901" },
      ],
    },
    {
      eventName: "Just In Case",
      eventId: "79",
      description:
        "A consulting challenge involving case studies, puzzles, and real-world problems.",
      rules: [
        "All branches allowed.",
        "Individual event for 1st, 2nd, and 3rd years.",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Priyanshu Ranjan Srivastava", contact: "9118272807" },
        { name: "Raj Anil Nistane", contact: "9672434425" },
        { name: "Aditya Jatav", contact: "7878991547" },
      ],
    },
    {
      eventName: "TERRAQUIZ",
      eventId: "80",
      description:
        "A quizzing event challenging your general knowledge and aptitude.",
      rules: [
        "Team size: 3-4 members.",
        "All branches allowed.",
        "No cross-year teams allowed.",
      ],
      maxTeamSize: 4,
      minTeamSize: 3,
      PsLink: "",
      coordinators: [
        { name: "Sahil Meena", contact: "9660043221" },
        { name: "Deepesh Baberwal", contact: "8502882858" },
        { name: "Dharam Singh Meena", contact: "9621712097" },
      ],
    },
    {
      eventName: "Civismic",
      eventId: "81",
      description:
        "An event to illustrate structural dynamics using popsicle sticks, focusing on earthquake resistance.",
      rules: [
        "No inter-year teams allowed.",
        "Average CPI of team < 8.",
        "Team size: 4 members.",
        "Branches allowed: All (at least 2 Civil students).",
      ],
      maxTeamSize: 4,
      minTeamSize: 4,
      PsLink: "",
      coordinators: [
        { name: "Pawan Kumar Agarwal", contact: "9358116201" },
        { name: "Dharam Singh Meena", contact: "9621712097" },
        { name: "Priyanshu Ranjan Srivastava", contact: "9118272807" },
      ],
    },
  ],
};




const NirmaanPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative min-h-screen bg-black font-sans text-gray-300">

      {/* 🔙 Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-6 left-6 px-5 py-2 border border-cyan-500 
                   text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black 
                   transition font-semibold z-50"
      >
        ← Back
      </button>

      {/* Background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src={AvishkarBgMobile}
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
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-16 relative">
        <div className="md:w-1/2 mt-12 md:mt-0 text-center md:text-left">
          <h1 className="text-5xl font-bold text-cyan-400 mb-4 tracking-wide uppercase">
            {NirmaanData.eventName}
          </h1>

          {NirmaanData.tagline && (
            <p className="text-lg text-cyan-300 mb-8 max-w-md">
              {NirmaanData.tagline}
            </p>
          )}
        </div>
      </main>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {NirmaanData.events.map((event) => (
          <motion.div
            key={event.eventId}
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.25, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.97 }}
            className="relative p-6 border border-cyan-600 rounded-xl 
                       bg-black/90 backdrop-blur-md shadow-md cursor-pointer text-center"
            onClick={() => setSelected(event)}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-2">
              {event.eventName}
            </h2>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(event);
              }}
              className="mt-4 py-2 w-full border border-cyan-400 rounded-lg 
                         bg-cyan-500 text-black font-semibold hover:bg-cyan-300 transition"
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
            className="fixed top-0 left-0 w-full h-full bg-black/80 
                       backdrop-blur-md z-50 p-8 overflow-y-auto"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-10 text-4xl text-cyan-400 
                         hover:text-cyan-600 font-bold"
            >
              ✕
            </button>

            <h2 className="text-4xl font-bold mt-4 text-cyan-400 mb-8 text-center">
              {selected.eventName}
            </h2>

            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* About */}
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  About the Event
                </h3>
                <p className="text-cyan-300 whitespace-pre-wrap">
                  {selected.description}
                </p>
              </div>

              {/* Rules */}
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  Rules
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 
                               max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>

              {/* Coordinators */}
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  Coordinators
                </h3>

                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 text-center">
                  {selected.coordinators.map((c, index) => (
                    <li key={index}>
                      {c.name} — {c.contact}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-cyan-300 text-left">
                  <strong>Team size:</strong> {selected.minTeamSize} – {selected.maxTeamSize}
                </p>
              </div>

            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NirmaanPage;
