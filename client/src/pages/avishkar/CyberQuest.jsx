import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBgMobile from "../../assets/a_s_m_bg.png";
import AvishkarBG from "../../assets/a_s_bg.png";
import { useNavigate } from "react-router";




const CyberQuestData = {
  eventName: "CyberQuest",
  tagline: "",
  instagramLink: "",
  events: [
    {
      eventName: "Insomnia",
      registrationLink: "https://forms.google.com/your-form-link-here",
      eventId: "45",
      description:
        "THE FLAGSHIP EVENT OF CYBERQUEST RECORDS PARTICIPATION FROM THE BRIGHTEST BRAINS ACROSS THE COUNTRY. IT IS A COMPETITIVE CODING EVENT WITH PROBLEMS OF VARYING DIFFICULTY LEVELS. YOUNG CODING ENTHUSIASTS PARTICIPATE WITH VIGOR EACH YEAR TO SATIATE THEIR PROGRAMMING APPETITE.",
      rules: [
        "Team size: 1-3",
        "Team Eligibility: All branches",
        "All year allowed except final year",
      ],
      maxTeamSize: 3,
      minTeamSize: 1,

      PsLink: "",
      coordinators: [
        { name: "CC Club", contact: "" }
      ],
    },
    {
      eventName: "Code of the Day",
      registrationLink: "",
      eventId: "46",
      description:
        "A WEEK-LONG COMPETITIVE CODING EVENT ATTRACTING PARTICIPATION FROM ALL YEARS AND BRANCHES. IT CONSISTS OF A SET OF 7 PROBLEMS. THE PARTICIPANTS LABOR RELENTLESSLY TO SUBMIT EFFICIENT SOLUTIONS TO THE PROBLEM RELEASING AFTER EVERY 24 HOURS.",
      rules: [
        "Team size: 1",
        "Team Eligibility: All branches",
        "Winners: 3 students overall",
        "Rounds 7",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,

      PsLink: "",
      coordinators: [
        { name: "CC Club", contact: "" },
      ],
    },
    {
      eventName: "Softathlon",
      registrationLink: "https://forms.gle/xhHLob2AcFh5Xmms9",
      eventId: "47",
      description:
        "AN EVENT AIMED AT SIMULATING THE SOFTWARE PROFILE-BASED RECRUITMENT PROCEDURE FOR UNDERGRADUATES. IT CONSISTS OF A SERIES OF WRITTEN AND CODING ROUNDS TESTING THE TECHNICAL PROWESS OF THE CANDIDATE. INTERVIEW ROUNDS ALSO FORM AN INTEGRAL PART OF THE EVENT IN WHICH THE STUDENTS ARE JUDGED ON THE KNOWLEDGE AND CONFIDENCE THEY EXUDE.",
      rules: [
        "Team size: 1-3",
        "Team Eligibility: CSE",
        "Winners: 3",
        "Rounds 3",
      ],
      maxTeamSize: 3,
      minTeamSize: 1,

      PsLink: "",
      coordinators: [
        { name: "Ish Singhal", contact: "" },
        { name: "Ujjawal Baranwal", contact: "" },
      ],
    },
    {
      eventName: "Tux Wars",
      registrationLink: "",
      eventId: "36",
      description:
        "AN EVENT TO TEST THE PRACTICAL ACUMEN IN LINUX COMMAND-LINE TOOLS, SHELL SCRIPTING, AND NETWORKING. THE WRITTEN ROUND TESTS THEORETICAL UNDERSTANDING IN LINUX AND THE PRACTICAL ROUND EXPECTS THE TEAMS TO COMPETE IN A TIME-BOND ENVIRONMENT WHILE WORKING ON SYSTEMS AND APPLYING CONCEPTS.",
      rules: [
        "Team size: 3",
        "Team Eligibility: All branches",
        "Winners: 3 Team overall",
        "Rounds 2",
      ],
      maxTeamSize: 3,
      minTeamSize: 3,

      PsLink: "",
      coordinators: [
        { name: "Saurabh Chaudhary", contact: "" },
        { name: "Yash Sharma", contact: "" },
      ],
    },
    {
      eventName: "CSS Battle",
      registrationLink: "",
      eventId: "37",
      description:
        "THE EVENT WILL MAJORLY FOCUS ON THE DESIGNING MINDS OF THE CANDIDATE. THIS WILL CONSIST OF DESIGNING A WEB PAGE CLONE AND MOVING ONTO KNOCKOUTS I.E. CSS BATTLE.",
      rules: [
        "Team size: 1",
        "Team Eligibility: All branches",
        "Winners: 3 Team overall",
        "Rounds 2",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,

      PsLink: "",
      coordinators: [
        { name: "Ujjawal Baranwal", contact: "" },
      ],
    },
    {
      eventName: "Dry Run Marathon",
      registrationLink: "https://forms.gle/x6XqPiVfUR7aQcvA7",
      eventId: "38",
      description:
        "GIVEN A LIST OF CODE THE STUDENTS ARE EXPECTED TO DRY RUN THE CODE AND PROVIDE OUTPUT FAST AND ACCURATE WHICH WILL IN TURN BE USED IN ANOTHER SET OF PROBLEMS",
      rules: [
        "Team size: 6",
        "Team Eligibility: All branches",
        "Winners: 3 Team overall",
        "Rounds 2",
      ],
      maxTeamSize: 6,
      minTeamSize: 6,

      PsLink: "",
      coordinators: [
        { name: "Bishal Kedia", contact: "" },
        { name: "Anvesh Singh", contact: "" },
        { name: "Saurabh Chaudhary", contact: "" },
      ],
    },
    {
      eventName: "Operamania",
      eventId: "39",
      description:
        "THE LARGEST PUZZLING EVENT OF AVISHKAR GALVANIZES EVEN THE LAZIEST OF BRAINS INTO ACTION AND ENCOURAGES PROMPT RESPONSE AND WITTY ANSWERS. OPERAOMNIA GAUGES THE ABILITY OF PARTICIPANTS TO PLAY WITH RIDDLES, PUZZLES AND BRAIN TEASERS",
      rules: [
        "Team size: 3-6",
        "Team Eligibility: All branches",
        "Winners: 3 Team overall",
        "Rounds 3",
      ],
      maxTeamSize: 6,
      minTeamSize: 3,

      PsLink: "",
      coordinators: [
        { name: "Garv Gupta", contact: "" },
        { name: "Amandeep Singh", contact: "" },
      ],
    },
    {
      eventName: "Debugging Olympics",
      eventId: "41",
      description:
        'Test your debugging skills in this intense coding challenge. Solve complex problems under time pressure and showcase your ability to identify and fix code issues efficiently.',
      rules: [
        "Team size: 2",
        "Team Eligibility: All branches",
        "Winners: 1 Team overall",
        "Rounds 1",
      ],
      maxTeamSize: 2,
      minTeamSize: 2,

      PsLink: "",
      coordinators: [
        { name: "Haseeb", contact: "" },
        { name: "Manvith Reddy", contact: "" },

      ],
    },
    {
      eventName: "Worst UI designs",
      eventId: "42",
      description:
        "Showcase your worst UI designs in this hilarious competition. Create the most confusing, counterintuitive, and frustrating user interfaces possible. The most absurd and poorly designed interfaces will win prizes!",
      rules: [
        "Team size: 2",
        "Team Eligibility: All branches",
        "Winners: 1",
        "Rounds 5",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,

      PsLink: "",
      coordinators: [
        { name: "Ujjawal Barnawal", contact: "" },
        { name: "Saurabh Chaudhary", contact: "" },
      ],
    },
    {
      eventName: "Math Rush",
      registrationLink: "https://forms.gle/YDKzJNAsUS3L64Lt9",
      eventId: "43",
      description:
        '"MATH IS THE BACKBONE OF ENGINEERING". MATHRUSH IS A MATHEMATICAL PUZZLE CONTEST IN WHICH SOUND KNOWLEDGE OF MATHEMATICS TOGETHER WITH THE TASTE OF PROGRAMMING WILL BE ESSENTIAL TO SOLVE PROBLEMS. BEING A "ZERO, EITHER YOU LEAD OR FOLLOW.',
      rules: [
        "Team size: 2",
        "Team Eligibility: All branches",
        "Winners: 3 Team overall",
        "Rounds 2",
      ],
      maxTeamSize: 2,
      minTeamSize: 2,

      PsLink: "",
      coordinators: [
        { name: "Shantanu Gaur", contact: "" },
        { name: "Iqra Abbasi", contact: "" },
        { name: "Bishal Kedia", contact: "" },
      ],
    },
    {
      eventName: "404",
      eventId: "44",
      description:
        "THIS QUIZ EXPLORES KEY INNOVATIONS IN COMPUTER SCIENCE, HIGHLIGHTING MAJOR BREAKTHROUGHS, FROM EARLY COMPUTING MACHINES TO GROUNDBREAKING TECHNOLOGIES THAT TRANSFORMED OUR INTERACTION WITH THE DIGITAL WORLD.",
      rules: [
        "Team size: 3-4",
        "Team Eligibility: All branches",
        "Winners: 3 ",
        "Rounds 2",
      ],
      maxTeamSize: 4,
      minTeamSize: 3,

      PsLink: "",
      coordinators: [
        { name: "Ish Singhal", contact: "" },
        { name: "Yash Sharma", contact: "" },
      ],
    },
    {
      eventName: "RAGQUEST",
      eventId: "45",
      description:
        "A hands-on AI event where participants build a Retrieval-Augmented Generation (RAG) chatbot using a curated Knowledge Base, combining retrieval and LLM reasoning. This challenge tests real-world AI skills across development and quiz rounds.",
      rules: [
        "Team size: 1–3",
        "Eligibility: Open to all branches and all years",
        "Rounds: 2 (Development Round + Online Quiz Round)",
        "Bot must use retrieval from provided Knowledge Base",
        "No hardcoded answers allowed",
        "Original implementations only",
        "Submission: Working bot, GitHub repo + detailed README, and demo video",
      ],
      maxTeamSize: 3,
      minTeamSize: 1,

      PsLink: "",
      coordinators: [
        { name: "Application Club", contact: "" },
      ],
    },
    {
      eventName: "CODECLASH",
      eventId: "46",
      description:
        "A competitive coding tournament featuring an online Codeforces qualifier followed by offline one-on-one knockout battles. Designed to identify the strongest competitive programmers across MCA, B.Tech, and M.Sc students.",
      rules: [
        "Event Format: Online Qualifier + Offline Knockout",
        "Platform: CC Codeforces Group (participants must have active Codeforces account)",
        "Two groups shortlisted: 16 participants each",
        "Strict anti-cheating and plagiarism monitoring",
        "Offline Round: 1v1 battles — first to solve advances",
        "Tie-breaker: Earlier accepted submission wins",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,

      PsLink: "",
      coordinators: [
        { name: "Bhuwan", contact: "6202677308" },
        { name: "Hariom", contact: "9758685822" },
      ],
    },
  ],
};

const CyberQuestPage = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (link) => {
    if (link && link.trim() !== "") {
      // Open Google Form in a new tab
      window.open(link, "_blank");
    } else {
      // Redirect to Coming Soon page
      navigate("/coming-soon")
    }
  };

  return (
    <div className="relative min-h-screen font-sans text-gray-300">
      {/* Responsive Background */}
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
            className="
        font-bold uppercase tracking-wide neon-shadow drop-shadow-xl
        text-gray-100
        text-3xl sm:text-5xl lg:text-6xl
        leading-tight sm:leading-snug
        mb-3 sm:mb-4
      "
          >
            {CyberQuestData.eventName}
          </h1>

          {CyberQuestData.tagline && (
            <p
              className="
          mx-auto
          text-gray-200
          text-sm sm:text-base lg:text-lg
          max-w-2xl
          leading-relaxed
          mt-2 sm:mt-3
        "
            >
              {CyberQuestData.tagline}
            </p>
          )}
        </div>
      </main>


      {/* Event Cards */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[...CyberQuestData.events]
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
            <h2 className="text-4xl font-bold mt-4 neon-shadow text-gray-400 mb-8 text-center">{selected.eventName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <section>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">About the Event</h3>
                <p className="text-gray-300 px-4 whitespace-pre-wrap break-words">{selected.description}</p>
              </section>
              <section>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">Rules</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rules.map((rule, i) => (
                    <li key={i}>{rule}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">Coordinators</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 text-center">
                  {selected.coordinators.length == 0 ?
                    <h1 >No coordinators listed</h1> :
                    selected.coordinators.map((c, i) => (
                      <li key={i}>
                        {c.name} — {c.contact}
                      </li>
                    ))}
                </ul>
              </section>
            </div>

            <button
  onClick={() => handleRegister(selected.registrationLink)}
  className="
    relative
    block mx-auto mt-8
    px-3 py-2 text-sm

    md:fixed md:bottom-8 md:right-8 md:mx-0 md:mt-0
    md:px-8 md:py-3 md:text-lg

    lg:px-10 lg:py-4 lg:text-xl
    z-50 group bg-black border-[3px] border-cyan-400 text-white 
    font-bold uppercase tracking-[0.15em]
    shadow-[4px_4px_0_#d946ef,-3px_-3px_0_#06b6d4]
    hover:shadow-[-6px_-6px_0_#d946ef,6px_6px_0_#06b6d4]
    hover:border-fuchsia-500 hover:text-cyan-300
    transition-all duration-150 ease-linear 
    active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
    select-none overflow-hidden
  "
>
  {/* scanline overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.7)_50%)] bg-[length:100%_4px] pointer-events-none z-20 opacity-60"></div>

  <span className="relative z-30 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
    Register Now
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      className="
        w-4 h-4 
        md:w-6 md:h-6
        text-fuchsia-500 
        group-hover:text-cyan-400 
        group-hover:translate-x-2 
        transition-all duration-150
      "
    >
      <path strokeLinecap="square" strokeLinejoin="miter" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  </span>

  <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[25deg] group-hover:animate-[ping_0.3s_linear_1] opacity-0"></div>
</button>


          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CyberQuestPage;


