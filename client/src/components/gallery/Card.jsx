import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader, Maximize2 } from 'lucide-react';

const Card = ({ item, index, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isGifLoaded, setIsGifLoaded] = useState(false);

    // const staticSrc = item.staticSrc;
    // const gifSrc = item.gifSrc;
    const staticSrc = `https://media.giphy.com/media/${item.giphyId}/giphy_s.gif`;
    const gifSrc = `https://media.giphy.com/media/${item.giphyId}/giphy.gif`;

    // Preload GIF on first hover
    useEffect(() => {
        if (isHovered && !isGifLoaded) {
            const img = new window.Image();
            img.src = gifSrc;
            img.onload = () => setIsGifLoaded(true);
        }
    }, [isHovered, isGifLoaded, gifSrc]);

    return (
        <motion.div
            layoutId={`card-${item.id}`}
            className={`relative group overflow-hidden rounded-xl cursor-pointer ${item.size} ${item.color}`}
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
                bounce: 0.3,
                delay: index * 0.1 
            }}
            // --- End Animation ---
            whileHover={{ scale: 0.98, zIndex: 10 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered && isGifLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
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

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Loader, Maximize2 } from 'lucide-react';

// const Card = ({ item, index, onClick }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [isGifLoaded, setIsGifLoaded] = useState(false);

//     // 1. Ensure the static source is definitely the .jpg rendition
//     const staticSrc = `https://i.giphy.com/media/${item.giphyId}/480w_s.jpg`;
//     const gifSrc = `https://media.giphy.com/media/${item.giphyId}/giphy.gif`;

//     // Preload GIF on first hover
//     useEffect(() => {
//         if (isHovered && !isGifLoaded) {
//             const img = new window.Image();
//             img.src = gifSrc;
//             img.onload = () => setIsGifLoaded(true);
//         }
//     }, [isHovered, isGifLoaded, gifSrc]);

//     // Helper to determine if GIF should be visible
//     const showGif = isHovered && isGifLoaded;

//     return (
//         <motion.div
//             layoutId={`card-${item.id}`}
//             className="absolute overflow-hidden rounded-xl cursor-pointer group bg-gray-900"
            
//             // Manual positioning retained
//             style={{
//                 top: item.top,
//                 left: item.left,
//                 width: item.width,
//                 height: item.height,
//                 zIndex: isHovered ? 50 : 1 // Ensure z-index pops on hover
//             }}

//             // FLY-IN EFFECT (unchanged)
//             initial={{
//                 opacity: 0,
//                 scale: 2,
//                 x: item.initialX,
//                 y: item.initialY
//             }}
//             animate={{
//                 opacity: 1,
//                 scale: 1,
//                 x: 0,
//                 y: 0
//             }}
//             transition={{
//                 duration: 1.7,
//                 type: "spring",
//                 bounce: 0.3,
//                 delay: index * 0.1
//             }}

//             whileHover={{ scale: 0.98, zIndex: 50 }}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             onClick={() => onClick(item)}
//         >

//             {/* Static Image - Always visible as base layer */}
//             <img
//                 src={staticSrc}
//                 alt={item.title}
//                 className="absolute inset-0 w-full h-full object-cover z-0"
//                 loading="lazy"
//             />

//             {/* GIF Overlay - Only visible when hovered AND loaded */}
//             <img
//                 src={gifSrc}
//                 alt={`${item.title} animation`}
//                 // Added 'pointer-events-none' so the image itself doesn't mess with hover detection
//                 // Added 'invisible' to completely hide it from DOM rendering when not active
//                 className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 pointer-events-none ${
//                     showGif ? "opacity-100 visible" : "opacity-0 invisible"
//                 }`}
//             />

//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300 z-20 pointer-events-none" />

//             {/* Loader while GIF loads */}
//             {isHovered && !isGifLoaded && (
//                 <div className="absolute top-4 right-4 z-30 pointer-events-none">
//                     <Loader className="w-5 h-5 text-white animate-spin" />
//                 </div>
//             )}

//             {/* Text inside card */}
//             <div className="absolute bottom-0 left-0 w-full p-6 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
//                 <div className="flex items-center justify-between">
//                     <motion.h3 className="text-white font-bold text-xl drop-shadow-lg">
//                         {item.title}
//                     </motion.h3>
//                     <div className="bg-white/20 p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300">
//                         <Maximize2 className="w-4 h-4 text-white" />
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default Card;