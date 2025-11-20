import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dummy from "../../assets/dummy.png"; // Placeholder hero image

const HERO_IMAGE = dummy;

// Rangmanch event data adapted for usage
const Rangmanch = {
  title: "Rangmanch",
  tagline: "",
  events: [
    {
      id: 16,
      name: "Hasyamanch - Comic Play",
      desc: [
        "Laughter is the best way to create influence on the people.",
        "Unleash your thoughts, showcase your best satires and prove that humor too can be serious stuff.",
        "Rangmanch invites you all to put on your comic mask and help us laugh out loud."
      ],
      rules: [
        "The time duration of the performance is 8+4 minutes.",
        "The team shall consist of a minimum of 8 and a maximum of 15 people including the musicians.",
        "In violating the time limit, participants will be penalized by the judges. The given time duration is from the empty stage to the empty stage.",
        "Usage of fire or water is not allowed.",
        "Any instance of vulgarity or disturbing content of any order will lead to immediate disqualification.",
        "Only live music is allowed. Teams will have to bring their instruments.",
        "Reading dialogues from any material is not allowed on stage.",
        "Judging Criterion: Content- 40, Acting- 30, Direction- 20, Miscellaneous- 10.",
        "Plagiarism is heavily frowned upon and will lead to disqualification.",
        "For MNNIT Teams- No final year will be involved in lighting, music, props, acting, or any backstage help during the act/Play is subject to disqualification if found otherwise. (Exception - Technical/logistic issues during the act)",
        "Violation of any rule above will invite a 10 percent penalty for each rule broken.",
        "The judge's decision will be final and binding."
      ],
      coords: [],
    },
    {
      id: 17,
      name: "Pratibimb - Mono Act competition",
      desc: [
        "We invite you to take center stage as Rangmanch brings you, Pratibimb- the Mono Act competition.",
        "Let's watch you put yourself in others' shoes and see how far you can understand them."
      ],
      rules: [
        "The performance can be in either English or Hindi or both.",
        "For MNNIT participants: The time duration of the elimination round is 3+2 minutes; results of Alchemy Meet-2 will determine the final shortlist.",
        "For outside participants: The time duration of the elimination round is 5 minutes. Participants must submit a video to dramatics.mnnit2024@gmail.com with the subject line 'Mono-Act Submission <Participant-Name><College>'. Include contact details and a Google Drive link.",
        "The time duration of the final round is 4+2 minutes.",
        "The given time duration is from the empty stage to the empty stage.",
        "No one other than the performer should be on the stage while the lights are on.",
        "The use of fire or water is not allowed on stage.",
        "Any instance of vulgarity or disturbing content will lead to immediate disqualification.",
        "Lighting and background music are to be managed by the individuals themselves (with team members’ support).",
        "The stage should be cleared (including props) after the performance.",
        "Participants are not allowed to use any lyrical music in the background.",
        "The judges’ decision will be final and binding.",
        "Judging criteria: Acting-35, Content-30, Direction/Concept-20, Props-5, Music-10",
        "Plagiarism is heavily frowned upon, and detection of the same will lead to disqualification.",
        "Stage ethics should be kept in mind during the performance.",
        "For MNNIT Students- No final year will be involved in lighting, music, props, acting, or any backstage help during the act. The act is subject to disqualification if found otherwise. (Exception - Technical/logistic issues during the act)",
        "Violation of any rule above will invite a 10 percent penalty for each rule broken.",
        "The judge's decision will be final and binding."
      ],
      coords: [],
    },
    {
      id: 18,
      name: "Naatyamanch - Stage Play",
      desc: [
        "We invite you all to take part in the most popular form of theatre, Stage Play.",
        "Rangmanch brings you Natyamanch, Stage Play.",
        "So get up and get ready to mesmerize the world with your theatrics."
      ],
      rules: [
        "The team shall consist of a minimum of 8 and a maximum of 35 people (including people at lights, music and handling props).",
        "The duration of a single play is 40 + 10 mins.",
        "The timings shall be recorded from the first light/sound related to the play and end when the stage is Lit and left empty. This includes any props or actors. Please note that the stage must be clean when your performance is over.",
        "Judging criteria: Content/concept - 35, Acting - 25, Direction - 25, Play setting (props, music and lights) - 15",
        "Usage of fire on stage is not allowed.",
        "Lights, mics, music and any other additional requirements should be notified 3 to 4 days beforehand.",
        "Play is subject to disqualification if plagiarism is found or if any inappropriate language, vulgarity or disturbing content is found.",
        "Any lyrical content/voice lines must be live and cannot be played pre-recorded. Live music, songs or voice lines are allowed.",
        "For MNNIT Teams- No final year will be involved in lighting, music, props, acting or any backstage help during the act, Play is subject to disqualification if found otherwise. (Exception - Technical/logistic issues during the act)",
        "Violation of any rule above will invite a 10 percent penalty for each rule broken.",
        "The judge's decision will be final and binding."
      ],
      coords: [],
    },
    {
      id: 19,
      name: "Nukkad - Street Play",
      desc: [
        "Nukkad is one of the oldest and purest forms of dramatics.",
        "Rangmanch invites you all to experience the joy of street play."
      ],
      rules: [
        "The time duration of the performance is 20+5 minutes.",
        "The team shall consist of a minimum of 20 and a maximum of 25.",
        "In violating the time limit, participants will be penalized by the judges. The given time duration is from the empty stage to the empty stage.",
        "Usage of fire or water is not allowed.",
        "Any instance of vulgarity or disturbing content of any order will lead to immediate disqualification.",
        "Only live music is allowed. Teams will have to bring their instruments.",
        "Judging Criterion: Content- 40, Acting- 25, Direction- 25, Energy- 10",
        "The judge’s decision will be final and binding.",
        "The organising team reserves the right to change or modify any of the rules.",
        "Plagiarism is heavily frowned upon and detection of the same will lead to disqualification.",
        "For elimination of outside participants performance of at least 10 min.",
        "For MNNIT Teams- No final year will be involved in music, props, acting or any backstage help during the act. Nukkad is subject to disqualification if found otherwise. (Exception - Technical/logistic issues during the act)",
        "Violation of any rule above will invite a 10 percent penalty for each rule broken.",
        "The judge's decision will be final and binding."
      ],
      coords: [],
    }
  ]
};


const navLinks = ["Home", "Info", "Service", "Contact"];

const RangmanchPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-black font-sans text-gray-300">

      {/* TOP IMAGE AND HEADER */}
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-16 relative">

        {/* BACK BUTTON */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 px-5 py-2 border border-cyan-500 text-cyan-400 
                     rounded-lg hover:bg-cyan-500 hover:text-black transition font-semibold z-50"
        >
          ← Back
        </button>

        <div className="relative flex flex-col justify-center items-center md:w-1/2">
          <img
            src={HERO_IMAGE}
            alt="Event Hero"
            className="w-[330px] h-[300px] object-cover brightness-90 rounded-xl shadow-lg border border-cyan-600/60 neon-shadow"
          />

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute left-10 top-6 w-16 h-16 rounded-full bg-gradient-to-br 
                       from-fuchsia-600 to-cyan-600 filter blur-[2px] border border-cyan-600 shadow-2xl"
          />

          <div className="absolute right-16 top-28 w-12 h-12 bg-gradient-to-br 
                          from-blue-700 to-cyan-600 rotate-12 rounded-xl" />

          <div className="absolute left-14 bottom-10 w-10 h-10 bg-gradient-to-tr 
                          from-fuchsia-700 to-cyan-500 rounded-full opacity-90" />
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 text-center md:text-center">
          <h1 className="text-5xl font-bold neon-shadow text-cyan-400 mb-4 drop-shadow-xl tracking-wide uppercase">
            RANGMANCH
          </h1>

          <p className="text-lg text-cyan-300 mb-8 max-w-md mx-auto">
            Explore dramatics events and challenge your theatrical skills in these exciting competitions.
          </p>
        </div>
      </main>

      {/* EVENTS GRID */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {Rangmanch.events.map((event) => (
          <motion.div
            key={event.id}
            initial={{ scale: 1, boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(0,255,255,0.4)",
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="relative cyber-card p-6 border border-cyan-600 rounded-xl bg-black/90 
                       backdrop-blur-md shadow-md cursor-pointer text-center select-none"
            onClick={() => setSelected(event)}
          >
            <h2 className="text-2xl font-bold neon-shadow text-cyan-400 mb-2">
              {event.name}
            </h2>

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

      {/* EXPLORE PANEL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-xl 
                       border-t border-cyan-600/50 z-50 p-8 overflow-y-auto neon-shadow"
            style={{ overflowX: "hidden", overscrollBehavior: "contain" }}
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
              {selected.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              
              {/* Event Description */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  About the Event
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300">
                  {selected.desc.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </section>

              {/* Rules */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  Rules
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </section>

              {/* Coordinators */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                  Coordinators
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 text-center">
                  {selected.coords.length > 0 ? (
                    selected.coords.map((coord, idx) => (
                      <li key={idx}>
                        {coord.name} — {coord.phone}
                      </li>
                    ))
                  ) : (
                    <li>No coordinators listed.</li>
                  )}
                </ul>
              </section>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default RangmanchPage;
