import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CardTeam = ({ name, reg, driveUrl }) => {
    const [isHovered, setIsHovered] =useState(false);

    return (
        <motion.div
            className="relative w-full aspect-square rounded-xl overflow-hidden group cursor-default
                    border border-white/10 
                    bg-black/30 backdrop-blur-sm
                    transition-all duration-300 
                    hover:border-green-300/50 
                    hover:shadow-2xl hover:shadow-green-300/10"
                    
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >

            <img
                src="https://images.pexels.com/photos/31542399/pexels-photo-31542399.jpeg"
                alt={name}
                className="absolute inset-0 w-full h-full object-cover 
                        transition-all duration-500 ease-in-out 
                        group-hover:scale-105 
                        group-hover:brightness-75 
                        group-hover:blur-sm"
            />


            <div className="absolute bottom-0 left-0 right-0 p-4 z-10 overflow-hidden">
                
                <motion.h3
                    className="text-white font-anton tracking-wider text-xl drop-shadow-md"
                    animate={{ y: isHovered && reg ? -20 : 0 }} // Moves 20px up
                    transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }} // Ease-out quad
                >
                    {name}
                </motion.h3>

                <AnimatePresence>
                    {isHovered && reg && (
                        <motion.p
                            className="text-green-300 font-anton text-sm absolute bottom-4" 
                            initial={{ y: "100%", opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            exit={{ y: "100%", opacity: 0 }} 
                            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                        >
                            {reg}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default CardTeam;