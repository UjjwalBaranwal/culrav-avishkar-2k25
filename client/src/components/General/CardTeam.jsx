import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CardTeam = ({ name, reg, driveUrl }) => {
    const [isHovered, setIsHovered] = useState(false);


    const cardVariants = {
        inactive: {
            borderColor: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 0 0px rgba(110, 231, 183, 0)",
        },
        active: {
            borderColor: "rgba(110, 231, 183, 0.5)",
            boxShadow: "0 25px 50px -12px rgba(110, 231, 183, 0.1)",
        },
    };

    const imageVariants = {
        inactive: {
            scale: 1,
            filter: "brightness(1) blur(0px)",
        },
        active: {
            scale: 1.05,
            filter: "brightness(0.75) blur(2px)",
        },
    };

    return (
        <motion.div
            className="relative w-full aspect-square rounded-3xl overflow-hidden cursor-default
                border 
                bg-black/30 backdrop-blur-sm"
            animate={isHovered ? "active" : "inactive"}
            variants={cardVariants}
            transition={{ duration: 0.3 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onTap={() => setIsHovered(!isHovered)}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.img
                src={"https://images.pexels.com/photos/31542399/pexels-photo-31542399.jpeg"}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover"
                animate={isHovered ? "active" : "inactive"}
                variants={imageVariants}
                transition={{ duration: 0.5, ease: "easeIn" }}
            />

            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10 overflow-hidden">
                <motion.h3
                    className="text-white font-anton tracking-wider text-lg sm:text-xl drop-shadow-md"
                    animate={{ y: isHovered ? "-1.2rem" : 0 }}
                    transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                >
                    {name}
                </motion.h3>

                <AnimatePresence>
                    {isHovered && (
                        <motion.p
                            className="text-green-300 font-anton text-xs sm:text-sm absolute bottom-3 sm:bottom-4"
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