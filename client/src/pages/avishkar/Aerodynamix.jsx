import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";

import AvishkarBG from "../../assets/a_s_bg.png";

const AerodynamixData = {
  eventName: "Aerodynamix",
  tagline: "Where Aerodynamics Meets Innovation",
  events: [
    {
      eventName: "VISIONQUEST",
      registrationLink: "",
      eventId: "01",
      description:
        "Step into the world of machine vision and AI-powered perception by building intelligent systems that see like humans do. Explore the fusion of drones and artificial intelligence through computer vision and machine learning challenges. Whether detecting drones from images or tracking their real-time motion, this event lets you apply cutting-edge AI techniques to aerial systems.",
      rules: [
        "AI/ML + Computer Vision based challenge.",
        "Tasks may include drone detection, tracking or image-based predictions.",
        "Use of pretrained models allowed unless specified otherwise.",
        "Participants must not violate safety or ethical AI guidelines.",
        "Final rules will be announced before the event.",
      ],
      coordinators: [
        { name: "Abhay Pratap Singh", contact: "8077100909" },
        { name: "Lanke Manasi", contact: "7066290061" },
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
    },

    {
      eventName: "FALCON",
      registrationLink: "",
      eventId: "02",
      description:
        "Design, build, and pilot your own RC aircraft in this exciting aerodynamics competition. Test your engineering skills by creating a high-performance flying machine that can execute aerial maneuvers and precision tasks. Perfect for aviation enthusiasts ready to bring their aircraft designs to life.",
      rules: [
        "Teams must build their own RC aircraft.",
        "Pre-built kits are not allowed unless approved.",
        "Aircraft must pass all safety checks before flight.",
        "Crash or unsafe flight may result in disqualification.",
        "Judging based on stability, control, maneuverability and accuracy.",
      ],
      coordinators: [
        { name: "Madhav Goyal", contact: "9058691081" },
        { name: "Nikhil Kumar", contact: "6386313708" },
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
    },

    {
      eventName: "HOVERTROUBLE",
      registrationLink: "",
      eventId: "03",
      description:
        "Build a functional hovercraft using principles of lift, friction, and air cushion technology. Apply your knowledge of aerodynamics and mechanical design to create a vehicle that floats and maneuvers across surfaces. Compete in speed, stability, and control challenges.",
      rules: [
        "Teams must design & build their own hovercraft.",
        "No harmful or unsafe materials allowed.",
        "Hovercraft must stay inside arena boundaries.",
        "Points based on speed, stability, control & design.",
        "Judges' decision is final.",
      ],
      coordinators: [
        { name: "Jahnavi Mishra", contact: "8400899324" },
        { name: "Sumit Tripathi", contact: "9519394183" },
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
    },

    {
      eventName: "AERONEXUS",
      registrationLink: "",
      eventId: "04",
      description:
        "Pilot unmanned aerial vehicles using smartphone controls in this cutting-edge drone competition. Navigate challenging courses and complete mission objectives while demonstrating precision flying and strategic thinking. Experience the future of aerial systems through mobile-based flight control.",
      rules: [
        "Participants must use smartphone-controlled UAVs.",
        "Obstacle course navigation required.",
        "Unsafe flying may lead to penalties.",
        "Multiple mission objectives must be completed.",
        "Final scoring based on control, precision & completion time.",
      ],
      coordinators: [
        { name: "Vikram Anand", contact: "8789370349" },
        { name: "Nikhil", contact: "9369469765" },
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
    },
  ],
};

const AerodynamixPage = () => {
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
      {/* Background */}
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
      <main className="relative flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide neon-shadow text-gray-100 mb-4 text-center">
          {AerodynamixData.eventName}
        </h1>

        {AerodynamixData.tagline && (
          <p className="text-gray-300 text-sm sm:text-base mt-2 text-center">
            {AerodynamixData.tagline}
          </p>
        )}
      </main>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[...AerodynamixData.events]
          .sort((a, b) => a.eventName.localeCompare(b.eventName))
          .map((event) => (
            <motion.div
              key={event.eventId}
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(255,115,0,0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              className="p-6 border border-gray-400 rounded-xl bg-black/90 backdrop-blur-md text-center cursor-pointer"
              onClick={() => setSelected(event)}
            >
              <h2 className="text-2xl font-bold text-gray-300 neon-shadow mb-2">
                {event.eventName}
              </h2>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(event);
                }}
                className="mt-4 py-2 w-full border border-gray-300 rounded-lg bg-gray-300 text-black font-semibold hover:bg-gray-200"
              >
                Explore
              </button>
            </motion.div>
          ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45 }}
            className="fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-xl z-50 p-8 overflow-y-auto"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-10 text-4xl text-gray-300 hover:text-gray-100"
            >
              ✕
            </button>

            <h2 className="text-4xl font-bold neon-shadow text-gray-400 mb-8 text-center">
              {selected.eventName}
            </h2>

            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Description */}
              <div>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">
                  About the Event
                </h3>
                <p className="text-gray-300">{selected.description}</p>
              </div>

              {/* Rules */}
              <div>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">
                  Rules
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 max-h-[60vh] overflow-y-auto text-gray-300">
                  {selected.rules.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              {/* Coordinators */}
              <div>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">
                  Coordinators
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 text-center">
                  {selected.coordinators.length == 0 ?
                    <h1 >No coordinators listed</h1> :
                    selected.coordinators.map((c, i) => (
                      <li key={i}>
                        {c.name} — {c.contact}
                      </li>
                    ))}
                </ul>
              </div>

            </section>

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

export default AerodynamixPage;
