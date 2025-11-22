import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

const Card = ({ item, index, onClick }) => {
    
    return (
        <motion.div
            className={`${item.size} ${item.aspectRatio}`}
            initial={{
                opacity: 0,
                scale: 1, 
                x: item.initialX, 
                y: item.initialY
            }}
            animate={{
                opacity: 1,
                scale: 1, 
                x: 0, 
                y: 0
            }}
            transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.2,
                delay: index * 0.2
            }}
        >
            <motion.div
                layoutId={`card-${item.id}`}
                onClick={() => onClick(item)}
                className={`relative w-full h-full group overflow-hidden rounded-xl cursor-pointer ${item.color} border border-cyan-500/30  hover:shadow-[5px_10px_20px_rgba(34,211,238,0.5)] transition-all duration-300`}
                whileHover={{ scale: 0.98, zIndex: 10 }}
            >
                <div className="absolute inset-0 w-full h-full">
                    {/* Static Image Only */}
                    <img
                        src={item.staticSrc}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-100 transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <motion.h3 className="text-white font-bold text-xl tracking-tight drop-shadow-lg">
                                {item.title}
                            </motion.h3>
                        </div>
                        <div className="bg-cyan-500/20 p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 border border-cyan-400/50">
                            <Maximize2 className="w-4 h-4 text-cyan-100" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Card;