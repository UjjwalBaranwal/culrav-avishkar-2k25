import React from "react";
import { useNavigate } from "react-router-dom";
import RevealCard from "../components/ui/reveal-card";

import CulravBG from "../assets/bg.png";
import EventCardBG from "../assets/EventCardBG.png";
import SpandanImage from "../assets/SpandanImage.png";
import SpandanText from "../assets/Spandan.png";
import AnunaadImage from "../assets/AnunaadImage-01.png";
import AnunaadText from "../assets/Anunaad.png";
import DarkroomImage from "../assets/DarkroomImage.png";
import DarkroomText from "../assets/Darkroom.png";
import LitmuseImage from "../assets/LitmuseImage.png";
import LitmuseText from "../assets/Litmuse.png";
import RangsazziImage from "../assets/RangsaaziImage.png";
import RangsazziText from "../assets/Rangsaazi.png";
import RazzmatazzImage from "../assets/RazzImage.png";
import RazzmatazzText from "../assets/Razzmatazz.png";
import RangmanchImage from "../assets/RangmanchImage.png";
import RangmanchText from "../assets/Rangmanc.png";
import EventImg from "../assets/EVENT.png";

// Assets
import base from "../assets/base1.png";
import image from "../assets/CULRAV LOGO.png";

function CulravEvent() {
  const navigate = useNavigate();

  const events = [
    {
      id: "ce1",
      name: "ANUNAAD",
      slug: "anunaad",
      coverImage: EventCardBG,
      titleImage: AnunaadText,
      characterImage: AnunaadImage,
    },
    {
      id: "ce2",
      name: "RANGMANCH",
      slug: "rangmanch",
      coverImage: EventCardBG,
      titleImage: RangmanchText,
      characterImage: RangmanchImage,
    },
    {
      id: "ce3",
      name: "DARKROOM",
      slug: "darkroom",
      coverImage: EventCardBG,
      titleImage: DarkroomText,
      characterImage: DarkroomImage,
    },
    {
      id: "ce4",
      name: "LITMUSE",
      slug: "litmuse",
      coverImage: EventCardBG,
      titleImage: LitmuseText,
      characterImage: LitmuseImage,
    },
    {
      id: "ce5",
      name: "SPANDAN",
      slug: "spandan",
      coverImage: EventCardBG,
      titleImage: SpandanText,
      characterImage: SpandanImage,
    },
    {
      id: "ce6",
      name: "RANGSAZZI",
      slug: "rangsazzi",
      coverImage: EventCardBG,
      titleImage: RangsazziText,
      characterImage: RangsazziImage,
    },
    {
      id: "ce7",
      name: "RAZZMATAZZ",
      slug: "razzmatazz",
      coverImage: EventCardBG,
      titleImage: RazzmatazzText,
      characterImage: RazzmatazzImage,
    },
  ];

  return (
    <main
      className="relative min-h-screen w-full flex flex-col items-center justify-start text-white"
      style={{
        backgroundImage: `url(${CulravBG})`,
        backgroundSize: "100% auto", // fit width, preserve aspect ratio (no horizontal crop)
        backgroundPosition: "top center", // align how you want
      }}
    >
      <div className="relative w-full overflow-hidden md:h-[300px] lg:h-[200px] sm:h-[300px] h-[450px] lg:mt-12 lg:mr-5">
               {" "}
        <div className="absolute inset-0 flex flex-col justify-center sm:px-8">
          {/* TOP GROUP — stays together on small screens */}
          <div
            className="
      w-full flex flex-col md:flex-row
      items-center md:items-center   /* <-- FIX: center vertically on large screens */
       md:gap-6
       justify-center
    "
          >
            {/* IMAGE */}
            <div className="flex justify-center md:justify-center w-full md:w-1/3 mt-10">
              <img
                src={image}
                className="w-75 sm:w-80 md:w-full max-w-[400px]"
                alt="Logo"
              />
            </div>

            {/* TEXT */}
            <div className="w-full md:w-2/3 flex justify-center">
              <p className="text-white text-base sm:text-sm font-bold text-center p-6">
                The cultural mainframe glitches into a three-day neon riot. From
                high-voltage pronites to competitive circuits, jack into the
                ultimate campus simulation. Upload your talent, sync the vibe,
                and rewrite reality. This isn't just a fest; it’s a total system
                reset.
              </p>
            </div>
          </div>

          {/* BOTTOM EMPTY SPACE */}
          <div className="w-full h-4"></div>
        </div>
             {" "}
      </div>

      {/* Header */}
      <div className="w-full flex justify-center pt-20 md:pt-20">
        {/* <h1
          className="text-center inline-block px-6 py-2 rounded-md font-bionix font-bold text-[#FFFAF0] bg-[#F54E25]"
          style={{ fontSize: "clamp(1.2rem, 3.5vw, 2.5rem)" }}
        >
          EVENTS
        </h1> */}
        <img src={EventImg} alt="Events" className="w-[50%] max-w-[150px]" />
      </div>

      {/* Grid */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-30 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-25 justify-items-center">
          {events.map((event) => (
            <button
              key={event.id}
              className="w-[90%] sm:w-[320px] lg:w-[300px] max-w-[340px] text-center relative z-10"
              onClick={() => navigate(`/culrav/${event.slug}`)}
            >
              <RevealCard
                coverImage={event.coverImage}
                titleImage={event.titleImage}
                characterImage={event.characterImage}
              />
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

export default CulravEvent;
