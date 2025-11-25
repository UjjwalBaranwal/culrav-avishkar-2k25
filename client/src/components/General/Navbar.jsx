// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const { isAuthenticated, user } = useSelector((state) => state.auth);
//   const firstName = user?.name.split(" ")[0];

// const navItems = [
//   { name: "CULRAV", path: "/culrav" },
//   { name: "AVISHKAR", path: "/avishkar" },
//   { name: "GALLERY", path: "/gallery" },
//   { name: "TEAM", path: "/team" },
//   { name: "SPONSORS", path: "/sponsors" },
//   { name: "SCHEDULE", path: "/schedule" },
// ];

//   const handleNavigation = (path) => {
//     navigate(path);
//     setIsOpen(false);
//   };

//   return (
//     <nav className="relative top-0 left-0 w-full bg-gradient-to-r from-[#0a0a1a] via-[#101020] to-[#0a0a1a] backdrop-blur-md z-50 shadow-[0_0_25px_rgba(0,255,255,0.1)] border-b border-[#1a1a3d]">
//       <div className="flex items-center justify-between px-8 md:px-16 py-4">
//         {/* LOGO */}
//         <div
//           onClick={() => navigate("/")}
//           className="relative w-[110px] h-[45px] bg-white text-black font-bold text-sm cursor-pointer flex items-center justify-center   overflow-hidden"
//         >
//           <span className="text-white tracking-widest font-bebas text-lg z-10"></span>
//           <div className="absolute inset-0  opacity-0 hover:opacity-100 blur-sm transition-opacity duration-500"></div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex flex-1 justify-between max-w-[70%]">
//           {navItems.map((item) => (
//             <div
//               key={item.name}
//               onClick={() => handleNavigation(item.path)}
//               className="group relative cursor-pointer"
//             >
//               <h1 className="text-[#d9faff] font-bebas tracking-wider text-lg transition-all duration-300 group-hover:text-[#00e5ff] group-hover:drop-shadow-[0_0_8px_#00e5ff]">
//                 {item.name}
//               </h1>
//               <span className="absolute left-0 bottom-[-3px] w-0 h-0.5 bg-linear-to-r from-[#00e5ff] to-[#7f00ff] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#00e5ff]"></span>
//             </div>
//           ))}
//         </div>

//         {/* REGISTER BUTTON */}
//         <button
//           onClick={() =>
//             navigate(isAuthenticated ? "/dashboard/profile" : "/login")
//           }
//           className="hidden md:block bg-gradient-to-r from-[#1ba0af] to-[#7f00ff] text-white font-bold px-8 py-2   hover:scale-105 transition-all duration-300 font-bebas tracking-wider"
//         >
//           {isAuthenticated ? `Welcome, ${firstName}!` : "LOGIN"}
//         </button>

//         {/* Hamburger Icon */}
//         <button
//           className="lg:hidden text-[#00e5ff] text-2xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? "✖" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden bg-[#0a0a1a]/95 flex flex-col items-center space-y-4 py-6 border-t border-[#1a1a3d] backdrop-blur-md animate-fadeIn">
//           {navItems.map((item) => (
//             <div
//               key={item.name}
//               onClick={() => handleNavigation(item.path)}
//               className="group relative cursor-pointer"
//             >
//               <h1 className="text-[#d9faff] font-bebas tracking-wider text-lg hover:text-[#00e5ff] transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_#00e5ff]">
//                 {item.name}
//               </h1>
//               <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-gradient-to-r from-[#00e5ff] to-[#7f00ff] transition-all duration-300 group-hover:w-full"></span>
//             </div>
//           ))}

//           <button
//             onClick={() =>
//               navigate(isAuthenticated ? "/dashboard/profile" : "/login")
//             }
//             className="bg-gradient-to-r from-[#00e5ff] to-[#7f00ff] text-white font-bold px-6 py-2 rounded-md hover:shadow-[0_0_20px_#00e5ff] transition-all duration-300 font-bebas tracking-wider"
//           >
//             {isAuthenticated ? `Welcome, ${firstName}!` : "LOGIN"}
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import gsap from "gsap";

// import Button from "../Button";
import { TiLocationArrow } from "react-icons/ti";

const navItems = [
  { name: "AVISHKAR", path: "/avishkar" },
  { name: "CULRAV", path: "/culrav" },
  { name: "GALLERY", path: "/gallery" },
  { name: "TEAM", path: "/team" },
  { name: "SPONSORS", path: "/sponsors" },
];

const NavBar = () => {
  const location = useLocation();

  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const firstName = user?.name.split(" ")[0];

  const navContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsNavVisible(true);
        navContainerRef.current?.classList.remove("floating-nav");
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
        navContainerRef.current?.classList.add("floating-nav");
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
        navContainerRef.current?.classList.add("floating-nav");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 "
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex size-full items-center justify-between p-4">
            {/* Logo and Product button */}
            <div className="flex items-center gap-7">
              <Link to="/">
                <img
                  src="/img/logo_avishkar_culrav.png"
                  alt="logo"
                  className="w-20"
                />
              </Link>

              {/* <Button
                id="product-button"
                title="Products"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
              /> */}
            </div>

            {/* Desktop Navigation Links and Audio Button */}
            <div className="flex h-full items-center">
              <div className="hidden md:block">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={clsx("nav-hover-btn", {
                      "text-blue-400": location.pathname === item.path,
                    })}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to={isAuthenticated ? "/dashboard/profile" : "/login"}
                  className={clsx("nav-hover-btn", {
                    "text-blue-400":
                      location.pathname ===
                      (isAuthenticated ? "/dashboard/profile" : "/login"),
                  })}
                >
                  {isAuthenticated ? `Welcome, ${firstName}!` : "LOGIN"}
                </Link>
              </div>

              {/* Audio Indicator Button */}
              {/* <button
                onClick={toggleAudioIndicator}
                className="ml-10 flex items-center space-x-0.5"
                aria-label="Toggle audio"
              >
                <audio
                  ref={audioElementRef}
                  className="hidden"
                  src="/audio/loop.mp3"
                  loop
                />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={clsx("indicator-line", {
                      active: isIndicatorActive,
                    })}
                    style={{
                      animationDelay: `${bar * 0.1}s`,
                    }}
                  />
                ))}
              </button> */}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="ml-4 md:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle mobile menu"
              >
                <span
                  className={clsx(
                    "w-6 h-0.5 bg-white transition-all duration-300",
                    {
                      "rotate-45 translate-y-2": isMobileMenuOpen,
                    }
                  )}
                />
                <span
                  className={clsx(
                    "w-6 h-0.5 bg-white transition-all duration-300",
                    {
                      "opacity-0": isMobileMenuOpen,
                    }
                  )}
                />
                <span
                  className={clsx(
                    "w-6 h-0.5 bg-white transition-all duration-300",
                    {
                      "-rotate-45 -translate-y-2": isMobileMenuOpen,
                    }
                  )}
                />
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          {
            "opacity-100 pointer-events-auto": isMobileMenuOpen,
            "opacity-0 pointer-events-none": !isMobileMenuOpen,
          }
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={clsx(
            "absolute top-24 right-4 left-4 bg-black/95 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-2xl transform transition-all duration-300",
            {
              "translate-y-0 opacity-100": isMobileMenuOpen,
              "-translate-y-4 opacity-0": !isMobileMenuOpen,
            }
          )}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={clsx(
                  "px-4 py-3 text-base font-medium rounded-lg transition-all duration-300",
                  {
                    "text-blue-400 bg-blue-500/10":
                      location.pathname === item.path,
                    "text-white hover:text-blue-300 hover:bg-white/5":
                      location.pathname !== item.path,
                  }
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to={isAuthenticated ? "/dashboard/profile" : "/login"}
              className={clsx("nav-hover-btn", {
                "text-blue-400":
                  location.pathname ===
                  (isAuthenticated ? "/dashboard/profile" : "/login"),
              })}
            >
              {isAuthenticated ? `Welcome, ${firstName}!` : "LOGIN"}
            </Link>
          </div>

          {/* <div className="mt-4 pt-4 border-t border-white/10">
            <Button
              id="mobile-product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-600 text-white w-full flex items-center justify-center gap-2 hover:bg-blue-700"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
