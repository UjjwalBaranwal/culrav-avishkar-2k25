import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBG from "../../assets/a_s_bg.png";

const RasayansData = {
  eventName: "Rasayans",
  tagline: "Chemistry Unleashed",
  instagramLink: "",
  events: [
    {
      eventName: "Chemethlon",
      eventId: "01",
      description:
        "Chemethlon is a mock placement event designed to simulate real recruitment processes for Core, Consultancy, and Software roles. Participants go through resume screening, online tests, group discussions, and personal interviews, closely mimicking real-world placement procedures. The event helps students enhance resume quality, test technical and aptitude skills, improve group discussion and interpersonal skills, and prepare for HR and technical interviews. Valuable coaching and feedback will be provided to help students boost their confidence and performance.",
      rules: [
        "Round 1 – Resume Submission: Participants submit their resumes for evaluation based on structure, formatting, relevant skills/coursework, clarity, and correctness.",
        "Round 2 – Online Test (Core / Software / Consultancy): Track-wise test including Chemical engineering fundamentals (Core) / Programming logic, DSA, CS fundamentals (Software) / Aptitude, logical reasoning, Data Science (Consultancy).",
        "Round 3 – Group Discussion: Evaluation of communication skills, clarity of thought, and ability to structure ideas.",
        "Round 4 – Interviews: Technical and/or HR interviews assessing domain knowledge, problem-solving approach, and overall personality.",
        "Eligibility: Compulsory event for all years of Chemical Engineering.",
        "Participation Type: Individual participation only.",
        "Branch: Only Chemical Engineering students are eligible.",
        "There will be no elimination in any of the rounds."
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Aman Goyal", contact: "9528987040" },
        { name: "Adeeb Sheikh", contact: "9580425894" },
        { name: "Raj Upadhyay", contact: "7607056068" }
      ],
    },
    {
      eventName: "ChemExpo",
      eventId: "02",
      description:
        "Chem Expo (From Concept to Creation) is a flagship model-design event where participants design and build functional models or process solutions that address real-life chemical engineering problems. The event promotes innovative thinking, focusing on industrial, environmental, and sustainability challenges. Participants are encouraged to blend scientific rigor with practical design and showcase how chemical engineering can enable a greener and more efficient future.",
      rules: [
        "Round 1 – Abstract Submission: Teams submit an abstract outlining their model, industrial relevance, objectives, and basic methodology.",
        "Round 2 – Model Showcasing: Presentation and demonstration of the physical/working model or process solution.",
        "Round 3 – Viva: Technical questioning based on concept, design, application, and feasibility of the model.",
        "Cross-branch teams are allowed.",
        "At least one team member must be from Chemical Engineering.",
        "Team Size: 1st Year – Maximum 4 members; 2nd & 3rd Year – Maximum 3 members.",
      ],
      maxTeamSize: 4, // overall max (covers 1st year)
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Ashwani Kumar", contact: "6397711952" },
        { name: "Devashish Gangwani", contact: "9695600574" },
        { name: "Shubham Swarnkar", contact: "9199392060" }
      ],
    },
    {
      eventName: "Simulenz 2.0",
      eventId: "03",
      description:
        "Simulenz 2.0 is a flagship process simulation and design competition exclusively for Chemical Engineering students. It mimics the workflow of a process engineer—from understanding industrial problems, building simulation models, and performing engineering analysis, to presenting a professional solution. The event emphasizes real-world industrial relevance, technical accuracy, software competency (Aspen Plus/HYSYS and MATLAB), sound engineering judgment, and clear technical communication.",
      rules: [
        "Team Event exclusively for Chemical Engineering students.",
        "Tasks by Year:",
        "  • 1st Year – PFD Design: Create a Process Flow Diagram (PFD) for an assigned industrial process including major equipment symbols, stream flows, and logical sequencing. Basic mass balance is an optional bonus.",
        "  • 2nd Year – Aspen Simulation: Solve an industrial problem using Aspen Plus/HYSYS with correct thermodynamic package selection, complete flowsheet, and mass-energy balance closure along with basic sensitivity analysis.",
        "  • 3rd Year – Aspen + MATLAB: Solve an advanced industrial problem using simulation plus numerical analysis. Use MATLAB for optimization, parameter estimation, or regression of Aspen data and provide engineering insights.",
        "Round 1 – Mid Evaluation: Teams present problem understanding, initial PFD/simulation setup, key assumptions, early results/code (for 3rd year), and challenges faced.",
        "Round 2 – Final Presentation: 10–15 minute presentation covering objectives, industrial relevance, assumptions, design basis, PFD/flowsheet, simulation/MATLAB results, key graphs/tables/sensitivities, conclusions, and recommendations, followed by Q&A.",
        "Eligibility: Branch – Only Chemical Engineering.",
        "Team Size: Maximum 3 members for 1st & 2nd year teams; Maximum 2 members for 3rd year teams."
      ],
      maxTeamSize: 3,
      minTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Yogesh Pradhan", contact: "6393805530" },
        { name: "Krishna", contact: "9760923216" }
      ],
    },
    {
      eventName: "Quizzeria",
      eventId: "04",
      description:
        "Quizzeria is a multi-round quiz-based event designed to test general knowledge, reasoning ability, and logical thinking, with a special focus on chemical engineering concepts. Teams face a mix of MCQs, infographic-based questions, crosswords, and an exciting surprise round.",
      rules: [
        "Round 1 – Quiz Round: MCQs and infographic-based questions from various domains including general knowledge, reasoning, and basic technical awareness.",
        "Round 2 – Crossword Round: Teams solve a crossword puzzle based on chemical engineering concepts.",
        "Round 3 – Surprise Round: Fun and challenging surprise format revealed on the spot.",
        "Team Participation: Cross-branch teams are allowed.",
        "Team Size: 2–3 members per team.",
        "Eligibility: At least one member must be from Chemical Engineering."
      ],
      maxTeamSize: 3,
      minTeamSize: 2,
      PsLink: "",
      coordinators: [
        { name: "Deepika Singh", contact: "" }, // roll no given, no phone in data
        { name: "Mishti Kesarwani", contact: "" }
      ],
    },
    {
      eventName: "CodeKinetics",
      eventId: "05",
      description:
        "CodeKinetics is a web development and design competition focused on building real-world, open-tech–based web applications. Participants work through the complete workflow of a web developer—from understanding a problem statement and designing interfaces to building, testing, and presenting a working web application. The event emphasizes real-world problem solving, technical accuracy (frontend, backend, APIs), software competency with modern open tech stacks, design thinking, user experience, and strong presentation/documentation skills.",
      rules: [
        "Team Event.",
        "Participants are encouraged to use modern web technologies (HTML, CSS, JavaScript, frameworks such as React/Next.js), backend tools, and databases.",
        "Use of open-source tools, version control (Git/GitHub), and collaborative development practices is encouraged.",
        "Round 1 – Abstract Submission: Teams submit an abstract describing the problem being solved, proposed features and user flow, and planned tech stack (frontend, backend, database, tools).",
        "Round 2 – Mid Evaluation: Review of basic UI layouts or wireframes, initial implementation (core pages/basic functionality), and progress against the submitted abstract.",
        "Round 3 – Final Demo & Evaluation: Final demonstration and evaluation of the complete web application, code quality and structure, UI/UX, responsiveness, performance, and clarity of presentation.",
        "Eligibility & Team Rules:",
        "  • Cross-branch teams are allowed.",
        "  • Team Leader must be from Chemical Engineering.",
        "  • Team Size: 1st Year – Maximum 4 members; 2nd & 3rd Year – Maximum 3 members."
      ],
      maxTeamSize: 4, // covers 1st-year max
      minTeamSize: 2,
      PsLink: "",
      coordinators: [
        { name: "Sumit Jha", contact: "9305064289" },
        { name: "Sarvagya", contact: "8791219061" },
        { name: "Mohammad Anish", contact: "6200257592" }
      ],
    },
    {
      eventName: "Data Vision",
      eventId: "06",
      description:
        "Data Vision is a data analytics and ML-based competition where teams solve a provided problem statement using tools like Power BI, machine learning, and optionally web development. The event focuses on building end-to-end data-driven solutions—from data understanding and preprocessing to modelling, visualization, and presentation. It evaluates correctness of approach, quality of ML modelling, clarity of dashboards, and the ability to derive meaningful insights.",
      rules: [
        "Branches Allowed: All branches are allowed.",
        "Team Leader Requirement: The team leader must be from Chemical Engineering.",
        "Team Composition:",
        "  • 1st Year: Up to 4 members per team.",
        "  • 2nd & 3rd Year: Up to 3 members per team.",
        "Tool Requirements:",
        "  • 1st Year: Power BI is compulsory; ML is optional but earns extra credit.",
        "  • 2nd & 3rd Year: ML-based modelling is mandatory.",
        "  • Web development is optional but provides additional credit if used creatively.",
        "Project Expectations:",
        "  • The entire solution must address the provided problem statement.",
        "  • Dataset modification beyond cleaning and feature engineering is not allowed.",
        "  • Plagiarism or copying existing models without proper understanding will lead to disqualification.",
        "Event Rounds:",
        "  • Round 1 – Abstract Submission.",
        "  • Round 2 – Progress Report + Live Mid Evaluation.",
        "  • Round 3 – Final Report + Code + Dashboards + Presentation.",
        "Evaluation Considerations:",
        "  • Relevance and correctness of the chosen approach.",
        "  • Quality and depth of ML modelling (where applicable).",
        "  • Clarity of visualizations and meaningfulness of insights.",
        "  • Creativity in using optional tools (e.g., web app integration).",
        "  • Presentation clarity and ability to defend the solution.",
        "  • For 1st years: Effective use of Power BI; any ML attempt earns bonus points.",
        "Mentorship: Mentors may be assigned to teams based on availability and request."
      ],
      maxTeamSize: 4, // accommodates 1st-year max
      minTeamSize: 2,
      PsLink: "",
      coordinators: [
        { name: "Sahil Parvez Ansari", contact: "" },
        { name: "Shaniya Mulla", contact: "" },
        { name: "Arisha Siddiqui", contact: "" }
      ],
    },
  ],
};


const RasayansPage = () => {
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
            {RasayansData.eventName}
          </h1>

          {RasayansData.tagline && (
            <p
              className="mx-auto text-gray-200 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mt-2 sm:mt-3"
            >
              {RasayansData.tagline}
            </p>
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
                <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 text-center">
                  {selected.coordinators.length==0?
                  <h1 >No coordinators listed</h1>:
                  selected.coordinators.map((c, i) => (
                    <li key={i}>
                      {c.name} — {c.contact}
                    </li>
                  ))}
                </ul>
                {/* <p className="mt-6 text-gray-300 text-left"><strong>Team size:</strong> {selected.minTeamSize} - {selected.maxTeamSize}</p> */}
              </div>
            </section>

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

export default RasayansPage;
