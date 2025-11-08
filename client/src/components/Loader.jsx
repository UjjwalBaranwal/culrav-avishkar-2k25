import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const progressRef = useRef(null);
  const percentRef = useRef(null);
  const loaderRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onUpdate: () => {
        setProgress(Math.round(tl.progress() * 100));
      },
    });

    tl.to(progressRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out",
    });

    tl.to(
      percentRef.current,
      {
        scale: 1.2,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      },
      "<+=2.0"
    );
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white z-50"
    >
      <div className="text-4xl font-bold mb-8 tracking-widest">Loading...</div>

      <div className="w-80 h-3 bg-gray-700 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 rounded-full"
          style={{ width: "0%" }}
        ></div>
      </div>

      <div
        ref={percentRef}
        className="mt-4 text-lg font-semibold tracking-wide text-cyan-300"
      >
        {progress}%
      </div>
    </div>
  );
}
