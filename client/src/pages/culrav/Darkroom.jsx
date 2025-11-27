import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dummy from "../../assets/dummy.png"; // Replace with your hero image path

const HERO_IMAGE = dummy;

const Darkroom = {
  eventName: "Darkroom",
  tagline: "",
  events: [
    // =============== PICTURE TALE ===============
    {
      id: 1,
      name: "Picture Tale",
      desc: [
        "Unleash your inner storyteller by crafting an unforgettable tale through imagery.",
        "Depict a story based on the theme in a series of 5–10 pictures."
      ],
      rules: [
        "Team Size: Solo.",
        "Only one round will be conducted for this event.",
        "Themes: 1) The power of friendship 2) A day in the life 3) Memories.",
        "Participants are required to submit a maximum of 10 photos (minimum 5 photos).",
        "Judging Criteria: Relevance to the theme, Clarity of Storyline, Composition, Creativity, and Editing.",
        "Participants have to depict a story based on the given theme through a series of photos. You can send a PDF file containing the theme, the title and an overall photo-story description of maximum 30 words along with the photos.",
        "Camera resolution should be at least 3.2 megapixels (any camera may be used: DSLRs, SLRs, mobile cameras, etc.). Photographs must be clicked on a date later than 01-01-2025.",
        "Make sure that your camera date is set before you click a picture.",
        "In photo editing only global editing is allowed, i.e., cropping and adjustment of hue/saturation and brightness/contrast levels are allowed. Photo-morphing, manipulations or local editing is not allowed.",
        "Do not include your credentials (name, address etc.) or watermarks in the picture or the frame. Such photos will be disqualified.",
        "The decision of judges will be final and binding.",
        "Any sign of plagiarism will lead to disqualification.",
        "Media House of MNNIT reserves the right to share any of the submissions on its page as well as on allied handles with due credits of the creator.",
        "The PDF file should be named as 'FullName_Year_RegistrationNumber'.",
        "The format of the PDF should be as follows: 1. The Theme 2. The Title 3. Description of picture tale 4. The photos (each photo should be numbered).",
        "Contact details in the PDF should include: Name, Year, Registration number, Phone number.",
        "Entries can be shared using Drive by uploading on Google Drive or any other such website (like OneDrive, etc.) and uploading the link to the PDF."
      ],
      coords: [
        { name: "Ankit Raj", phone: "9680905523" },
        { name: "Lavanyaa Belokar", phone: "9730548528" },
        { name: "Akshita Agrawal", phone: "9950754850" }
      ]
    },

    // ================= TASVEER ===================
    {
      id: 8,
      name: "Tasveer",
      desc: [
        "Pick up your cameras to capture the essence of the moments and expressions to present that vivid imagery."
      ],
      rules: [
        "Only one round will be conducted for this event.",
        "Participants are required to submit a maximum of 3 submissions under one or more themes: Life in Black and White, Euphoria, Colours.",
        "Judging Criteria: Relevance to theme, Composition, Concept, Technical Accuracy, Creativity and Editing.",
        "Camera resolution should be at least 3.2 megapixels (any cameras may be used: DSLRs, SLRs, mobile cameras, etc.).",
        "Photographs must be clicked later than or on 01-01-2025.",
        "The entry must be submitted in a folder with the pictures and a text file containing the caption (not more than 30 words).",
        "Participants can be asked to submit the original photographs too.",
        "Make sure that your camera date is set before you click a picture.",
        "In photo editing only global editing is allowed, i.e., cropping and adjustment of hue/saturation and brightness/contrast levels are allowed. Photo-morphing, manipulations or local editing is not allowed.",
        "Individual photo-captions are allowed.",
        "Do not include your name or watermarks in the picture or the frame. Such photos will be disqualified.",
        "The decision of judges will be final and binding.",
        "Media House of MNNIT reserves the right to share any of the submissions on its page as well as on allied handles with due credits of the creator.",
        "Any sign of plagiarism will lead to disqualification.",
        "Entries can be shared using Drive by uploading on Google Drive or any other such website (like OneDrive, etc.) and sharing it in the Google form provided.",
        "The name of the folder should be 'FullName_Year_RegistrationNumber'.",
        "The folder should contain the submissions under the selected one or more themes along with a text file containing the captions for the respective photos.",
        "The caption for each photo should not be more than 30 words.",
        "Don't forget to give public access to the link, otherwise the entries shall not be considered."
      ],
      coords: [
        { name: "Ashmit Pramanik", phone: "9832055882" },
        { name: "Mukesh Akula", phone: "7993960865" },
        { name: "Saachi Pandey", phone: "7905466289" },
        { name: "Sammed Tare", phone: "7820985938" }
      ]
    },

    // ================ SALES PITCH ================
    {
      id: 9,
      name: "Sales-Pitch",
      desc: ["Revolutionize your marketing with design: Attend our event."],
      rules: [
        "Rounds: Direct online finals.",
        "Problem Statement: Released on official Facebook page 20 days prior to the fest.",
        "Judging Criteria: Creativity, Quality, Originality, Composition and Layout, Visual Impact.",
        "Participating teams shall decide the brand name according to the problem statement.",
        "The submission portfolio must necessarily consist of the following:",
        "• Company Name",
        "• Corporate Logo",
        "• Corporate Tagline/Slogan, Mission, Vision",
        "• Marketing Strategy",
        "• Product and its details",
        "• Corporate Logistics: Letterhead (21.59 cm x 27.94 cm), Envelope (22 cm x 11 cm), Business Card (9 cm x 5 cm), Email Signature, Stationery",
        "Anything relevant can be added. Bonus points for creativity and ideas.",
        "The decision of judges will be final and binding.",
        "No external PSD, AI or any other project files to be used.",
        "Rename your entry as '(Your Registration Number) - Team_Name'. Participants have to submit their entry in Google Drive format in the Google form attached below by keeping the access Open To All.",
        "Participants are expected to send their portfolio in one of the following formats: jpeg, .tiff, .png, .pdf."
      ],
      coords: [
        { name: "Arpit Gami", phone: "7987035960" },
        { name: "Shikhar Gupta", phone: "6386680769" },
        { name: "Siddhi Prasad", phone: "9348938647" }
      ]
    },

    // ================== LAYERS ===================
    {
      id: 10,
      name: "Layers",
      desc: [
        "Dissecting imagination with colours and fill them with colours of your imagination."
      ],
      rules: [
        "Problem Statement: The photos will be submitted before Culrav starts. Themes for the event will be released before Culrav.",
        "Judging Criteria: Design, Colour Palette, Cleanliness of the composition, Problem Approach and Quality of Presentation.",
        "Make a composition based on the theme.",
        "Only Adobe Photoshop, Adobe Illustrator, Corel Draw, GIMP are allowed for designing.",
        "Candidates must take 6 screenshots of their work at different stages before submission.",
        "The project file and the .png file of the artwork has to be mailed to the official MHM email ID.",
        "Use of external brushes is strictly prohibited.",
        "Photos to be used for photo composition/manipulation: To be announced.",
        "Submissions:",
        "Participants are expected to send their submissions in one of the following formats: jpeg, .tiff, .png, .pdf.",
        "Please mail your submission to mhm.mnnit@gmail.com. The subject of the mail should be 'Layers: your_name'. Mails with improper subjects will not be accepted.",
        "Entries can also be shared by uploading on Google Drive or any other such website and emailing the link to mhm.mnnit@gmail.com with the subject of the email to be 'Layers: your_name'.",
        "Team Size: Solo."
      ],
      coords: [
        { name: "Manav Bhatt", phone: "8791865158" },
        { name: "Khushi Singh", phone: "8976528050" },
        { name: "Suvendra Singh", phone: "9557017770" }
      ]
    },

    // ================== B-ROLL ===================
    {
      id: 11,
      name: "B-Roll",
      desc: [
        "This competition will put your videography and cinematography skills to test.",
        "Use your lens to tell a story and create a compelling narrative."
      ],
      rules: [
        "Team Size: Max 4 members.",
        "Rounds: Direct online finals.",
        "Time Limit: 45–90 seconds.",
        "Judging Criteria: Relevance to theme, Editing, Cinematography, Script (originality), Overall impact.",
        "The movie should be in English or Hindi or both and must have subtitles.",
        "Entries must be the original work of the entrant and must not infringe third-party's rights.",
        "There is no restriction on the number and age of the actors in the movie.",
        "The content of the movie should be appropriate for public screening and thus have no vulgarity. Obscenity (at the discretion of the judges) of any kind is not allowed and will lead to immediate disqualification.",
        "Please avoid photo animation, slideshows, remixes, spoofs and advertisements.",
        "Plagiarism is strictly prohibited.",
        "Soundtracks (no max time limit) and stock footage (time limit: max of 15 seconds) can be borrowed, but with due credits.",
        "Submissions:",
        "Please mail your entries to mhm.mnnit@gmail.com. The subject of the mail should be 'B-Roll: your_name'. Mails with improper subjects will not be accepted.",
        "Entries can also be shared using Google Drive or any other such website and emailing the link to mhm.mnnit@gmail.com with the subject of the email to be 'B-Roll: your_name'."
      ],
      coords: [
        { name: "Sreyia Gupta", phone: "8849846339" },
        { name: "Satyam Prajapati", phone: "9452549006" },
        { name: "Aritra Mahara", phone: "8250015439" }
      ]
    },

    // ================= SHORT FILM =================
    {
      id: 12,
      name: "Short-Film",
      desc: [
        "Fancy yourself as a filmmaker? Create a captivating narrative by using visuals and dialogues that will keep the audience engaged."
      ],
      rules: [
        "Rounds: Direct online finals.",
        "Time Limit: 3–7 minutes (including the credits).",
        "Judging Criteria: Editing, Cinematography, Script (originality), Acting, Sound effects, Overall impact.",
        "The movie should be in Hindi or English or both. If you choose to make a film in Hindi, it must contain English subtitles. For finals, subtitles are mandatory for movies of both languages. No other languages will be allowed.",
        "Entries must be the original work of the entrant and must not infringe third-party's rights.",
        "The content of the movie should be appropriate for public screening and thus have no vulgarity. Obscenity (at the discretion of the judges) of any kind is not allowed and will lead to immediate disqualification.",
        "Please avoid photo animation, slideshows, remixes, spoofs and advertisements.",
        "Plagiarism is strictly prohibited.",
        "Sound tracks (no max time limit) and stock footage (time limit: max of 1 min 30 seconds) can be borrowed, but with due credits.",
        "Team Size: 1–4.",
        "Submissions:",
        "The subject of the mail should be \"ShortFilm: your_name\". Mails with improper subjects will not be accepted.",
        "Entries can also be shared using Drive by uploading on Google Drive or any other such website and emailing the link to mhm.mnnit@gmail.com with the subject of the email to be \"Shortfilm: your_name / Link\"."
      ],
      coords: [
        { name: "Aditya Sharma", phone: "7878589193" },
        { name: "Vaibhawi Ranjan", phone: "7004621331" }
      ]
    }
  ]
};


const DarkroomPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-black font-sans text-gray-300">
      {/* TOP IMAGE AND HEADER */}
      <main className="flex flex-col md:flex-row justify-center items-center px-8 py-20 relative">
        {/* <div className="relative flex flex-col justify-center items-center md:w-1/2">
          <img
            src={HERO_IMAGE}
            alt="Darkroom Hero"
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
            DARKROOM
          </h1>
          <p className="text-lg text-cyan-300 mb-8 max-w-md mx-auto">
            Showcase your photographic storytelling and visual creativity with the Darkroom events.
          </p>
        </div>
      </main>

      {/* EVENTS GRID */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[...Darkroom.events]
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

export default DarkroomPage;
