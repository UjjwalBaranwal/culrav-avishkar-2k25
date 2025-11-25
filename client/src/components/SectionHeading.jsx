function SectionHeading({ number, title }) {
  return (
    <div className="text-center mb-10 md:mb-16 relative z-10 px-4">
      {/* Title Header */}
      {/* 1. Changed text-4xl to text-3xl for mobile base 
       2. Added sm:text-4xl for tablets
       3. Kept md:text-6xl for desktop
    */}
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter uppercase section-title break-words">
        {/* Number Span */}
        {/* Reduced mr-4 to mr-2 on mobile to save horizontal space */}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-xl sm:text-2xl md:text-4xl mr-2 md:mr-4 font-mono">
          {number}.
        </span>
        {title}
      </h2>

      {/* Decorative Line */}
      {/* Reduced width to w-16 on mobile, w-24 on desktop */}
      <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-cyan-500 via-white to-fuchsia-500 mx-auto skew-x-12"></div>

      {/* Subtitle */}
      {/* CRITICAL FIX: tracking-[0.5em] is too wide for mobile and causes scroll issues.
       Changed to tracking-[0.2em] for mobile, restoring 0.5em on sm/md screens.
    */}
      <div className="text-[10px] sm:text-xs font-mono text-gray-500 mt-2 tracking-[0.2em] sm:tracking-[0.5em] transition-all duration-300">
        SYSTEM_OPTIMIZED
      </div>
    </div>
  );
}

export default SectionHeading;
