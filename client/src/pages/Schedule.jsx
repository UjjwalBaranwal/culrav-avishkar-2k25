import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Card from "../components/General/Card";
import dummy from "../assets/dummy.png";
import AvishkarBgMobile from "../assets/Avishkar_bg-mobile.png";
import AvishkarBG from "../assets/AvishkarBG.png";

const schedule = [
  {
    name: "Opening Ceremony",
    image: dummy,
    description: "Kickoff to Culrav 2025!",
    time: "9:00 AM",
    date: "April 10",
  },
  {
    name: "Anunaad",
    image: dummy,
    description: "Battle of beats and rhythm.",
    time: "11:00 AM",
    date: "April 10",
  },
  {
    name: "Rangmanch",
    image: dummy,
    description: "Drama beyond words.",
    time: "2:00 PM",
    date: "April 10",
  },
  {
    name: "Litmuse",
    image: dummy,
    description: "Poetry, prose, and passion.",
    time: "10:00 AM",
    date: "April 11",
  },
  {
    name: "Spandan",
    image: dummy,
    description: "Dance that moves the soul.",
    time: "3:00 PM",
    date: "April 11",
  },
  {
    name: "Closing Night",
    image: dummy,
    description: "Farewell with lights and music.",
    time: "7:00 PM",
    date: "April 12",
  },
];

const isMobileDevice = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(hover: none)").matches;
  }
  return false;
};

export default function Schedule() {
  const cardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  useEffect(() => {
    if (!isMobile) {
      cardsRef.current.forEach((card) => {
        if (!card) return;

        const handleMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const rotateY = (x / rect.width - 0.5) * 15;
          const rotateX = (y / rect.height - 0.5) * -15;
          gsap.to(card, { rotateY, rotateX, duration: 0.3, ease: "power2.out" });
        };

        const handleLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power3.out",
          });
        };

        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);

        return () => {
          card.removeEventListener("mousemove", handleMove);
          card.removeEventListener("mouseleave", handleLeave);
        };
      });
    }
  }, [isMobile]);

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        perspective: "1000px",
      }}
    >
      {/* Responsive Background Images */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: "-1",
        }}
      >
        <img
          src={AvishkarBgMobile}
          alt="Mobile Background"
          className="block sm:hidden w-full h-full object-cover"
          style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }}
        />
        <img
          src={AvishkarBG}
          alt="Desktop Background"
          className="hidden sm:block w-full h-full object-cover"
          style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }}
        />
      </div>

      <h2
        style={{
          fontSize: "3rem",
          fontWeight: "900",
          textTransform: "uppercase",
          letterSpacing: "6px",
          position: "relative",
          zIndex: 2,
          backgroundImage: "linear-gradient(90deg, #00e5ff, #8a2be2, #00e5ff)",
          backgroundSize: "400% 400%",
          WebkitBackgroundClip: "text",
          animation: "gradientFlow 5s ease infinite",
          color: "white",
        }}
      >
        SCHEDULE
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
        {schedule.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
              boxShadow: isMobile ? "0 4px 15px rgba(0,255,255,0.3)" : undefined,
            }}
          >
            <Card
              title={`${item.name} — ${item.date}`}
              image={item.image}
              description={`${item.description}\n⏰ ${item.time}`}
              onClick={() => console.log(`Clicked ${item.name}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
