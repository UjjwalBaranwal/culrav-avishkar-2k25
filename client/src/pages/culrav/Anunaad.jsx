import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dummy from "../../assets/dummy.png"; // Replace with your image path

const TOP_IMAGE = dummy;

const Anunaad = {
  eventName: "Anunaad",
  tagline: "",
  mainCoords: [
    { name: "Puneet Yadav", phone: "8004371101" },
    { name: "Aditya", phone: "8863983770" },
    { name: "Mansi Maavi", phone: "9958380777" }
  ],
  events: [
    // 1. Voice of Culrav
    {
      id: 2,
      name: "Voice of Culrav",
      desc: [
        "Let your voice be heard and let the world sing along!",
        "This is a solo singing event with two rounds: auditions and a grand finale on the VOC stage."
      ],
      rules: [
        "This is a solo singing event.",
        "The event consists of 2 rounds.",
        "Round 1: Auditions. Selected participants will perform in the final round (Round 2) on the main event day.",
        "Round 2: Final round on the VOC stage, judged by guest judges.",
        "Each round is an elimination round.",
        "Any non-MNNIT participants must submit a video recording of them singing any song of their choice. Chosen participants will be invited to compete in the final round on the VOC stage.",
        "Time limit for performance will be 3 minutes 30 seconds.",
        "The final round requires all shortlisted candidates to submit one song of their choice from a provided list. A second song from the same list will be allotted by the organizers. Participants have to perform both songs.",
        "The second song will be provided as soon as you submit your response, so submit as early as possible.",
        "The songs present in the form are final and no additions will be made to the list at any cost.",
        "Background music is compulsory. You may either bring an accompanying instrumentalist or your own karaoke, which has to be submitted on the spot.",
        "Only singing will be considered for judgment.",
        "The judging will be based solely on singing parameters like Pitch Accuracy, Vocal Range, Voice Quality, Improvisations, etc.",
        "The decision of the judges will be final and binding."
      ],
      coords: [
        { name: "Mansi Maavi", phone: "9958380777" },
        { name: "Chetan Kumar", phone: "9116506017" }
      ]
    },

    // 2. Harmony
    {
      id: 3,
      name: "Harmony",
      desc: [
        "Twice the talent, twice the magic.",
        "A duet singing competition with two rounds: eliminations and a finale in MP Hall."
      ],
      rules: [
        "This is a duet singing competition.",
        "The competition will consist of 2 rounds.",
        "Round 1 is the elimination round which will be conducted before the main event.",
        "Outside participants will have direct entry to Round 2 for this event.",
        "Round 2 is the finale between selected contestants, which will be conducted on the date of the main event in MP Hall.",
        "Time allotted is 5 minutes (plus 2 minutes extra for sound check).",
        "Contestant teams may use a karaoke track or have at most one instrumentalist.",
        "Judgment will be made based on the vocals alone.",
        "Judging parameters include Pitch Accuracy, Vocal Range, Voice Quality, Improvisations, Harmonization, etc.",
        "The judge’s decision will be final and binding."
      ],
      coords: [
        { name: "Ankita Pandey", phone: "8084131840" },
        { name: "Prasansha Sthul", phone: "7620535205" },
        { name: "Kabeer Uppal", phone: "9599691573" }
      ]
    },

    // 3. Ijaad
    {
      id: 4,
      name: "Ijaad",
      desc: [
        "Get ready to drop the beat, unleash the rhythm.",
        "A platform for non-conventional music talents like EDM, beat-boxing, rapping, etc., in both solo and group formats."
      ],
      rules: [
        "This event is for non-conventional music talents (like EDM, beat-boxing, rapping, etc.).",
        "It is both a solo and group event.",
        "Combinations such as beat-boxing & rapping or vocals & rapping are highly preferred.",
        "Time limit for a performance will be 5 minutes (plus 2 minutes extra for sound check).",
        "A maximum of 4 participants can participate in a group.",
        "A participant can only have a single participation in this event (either solo or in one group).",
        "Round 1 is the elimination round which will be conducted before the main event.",
        "Round 2 is the finale between selected contestants, which will be conducted on the date of the main event.",
        "Backing track or accompanying instruments are allowed.",
        "Judging criteria will be based on complexity, creativity, etc.",
        "Original composition will get extra points.",
        "The decision of the judges will be final and binding."
      ],
      coords: [
        { name: "Aaruni Awasthi", phone: "8127767202" },
        { name: "Chinmay Malve", phone: "7757905825" }
      ]
    },

    // 4. Rocktave
    {
      id: 5,
      name: "Rocktave",
      desc: [
        "From soulful ballads to headbanging anthems, we’ve got your rock fix covered!",
        "This is the flagship band event of ANUNAAD’24.",
        "Two rounds: pre-elims for in-house bands (SWAARANG Day at MP Hall) and a grand finale at Gymkhana Ground.",
        "External participants are selected via video submissions during registration."
      ],
      rules: [
        "This is a band event.",
        "There will be two rounds:",
        "• Pre-elimination round only for in-house (MNNIT) bands, held at MP Hall on SWAARANG Day.",
        "• Final round at the Gymkhana Ground.",
        "For Pre-Elims (MNNIT bands only): Each band will be given 15 minutes stage time (including soundcheck).",
        "For External Participants: Selection will be based on a video submitted while registering (via form).",
        "The final round will consist of the selected bands and each will be given 25 minutes of stage time – 20 minutes performance + 5 minutes soundcheck.",
        "Bands can have 3–8 members.",
        "Any individual can be a part of only one team.",
        "At least one vocalist, one guitarist, and one percussionist is compulsory.",
        "No professional bands are allowed.",
        "Original composition will get extra points.",
        "The decision of the judges will be final and binding."
      ],
      coords: [
        { name: "Puneet Yadav", phone: "8004371101" },
        { name: "Aditya", phone: "8863983770" },
        { name: "Moyush", phone: "9365520268" }
      ]
    },

    // 5. Vadya
    {
      id: 6,
      name: "Vadya",
      desc: [
        "An instrumental-only event celebrating all genres and instruments.",
        "Open to solo and group performances with in-house screening and video-based external screening.",
        "Final round will be conducted during Culrav."
      ],
      rules: [
        "This is both a solo and group instrumental event.",
        "The event will consist of an initial screening round for in-house participants.",
        "For participants from other colleges, a video link showcasing their skills will be required for screening.",
        "Up to 5 members can participate in a team.",
        "All genres of music are entertained (Rock, Classical, Jazz, Blues, Hip-Hop, etc.).",
        "There is no restriction on the types of instruments used (Digital, Acoustic or Electric).",
        "Instrumental pieces can be self-composed, covered or improvised.",
        "Each participant (solo/group) is allowed a stage time of 8 minutes – 5 minutes of performance + 3 minutes sound check.",
        "The decision of the judges is final."
      ],
      coords: [
        { name: "Rachit Yadav", phone: "9119800805" },
        { name: "Priyanshu Anand", phone: "9430274017" },
        { name: "Manudev Verma", phone: "9336182425" }
      ]
    },

    // 6. Euphony
    {
      id: 7,
      name: "Euphony",
      desc: [
        "Let the acoustic rhythm take you on a journey.",
        "An acoustic band event with pre-elims and a finale at the Gymkhana Ground."
      ],
      rules: [
        "This is an acoustic band event.",
        "There will be two rounds: a pre-elimination round held before the main event, and a final round at the Gymkhana Ground.",
        "For the final round, each selected band will be given 15 minutes stage time (including soundcheck).",
        "The final round will consist of the selected bands and each will be given 15 minutes of stage time – 10 minutes performance + 5 minutes soundcheck.",
        "3–5 members are allowed to participate in a band.",
        "Any individual can be a part of only one team.",
        "At least one vocalist, one guitarist and one percussionist is compulsory.",
        "Only non-electrical instruments (acoustic guitar, acoustic bass, flutes, cajons etc.) are allowed.",
        "No drums and distortion are allowed.",
        "No professional bands are allowed.",
        "Original composition will get extra points."
      ],
      coords: [
        { name: "Sneha Sharma", phone: "8299112458" },
        { name: "Vishnu Som Sahu", phone: "8200871791" },
        { name: "Deeksha Singh", phone: "8604907159" }
      ]
    }
  ]
};


const SpandanPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-black font-sans text-gray-300">
      {/* TOP IMAGE AND HEADER */}
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-16 relative">
        <div className="relative flex flex-col justify-center items-center md:w-1/2">
          <img
            src={TOP_IMAGE}
            alt="Event Hero"
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
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 text-center md:text-center">
          <h1 className="text-5xl font-bold neon-shadow text-cyan-400 mb-4 drop-shadow-xl tracking-wide uppercase">
            ANUNAAD
          </h1>
          <p className="text-lg text-cyan-300 mb-8 max-w-md mx-auto">
            Flagship musical events, bringing together the best talent in solo, duet, band, and fusion performances across a diverse range of styles.
          </p>
        </div>
      </main>

      {/* EVENTS GRID */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {Anunaad.events.map((event) => (
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
            <h2 className="text-2xl font-bold neon-shadow text-cyan-400 mb-2">
              {event.name}
            </h2>
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
            <h2 className="text-4xl font-bold mt-4 neon-shadow text-cyan-400 mb-8 text-center">
              {selected.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
             {/* Event Description as bullet points */}
<section>
  <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
    About the Event
  </h3>
  <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 overflow-wrap break-word">
    {selected.desc.map((point, index) => (
      <li key={index}>{point}</li>
    ))}
  </ul>
</section>

{/* Rules */}
<section>
  <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
    Rules
  </h3>
  <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 max-h-[60vh] overflow-y-auto pr-4">
    {selected.rules.map((rule, index) => (
      <li key={index}>{rule}</li>
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
      selected.coords.map((c, i) => (
        <li key={i}>
          {c.name} — {c.phone}
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

export default SpandanPage;
