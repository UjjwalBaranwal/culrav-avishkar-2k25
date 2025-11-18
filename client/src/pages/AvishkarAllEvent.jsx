import React from "react";
import { useNavigate } from "react-router-dom";
import RevealCard from "../components/ui/reveal-card";
import avishkarbg from "../assets/AvishkarBG.png";
import base from "../assets/base.png";
import Navbar from "../components/General/Navbar";
import image from "../assets/avishkarrr.png";
function AvishkarEvents() {
  const navigate = useNavigate();
  const events = [
    {
      id: "av1",
      coverImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanposter.jpg",
      titleImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/pngwing1.png",
      characterImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanpng.png",
    },
    {
      id: "av2",
      coverImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanposter.jpg",
      titleImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/pngwing1.png",
      characterImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanpng.png",
    },
    {
      id: "av3",
      coverImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanposter.jpg",
      titleImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/pngwing1.png",
      characterImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanpng.png",
    },
    {
      id: "av1",
      coverImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanposter.jpg",
      titleImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/pngwing1.png",
      characterImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanpng.png",
    },
    {
      id: "av2",
      coverImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanposter.jpg",
      titleImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/pngwing1.png",
      characterImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanpng.png",
    },
    {
      id: "av3",
      coverImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanposter.jpg",
      titleImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/pngwing1.png",
      characterImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanpng.png",
    },
    {
      id: "av1",
      coverImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanposter.jpg",
      titleImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/pngwing1.png",
      characterImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanpng.png",
    },
    {
      id: "av2",
      coverImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanposter.jpg",
      titleImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/pngwing1.png",
      characterImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanpng.png",
    },
    {
      id: "av3",
      coverImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanposter.jpg",
      titleImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/pngwing1.png",
      characterImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanpng.png",
    },
    {
      id: "av1",
      coverImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanposter.jpg",
      titleImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/pngwing1.png",
      characterImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanpng.png",
    },
    {
      id: "av2",
      coverImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanposter.jpg",
      titleImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/pngwing1.png",
      characterImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanpng.png",
    },
    {
      id: "av3",
      coverImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanposter.jpg",
      titleImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/pngwing1.png",
      characterImage:
        "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanpng.png",
    },
  ];
  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-start text-white"
      style={{
        backgroundImage: `url(${avishkarbg})`,
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
            h-[500px] sm:h-[350px] md:h-[200px] lg:h-[200px] xl:h-[250px]
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
        className="w-70 sm:w-80 md:w-full max-w-[400px]"
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
          style={{
            fontSize: "clamp(1.2rem, 3.5vw, 2.5rem)",
          }}
        >
          EVENTS
        </h1>
      </div>

      {/* Grid of RevealCards */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 mb-16">
        <div
          className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-20
        justify-items-center
      "
        >
          {events.map((event) => (
            <div
              className="w-[90%] sm:w-[200px] lg:w-[300px] max-w-[250px]"
              key={event.id}
            >
              <RevealCard
                coverImage={event.coverImage}
                titleImage={event.titleImage}
                characterImage={event.characterImage}
                buttonText="Explore"
                onRegister={() => {
                  navigate(`/events/${event.id}`);
                  console.log("Register clicked for", event.id);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AvishkarEvents;
