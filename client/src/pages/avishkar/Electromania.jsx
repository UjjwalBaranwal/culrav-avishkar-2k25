import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBG from "../../assets/a_s_bg.png";

const ElectromaniaData = {
  eventName: "Electromania",
  tagline: "",
  instagramLink: "",
  events: [
    {
      eventName: "QUINTATHALON",
      eventId: "1",
      description:
        "Flagship placement-simulation event that replicates the actual internship and placement interview process for ECE students, helping them assess and improve their technical and behavioural interview skills. Participation is mandatory for ECE students who wish to take part in other events.",
      rules: [
        "Mandatory for ECE students to participate in other events.",
        "Individual participation only.",
        "Round 1: Online Assessment – CS/Hardware fundamentals, aptitude and coding.",
        "Round 2: Two offline interviews – one technical and one behavioural.",
        "Eligibility: 1st, 2nd and 3rd year ECE students only.",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Aryan Kesharwani", contact: "8932017623" },
        { name: "Saurabh Gupta", contact: "8168797882" },
        { name: "Shresth Gadhwala", contact: "7679170402" },
        { name: "Yogesh Kumar", contact: "9044412418" },
        { name: "Shreyansh Shah", contact: "8874419806" },
      ],
    },
    {
      eventName: "INNODEV",
      eventId: "2",
      description:
        "A software development team event where participants build innovative, AI-powered solutions based on unique problem statements, focusing on creativity, implementation quality and impact.",
      rules: [
        "Round 1: Abstract Submission (Online).",
        "Round 2: Mid-Evaluation (Online).",
        "Round 3: Final Evaluation (Offline).",
        "Round 4: Offline Presentation and Q&A.",
        "Eligibility: 2nd and 3rd year B.Tech All students.",
        "Each team must have at least one ECE student.",
        "Team size: 2 to 4 members.",
      ],
      maxTeamSize: 4,
      minTeamSize: 2,
      PsLink: "",
      coordinators: [
        { name: "Abhishek Kumar Yadav", contact: "9569456856" },
        { name: "Amrisha", contact: "9329996069" },
        { name: "Nandre Harish", contact: "7995753789" },
        { name: "Meemansha Singh", contact: "6389574220" },
      ],
    },
    {
      eventName: "CODOTRON",
      eventId: "3",
      description:
        "A competitive coding event that evaluates participants on problem-solving ability, debugging skills and teamwork through contest and relay-style rounds.",
      rules: [
        "Round 1: Coding Contest with 5–6 problems.",
        "Round 2: Debugging Relay Round – participants fix buggy code under time pressure.",
        "Eligibility: B.Tech 1st, 2nd and 3rd year all branch and M.Tech 1st year.",
        "Each team must have at least one ECE student.",
        "Team size: 2 to 3 members.",
      ],
      maxTeamSize: 3,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Abhishek Kumar Yadav", contact: "9569456856" },
        { name: "Aryan Kesharwani", contact: "8932017623" },
        { name: "Nandre Harish", contact: "7995753789" },
        { name: "Chirag Murarka", contact: "6201376048" },
      ],
    },
    {
      eventName: "KAGGLE_SPRINT",
      eventId: "4",
      description:
        "An AI/ML Kaggle competition where teams build end-to-end models and compete on a live leaderboard, gaining hands-on exposure to practical machine learning workflows.",
      rules: [
        "Round 1: Abstract Submission (Online).",
        "Round 2: Final Evaluation and Presentation (Offline).",
        "Eligibility: 1st, 2nd and 3rd year students.",
        "Team size: 2 to 3 members.",
      ],
      maxTeamSize: 3,
      minTeamSize: 2,
      PsLink: "",
      coordinators: [
        { name: "Atharva Antapurkar", contact: "8668897685" },
        { name: " Mohammed Haseeb", contact: "" },
      ],
    },
    {
      eventName: "MARKETPULSE",
      eventId: "5",
      description:
        "A market simulation and strategy game where teams act as companies, make financial and strategic decisions, and trade over multiple simulated quarters. Winners are decided based on market capitalization.",
      rules: [
        "Teams role-play as companies in a simulated market.",
        "Multiple rounds/quarters of trading and decision-making.",
        "Performance evaluated based on final market capitalization.",
        "Eligibility: Open to all courses and all years.",
        "Team size: 2 to 4 members.",
      ],
      maxTeamSize: 4,
      minTeamSize: 2,
      PsLink: "",
      coordinators: [
        { name: "Akshat Mahanth", contact: "8935078215" },
        { name: "Amrisha", contact: "9329996069" },
        { name: "Shreyansh Shah", contact: "8874419806" },
      ],
    },
    {
      eventName: "RTL_RUSH",
      eventId: "6",
      description:
        "A hardware design event where teams solve digital design problems using Verilog HDL. Separate problem sets for different years, with submissions including code, schematics and waveforms.",
      rules: [
        "Problems released one week before Avishkar.",
        "Participants must design and implement solutions in Verilog HDL.",
        "Submissions must include Verilog code, schematics and waveforms.",
        "Separate problems for 2nd and 3rd year students.",
        "Eligibility: 2nd and 3rd year students.",
        "Each team must have at least one ECE student.",
        "Team size: 2 to 4 members.",
      ],
      maxTeamSize: 4,
      minTeamSize: 2,
      PsLink: "",
      coordinators: [
        { name: "Akshat Mahanth", contact: "8935078215" },
        { name: "Chetanya Mishra", contact: "8601877257" },
        { name: "Dheeraj Vuddagiri", contact: "9392899382" },
      ],
    },
    {
      eventName: "CIRCUIT_OF_THE_DAY",
      eventId: "7",
      description:
        "A week-long circuit design challenge with daily problems of increasing difficulty. Participants design digital circuits and submit their solutions using LogisimEvolution.",
      rules: [
        "Daily circuit problems released over a week with increasing difficulty.",
        "Solutions must be submitted using LogisimEvolution.",
        "Daily submission deadline: before 3 PM on the following day.",
        "Eligibility: 1st, 2nd and 3rd year students.",
        "Each team must have at least one ECE student.",
        "Team size: 2 to 4 members.",
      ],
      maxTeamSize: 4,
      minTeamSize: 2,
      PsLink: "",
      coordinators: [
        { name: "Akshat Mahanth", contact: "8935078215" },
        { name: "Chetanya Mishra", contact: "8601877257" },
        { name: "Dheeraj Vuddagiri", contact: "9392899382" },
        { name: "Saurabh Gupta", contact: "8168797882" },
      ],
    },
    {
      eventName: "ENCODEWARS",
      eventId: "8",
      description:
        "A decoding and puzzle-solving event combining core electronics and software concepts. Participants crack hidden messages in mixed formats like bitstreams, characters and images. Internet use is allowed, but AI tools are strictly prohibited.",
      rules: [
        "Problems may contain hidden information in bits, characters, images and other formats.",
        "Teams race to decode and answer as fast as possible.",
        "Use of internet allowed for research.",
        "Use of AI tools is strictly prohibited and monitored.",
        "Eligibility: 1st, 2nd and 3rd year students.",
        "Each team must have at least one ECE student.",
        "Team size: 2 to 4 members.",
      ],
      maxTeamSize: 4,
      minTeamSize: 2,
      PsLink: "",
      coordinators: [
        { name: "Akshat Mahanth", contact: "8935078215" },
        { name: "Atharva Antapurkar", contact: "8668897685" },
        { name: "Soumya Das", contact: "7866041166" },
      ],
    },
  ],
};

const ElectromaniaPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative min-h-screen  font-sans text-gray-300">
      {/* Responsive Background Images */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src={AvishkarBG}
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
      <main className="relative flex flex-col items-center justify-center px-4 py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-4xl text-center">
          <h1
            className="font-bold uppercase tracking-wide neon-shadow drop-shadow-xl text-gray-100 text-3xl sm:text-5xl lg:text-6xl leading-tight sm:leading-snug mb-3 sm:mb-4"
          >
            {ElectromaniaData.eventName}
          </h1>

          {ElectromaniaData.tagline && (
            <p
              className="mx-auto text-gray-200 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mt-2 sm:mt-3"
            >
              {ElectromaniaData.tagline}
            </p>
          )}
        </div>
      </main>

      {/* Event Cards */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[...ElectromaniaData.events]
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
              className="relative cyber-card p-6 border border-gray-400 rounded-xl bg-black/90 backdrop-blur-md shadow-md cursor-pointer text-center select-none"
              onClick={() => setSelected(event)}
            >
              <h2 className="text-2xl font-bold neon-shadow text-gray-300 mb-2">
                {event.eventName}
              </h2>
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

      {/* Event Details Modal */}
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
            <h2 className="text-4xl font-bold mt-4 neon-shadow text-gray-400 mb-8 text-center">
              {selected.eventName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <section>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">
                  About the Event
                </h3>
                <p className="text-gray-300 px-4 whitespace-pre-wrap wrap-break-word">
                  {selected.description}
                </p>
              </section>
              <section>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">
                  Rules
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rules.map((rule, i) => (
                    <li key={i}>{rule}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">
                  Coordinators
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 text-center">
                  {selected.coordinators.length==0?
                  <h1 >No coordinators listed</h1>:
                  selected.coordinators.map((c, i) => (
                    <li key={i}>
                      {c.name} — {c.contact}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ElectromaniaPage;
