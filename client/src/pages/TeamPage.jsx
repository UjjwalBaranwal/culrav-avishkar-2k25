import React from "react";
import { useState } from "react";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CardTeam from "../components/General/CardTeam";

export function TeamPage() {
    const teamData = [
        {
            id: "fs",
            name: "Festival Secretary",
            members: [
                { name: "Aditya Singh", reg: null, driveUrl: null },
                { name: "Amandeep Singh", reg: "20223033", driveUrl: "https://drive.google.com/uc?export=view&id=1QWceqOMOEJyO_g1CO6_t_WXIDWizipzr" },
                { name: "Ansh Bhatnagar", reg: null, driveUrl: null },
                { name: "Appani Chidvilas Varma", reg: "20225027", driveUrl: "https://drive.google.com/uc?export=view&id=19kVyWAv4PRhiVn8YUQUNg7vmvB6GgCsT" },
                { name: "Aritra Mahara", reg: null, driveUrl: null },
                { name: "Ashmit Pramanik", reg: null, driveUrl: null },
                { name: "Garv Gupta", reg: "20223097", driveUrl: "https://drive.google.com/uc?export=view&id=1_wpn-NXWt_VliZsNUIl2XofxT2qm33v9" },
                { name: "Hariom Kumar", reg: "20221044", driveUrl: "https://drive.google.com/uc?export=view&id=1sld6kyQhLWCkzsPMspaE_yiwxVb9N1PO" },
                { name: "Manav Bhatt", reg: null, driveUrl: null },
                { name: "Sakshi Singh", reg: "20224128", driveUrl: "https://drive.google.com/uc?export=view&id=1c0X1sWON_FLKe3nFkdOw_L0LAjNngQso" },
                { name: "Shreepriya Tiwari", reg: "20221092", driveUrl: "https://drive.google.com/uc?export=view&id=1bKJKRzkb1DFHBeWvzHn7vwa_6qsgTf8W" },
                { name: "Shreya Rakesh", reg: "20223546", driveUrl: "https://drive.google.com/uc?export=view&id=1fDdFp2HKxbXK11R0J_LE6bP00uRg6HKV" },
                { name: "Shrasti Agarwal", reg: "20225084", driveUrl: "https://drive.google.com/uc?export=view&id=1y9Qr49vfZAjbqUG-fPQeDX3LajdjlGPW" },
            ],
        },
        {
            id: "web_lead",
            name: "Web Lead",
            members: [
                { name: "Ankit Raj", reg: "20224020", driveUrl: "https://drive.google.com/uc?export=view&id=1BwO-ObdBtk8_Ty7AeKcxZn6r2RIKOSxE" },
                { name: "Aryan Kesharwani", reg: "20224035", driveUrl: "https://drive.google.com/uc?export=view&id=1QAJGUYs054Qj5J401YMjirlSsdysxgOo" },
                { name: "Ujjwal Baranwal", reg: "20223294", driveUrl: "https://drive.google.com/uc?export=view&id=1LeQR5_9dCVGu5AseJgTLVSS79Dg0Xuc6" },
                { name: "Varnika Goel", reg: "20223306", driveUrl: "https://drive.google.com/uc?export=view&id=1LdH1ykriBneZ8V8wYWkcuJvJ-uZkIw-p" },
            ],
        },
        {
            id: "mhm_lead",
            name: "MHM Lead",
            members: [
                { name: "Arpit Gami", reg: null, driveUrl: null },
                { name: "Saachi Pandey", reg: null, driveUrl: null },
                { name: "Sammed Tare", reg: "20223555", driveUrl: "https://drive.google.com/uc?export=view&id=1VGwntKkMavjaA1uJMKSDKRKrXa3GQ7XE" },
                { name: "Siddhi Prasad", reg: null, driveUrl: null },
                { name: "Sreyia Gupta", reg: "20223547", driveUrl: "https://drive.google.com/uc?export=view&id=16AB0Cg8XZnkTtHJDTeB6OTXkcY30VOs6" },
                { name: "Sri Mukesh Akula", reg: null, driveUrl: null },
                { name: "Suvendra Singh", reg: null, driveUrl: null },
            ],
        },
        {
            id: "arts_lead",
            name: "Arts Lead",
            members: [
                { name: "Anjali Sharma", reg: "20223040", driveUrl: "https://drive.google.com/uc?export=view&id=1su_BosZS5Dtx-TeX4l_wL-u8u8v_SrE5" },
                { name: "Sarvagya", reg: "20222063", driveUrl: "https://drive.google.com/uc?export=view&id=1rEpY5V6_RjqHb7oAPe65LYlqgBF9Px9L" },
            ],
        },
        {
            id: "gnosiomania_lead",
            name: "Gnosiomania Lead",
            members: [
                { name: "Dhruv Maheshwari", reg: "20223085", driveUrl: "https://drive.google.com/uc?export=view&id=1rTBLTE7QTKOylqMXptJo4xT0Vk7IEHJa" },
                { name: "Shaghil Jawed", reg: "20223522", driveUrl: "https://drive.google.com/uc?export=view&id=1VBGKlhQNBlNJLrddD5FeFBMExkWHcrF7" },
                { name: "Shweta Tiwari", reg: "20221131", driveUrl: "https://drive.google.com/uc?export=view&id=16oGR5f2fQDLFYIF5L593_MFU-JPdBGG5" },
            ],
        },
        {
            id: "pr_lead",
            name: "PR Lead",
            members: [
                { name: "Atharva Antapurkar", reg: "20224025", driveUrl: "https://drive.google.com/uc?export=view&id=1PWGp_KBBQHstwjSezw3n2JUa5v0qn8bd" },
                { name: "Dushyant Sharma", reg: "20224062", driveUrl: "https://drive.google.com/uc?export=view&id=1Lp_nMPOPLNvynwbc_OY7arnxtwmNHUIv" },
                { name: "Gaurav Sharma", reg: "20223099", driveUrl: "https://drive.google.com/uc?export=view&id=1wpmYR1HdZGm58yWkoZwLAP7LIV02Uo6M" },
                { name: "NIKHIL KUMAR", reg: "20227036", driveUrl: "https://drive.google.com/uc?export=view&id=1sGa6U3Brdzd-73qrrnkaSNkpF-226USn" },
                { name: "Purushottam Dubey", reg: "20222041", driveUrl: "https://drive.google.com/uc?export=view&id=10iihC6xbHIzexH2EMAq3WN8QzzQcUN82" },
                { name: "Shivam Pathak", reg: "20227048", driveUrl: "https://drive.google.com/uc?export=view&id=1Ilq6wYKAsJ35CdAtqagxCS_bVNK8uYmZ" },
                { name: "Shivesh Chaubey", reg: "20220050", driveUrl: "https://drive.google.com/uc?export=view&id=1T4XJGBtWNC0oChHzn6cbVpaT4ZDzMDFo" },
                { name: "Shresth Gadhwala", reg: "20224148", driveUrl: "https://drive.google.com/uc?export=view&id=1V6lKdhGqHZnUL43U47OGN6ZJRJx2oPFb" },
                { name: "Shubham Nareda", reg: "20221044", driveUrl: "https://drive.google.com/uc?export=view&id=1R7tD8jX521hlbp8qB-u1MesaCTTqgZ3F" },
                { name: "Shubham senger", reg: "20224153", driveUrl: "https://drive.google.com/uc?export=view&id=19GY2_IODSO-1QDh0ALPr03jMNjsmM5c0" },
                { name: "Sushant Nain", reg: "20223281", driveUrl: "https://drive.google.com/uc?export=view&id=1x9xP709Y00pCtYcMAeUxrexe34AYkW_c" },
                { name: "Varun Nair", reg: "20223564", driveUrl: "https://drive.google.com/uc?export=view&id=1EODmkwcYNyd-a1V-POzzLLykhbmWJFsi" },
                { name: "Vishwam Singh", reg: "20223521", driveUrl: "https://drive.google.com/uc?export=view&id=1uvKeKnSztPuXq1gDZf_iF3nnXe3sJZjn" },
                { name: "Vivek Mishra", reg: "20221118", driveUrl: "https://drive.google.com/uc?export=view&id=1Of-qti1NKGbi1e_BqupoFVKJ-uUc9wPR" },
            ],
        },
    ];

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
            <div className="md:hidden fixed top-[77px] left-0 right-0 z-40 bg-gradient-to-r from-[#0a0a1a] via-[#101020] to-[#0a0a1a] border-b border-[#1a1a3d] shadow-lg">
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
                                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#00e5ff] to-[#7f00ff]"></span>
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
                                        driveUrl={member.driveUrl}
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