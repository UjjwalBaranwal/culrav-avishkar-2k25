import React from "react";
import { useNavigate } from "react-router-dom";
import RevealCard from "../components/ui/reveal-card";

import AvishkarBgMobile from "../assets/Avishkar_bg-mobile.png";
import AvishkarBG from "../assets/AvishkarBG.png";
import base from "../assets/base.png";
import image from "../assets/CardImg.png";

function AvishkarEvents() {
  const navigate = useNavigate();

  // Placeholder images (replace these URLs with actual event images)
  const defaultPoster = "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanposter.jpg";
  const defaultTitleImg = "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/pngwing1.png";
  const defaultCharacterImg = "https://raw.githubusercontent.com/MihirJaiswal/hero-hq/main/public/spidermanpng.png";

  const events = [
    { id: "av1", name: "CyberQuest", slug: "cyberquest", coverImage: defaultPoster, titleImage: defaultTitleImg, characterImage: defaultCharacterImg },
    { id: "av2", name: "Electromania", slug: "electromania", coverImage: defaultPoster, titleImage: defaultTitleImg, characterImage: defaultCharacterImg },
    { id: "av3", name: "Genesis", slug: "genesis", coverImage: defaultPoster, titleImage: defaultTitleImg, characterImage: defaultCharacterImg },
    { id: "av4", name: "Kreedomania", slug: "kreedomania", coverImage: defaultPoster, titleImage: defaultTitleImg, characterImage: defaultCharacterImg },
    { id: "av5", name: "Mechrocosm", slug: "mechrocosm", coverImage: defaultPoster, titleImage: defaultTitleImg, characterImage: defaultCharacterImg },
    { id: "av6", name: "Monopoly", slug: "monopoly", coverImage: defaultPoster, titleImage: defaultTitleImg, characterImage: defaultCharacterImg },
    { id: "av7", name: "Nirmaan", slug: "nirmaan", coverImage: defaultPoster, titleImage: defaultTitleImg, characterImage: defaultCharacterImg },
    { id: "av8", name: "Oligopoly", slug: "oligopoly", coverImage: defaultPoster, titleImage: defaultTitleImg, characterImage: defaultCharacterImg },
    { id: "av9", name: "PowerSurge", slug: "powersurge", coverImage: defaultPoster, titleImage: defaultTitleImg, characterImage: defaultCharacterImg },
    { id: "av10", name: "Rasayans", slug: "rasayans", coverImage: defaultPoster, titleImage: defaultTitleImg, characterImage: defaultCharacterImg },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start text-white">
      {/* Responsive Background Images */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src={AvishkarBgMobile}
          alt="Mobile Background"
          className="w-full h-full object-cover block sm:hidden"
        />
        <img
          src={AvishkarBG}
          alt="Laptop Background"
          className="w-full h-full object-cover hidden sm:block"
        />
      </div>

      {/* Top Section */}
      <div className="relative w-full mt-10 overflow-hidden">
        <img
          src={base}
          alt="Top Image"
          className="w-full h-[120px] sm:h-[130px] md:h-[160px] lg:h-[200px] xl:h-[300px]"
        />
        <div className="absolute inset-0 flex items-center justify-around px-6">
          <img
            src={image}
            className="w-16 sm:w-20 md:w-24 lg:w-28"
            alt="Logo"
          />
          <p className="text-white text-lg sm:text-lg md:text-lg font-bold max-w-3xl text-justify">
            Avishkar, a vibrant annual technical fest of MNNIT Allahabad, showcases innovation, engineering, and problem-solving. It features competitions, workshops, and exhibitions across diverse domains, providing a dynamic platform for students to display their skills, creativity, and technical prowess.
          </p>
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
                onRegister={() => navigate(`/avishkar/${event.slug}`)}
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

export default AvishkarEvents;
