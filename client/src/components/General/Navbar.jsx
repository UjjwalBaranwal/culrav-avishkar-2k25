import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "CULRAV",
    "AVISHKAR",
    "GALLERY",
    "TEAM",
    "SPONSORS",
    "SCHEDULE",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#2D2D2D] z-50 shadow-md">
      <div className="flex items-center justify-between px-8 md:px-16 py-4">
        <div className="w-[100px] h-[45px] bg-gray-200 flex items-center justify-center text-black font-bold text-sm cursor-pointer">
         
        </div>

        <div className="hidden md:flex flex-1 justify-between max-w-[70%]">
          {navItems.map((item) => (
            <div key={item} className="group relative cursor-pointer">
              <h1 className="text-white font-bebas tracking-wider text-lg hover:text-[#FF4C24] transition-colors duration-300">
                {item}
              </h1>
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#FF4C24] transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </div>

        <button className="hidden md:block bg-[#FF4C24] text-white font-bold px-8 py-2 = hover:bg-white hover:text-[#FF4C24] transition-all duration-300 font-bebas tracking-wider">
          REGISTER
        </button>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1E1E1E] flex flex-col items-center space-y-4 py-6 border-t border-gray-700">
          {navItems.map((item) => (
            <div key={item} className="group relative cursor-pointer">
              <h1 className="text-white font-bebas tracking-wider text-lg hover:text-[#FF4C24] transition-colors duration-300">
                {item}
              </h1>
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#FF4C24] transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
          <button className="bg-[#FF4C24] text-white font-bold px-6 py-2 rounded-sm hover:bg-white hover:text-[#FF4C24] transition-all duration-300 font-bebas tracking-wider">
            REGISTER
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
