import React from "react";
import { useNavigate } from "react-router-dom";
import RevealCard from "../components/ui/reveal-card";

import AvishkarBgMobile from "../assets/Avishkar_bg-mobile.png";
import AvishkarBG from "../assets/BG4.png";
import base from "../assets/base1.png";
import image from "../assets/avishkarrr.png";
import EventImg from "../assets/EVENTyellow.png";

// Card Images
import EventCardAvishkar from '../assets/Avishkar Event Cards/EventCardAvishkar.png';

// Card Texts
import AeroText from '../assets/Avishkar Event Cards/AeroText.png';
import Astrotext from '../assets/Avishkar Event Cards/AstroText.png';
import CyberText from '../assets/Avishkar Event Cards/CyberText.png';
import ElectroText from '../assets/Avishkar Event Cards/ElectroText.png';
import GenesisText from '../assets/Avishkar Event Cards/GenesisText.png';
import KreedoText from '../assets/Avishkar Event Cards/KreedoText.png';
import MechrocosmText from '../assets/Avishkar Event Cards/MechrocosmText.png';
import MonoText from '../assets/Avishkar Event Cards/MonoText.png';
import NirmaanText from '../assets/Avishkar Event Cards/NirmaanText.png';
import OligoText from '../assets/Avishkar Event Cards/OligoText.png';
import PowerText from '../assets/Avishkar Event Cards/PowerText.png';
import RasayansText from '../assets/Avishkar Event Cards/RasayansText.png';
import RoboText from '../assets/Avishkar Event Cards/RoboText.png';
import TechText from '../assets/Avishkar Event Cards/TechText.png';

// Card Images
import AeroImage from '../assets/Avishkar Event Cards/AeroImage.png';
import AstroImage from '../assets/Avishkar Event Cards/AstroImage.png';
import CyberImage from '../assets/Avishkar Event Cards/CyberImage.png';
import ElectroImage from '../assets/Avishkar Event Cards/ElectroImage.png';
import GenesisImage from '../assets/Avishkar Event Cards/GenesisImage.png';
import KreedoImage from '../assets/Avishkar Event Cards/KreedoImage.png';
import MechrocosmImage from '../assets/Avishkar Event Cards/MechrocosmImage.png';
import MonoImage from '../assets/Avishkar Event Cards/MonoImage.png';
import NirmaanImage from '../assets/Avishkar Event Cards/NirmaanImage.png';
import OligoImage from '../assets/Avishkar Event Cards/OligoImage.png';
import PowerImage from '../assets/Avishkar Event Cards/PowerImage.png';
import RasayansImage from '../assets/Avishkar Event Cards/RasayansImage.png';
import RoboImage from '../assets/Avishkar Event Cards/RoboImage.png';
import TechImage from '../assets/Avishkar Event Cards/TechImage.png';

function AvishkarEvents() {
  const navigate = useNavigate();
  const events = [
    {
      id: "av1",
      name: "CyberQuest",
      slug: "cyberquest",
      coverImage: EventCardAvishkar,
      titleImage: CyberText,
      characterImage:CyberImage ,
    },
    {
      id: "av2",
      name: "Electromania",
      slug: "electromania",
      coverImage: EventCardAvishkar,
      titleImage: ElectroText,
      characterImage: ElectroImage,
    },
    {
      id: "av3",
      name: "Genesis",
      slug: "genesis",
      coverImage: EventCardAvishkar,
      titleImage: GenesisText,
      characterImage: GenesisImage,
    },
    {
      id: "av4",
      name: "Kreedomania",
      slug: "kreedomania",
      coverImage: EventCardAvishkar,
      titleImage: KreedoText,
      characterImage: KreedoImage,
    },
    {
      id: "av5",
      name: "Mechrocosm",
      slug: "mechrocosm",
      coverImage: EventCardAvishkar,
      titleImage: MechrocosmText,
      characterImage: MechrocosmImage,
    },
    {
      id: "av6",
      name: "Monopoly",
      slug: "monopoly",
      coverImage: EventCardAvishkar,
      titleImage: MonoText,
      characterImage: MonoImage,
    },
    {
      id: "av7",
      name: "Nirmaan",
      slug: "nirmaan",
      coverImage: EventCardAvishkar,
      titleImage: NirmaanText,
      characterImage: NirmaanImage,
    },
    {
      id: "av8",
      name: "Oligopoly",
      slug: "oligopoly",
      coverImage: EventCardAvishkar,
      titleImage: OligoText,
      characterImage: OligoImage,
    },
    {
      id: "av9",
      name: "PowerSurge",
      slug: "powersurge",
      coverImage: EventCardAvishkar,
      titleImage: PowerText,
      characterImage: PowerImage,
    },
    {
      id: "av10",
      name: "Rasayans",
      slug: "rasayans",
      coverImage: EventCardAvishkar,
      titleImage: RasayansText,
      characterImage: RasayansImage,
    },
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
      <div className="relative w-full overflow-hidden md:h-[300px] lg:h-[200px] sm:h-[300px] h-[450px] lg:mt-12 lg:mr-5">
                {/* Base image - Increased min-height to ensure coverage */}   
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
            <div className="flex justify-center md:justify-center w-full md:w-1/3">
              <img
                src={image}
                className="w-75 sm:w-80 md:w-full max-w-[400px]"
                alt="Logo"
              />
            </div>

            {/* TEXT */}
            <div className="w-full md:w-2/3 flex justify-center">
              <p className="text-white text-base sm:text-sm font-bold text-center p-6">
                The innovation mainframe spins up for a high-bandwidth cycle of
                pure tech. From neural-net hackathons to combat robotics,
                interface with the bleeding edge of progress. Compile your
                vision, debug the impossible, and upgrade the future. This isn't
                just a tech fest; it’s the source code of tomorrow.
              </p>
            </div>
          </div>

          {/* BOTTOM EMPTY SPACE */}
          <div className="w-full h-4"></div>
        </div>
             {" "}
      </div>

      {/* Header */}
      <div className="w-full flex justify-center pt-16 md:pt-20">
        {/* <h1
          className="text-center inline-block px-6 py-2 rounded-md font-bionix font-bold text-[#FFFAF0] bg-[#F54E25]"
          style={{ fontSize: "clamp(1.2rem, 3.5vw, 2.5rem)" }}
        >
          EVENTS
        </h1> */}
        <img src={EventImg} alt="Events" className="w-[50%] max-w-[200px]" />
      </div>

      {/* Grid */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-27 mb-16">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AvishkarEvents;
