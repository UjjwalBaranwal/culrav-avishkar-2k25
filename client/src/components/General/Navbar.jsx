import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "CULRAV", path: "/culrav" },
    { name: "AVISHKAR", path: "/avishkar" },
    { name: "GALLERY", path: "/gallery" },
    { name: "TEAM", path: "/team" },
    { name: "SPONSORS", path: "/sponsors" },
    { name: "SCHEDULE", path: "/schedule" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#0a0a1a] via-[#101020] to-[#0a0a1a] backdrop-blur-md z-50 shadow-[0_0_25px_rgba(0,255,255,0.1)] border-b border-[#1a1a3d]">
      <div className="flex items-center justify-between px-8 md:px-16 py-4">
        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="relative w-[110px] h-[45px] bg-white text-black font-bold text-sm cursor-pointer flex items-center justify-center   overflow-hidden"
        >
          <span className="text-white tracking-widest font-bebas text-lg z-10">
            
          </span>
          <div className="absolute inset-0  opacity-0 hover:opacity-100 blur-sm transition-opacity duration-500"></div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-between max-w-[70%]">
          {navItems.map((item) => (
            <div
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className="group relative cursor-pointer"
            >
              <h1 className="text-[#d9faff] font-bebas tracking-wider text-lg transition-all duration-300 group-hover:text-[#00e5ff] group-hover:drop-shadow-[0_0_8px_#00e5ff]">
                {item.name}
              </h1>
              <span className="absolute left-0 bottom-[-3px] w-0 h-0.5 bg-linear-to-r from-[#00e5ff] to-[#7f00ff] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#00e5ff]"></span>
            </div>
          ))}
        </div>

        {/* REGISTER BUTTON */}
        <button
          onClick={() => navigate("/register")}
          className="hidden lg:block bg-linear-to-r from-[#1ba0af] to-[#7f00ff] text-white font-bold px-8 py-2   hover:scale-105 transition-all duration-300 font-bebas tracking-wider"
        >
          REGISTER
        </button>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-[#00e5ff] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0a1a]/95 flex flex-col items-center space-y-4 py-6 border-t border-[#1a1a3d] backdrop-blur-md animate-fadeIn">
          {navItems.map((item) => (
            <div
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className="group relative cursor-pointer"
            >
              <h1 className="text-[#d9faff] font-bebas tracking-wider text-lg hover:text-[#00e5ff] transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_#00e5ff]">
                {item.name}
              </h1>
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-gradient-to-r from-[#00e5ff] to-[#7f00ff] transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}

          <button
            onClick={() => handleNavigation("/register")}
            className="bg-gradient-to-r from-[#00e5ff] to-[#7f00ff] text-white font-bold px-6 py-2 rounded-md hover:shadow-[0_0_20px_#00e5ff] transition-all duration-300 font-bebas tracking-wider"
          >
            REGISTER
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
