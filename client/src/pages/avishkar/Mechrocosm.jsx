import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AvishkarBgMobile from "../../assets/Avishkar_bg-mobile.png";
import AvishkarBG from "../../assets/AvishkarBG.png";

const MechrocosmData = {
  eventName: "Mechrocosm",
  tagline: "",
  instagramLink: "",
  events: [
    {
      eventName: "Triathlon",
      eventId: "62",
      description:
        "This event focuses on providing real-time experience of the campus recruitment process, preparing you to stand out and succeed in the competitive job market.",
      rules: [
        "Branches allowed: Mech, PIE, ECM, MTE.",
        "Individual participation.",
        "Compulsory for 1st, 2nd and 3rd Year Mech, PIE, ECM, and Material Engg students.",
        "Individuals can apply for one profile only or choose from combinations (Core and Consultancy, Software and Consultancy).",
      ],
      minTeamSize: 1,
      maxTeamSize: 1,
      PsLink: "",
      coordinators: [
        { name: "Sumit Mishra", contact: "8853818768" },
        { name: "Kamal Ahmad", contact: "8006058289" },
        { name: "Shretank Prakash", contact: "8006058289" },
        { name: "Pulkit SInghal", contact: "7906696918" },
        { name: "Shreepati Kamlesh thakur", contact: "7906696918" },
        { name: "Shivam kumar", contact: "7906696918" },
        { name: "Satyam Singh", contact: "7906696918" },
      ],
    },
    {
      eventName: "Industrial Monopoly",
      eventId: "63",
      description:
        "Now’s your opportunity to demonstrate your leadership and business acumen. Join the auction, leverage your expertise and bidding powers to secure the capital needed to build your dream enterprise.",
      rules: [
        "Open to all years and courses (except B.Tech final year).",
        "Team size: 3-4.",
        "Inter-branch teams allowed; inter-year teams not allowed.",
      ],
      minTeamSize: 3,
      maxTeamSize: 4,
      PsLink: "",
      coordinators: [
        { name: "Uttam Kumar Gupta", contact: "8828100580" },
        { name: "Prashant Gupta", contact: "8417065947" },
        { name: "Anshika Kushwaha", contact: "7800173762" },
        { name: "Suyash Tiwari", contact: "9839479590" },
      ],
    },
    {
      eventName: "Crack the Case",
      eventId: "64",
      description:
        "Dive into innovative challenges with machine learning, web development, and more. Create, compete, and shine in this skill-boosting event. Are you ready to tackle case studies and guesstimates? Join us for an event packed with multiple rounds designed to challenge your analytical thinking, decision-making, and creativity!",
      rules: [
        "B.Tech all branches (1st, 2nd, and 3rd years), MBA (1st year).",
        "Inter-year teams not allowed.",
        "Team size: 4 (B.Tech 1st year) / 3 (all others).",
        "Inter-branch teams allowed.",
      ],
      minTeamSize: 3,
      maxTeamSize: 4,
      PsLink: "",
      coordinators: [
        { name: "Uttam Kumar Gupta", contact: "8863001919" },
        { name: "Prashant Gupta", contact: "8417065947" },
        { name: "Samridhi Singh", contact: "9450118252" },
      ],
    },
    {
      eventName: "Mechathon",
      eventId: "65",
      description:
        "Collaborate to solve real-world engineering challenges in this hands-on event. Compete through multiple stages and present your solutions. Get ready to dive into a world of innovation, where we explore everythingfrom cutting-edge machine learning to the latest in web development. This event has everything you need to create, compete, and shine—perfect for leveling up your skills and adding that extra edge to your resume.",
      rules: [
        "Branches allowed: ME, PIE, ECM, Material Engg.",
        "Team Size: 3.",
        "Eligibility: B.Tech 1st, 2nd, and 3rd years.",
        "Inter-year teams not allowed.",
      ],
      minTeamSize: 3,
      maxTeamSize: 3,
      PsLink: "",
      coordinators: [
        { name: "Vishal Pal", contact: "6387674208" },
        { name: "Shubham Nirmal", contact: "8828100580" },
        { name: "Kamal Ahmad", contact: "9837594686" },
        { name: "Uttam Kumar Gupta", contact: "7060036209" },
      ],
    },
    {
      eventName: "Automax",
      eventId: "66",
      description:
        "Attention, auto engineering enthusiasts! Here’s your chance to dive into real-world challenges, pushing your design skills to new limits. Get hands-on and show what you’re truly made of !",
      rules: [
        "Branches allowed: ME, PIE, ECM, Material Engg.",
        "Team Size: 4.",
        "Eligibility: B.Tech 1st, 2nd, and 3rd years.",
        "Inter-year teams not allowed.",
      ],
      minTeamSize: 4,
      maxTeamSize: 4,
      PsLink: "",
      coordinators: [
        { name: "Suryansh Pathak", contact: "9569827409" },
        { name: "Shloak Pandey", contact: "8960870435" },
      ],
    },
    {
      eventName: "Blueprint",
      eventId: "67",
      description:
        "Step into the world of 3D modeling- where creativity meets geometry, bringing ideas to life in immersive virtual reality. Enhance your skills, explore real-world design, and watch concepts take shape in stunning detail.",
      rules: [
        "Branches allowed: ME, PIE, ECM, Material Engg.",
        "Team Size: 3 (1st and 2nd years), 2 (3rd year).",
        "Eligibility: B.Tech 1st, 2nd, and 3rd years.",
        "Inter-year teams not allowed.",
      ],
      minTeamSize: 2,
      maxTeamSize: 3,
      PsLink: "",
      coordinators: [
        { name: "Sumit Mishra", contact: "8853818768" },
        { name: "Harsh Maharshi", contact: "9079039894" },
        { name: "Anu Priya", contact: "9065028187" },
      ],
    },
    {
      eventName: "Survivor Series",
      eventId: "68",
      description:
        "Hola survivors! Since you've incredibly survived your JEE or college journey so far, we now summon you to face a new set of thrilling challenges! Brace yourselves to tackle mind-bending questions and overcome obstacles as you quest forward— remember only the sharpest will survive!",
      rules: [
        "Eligibility: Open to all (except B.Tech final years).",
        "Team Size: 2-3.",
        "All branches allowed.",
        "Inter-year teams not allowed.",
      ],
      minTeamSize: 2,
      maxTeamSize: 3,
      PsLink: "",
      coordinators: [
        { name: "Siddhesh dongare", contact: "7060036209" },
        { name: "Shivam Kumar Singh", contact: "9837594686" },
        { name: "Taniya Singh", contact: "7818949254" },
      ],
    },
    {
      eventName: "Turbo Speed Showdown",
      eventId: "69",
      description:
        "Welcome to the world of turbo speed showdown... Do you have that adrenaline rush to go beyond the boundaries and venture off to turbulent domains? If so we urge you to come up, unleash your creativity and compete for the crown.",
      rules: [
        "Eligibility: B.Tech 1st, 2nd, and 3rd years.",
        "All branches allowed.",
        "Team Size: 4-6.",
        "Inter-branch teams allowed; inter-year teams not allowed.",
      ],
      minTeamSize: 4,
      maxTeamSize: 6,
      PsLink: "",
      coordinators: [
        { name: "Uttam Kumar Gupta", contact: "8853818768" },
        { name: "Ayush Srivastav", contact: "8006058289" },
        { name: "Prashant Gupta", contact: "8006058289" },
      ],
    },
  ],
};



const MechrocosmPage = () => {
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
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-20 relative">

        {/* BACK BUTTON */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 px-6 py-3 border border-cyan-500 text-cyan-400 
          rounded-lg hover:bg-cyan-500 hover:text-black transition font-semibold text-lg"
        >
          ← Back
        </button>

        <div className="md:w-1/2 mt-12 md:mt-0 text-center md:text-left">
          <h1 className="text-5xl font-bold neon-shadow text-cyan-400 mb-4 tracking-wide uppercase">
            {MechrocosmData.eventName}
          </h1>

          {MechrocosmData.tagline && (
            <p className="text-lg text-cyan-300 mb-6 max-w-md">
              {MechrocosmData.tagline}
            </p>
          )}
        </div>
      </main>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {MechrocosmData.events.map((event) => (
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
            <h2 className="text-2xl font-bold neon-shadow text-cyan-400 mb-2">
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

            <h2 className="text-4xl font-bold mt-4 neon-shadow text-cyan-400 mb-8 text-center">
              {selected.eventName}
            </h2>

            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  About the Event
                </h3>
                <p className="text-cyan-300 whitespace-pre-wrap">
                  {selected.description}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  Rules
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rules.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  Coordinators
                </h3>

                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 text-center">
                  {selected.coordinators.map((c, i) => (
                    <li key={i}>{c.name} — {c.contact}</li>
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

export default MechrocosmPage;
