import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const CardTeam = ({ name, img }) => {
  const [isHovered, setIsHovered] = useState(false);
 // const [imgSrc, setImgSrc] = useState(convertDriveUrl(driveUrl) || FALLBACK_IMG);

  const handleImgError = () => {
    setImgSrc(FALLBACK_IMG); // use fallback only once
  };

  const cardVariants = {
    inactive: { borderColor: "rgba(255,255,255,0.1)", boxShadow: "0 0 0px rgba(110,231,183,0)" },
    active: {
      borderColor: "rgba(110,231,183,0.5)",
      boxShadow: "0 25px 50px -12px rgba(110,231,183,0.1)",
    },
  };

  const imageVariants = {
    inactive: { scale: 1, filter: "brightness(1) blur(0px)" },
    active: { scale: 1.05, filter: "brightness(0.75) blur(2px)" },
  };

  return (
    <motion.div
      className="relative w-full aspect-square rounded-3xl overflow-hidden cursor-default border bg-black/30 backdrop-blur-sm"
      animate={isHovered ? "active" : "inactive"}
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap={{ scale: 0.97 }}
    >
      <motion.img
        src={img}
        onError={handleImgError} // 🔥 prevents infinite loading / flicker
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
        animate={isHovered ? "active" : "inactive"}
        variants={imageVariants}
        transition={{ duration: 0.5 }}
      />

      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <motion.h3
          className="text-white font-anton tracking-wider text-lg sm:text-xl drop-shadow-md"
          animate={{ y: isHovered ? "-1.2rem" : 0 }}
        >
          {name}
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default CardTeam;
