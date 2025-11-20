import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Card from "../components/General/CardEvent";

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

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "4rem 2rem",
        perspective: "1000px",
      }}
    >
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
    </div>
  );
};

export default CulravEvent;
