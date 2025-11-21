import React from "react";
import { useState } from "react";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CardTeam from "../components/General/CardTeam";
import {teamData} from "../data/Team/data.js"

export function TeamPage() {
    const [activeSection, setActiveSection] = useState(teamData[0].id);
    const mainContentRef = useRef(null);
    const sectionRefs = useRef({});
    const isClickScrolling = useRef(false);
    const scrollTimeout = useRef(null);

    // Scroll-spy logic
    useEffect(() => {
        const contentEl = mainContentRef.current;
        if (!contentEl) return;

        const handleScroll = () => {
            if (isClickScrolling.current) return;

            let currentSection = "";
            const offset = 200;
            const scrollPosition = contentEl.scrollTop;

            for (const team of teamData) {
                const sectionEl = sectionRefs.current[team.id];
                if (sectionEl) {
                    if (sectionEl.offsetTop - offset <= scrollPosition) {
                        currentSection = team.id;
                    }
                }
            }

            if (currentSection === "" && teamData.length > 0) {
                currentSection = teamData[0].id;
            }

            if (currentSection && currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        contentEl.addEventListener("scroll", handleScroll);
        return () => contentEl.removeEventListener("scroll", handleScroll);
    }, [activeSection, teamData]);

    const handleNavClick = (id) => {
        const sectionEl = sectionRefs.current[id];
        if (sectionEl && mainContentRef.current) {
            setActiveSection(id);
            // Set flag to disable scroll-spy
            isClickScrolling.current = true;

            // Scroll to element
            mainContentRef.current.scrollTo({
                top: sectionEl.offsetTop - 150,
                behavior: "smooth",
            });

            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            scrollTimeout.current = setTimeout(() => {
                isClickScrolling.current = false;
            }, 1000);
        }
    };

    // Handle mobile dropdown change
    const handleMobileNavChange = (e) => {
        handleNavClick(e.target.value);
    };

    return (
        <div className="flex h-screen w-full fixed bg-[#0a0a1a] text-white font-Anton">
            {/* --- Desktop Sidebar  --- */}
            <aside className="hidden md:block w-64 h-full fixed left-0 top-[60px] overflow-y-auto bg-[#101020] border-r border-[#1a1a3d] p-6 space-y-2">
                {teamData.map((team) => (
                    <a
                        key={team.id}
                        onClick={() => handleNavClick(team.id)}
                        className={`relative block w-full text-center font-Anton tracking-wider text-lg p-3 rounded-md cursor-pointer transition-colors duration-200 ${activeSection === team.id
                            ? "text-cyan-400"
                            : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                            }`}
                    >
                        {team.name}
                        <span
                            className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-cyan-400 transition-all duration-300 ease-in-out ${activeSection === team.id ? "w-1/2" : "w-0"
                                }`}
                        ></span>
                    </a>
                ))}
            </aside>

            {/* --- Mobile Dropdown  --- */}
            <div className="md:hidden fixed top-[77px] left-0 right-0 z-40 bg-linear-to-r from-[#0a0a1a] via-[#101020] to-[#0a0a1a] border-b border-[#1a1a3d] shadow-lg">
                <div className="relative p-4">
                    <select
                        value={activeSection}
                        onChange={handleMobileNavChange}
                        className="w-full appearance-none bg-[#0a0a1a] border border-[#ffffff22] text-white font-Anton tracking-wider text-lg p-3 rounded-md focus:outline-none focus:border-[#00e5ff]"
                    >
                        {teamData.map((team) => (
                            <option key={team.id} value={team.id}>
                                {team.name}
                            </option>
                        ))}
                    </select>
                    <ChevronDown
                        size={20}
                        className="absolute right-7 top-1/2 -translate-y-1/2 text-[#00e5ff] pointer-events-none"
                    />
                </div>
            </div>

            {/* --- Main Content (Scrollable) --- */}
            <main
                ref={mainContentRef}
                className="w-full h-full overflow-y-auto md:ml-64 pt-20 md:pt-0 scrollbar-hide"
            >
                <div className="p-6 md:pl-8 md:pt-3 max-w-7xl mx-auto">
                    {teamData.map((team) => (
                        <section
                            key={team.id}
                            id={team.id}
                            ref={(el) => (sectionRefs.current[team.id] = el)}
                            className="mb-16"
                        >
                            {/* Section Heading */}
                            <motion.h2
                                className="text-3xl md:text-4xl font-Anton tracking-widest mb-8 text-cyan-200 relative inline-block"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                            >
                                {team.name}
                                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-linear-to-r from-[#00e5ff] to-[#7f00ff]"></span>
                            </motion.h2>

                            {/* Team Grid */}
                            <div
                                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
                            >
                                {team.members.map((member, index) => (
                                    <CardTeam
                                        key={index}
                                        name={member.name}
                                        reg={member.reg}
                                        img={member.img}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
}