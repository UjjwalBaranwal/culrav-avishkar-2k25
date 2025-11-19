import React from "react";
import dummy from "../../assets/sample.jpg";

const Sponsers = () => {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center px-6 bg-[#0a0a1a] font-Anton">
      
      {/* Title */}
      <h1 className="font-anton bg-gradient-to-r from-[#00e5ff] to-[#7f00ff] bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-[6px] mb-10 mt-10">
  
        Sponsors
      </h1>

      {/* Foreground: Triangular Layout */}
      <div className="flex flex-col items-center gap-15 w-full max-w-6xl z-10">
        
        {/* Row 1 */}
        <div className="text-center">
          <h2 className="font-anton bg-gradient-to-r from-[#00e5ff] to-[#7f00ff] bg-clip-text text-transparent text-3xl sm:text-4xl font-extrabold mb-5 uppercase tracking-[6px]">
            ASSOCIATE SPONSOR
          </h2>
          <div className="flex justify-center gap-6">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200">
              <img
                src={dummy}
                alt="Sponsor A"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="text-center">
          <h2 className="font-anton text-outline text-outline-blue text-3xl sm:text-4xl font-extrabold mb-5 uppercase tracking-[6px]">
            ASSOCIATE SPONSOR
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {[1, 2].map((i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200">
                  <img
                    src={dummy}
                    alt={`Sponsor ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="text-center">
          <h2 className="font-anton text-outline text-outline-blue text-3xl sm:text-4xl font-extrabold mb-5 uppercase tracking-[6px]">
            ASSOCIATE SPONSOR
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200">
                  <img
                    src={dummy}
                    alt={`Sponsor ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sponsers;
