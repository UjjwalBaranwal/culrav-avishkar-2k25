import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dummy from "../../assets/dummy.png"; // Adjust path as needed

const HERO_IMAGE = dummy;

const Rangsaazi = {
  eventName: "Rangsaazi",
  tagline: "",
  events: [
    {
      id: 20,
      name: "PAINT THE WAY",
      desc: [
        "THE WORLD IS YOUR CANVAS, PAINT IT WITHOUT INHIBITIONS."
      ],
      rules: [
        "This is a team event with a minimum size of 4 and a maximum size of 5.",
        "Time limit is 3 hrs.",
        "There will be an elimination round based on sketching and ideas. Entries have to be verified beforehand on the spot for participation in further rounds.",
        "Necessary items for road painting such as brushes, paints, chalks, etc. will be provided on the spot.",
        "You will have to restrict the size of your painting within the block of the road assigned to you.",
        "Further details will be shared on the spot.",
        "The evaluation will be based on the judges' discretion and interpretation of the painting, with marks based on the portrayal of the theme, creativity and overall presentation.",
        "The coordinators have the authority to change the rules of the event as per need."
      ],
      coords: [
        { name: "Tanishka Thakur", phone: "7089526552" },
        { name: "Rishiraj Poswal", phone: "7668816959" },
        { name: "Subham Kumar Choudhary", phone: "8507666101" },
        { name: "Meemansha Singh", phone: "6389574220" }
      ]
    },
    {
      id: 21,
      name: "LET’S FACE IT",
      desc: [
        "Brushing on smiles, one face at a time."
      ],
      rules: [
        "A team of 2 members will be allowed.",
        "Time limit is 2 hours.",
        "The face of a participant is to be painted with water colour, sketches and the materials provided during the event.",
        "The painting must represent the theme given at the time of the event.",
        "The evaluation will be based on the judges' discretion and interpretation of the painting, with marks based on the portrayal of the theme, creativity and overall presentation.",
        "The coordinators have the authority to change the rules of the event as per need."
      ],
      coords: [
        { name: "Abhay Agrawal", phone: "9695666222" },
        { name: "Shiksha Vishwakarma", phone: "6387054430" },
        { name: "Abhineet Agarwal", phone: "8791179718" },
        { name: "Simran Behera", phone: "7011206149" }
      ]
    },
    {
      id: 22,
      name: "SWADDLE",
      desc: [
        "FROM PAPER TO RUNWAY, CREATIVITY UNFOLDS."
      ],
      rules: [
        "This is a team event with a minimum size of 2 and a maximum size of 4. One team member will act as the model, while another will be tasked with designing the outfit.",
        "Time limit is 3 hours.",
        "Participating teams need to make a dress from the logistics provided to them on the spot.",
        "Newspapers, staplers, pins, and cello tape will be given to each team. No additional logistics, apart from the ones provided, can be used.",
        "Each team will have to give a presentation before the judges after the dress designing is over.",
        "The evaluation will be based on the judges' discretion and interpretation of the outfit, with marks based on the portrayal of the theme (if any), creativity and overall presentation.",
        "The coordinators have the authority to change the rules of the event as per need."
      ],
      coords: [
        { name: "Meemansha Singh", phone: "6389574220" },
        { name: "Shiksha Vishwakarma", phone: "6387054430" },
        { name: "Subham Kr Chaudhary", phone: "8507666101" },
        { name: "Karun", phone: "9667176881" }
      ]
    },
    {
      id: 23,
      name: "BLIND ART",
      desc: [
        "ART TRANSCENDS SIGHT, BORN FROM THE HEART."
      ],
      rules: [
        "A team of 2 members will be allowed.",
        "Time limit is 1.5 hours.",
        "Only one of the two members will be allowed to sketch/colour.",
        "The one drawing will be blindfolded. The teammate (if any) will only be allowed to instruct/help the person in the drawing orally.",
        "Only the blindfolded person is allowed to touch the drawing sheet.",
        "Only the provided stationaries should be used.",
        "Discussing or cheating with other teams will immediately lead to disqualification.",
        "The evaluation will be based on the judges' discretion and interpretation of the artwork, with marks based on the portrayal of the theme (if any), creativity and overall presentation.",
        "The coordinators have the authority to change the rules of the event as per need."
      ],
      coords: [
        { name: "Tanishka Thakur", phone: "7089526552" },
        { name: "Abhay Agrawal", phone: "9695666222" }
      ]
    },
    {
      id: 24,
      name: "Momento Vinci",
      desc: [
        "SKETCHING MOMENTS, ETCHING MEMORIES."
      ],
      rules: [
        "This is a solo event.",
        "Time limit is 2 hours.",
        "Participants are required to create an artwork based on a theme revealed on the spot. They may use sketching, painting, crayons, or any other creative medium to express their imagination.",
        "All logistics shall be provided on the spot. You won't be able to use additional logistics apart from those provided initially.",
        "The evaluation will be based on the judges' discretion and interpretation of the artwork with marks based on the portrayal of the theme (if any), creativity and overall presentation.",
        "The coordinators have the authority to change the rules of the event as per need."
      ],
      coords: [
        { name: "Abhineet Agarwal", phone: "8791179718" },
        { name: "Rishiraj Poswal", phone: "7668816959" }
      ]
    }
  ]
};


const RangsazziPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-black font-sans text-gray-300">
      {/* Top image and heading */}
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-16 relative">
        <div className="relative flex flex-col justify-center items-center md:w-1/2">
          <img
            src={HERO_IMAGE}
            alt="Rangsazzi Hero"
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
            RANGSAAZI
          </h1>
          <p className="text-lg text-cyan-300 mb-8 max-w-md mx-auto">
            Explore an expressive range of art and creativity in the Rangsazzi events.
          </p>
        </div>
      </main>

      {/* Event cards */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {Rangsaazi.events.map((event) => (
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
              type="button"
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

      {/* Explore panel on selection */}
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
              type="button"
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
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">About the Event</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300">
                  {selected.desc.map((point, idx) => <li key={idx}>{point}</li>)}
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Rules</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rules.map((rule, idx) => <li key={idx}>{rule}</li>)}
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Coordinators</h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-cyan-300 text-center">
                  {selected.coords.length
                    ? selected.coords.map((coord, idx) => (<li key={idx}>{coord.name} — {coord.phone}</li>))
                    : <li>No coordinators listed.</li>}
                </ul>
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RangsazziPage;
