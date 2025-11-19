import React from "react";
import { useNavigate } from "react-router-dom";
import RevealCard from "../components/ui/reveal-card";

import AvishkarBgMobile from "../assets/Avishkar_bg-mobile.png";
import AvishkarBG from "../assets/AvishkarBG.png";


// Assets
import base from "../assets/base.png";
import image from "../assets/CULRAV LOGO.png";

function CulravEvent() {
  const navigate = useNavigate();

  // Placeholder images
  const spidermanPoster =
    "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanposter.jpg";
  const titleImg =
    "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/pngwing1.png";
  const characterImg =
    "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanpng.png";

  const events = [
    { id: "ce1", name: "ANUNAAD", slug: "anunaad", coverImage: spidermanPoster, titleImage: titleImg, characterImage: characterImg },
    { id: "ce2", name: "RANGMANCH", slug: "rangmanch", coverImage: spidermanPoster, titleImage: titleImg, characterImage: characterImg },
    { id: "ce3", name: "DARKROOM", slug: "darkroom", coverImage: spidermanPoster, titleImage: titleImg, characterImage: characterImg },
    { id: "ce4", name: "LITMUSE", slug: "litmuse", coverImage: spidermanPoster, titleImage: titleImg, characterImage: characterImg },
    { id: "ce5", name: "SPANDAN", slug: "spandan", coverImage: spidermanPoster, titleImage: titleImg, characterImage: characterImg },
    { id: "ce6", name: "RANGSAZZI", slug: "rangsazzi", coverImage: spidermanPoster, titleImage: titleImg, characterImage: characterImg },
    { id: "ce7", name: "RAZZMATAZZ", slug: "razzmatazz", coverImage: spidermanPoster, titleImage: titleImg, characterImage: characterImg },
  ];

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-start text-white"
      style={{
        backgroundImage: `url(${AvishkarBG})`,
        backgroundSize: "100% auto", // fit width, preserve aspect ratio (no horizontal crop)
        backgroundPosition: "top center", // align how you want
      }}
    >
<div className="relative w-full overflow-hidden">
        {/* Base image - Increased min-height to ensure coverage */}
        <img
          src={base}
          alt="Top Image"
          className="
            w-full
            /* Increased base height, especially for desktop */
            h-[570px] sm:h-[350px] md:h-[200px] lg:h-[200px] xl:h-[250px]
        "
        />

        <div className="absolute inset-0 flex flex-col justify-center sm:px-8">

  {/* TOP GROUP — stays together on small screens */}
  <div className="
      w-full flex flex-col md:flex-row
      items-center md:items-center   /* <-- FIX: center vertically on large screens */
       md:gap-6
       justify-center
    "
  >

    {/* IMAGE */}
    <div className="flex justify-center md:justify-center w-full md:w-1/3">
      <img
        src={image}
        className="w-75 sm:w-80 md:w-full max-w-[400px]"
        alt="Logo"
      />
    </div>

    {/* TEXT */}
    <div className="w-full md:w-2/3 flex justify-center md:justify-start">
      <p className="text-white text-base sm:text-sm font-bold text-center md:text-left">
        Culrav, a 4-day-long annual cultural extravaganza of MNNIT Allahabad,
        is a vibrant celebration of art, music, and creativity. With its diverse
        range of activities, including pronites featuring performances by
        renowned artists or bands, kavsAndhya highlighting poetry and literature,
        and appearances by comedians or big figures, Culrav offers entertainment
        and engagement for all attendees.
      </p>
    </div>

  </div>

  {/* BOTTOM EMPTY SPACE */}
  <div className="w-full h-4"></div>
</div>


      </div>

      {/* Header */}
      <div className="w-full flex justify-center pt-16 md:pt-20">
        <h1
          className="text-center inline-block px-6 py-2 rounded-md font-bionix font-bold text-[#FFFAF0] bg-[#F54E25]"
          style={{ fontSize: "clamp(1.2rem, 3.5vw, 2.5rem)" }}
        >
          EVENTS
        </h1>
      </div>

      {/* Grid */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center">
          {events.map((event) => (
            <div
              key={event.id}
              className="w-[90%] sm:w-[320px] lg:w-[300px] max-w-[340px] text-center relative z-10"
            >
              <RevealCard
                coverImage={event.coverImage}
                titleImage={event.titleImage}
                characterImage={event.characterImage}
                buttonText="Explore"
                onRegister={() => navigate(`/culrav/${event.slug}`)}
              />
              <p className="text-white mt-4 text-xl font-bold tracking-wide">
                {event.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CulravEvent;
