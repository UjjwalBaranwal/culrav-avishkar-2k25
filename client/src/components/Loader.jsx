import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Terminal } from "lucide-react"; // Using Terminal icon for thematic flair

export default function CyberpunkEllipsisLoader({ onComplete }) {
  const loaderRef = useRef(null); // Reference for the main loader container
  const dotsRef = useRef([]); // Reference for the three individual dots

  useEffect(() => {
    // GSAP timeline for the loader exit animation
    const exitTimeline = gsap.timeline({
      paused: true, // Start paused, we'll play it on "completion"
      onComplete: () => {
        if (onComplete) onComplete(); // Call the parent's onComplete function
      },
    });

    exitTimeline.to(loaderRef.current, {
      opacity: 0,
      y: -50, // Slide up as it fades out
      duration: 0.7,
      ease: "power2.in",
      delay: 0.5, // Small delay before fading out after dots finish their cycle
    });

    // GSAP timeline for the dots animation
    const dotsTimeline = gsap.timeline({ repeat: -1 }); // Infinite repeat

    // Animate each dot to float up and down sequentially
    dotsTimeline
      .to(dotsRef.current[0], { y: -8, duration: 0.3, ease: "sine.inOut" })
      .to(
        dotsRef.current[1],
        { y: -8, duration: 0.3, ease: "sine.inOut" },
        "-=0.2"
      ) // Staggered start
      .to(
        dotsRef.current[2],
        { y: -8, duration: 0.3, ease: "sine.inOut" },
        "-=0.2"
      )
      // Animate them back down
      .to(
        dotsRef.current[0],
        { y: 0, duration: 0.3, ease: "sine.inOut" },
        "+=0.1"
      )
      .to(
        dotsRef.current[1],
        { y: 0, duration: 0.3, ease: "sine.inOut" },
        "-=0.2"
      )
      .to(
        dotsRef.current[2],
        { y: 0, duration: 0.3, ease: "sine.inOut" },
        "-=0.2"
      );

    // Simulate loading time (e.g., 3-5 seconds)
    const simulatedLoadTime = Math.random() * (2000 - 1000) + 1000; // 1 to 2 seconds for testing purposes
    // For real app, this would be determined by actual asset loading.

    // Once the simulated load is done, play the exit animation
    const timer = setTimeout(() => {
      exitTimeline.play();
    }, simulatedLoadTime);

    return () => {
      clearTimeout(timer);
      dotsTimeline.kill(); // Clean up GSAP timelines on unmount
      exitTimeline.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black backdrop-blur-md text-white z-[100] font-mono p-4"
    >
      {/* Background Circuit Grid (subtle, responsive) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 38, 211, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px", // Smaller grid for mobile, scales up naturally
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
        {/* Title: Data Stream */}
        <div className="flex items-center justify-center text-center tracking-widest uppercase">
          <Terminal className="w-5 h-5 md:w-8 md:h-8 mr-2 md:mr-3 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <div className="text-2xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
            LOADING
          </div>
        </div>

        {/* Ellipsis Dots Container */}
        <div className="flex items-end space-x-2 h-8">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              ref={(el) => (dotsRef.current[i] = el)}
              className="text-fuchsia-400 text-3xl md:text-5xl font-bold leading-none origin-bottom"
              style={{ display: "inline-block" }} // Needed for GSAP transform
            >
              .
            </span>
          ))}
        </div>

        <p className="mt-4 text-xs md:text-sm text-fuchsia-400 tracking-wider text-center max-w-xs md:max-w-none">
          SYSTEM SYNCHRONIZATION IN PROGRESS
        </p>
      </div>
    </div>
  );
}
