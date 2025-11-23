"use client";
import React, { useEffect, useRef, useState } from "react";

interface CardProps {
  coverImage: string;
  titleImage: string;
  characterImage: string;
  width?: number; // treated as maxWidth (px)
  height?: number; // used to compute aspect-ratio if provided
  hoverRotation?: number;
  titleTranslateY?: number;
  characterTranslateY?: number;
  characterTranslateZ?: number;
  alt?: {
    cover?: string;
    title?: string;
    character?: string;
  };
  animation?: {
    duration?: number;
    delay?: number;
  };
  priority?: boolean;
  threshold?: number;
  className?: string;

  buttonText?: string;
  onRegister?: () => void;
}

const RevealCard: React.FC<CardProps> = ({
  coverImage,
  titleImage,
  characterImage,
  width = 340, // now treated as maxWidth
  height = 420, // used for aspect ratio
  hoverRotation = 25,
  titleTranslateY = -50,
  characterTranslateY = -15,
  characterTranslateZ = 100,
  alt = {
    cover: "Cover Image",
    title: "Title",
    character: "Character",
  },
  animation = {
    duration: 500,
    delay: 0,
  },
  priority = false,
  threshold = 0.3,
  className = "",
  buttonText = "Explore",
  onRegister = () => alert("Registered!"),
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasBeenRevealed, setHasBeenRevealed] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const currentRef = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasBeenRevealed) {
            setIsRevealed(true);
            setHasBeenRevealed(true);
          }
        } else {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, hasBeenRevealed]);

  const handleCardClick = () => {
    if (isMobile) setIsRevealed(!isRevealed);
  };

  const animationStyle: React.CSSProperties = {
    transitionDuration: `${animation.duration}ms`,
    transitionDelay: `${animation.delay}ms`,
  };

  const shouldReveal = isMobile
    ? isRevealed
    : isRevealed || (!hasBeenRevealed && isVisible);

  const mobileRevealClass =
    isMobile && shouldReveal
      ? "[transform:perspective(900px)_translateY(-5%)_rotateX(25deg)_translateZ(0)] shadow-xl"
      : "";

  const characterRevealClass =
    isMobile && shouldReveal
      ? "opacity-100 [transform:translate3d(0,-25%,100px)]"
      : "";

  const titleRevealClass =
    isMobile && shouldReveal ? "[transform:translate3d(0,-50px,100px)]" : "";

  const desktopHoverClass = !isMobile
    ? "group-hover:[transform:perspective(900px)_translateY(-5%)_rotateX(25deg)_translateZ(0)] group-hover:shadow-xl"
    : "";

  const characterHoverClass = !isMobile
    ? "group-hover:opacity-100 group-hover:[transform:translate3d(0,-25%,100px)]"
    : "";

  const titleHoverClass = !isMobile
    ? "group-hover:[transform:translate3d(0,-50px,100px)]"
    : "";

  // Button classes
  const baseBtn =
    "absolute z-40 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full font-semibold text-white shadow-xl ring-1 ring-white/10 transition-transform duration-350 ease-out transition-opacity";
  const desktopBtnState = !isMobile
    ? "bottom-8 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-105"
    : "";
  const mobileBtnState = isMobile
    ? shouldReveal
      ? "bottom-8 opacity-100 translate-y-0 scale-100"
      : "bottom-8 opacity-0 translate-y-6 scale-95"
    : "";

  const btnStyle = `${baseBtn} ${desktopBtnState} ${mobileBtnState} bg-blue-600 hover:bg-blue-700`;

  // --- RESPONSIVE SIZING LOGIC ---
  // We'll render the card as fluid width up to a max width (width prop).
  // Keep aspect ratio if both width and height are provided.
  const aspectRatio =
    typeof width === "number" && typeof height === "number" && height > 0
      ? `${width} / ${height}`
      : undefined;

  const containerStyle: React.CSSProperties = {
    width: "100%", // let the wrapper decide width, card will fill it
    maxWidth: width ? `${width}px` : undefined, // cap at provided width
    // use CSS aspect-ratio when possible to preserve proportions as the width changes
    ...(aspectRatio ? ({ aspectRatio } as React.CSSProperties) : { height: height ? `${height}px` : undefined }),
  };

  return (
    <div
      ref={cardRef}
      className={`group relative flex justify-center items-end perspective-[2500px] cursor-pointer p-0 mx-3 ${className}`}
      style={containerStyle}
      onClick={handleCardClick}
    >
      {/* COVER IMAGE */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          className={`absolute inset-0 transition-all duration-500 ${desktopHoverClass} ${mobileRevealClass}`}
          style={
            {
              ...animationStyle,
              ["--hover-rotation" as any]: `${hoverRotation}deg`,
            } as React.CSSProperties
          }
        >
          <img
            src={coverImage}
            alt={alt.cover || "Cover Image"}
            className="w-full h-full object-cover block"
            loading={priority ? "eager" : "lazy"}
            draggable={false}
          />

          <div
            className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-black/40"
            style={animationStyle}
          />
        </div>
      </div>

      {/* CHARACTER LAYER (absolute) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img
          src={characterImage}
          alt={alt.character || "Character"}
          className={`w-full h-full object-cover opacity-0 transition-all duration-500 ${characterHoverClass} ${
            shouldReveal ? characterRevealClass : ""
          }`}
          style={
            {
              ...animationStyle,
              ["--character-translate-y" as any]: `${characterTranslateY}%`,
              ["--character-translate-z" as any]: `${characterTranslateZ}px`,
            } as React.CSSProperties
          }
          loading={priority ? "eager" : "lazy"}
          draggable={false}
        />
      </div>

      {/* TITLE / BOTTOM LAYER */}
      <div className="relative z-20 w-full">
        <img
          src={titleImage}
          alt={alt.title || "Title"}
          className={`w-full h-auto transition-transform duration-500 ${titleHoverClass} ${
            shouldReveal ? titleRevealClass : ""
          }`}
          style={
            {
              ...animationStyle,
              ["--title-translate-y" as any]: `${titleTranslateY}px`,
              ["--title-translate-z" as any]: `${characterTranslateZ}px`,
            } as React.CSSProperties
          }
          loading={priority ? "eager" : "lazy"}
          draggable={false}
        />
      </div>

      {/* REGISTER BUTTON */}
      {/* <button
        onClick={(e) => {
          e.stopPropagation();
          onRegister();
        }}
        className={`
          absolute z-50 left-1/2 -translate-x-1/2 
          w-full py-2 font-semibold text-white 
          bg-blue-600 hover:bg-blue-700 shadow-xl transition-all duration-300
          bottom-0
          ${isMobile ? (shouldReveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2") : "opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2"}
        `}
        style={{ pointerEvents: "auto" }}
      >
        {buttonText}
      </button> */}

      {/* Mobile toggle icon */}
      {isMobile && (
        <div className="absolute bottom-4 right-3 z-50 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white text-xs">{isRevealed ? "×" : "+"}</span>
        </div>
      )}
    </div>
  );
};

export default RevealCard;
