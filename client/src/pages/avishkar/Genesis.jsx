import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";


import AvishkarBG from "../../assets/a_s_bg.png";


const GenesisData = {
  eventName: "Genesis",
  tagline: "",
  instagramLink: "",
  events: [
    {
      eventName: "Palladin",
      registrationLink : "https://docs.google.com/forms/d/e/1FAIpQLSd_93_qY-EUZHtTUrrrkQIoPkhgUFvcqqpeslaueileNEPIZw/viewform?usp=publish-editor",
      eventId: "57",
      description:
        "A placement-focused event designed to equip biotechnology students for internships and full-time opportunities. The competition evaluates participants across core biotechnology knowledge, consultancy thinking, and software/application skills — helping them sharpen industry-ready problem-solving and communication abilities.",
      rules: [
        "Solo participation only",
        "Round 1  –  Computer-Based Test (Aptitude + Core Biotech Assessment)",
        "Round 2  –  Group Discussion followed by Personal Interview",
        "Participation is mandatory for all biotechnology students"
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Vaishnavi Srivastava", contact: "9473815982" },
        { name: "Akash Baghel", contact: "7300894145" },
        { name: "Karthik Prakash", contact: "7306898487" },
        { name: "Shree Ram Goliya", contact: "7427813219" },
      ]
    },
    {
      eventName: "Central Dogma",
      registrationLink : "https://docs.google.com/forms/d/e/1FAIpQLScCcg3WL50Qu6dEPNLeYJ54_VF3lLeSRsXRUeodn-Gjryx0Lg/viewform?usp=publish-editor",
      eventId: "58",
      description:
        "An engaging core biotechnology event that blends technical knowledge with fun and creativity. Participants will progress through interactive rounds featuring biotech concepts, visual challenges, puzzles, anagrams, and themed question sets designed to test both understanding and quick thinking.",
      rules: [
        "Team size: 3 members (minimum one participant from the Biotechnology department)",
        "Event consists of 3 rounds:",
        "Round 1 – Written test covering PCM fundamentals and core biotechnology",
        "Round 2 – Live interactive round including images, puzzles, anagrams, and more",
        "Round 3 – High-pressure buzzer finale to determine the winning team"
      ],
      maxTeamSize: 3,
      minTeamSize: 3,
      PsLink: "",
      coordinators: [
        { name: "Akhilesh Kumar", contact: "8384872346" },
        { name: "Karthik Prakash", contact: "7306898487" }
      ]
    },
    // {
    //   eventName: "Clue Quest",
    //   eventId: "59",
    //   description:
    //     "A high-energy, theme-based event packed with puzzles, references from popular TV series, anime, riddles, and engaging challenges — all leading to an exciting final treasure hunt.",
    //   rules: [
    //     "Team size: 3–5 members",
    //     "All branches allowed",
    //     "All years allowed except final year",
    //     "3 rounds in total",
    //     "Round 1 and 2 will have question based upon puzzles, movies, music, memes, and pop culture references",
    //     "Round 3 will be a thrilling treasure hunt with clues leading to the final destination"
    //   ],
    //   maxTeamSize: 5,
    //   minTeamSize: 3,
    //   PsLink: "",
    //   coordinators: [
    //     { name: "Siddhant Jain", contact: "9265720118" },
    //     { name: "Manjeet Singh", contact: "8410156377" },
    //     { name: "Pratima Krishna", contact: "9660771107" }
    //   ]
    // },
    {
      eventName: "IQ Odyssey",
      registrationLink : "https://docs.google.com/forms/d/e/1FAIpQLScuyNkvOmCqMUzUZ9r8qkfcc0rgqWKzMreV0iun-qz8__yCIg/viewform?usp=publish-editor",
      eventId: "60",
      description:
        "An engaging event that blends current affairs with interactive game-based challenges — designed to make learning more exciting, competitive, and fun.",
      rules: [
        "Participation allowed in Solo or Duo format",
        "Open to all branches and academic years",
        "2 Rounds: Round 1 – Quiz based on current affairs, Round 2 – Fast-paced Buzzer Round"
      ],
      maxTeamSize: 2,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Madan Mohan", contact: "9548421317" },
        { name: "Govind Singh Tanwar", contact: "7828087932" }
      ]
    },
    {
      eventName: "Case & Climb",
      registrationLink : "https://docs.google.com/forms/d/e/1FAIpQLScr3Dzy9wct6ipXjac-l-JiEEBZJUA0aMAavnMMLCPUL8p2Lw/viewform?usp=header",
      eventId: "61",
      description:
        "A case-study driven event where participants analyze real-world scenarios and demonstrate their analytical thinking, problem-solving approach, and decision-making abilities.",
      rules: [
        "3 Rounds in total:",
        "Round 1 – Aptitude Assessment",
        "Round 2 – Case Study Analysis & Presentation",
        "Round 3 – Personal Interview based on solution approach",
        "Team Size: 1 to 3 members"
      ],
      maxTeamSize: 3,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Priyanka Yadav", contact: "705432354" },
        { name: "Sukrati Shrivastava", contact: "7985774994" }
      ]
    },
    {
      eventName: "Dashboarding",
      registrationLink : "https://docs.google.com/forms/d/e/1FAIpQLSegk6pd7QlPcuBCas3KdIiLhVUpo-bJ4Ck8tDSebp_OYDEDTg/viewform?usp=publish-editor",
      eventId: "62",
      description:
        "The Consultancy & Software Project Competition is a multidisciplinary event that encourages students to think, build, analyse, and present solutions with real-world relevance. The event blends software development and consultancy/data analytics, requiring collaboration between technology and biotechnology domains. Participants will either develop a biotech-related software solution or create analytical dashboards using real datasets, drawing meaningful insights and presenting them through strong storytelling.",
      rules: [
        "This event consists of two categories — Software Development & Consultancy/Dashboard.",
        "Software Track Rules: Team size 2–3, at least one member must be from Biotechnology, problem statement will be provided, Git & GitHub usage is mandatory, 2 rounds → Idea & Progress Presentation + Final Solution Demonstration.",
        "Consultancy Track Rules: Team size 2, one participant must be from Biotechnology, dashboard should be built using real data, themes may relate to health/environment/biotech, 3 rounds → BI Tools Quiz + Dashboard Creation + Final Presentation.",
        "Tools allowed (for Consultancy): Power BI, Tableau, Excel.",
        "Judging will be based on innovation, design, insights, storytelling, and teamwork.",
        "Team Size 2-3 members"
      ],
      maxTeamSize: 3,
      minTeamSize: 2,
      PsLink: "",
      coordinators: [
        { name: "Vaishnavi Srivastava", contact: "9473815982" },
        { name: "Priyanka Yadav", contact: "705432354" }
      ]
    }
  ]
};


const GenesisPage = () => {
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
            {GenesisData.eventName}
          </h1>

          {GenesisData.tagline && (
            <p
              className="mx-auto text-gray-200 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mt-2 sm:mt-3"
            >
              {GenesisData.tagline}
            </p>
          )}
        </div>
      </main>

      {/* Event Cards */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[...GenesisData.events]
          .sort((a, b) => a.eventName.localeCompare(b.eventName))
          .map((event) => (
          <motion.div
            key={event.eventId}
            initial={{ scale: 1, boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(255,115,0,0.5)", // orange glow
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
                <p className="text-gray-300 px-4 whitespace-pre-wrap wrap-break-word">{selected.description}</p>
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

            <button
              onClick={() => handleRegister(selected.registrationLink)}
              // Container classes: Fixed position, z-index, colors, borders, and sharp transitions
              className="fixed bottom-8 right-8 z-50 group px-10 py-4 bg-blackborder-[3px] border-cyan-400 text-white font-bold text-xl uppercase tracking-[0.15em] shadow-[5px_5px_0_#d946ef,-4px_-4px_0_#06b6d4] hover:shadow-[-6px_-6px_0_#d946ef,6px_6px_0_#06b6d4] hover:border-fuchsia-500 hover:text-cyan-300 transition-all duration-150 ease-linear active:translate-x-[2px] active:translate-y-[2px] active:shadow-none overflow-hidden select-none" >
              {/* Scanline Overlay Texture (CRT Monitor effect) */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.7)_50%)] bg-[length:100%_4px] pointer-events-none z-20 opacity-60"></div>

              {/* Text Content with slight glow */}
              <span className="relative z-30 flex items-center gap-3 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                Register Now
                {/* An arrow that shifts color and position sharply on hover */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-fuchsia-500 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all duration-150">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>

              {/* Optional: A subtle flicker element that appears briefly on hover start */}
              <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[25deg] group-hover:animate-[ping_0.3s_linear_1] opacity-0"></div>
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GenesisPage;
``