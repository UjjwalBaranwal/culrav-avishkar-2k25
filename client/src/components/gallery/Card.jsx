import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Loader, Maximize2 } from 'lucide-react';

const Card = ({ item, index, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isGifLoaded, setIsGifLoaded] = useState(false);
    
    //Ref to store the timeout ID
    const hoverTimerRef = useRef(null); 

    const staticSrc = item.staticSrc;
    const gifSrc = null;

    // Preload GIF on first hover
    useEffect(() => {
        if (isHovered && !isGifLoaded) {
            const img = new window.Image();
            img.src = gifSrc;
            img.onload = () => setIsGifLoaded(true);
        }
    }, [isHovered, isGifLoaded, gifSrc]);

    //Clear timer when component unmounts
    useEffect(() => {
        return () => {
            if (hoverTimerRef.current) {
                clearTimeout(hoverTimerRef.current);
            }
        };
    }, []);


    return (
        <motion.div
            layoutId={`card-${item.id}`}
            className={`relative group overflow-hidden rounded-xl cursor-pointer ${item.size} ${item.color} ${item.aspectRatio}`}
            initial={{
                opacity: 0,
                scale: 2, 
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
                duration: 1.7,
                type: "spring",
                bounce: 0.2,
                delay: index * 0.2
            }}
            // --- End Animation ---
            whileHover={{ scale: 0.98, zIndex: 10 }}

            onMouseEnter={() => {
                // Clear any existing timer
                if (hoverTimerRef.current) {
                    clearTimeout(hoverTimerRef.current);
                }

                hoverTimerRef.current = setTimeout(() => {
                    setIsHovered(true); 
                }, 1100); 
            }}
            
            onMouseLeave={() => {

                if (hoverTimerRef.current) {
                    clearTimeout(hoverTimerRef.current);
                    hoverTimerRef.current = null; // Clear the ref value
                }
                
                setIsHovered(false);
            }}
            
            onClick={() => onClick(item)}
        >
            <div className="absolute inset-0 w-full h-full">

                <img
                    src={staticSrc}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500"
                />

                <img
                    src={gifSrc}
                    alt={`${item.title} animation`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered && isGifLoaded ? 'opacity-100' : 'opacity-0'}`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
            </div>

            {/* Loading Spinner */}
            {isHovered && !isGifLoaded && (
                <div className="absolute top-4 right-4 z-20">
                    <Loader className="w-5 h-5 text-white animate-spin" />
                </div>
            )}

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between">
                    <div>
                        <motion.h3 className="text-white font-bold text-xl tracking-tight drop-shadow-lg">
                            {item.title}
                        </motion.h3>
                    </div>
                    <div className="bg-white/20 p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                        <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;