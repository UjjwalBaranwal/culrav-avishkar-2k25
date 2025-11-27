import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dummy from "../../assets/dummy.png"; // Adjust path to your placeholder image

const HERO_IMAGE = dummy;

const Razzmatazz = {
  eventName: "Razzmatazz",
  tagline: "",
  events: [
    // ================= DESI SYNC =================
    {
      id: 112,
      name: "DESI SYNC",
      desc: [
        "Folklore Group Dance Competition.",
        "DANCE – Defeat All Negativity via Creative Expression.",
        "The spirited dance moves of cultural dance charge with your energy, as harmonious melodies handed down through ages reverberate through the air.",
        "Get in the groove, bring out your best moves, and set the stage of DESI SYNC on fire."
      ],
      rules: [
        // Eligibility
        "First-year, second-year, and third-year students are eligible to participate.",
        "Final-year students may perform with their final-year teams but will not be a part of the competition.",

        // Team composition
        "Each team must have a minimum of 4 active members.",
        "The maximum stage limit is 25 performers. Team size beyond this limit is permitted, but only 25 can perform on stage at a time.",

        // Performance duration
        "The time limit for each performance is 8 to 10 minutes, with an additional 1 minute for stage clearance and setup.",

        // Props & music
        "Props are allowed during the performance.",
        "Participants must bring their music in a pen drive. Live music is not permitted.",

        // Dance style restrictions
        "Western dance styles such as Hip-Hop, Popping, Locking, Waacking, Krumping, Breaking (B-Boying), House Dance, etc. are strictly prohibited.",
        "Committees are only allowed to perform their respective folk dance form and styles other than the ones listed above.",
        "Any violation of these rules will result in disqualification of the committee.",

        // 50% Rule for non-folk elements
        "Participants must ensure that allowed non-folk elements (including Bollywood songs and other permitted styles) do not exceed 50% of the total performance duration.",
        "The only permitted styles apart from folk may include limited elements within this 50% allowance.",
        "For example, in a 10-minute performance, the combined duration of allowed dance forms other than folk must not exceed 5 minutes.",
        "If the permitted elements other than folk collectively exceed 50% of the total performance time, the team will be subject to disqualification.",

        // Judging criteria
        "Judging Criteria:",
        "Synchronization – 15%",
        "Choreography – 20%",
        "Energy Levels – 15%",
        "Theme – 10%",
        "Expressions – 10%",
        "Creativity (Formations + Transitions) – 10%",
        "Costumes (Including Props) – 10%",
        "Cultural Representation – 10%",

        // General conduct
        "The performance must align with the integrity and spirit of the fest.",
        "The song selection should not contain vulgar or inappropriate content.",
        "Use of any substance or practices that may cause damage to the stage or any sort of inconvenience to other teams is strictly prohibited.",
        "Obscenity of any kind is strictly prohibited."
      ],
      coords: [
        { name: "Koona Rajarshi", phone: "6303565060" },
        { name: "Nidhi Bhagat", phone: "7068079707" },
        { name: "Vaibhav Kothary", phone: "7080074018" }
      ]
    },

    // ============== THE VAULT OF DANCE ============
    {
      id: 26,
      name: "Vault of Dance (Western Group Dance Competition)",
      desc: [
        "\"Every fall counts as a move if you own it with grace.\"",
        "We believe self-expression has no rules, so when you dance, it is uniquely you!",
        "If your body moves with the beats of the music as your soul syncs with the emotions, or maybe you just love to go wild and have fun, the moment is now.",
        "Get ready for the most awaited Western night of foot-stomping, toe-tapping fun as we bring the spirit of the Wild West to life with our 'Vault of Dance' event."
      ],
      rules: [
        "Time limit: 8 minutes - 12 minutes (including performance and set-up time).",
        "Team size: 6–30.",
        "Points will be deducted if the performance exceeds or falls short of the specified duration.",
        "At least 4 members should be present on the stage for any 10 seconds during the performance.",
        "Participants should get their own props. All props that will be used must be specified to the event coordinator.",
        "Use of any substances or practices that may cause damage to the stage or cause any sort of inconvenience to other teams is strictly prohibited.",
        "Participants are free to perform any dance style(s).",
        "Display of obscenity, vulgarity, and sensuality in any way will lead to disqualification.",
        "Multiple teams from the same college are allowed; however, one person can be a member of only one team.",
        "The audio track should be mailed to westerncommittee21@gmail.com by 30th November 2025. The subject of the email should be: 'VaultOfDance_TeamName_CollegeName'.",
        "The decision of the judges will be final and binding.",
        "Judging Criteria:",
        "Choreography & Versatility – 25%",
        "Coordination – 25%",
        "Energy + Body Language (expressions) – 20%",
        "Creativity and Originality – 20%",
        "Overall impact – 10%"
      ],
      coords: [
        { name: "Garv Gupta", phone: "9548171773" },
        { name: "Ayush Pratap Singh", phone: "8979765044" },
        { name: "Amandeep Singh", phone: "7520459672" }
      ]
    },

    // ================== REVEL =====================
    {
      id: 27,
      name: "Revel (Solo/Duet Dance Competition)",
      desc: [
        "Stepping into the spotlight, one beat at a time!",
        "Embracing the solo and duet dance vibes at Confluence, where your passion becomes the choreography.",
        "Each move is a celebration; each step is a story.",
        "Join us in this dance of self-expression at 'Revel'."
      ],
      rules: [
        "Time limit: 2.5 minutes - 3 minutes (including performance and set-up time).",
        "Points will be deducted if the performance exceeds or falls short of the specified duration.",
        "The choice of song and dance form is open to the participants.",
        "Participants should get their own props. All props that will be used must be specified to the event coordinator.",
        "Use of any substances or practices that may cause damage to the stage or cause any sort of inconvenience to other teams is strictly prohibited.",
        "The audio track should be mailed to westerncommittee21@gmail.com by 30th November 2025. The subject of the email should be: 'Revel_ParticipantName_CollegeName'.",
        "The decision of the judges will be final and binding.",
        "Judging Criteria:",
        "Choreography & Versatility – 30%",
        "Coordination – 30%",
        "Energy + Body Language (expressions) – 30%",
        "Creativity and Originality – 10%"
      ],
      coords: [
        { name: "Bhavya Soni", phone: "9558382581" },
        { name: "Humanshi Singh", phone: "7060801673" },
        { name: "Karnika Singh", phone: "8171703908" }
      ]
    },

    // ================= LEAP OF FAITH =============
    {
      id: 28,
      name: "Leap of Faith",
      desc: [
        "1v1 and Group Street Battle.",
        "\"Dancing is like dreaming with your feet.\""
      ],
      rules: [
        // 1v1 Street Battle
        "1v1 Street Battle:",
        "It will be a face-off between two participants decided by a draw system.",
        "Every round consists of 3 battles, each of 30–50 seconds.",
        "Same music will be played for both the participants and the participant with 2 out of 3 wins moves to the next round.",
        "In case of a tie, an extra battle will be conducted to decide the qualifier.",
        "Only street styles are allowed.",
        "Any kind of obscene or inappropriate action will lead to disqualification.",
        "The decision of the judges will be final and binding for all rounds of the battle.",
        "Judging Criteria (1v1):",
        "Musicality – 35%",
        "Energy – 20%",
        "Attitude and Execution – 10%",
        "Creativity and Uniqueness – 15%",
        "Crowd response – 10%",
        "Overall Impact – 10%",

        // Group Street Battle
        "Group Street Battle:",
        "\"Have you got what it takes to sweep the crowd off its feet? Bring your gang and prove it!\"",

        "Round 1 | The Jump-Off:",
        "Each crew performs a prepared routine showcasing signature style, musicality, and stage presence.",
        "Performance Duration: 45 seconds to 1 minute.",
        "The music track for this round will be given by the participating crew to the fest team at the venue.",
        "The top 4 ranked crews will advance to the next round.",
        "In case of ties, the decision of the judges will be final and binding.",

        "Round 2 | Final Showdown:",
        "Crews qualifying for this round will go against each other in a face-off competition.",
        "The order of the crews will be decided through a draw system.",
        "Battle 1: Crew 1 vs. Crew 2.",
        "Battle 2: Crew 3 vs. Crew 4.",
        "Final Battle: Winner of Battle 1 vs. Winner of Battle 2.",
        "3rd Position Battle: Runner-up of Battle 1 vs. Runner-up of Battle 2.",
        "The music tracks will be random and provided by the Fest Team at the venue.",
        "Same music will be provided to both the crews in each battle.",
        "Each battle will be in three rounds. In each round, a maximum of 4 members from each crew can go one after the other.",
        "The time limit for each round is 1 minute per crew (music on to music off), i.e., 1 min × 2 crews × 3 rounds = total 6 minutes for each battle.",
        "In case of a tie, an extra round may be provided and the decision of the judges will be final and binding.",

        "Judging Criteria (Group Battle):",
        "Choreography and Musicality – 15%",
        "Energy Level – 20%",
        "Attitude and Execution – 10%",
        "Creativity and Uniqueness – 15%",
        "Stage Utilisation – 10%",
        "Crowd response – 10%",
        "Overall Impact – 10%",
        "Overshadowing the opposite team – 10%"
      ],
      coords: [
        { name: "Garv Gupta", phone: "9548171773" },
        { name: "Nidhi Bhagat", phone: "7068079707" }
      ]
    },
  ]
};


const RazzmatazzPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-black font-sans text-gray-300">
      {/* TOP IMAGE AND HEADER */}
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-20 relative">
        {/* <div className="relative flex flex-col justify-center items-center md:w-1/2">
          <img
            src={HERO_IMAGE}
            alt="Razzmatazz Hero"
            className="w-[330px] h-[300px] object-cover brightness-90 rounded-xl shadow-lg border border-cyan-600/60 neon-shadow"
          />
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute left-10 top-6 w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-600 to-cyan-600 filter blur-[2px] border border-cyan-600 shadow-2xl"
          />
          <div className="absolute right-16 top-28 w-12 h-12 bg-gradient-to-br from-blue-700 to-cyan-600 rotate-12 rounded-xl" />
          <div className="absolute left-14 bottom-10 w-10 h-10 bg-gradient-to-tr from-fuchsia-700 to-cyan-500 rounded-full opacity-90" />
        </div> */}
        <div className="md:w-1/2 mt-12 md:mt-0 text-center md:text-center">
          <h1 className="text-5xl font-bold neon-shadow text-cyan-400 mb-4 drop-shadow-xl tracking-wide uppercase">
            RAZZMATAZZ
          </h1>
          <p className="text-lg text-cyan-300 mb-8 max-w-md mx-auto">
            Celebrate the spirit of dance with Razzmatazz events.
          </p>
        </div>
      </main>

      {/* EVENT CARDS */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[...Razzmatazz.events]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((event) => (
          <motion.div
            key={event.id}
            initial={{ scale: 1, boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(0,255,255,0.4)",
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="relative cyber-card p-6 border border-cyan-600 rounded-xl bg-black/90 backdrop-blur-md shadow-md cursor-pointer text-center select-none"
            onClick={() => setSelected(event)}
          >
            <h2 className="text-2xl font-bold neon-shadow text-cyan-400 mb-2">{event.name}</h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(event);
              }}
              className="mt-4 py-2 w-full border border-cyan-400 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-300 transition"
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
            className="fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-xl border-t border-cyan-600/50 z-50 p-8 overflow-y-auto neon-shadow"
            style={{ overflowX: "hidden", overscrollBehavior: "contain" }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-10 text-4xl text-cyan-400 hover:text-cyan-600 font-bold focus:outline-none"
              aria-label="Close Explore Panel"
            >
              ✕
            </button>
            <h2 className="text-4xl font-bold mt-4 neon-shadow text-cyan-400 mb-8 text-center">{selected.name}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Description */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">About the Event</h3>
                {selected.desc.length > 0 ? (
                  <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300">
                    {selected.desc.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-cyan-300 text-center">No description available.</p>
                )}
              </section>

              {/* Rules */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Rules</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </section>

              {/* Coordinators */}
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Coordinators</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 text-center">
                  {selected.coords.length > 0 ? (
                    selected.coords.map((coord, idx) => (
                      <li key={idx}>{coord.name} — {coord.phone}</li>
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

export default RazzmatazzPage;
