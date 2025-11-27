import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBG from "../../assets/a_s_bg.png";

const RasayansData = {
  eventName: "Rasayans",
  tagline: "Chemistry Unleashed",
  instagramLink: "",
 events: [
    {
      eventName: "Chemethalon",
      eventId: "01",
      description:
        "Chemethalon is a mock placement event designed to simulate real recruitment processes including resume submission, online tests for Core/Software/Consultancy, group discussions and personal interviews. Mandatory for all Chemical Engineering participants. Individual mode only.",
      rules: [
        "Round 1: Resume Submission",
        "Round 2: Online Test (Core / Software / Consultancy)",
        "Round 3: Group Discussion",
        "Round 4: Personal Interview",
        "Individual participation",
        "Compulsory for Chemical Engineering Students"
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Raj Upadhyay", contact: "" },
        { name: "Aman Goyal", contact: "" },
        { name: "Adeeb Sheikh", contact: "" }
      ],
    },
    {
      eventName: "ChemExpo",
      eventId: "02",
      description:
        "ChemExpo (From Concept to Creation) is a flagship model-design event where teams present innovative chemical engineering solutions through prototypes, abstracts and viva. One Chemical Engineering member is mandatory per team along with a set budget limit.",
      rules: [
        "Team Based Event",
        "Abstract Submission + Model Showcase + Viva",
        "At least one Chemical Engineering member",
        "Budget Limit Applicable",
        "Cross-branch participation allowed"
      ],
      maxTeamSize: 4,
      minTeamSize: 4,
      PsLink: "",
      coordinators: [
        { name: "Shubham Swarnkar", contact: "" },
        { name: "Devashish Gangwani", contact: "" },
        { name: "Ashwani", contact: "" }
      ],
    },
    {
      eventName: "Simulenz 2.0",
      eventId: "03",
      description:
        "A simulation-based competition solving industrial problems using process modelling tools. 1st years prepare PFD, 2nd years solve on Aspen, and 3rd years use Aspen + MATLAB. Includes mid-evaluation and final presentation round. Chemical Engineering only.",
      rules: [
        "Team Event",
        "Round 1: Mid Evaluation",
        "Round 2: Final Presentation",
        "1st Year: PFD Design",
        "2nd Year: Aspen Simulation",
        "3rd Year: Aspen + MATLAB",
        "Chemical Engineering only",
        "Max 3 per team"
      ],
      maxTeamSize: 3,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Yogesh Pradhan", contact: "" },
        { name: "Krishna", contact: "" }
      ],
    },
    {
      eventName: "Quizzeria",
      eventId: "04",
      description:
        "A quiz-based competition testing analytical reasoning and cognitive thinking through Quiz, Crossword and Surprise Rounds. Cross-branch teams allowed with at least one Chemical Engineering member.",
      rules: [
        "Round 1: Quiz",
        "Round 2: Crossword",
        "Round 3: Surprise Round",
        "Cross-branch teams allowed",
        "At least one Chemical Engineering student",
        "Max 3 per team"
      ],
      maxTeamSize: 3,
      minTeamSize: 2,
      PsLink: "",
      coordinators: [
        { name: "Mishti Kesarwani", contact: "" },
        { name: "Deepika Singh", contact: "" }
      ],
    },
    {
      eventName: "CodeKinetics",
      eventId: "05",
      description:
        "A web development challenge where teams build projects aligned with an Open Tech Stack based problem statement. Includes abstract submission, mid evaluation, and final judging. Cross-branch allowed with Chemical Engineering student as team lead.",
      rules: [
        "Team Event",
        "Abstract Submission",
        "Mid Evaluation",
        "Final Evaluation",
        "Chemical Engineering member must be team leader",
        "Cross-branch allowed",
        "Max 3 per team"
      ],
      maxTeamSize: 3,
      minTeamSize: 2,
      PsLink: "",
      coordinators: [
        { name: "Sarvagya", contact: "" },
        { name: "Sumit Jha", contact: "" },
        { name: "Mohd Anish", contact: "" }
      ],
    },
    {
      eventName: "Data Vision",
      eventId: "06",
      description:
        "A machine learning & data science competition where teams solve problems involving ML, DL, and NLP. Includes abstract submission, mid evaluation, and final presentation. Cross-branch allowed with Chemical Engineering lead mandatory.",
      rules: [
        "Team Event",
        "Abstract Submission",
        "Mid Evaluation",
        "Final Evaluation",
        "Cross-branch allowed",
        "Chemical Engineering member must lead the team",
        "Tech domains: ML / DL / NLP"
      ],
      maxTeamSize: 3,
      minTeamSize: 2,
      PsLink: "",
      coordinators: [
        { name: "Sahil Parvez Ansari", contact: "" },
        { name: "Shaniya Mulla", contact: "" },
        { name: "Arisha Siddiqui", contact: "" }
      ],
    },
    {
      eventName: "CasEstimates",
      eventId: "07",
      description:
        "A case-solving + estimation competition involving analytical reasoning, solution modelling and presentation. Pen-paper round followed by PPT & Q/A. Cross-branch teams allowed. Max 4 for 1st year and 2 for 2nd-3rd year teams.",
      rules: [
        "Round 1: Pen-Paper Problem Solving",
        "Round 2: PPT Presentation + Q/A",
        "Cross-branch Allowed",
        "1st Yr: Max 4 Members",
        "2nd & 3rd Yr: Max 2 Members"
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Deeksha Singh", contact: "" },
        { name: "Jaanvi Saxena", contact: "" }
      ],
    },
    {
      eventName: "Scavenger Hunt",
      eventId: "08",
      description:
        "A fun competitive hunt featuring multiple energetic rounds. Begins with a fun-paper test followed by unpredictable surprise rounds. Cross-branch & cross-year collaboration allowed. Max 4 per team.",
      rules: [
        "Round 1: Paper-Based Fun Test",
        "Round 2: Surprise Rounds",
        "Cross-year and Cross-branch permitted",
        "Max 4 per team"
      ],
      maxTeamSize: 4,
      minTeamSize: 2,
      PsLink: "",
      coordinators: [
        { name: "Purushottam Dubey", contact: "" },
        { name: "Divyanshu Purbey", contact: "" }
      ],
    },
  ],
};

const RasayansPage = () => {
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
      <main className="flex flex-col justify-center items-center px-0 py-20 relative">
        <div className="w-full mt-12 text-center flex flex-col items-center">
          <h1 className="text-5xl font-bold neon-shadow text-gray-300 mb-4 drop-shadow-xl tracking-wide uppercase">
            {RasayansData.eventName}
          </h1>
          {RasayansData.tagline && (
            <p className="text-lg text-gray-300 mb-8 max-w-md">{RasayansData.tagline}</p>
          )}
        </div>
      </main>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[...RasayansData.events]
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
                {/* <p className="mt-6 text-gray-300 text-left"><strong>Team size:</strong> {selected.minTeamSize} - {selected.maxTeamSize}</p> */}
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RasayansPage;
