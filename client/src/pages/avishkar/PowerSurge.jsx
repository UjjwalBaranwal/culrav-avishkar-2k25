import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBgMobile from "../../assets/Avishkar_bg-mobile.png";
import AvishkarBG from "../../assets/AvishkarBG.png";

const PowerSurgeData = {
  eventName: "PowerSurge",
  tagline: "Ignite the Spark of Innovation",
  instagramLink: "https://www.instagram.com/powersurge/",
  events: [
    {
      eventName: "Pentathalon",
      eventId: "87",
      description:
        "Pentathalon is like a practice run where you will get to experience what it's like to apply for internships and job placements in real companies. It's a must-do for electrical department students and is done individually.",
      rules: [
        "Online Assessment - The assessment will include both aptitude and technical questions. For first-year students, the questions will be based on aptitude and the syllabus they have covered in previous semesters. Second-year and third-year students will have the option to choose between software, core, consultancy and analyst domains, and their test questions will be tailored accordingly. The duration of the test will be 90 minutes.",
        "Group Discussion / Extempore - We will conduct group discussions to help students understand the importance of communication skills and other qualities that companies seek in candidates.",
        "Interview - Second-year and third-year students will undergo interviews tailored to the domain they have chosen, while first-year students will have a general interview.",
        "Open to all branches (Electrical Compulsory)",
        "TEAM SIZE: 1  (Individual Event)",
      ],
      minTeamSize: 3,
      maxTeamSize: 5,
      PsLink: "",
      coordinators: [
        { name: "Priyadarshiny Pandey", contact: "9854063793" },
        { name: "Gyanesh Chandra Das", contact: "9668240015" },
        { name: "Adhiraj Dhar", contact: "9930092508" },
        { name: "Arpita Shrivastava", contact: "9302816168" },
        { name: "Arjun Gupta", contact: "8393891148" },
        { name: "Shagun", contact: "8299532641" },
      ],
    },
    {
      eventName: "Codesparks",
      eventId: "88",
      description:
        "A competetive programming event. battle of logic, skill and speed, CP helps clearing online assesments and interviews in tech giants. It makes you a fast learner and efficient problem solver",
      rules: [
        "Only individual participation is allowed.",
        "Open to all branches.",
        "Questions will be based on the basics of programming and data structures.",
        "Online coding test on HackerEarth platform: It will consist of 5-6 questions with varying difficulty, Participants will be given 2.5 hours to solve the problems",
        "Offline Interview will be conducted",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Sahil Verma", contact: "8789344935" },
        { name: "Nitin Kumar Chaudhary", contact: "8051705930" },
        { name: "Ayush Vashisht", contact: "9991051061" },
        { name: "Arjun Gupta", contact: "8393891148" },
      ],
    },
    {
      eventName: "DevOrDie",
      eventId: "89",
      description:
        "Calling all developers! Dive headfirst into Dev or Die the hackathon that will ignite your creativity and challenge your technical prowess. Choose your battleground from a diverse range of captivating problem statements, each demanding inventive solutions. Unveil your potential and forge something remarkable using your preferred arsenal of tech tools. Ready to prove your developer mettle?",
      rules: [
        "Participants must adhere to the specified time limits for each round.",
        "Plagiarism or copying of code from external sources is strictly prohibited.",
        "Participants must bring their development environment and equipment.",
        "Teams are limited to four members: Third-year students are permitted to form teams of two, and one member from the second and initial year will be assigned.",
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Shivam Kumar", contact: "7017903175" },
        { name: "Durgendra Pratap Singh", contact: "6394818680" },
        { name: "Mahendra Singh", contact: "7275328819" },
        { name: "Ayush Singh", contact: "9877943429" },
      ],
    },
    {
      eventName: "Predefined Hardware",
      eventId: "90",
      description:
        "A team-based event focusing on simulation and hardware projects related to electrical engineering. IT IS A CORE ELECTRICAL ENGINEERING TEAM BASED EVENT CONSISTING OF PROBLEM STATEMENTS RELATED TO KNOWLEDGE IN ELECTRICAL ENGINEERING.",
      rules: [
        "In Round 1 there will be mock ppt, MOCK PPT - MOCK PPT ROUND IS WHERE TEAMS EXPLAIN WHAT WAS THEIR APPROACH TOWARDS THE PROBLEM STATEMENTS, CONCEPTS, SIMULATION RESULTS IN A PPT.",
        "Round 2 will be final ppt round, FINAL PPT ROUND IS WHERE THE TEAMS WILL PRESENT THEIR RESPECTIVE HARDWARE AND SIMULATED RESULTS ALONGSIDE THEIR PPTS TO THE PROFESSORS.",
        "Only B.Tech students in specified branches and years are eligible.",
        "Team size of 3-5 is allowed.",
      ],
      maxTeamSize: 5,
      minTeamSize: 3,
      PsLink: "",
      coordinators: [
        { name: "Md Faizan, ", contact: "8210132648" },
        { name: "Mahendra Singh,", contact: "7275328819" },
        { name: "Abhishek Gautam,", contact: "9929230515" },
        { name: "Aditya Narayan Gond", contact: "7524023270" },
      ],
    },
    {
      eventName: "CircuitBizz",
      eventId: "91",
      description:
        "Where circuit meets sharpness and process meets fun, Event based on circuit solving capability and some basic knowledge of networks It's a technical fun event",
      rules: [
        "Individual participation only.",
        "Btech. All (1st and 2nd Year)",
        "Btech. 3rd year (ECE, EE)",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [{ name: "Arihant Singh", contact: "8690585406" }],
    },
    {
      eventName: "War of Currents",
      eventId: "92",
      description:
        "A stress-relieving event mixing learning with adventure, designed to offer an engaging experience outside academics. Solve riddles and enigmas in a mysterious quiz round. Join The War of Currents for an electrifying, Agent 007-inspired journey!",
      rules: [
        "Open to participants from all courses.",
        "Teams must complete the challenges within the time frame.",
        "Inter year participation is allowed",
      ],
      maxTeamSize: 3,
      minTeamSize: 3,
      PsLink: "",
      coordinators: [
        { name: "Arpita Shrivastava", contact: "9302816168" },
        { name: "Ayush kumar", contact: "6203912253" },
      ],
    },
  ],
};




const PowerSurgePage = () => {
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
            {PowerSurgeData.eventName}
          </h1>
          {PowerSurgeData.tagline && (
            <p className="text-lg text-cyan-300 mb-8 max-w-md">
              {PowerSurgeData.tagline}
            </p>
          )}
        </div>
      </main>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {PowerSurgeData.events.map((event) => (
          <motion.div
            key={event.eventId}
            initial={{ scale: 1, boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(0,255,255,0.4)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.98 }}
            className="relative p-6 border border-cyan-600 rounded-xl bg-black/90 
                       backdrop-blur-md shadow-md cursor-pointer text-center select-none"
            onClick={() => setSelected(event)}
          >
            <h2 className="text-2xl font-bold neon-shadow text-cyan-400 mb-2">
              {event.eventName}
            </h2>

            {/* Center Explore Button */}
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

      {/* Details Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-md 
                       z-50 p-8 overflow-y-auto neon-shadow"
            style={{ overscrollBehavior: "contain" }}
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
                  {selected.rules.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              {/* Coordinators */}
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  Coordinators
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 text-center">
                  {selected.coordinators.map((c, i) => (
                    <li key={i}>
                      {c.name} — {c.contact}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-cyan-300 text-left">
                  <strong>Team size:</strong> {selected.minTeamSize} - {selected.maxTeamSize}
                </p>
              </div>

            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PowerSurgePage;
