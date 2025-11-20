import React from "react";
import { useNavigate } from "react-router-dom";
import RevealCard from "../components/ui/reveal-card";

import AvishkarBgMobile from "../assets/Avishkar_bg-mobile.png";
import AvishkarBG from "../assets/AvishkarBG.png";

<<<<<<< HEAD
const CulravEvent = () => {
  const cardsRef = useRef([]);

  const events = [
    {
      name: "ANUNAAD",
      image: "/dummy.png",
      description:
        "Battle of beats and rhythm.Battle of beats and rhythm.Battle of beats and rhythm.Battle of beats and rhythm.Battle of beats and rhythm.Battle of beats and rhythm.Battle of beats and rhythm.Battle of beats and rhythm.Battle of beats and rhythm.",
    },
    {
      name: "DARKROOM",
      image: "/dummy.png",
      description:
        "Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.",
    },
    {
      name: "RANGMANCH",
      image: "/dummy.png",
      description:
        "Drama that speaks beyond words.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.",
    },
    {
      name: "LITMUSE",
      image: "/dummy.png",
      description:
        "Where literature meets art.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.",
    },
    {
      name: "RANGSAZZI",
      image: "/dummy.png",
      description:
        "Colors of creativity and imagination.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.",
    },
    {
      name: "SPANDAN",
      image: "/dummy.png",
      description:
        "Dance to the pulse of your soul.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.Mystery and thrill await.",
    },
  ];
  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = (x / rect.width - 0.5) * 15;
        const rotateX = (y / rect.height - 0.5) * -15;

        gsap.to(card, {
          rotateY,
          rotateX,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      });
    });
  }, []);
=======

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
>>>>>>> 5868a8edb1ca70a9ac9a26c53fda31c3a3bb9f1a

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-start text-white"
      style={{
        backgroundImage: `url(${AvishkarBG})`,
        backgroundSize: "100% auto", // fit width, preserve aspect ratio (no horizontal crop)
        backgroundPosition: "top center", // align how you want
      }}
    >
<<<<<<< HEAD
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
          filter: "brightness(0.9) contrast(1) opacity(1)",
        }}
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: "900",
          textTransform: "uppercase",
          letterSpacing: "6px",
          marginBottom: "3rem",
          position: "relative",
          zIndex: 2,
          backgroundImage: "linear-gradient(90deg, #8a2be2, #00e5ff, #8a2be2)",
          backgroundSize: "400% 400%",
          WebkitBackgroundClip: "text",
          animation: "gradientFlow 5s ease infinite",
          fontFamily: "Playwrite HU",
        }}
      >
        EVENTS
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2.5rem",
          width: "100%",
          maxWidth: "1100px",
          zIndex: "2",
        }}
      >
        {events.map((event, i) => (
          <div key={i} ref={(el) => (cardsRef.current[i] = el)}>
            <Card
              title={event.name}
              image={event.image}
              description={event.description}
              onClick={() => console.log(`Clicked ${event.name}`)}
            />
          </div>
        ))}
      </div>
=======
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
>>>>>>> 5868a8edb1ca70a9ac9a26c53fda31c3a3bb9f1a
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
