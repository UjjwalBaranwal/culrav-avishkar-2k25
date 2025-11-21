import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Card from '../components/gallery/card';
import Modal from '../components/gallery/Modal';
import galleryImg1 from '../assets/gallery/galleryImg1.jpg';
import galleryImg2 from '../assets/gallery/galleryImg2.jpg';
import galleryImg3 from '../assets/gallery/galleryImg3.jpg';
import galleryImg4 from '../assets/gallery/galleryImg4.jpg';
import galleryImg5 from '../assets/gallery/galleryImg5.jpg';
import galleryImg6 from '../assets/gallery/galleryImg6.jpg';
import galleryImg7 from '../assets/gallery/galleryImg7.jpg';
import galleryImg8 from '../assets/gallery/galleryImg8.jpg';
import galleryImg9 from '../assets/gallery/galleryImg9.jpg';
import galleryImg10 from '../assets/gallery/galleryImg10.jpg';
import galleryImg11 from '../assets/gallery/galleryImg11.jpg';


const Gallery = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const GALLERY_ITEMS = [
        {
            id: 1,
            staticSrc: galleryImg2, 
            gifSrc: null, 
            title: 'Neon Rain',
            size: 'md:col-span-2 md:row-span-1 col-span-1 row-span-1', 
            aspectRatio: 'aspect-[2/1]',
            color: 'bg-grey-300',
            initialX: -800, initialY: -800
        },
        {
            id: 13,
            staticSrc: galleryImg11,
            gifSrc: 'https://i.giphy.com/media/L0JwN6UvW2SZO/giphy.gif',
            title: 'Dreamy 13',
            size: 'md:col-span-2 md:row-span-1 col-span-1 row-span-1',
            aspectRatio: 'aspect-[2/1]',
            color: 'bg-grey-300',
            initialX: 0, initialY: 900
        },
        {
            id: 2,
            staticSrc: galleryImg1,
            gifSrc: 'https://i.giphy.com/media/11jt18x5lCCjKM/giphy.gif',
            title: 'Pixel Sunset',
            size: 'col-span-1 row-span-1 md:row-span-2', 
            aspectRatio: 'aspect-[1/2]',
            color: 'bg-grey-300',
            initialX: 0, initialY: -1000
        },
        {
            id: 3,
            staticSrc: galleryImg3,
            gifSrc: 'https://i.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif',
            title: 'Abstract Flow',
            size: 'md:col-span-2 md:row-span-2 col-span-1 row-span-1', 
            aspectRatio: 'aspect-square',
            color: 'bg-grey-300',
            initialX: 800, initialY: -800
        },
        {
            id: 4,
            staticSrc: galleryImg4,
            gifSrc: 'https://i.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif',
            title: 'Retro Vibes',
            size: 'col-span-1 row-span-1 md:row-span-2', 
            aspectRatio: 'aspect-[1/2]',
            color: 'bg-grey-300',
            initialX: -1000, initialY: 0
        },
        {
            id: 5,
            staticSrc: galleryImg5,
            gifSrc: 'https://i.giphy.com/media/JWt9bLrBuM1p6fR9p6/giphy.gif',
            title: 'System Error',
            size: 'col-span-1 row-span-1 md:row-span-2', 
            aspectRatio: 'aspect-[1/2]',
            color: 'bg-grey-300',
            initialX: 1000, initialY: 0
        },
        {
            id: 6,
            staticSrc: galleryImg6,
            gifSrc: 'https://i.giphy.com/media/xT9IgN8YKZh0JObIQU/giphy.gif',
            title: 'Geometry',
            size: 'md:col-span-2 md:row-span-2 col-span-1 row-span-1', 
            aspectRatio: 'aspect-square',
            color: 'bg-grey-300',
            initialX: -800, initialY: 800
        },
        {
            id: 7,
            staticSrc: galleryImg7,
            gifSrc: 'https://i.giphy.com/media/BHNpk97Fp0eMnvyyBv/giphy.gif',
            title: 'Night City',
            size: 'col-span-1 row-span-1', 
            aspectRatio: 'aspect-square',
            color: 'bg-grey-300',
            initialX: 0, initialY: 1000
        },
        {
            id: 9,
            staticSrc: galleryImg8,
            gifSrc: 'https://i.giphy.com/media/L0JwN6UvW2SZO/giphy.gif',
            title: 'Dreamy 9',
            size: 'md:col-span-1 md:row-span-1 col-span-1 row-span-1', 
            aspectRatio: 'aspect-square', 
            color: 'bg-grey-300',
            initialX: 0, initialY: 1200
        },
        {
            id: 11,
            staticSrc: galleryImg9,
            gifSrc: 'https://i.giphy.com/media/L0JwN6UvW2SZO/giphy.gif',
            title: 'Dreamy 11',
            size: 'md:col-span-2 md:row-span-2 col-span-1 row-span-1',
            aspectRatio: 'aspect-square', 
            color: 'bg-grey-300',
            initialX: 0, initialY: 1100
        },
        {
            id: 12,
            staticSrc: galleryImg10,
            gifSrc: 'https://i.giphy.com/media/L0JwN6UvW2SZO/giphy.gif',
            title: 'Dreamy 12',
            size: 'md:col-span-2 md:row-span-2 col-span-1 row-span-1',
            aspectRatio: 'aspect-square',
            color: 'bg-grey-300',
            initialX: 0, initialY: 900
        }
    ];

    return (
        <div className="min-h-screen pt-6 m-auto bg-black text-white">

            <main className="max-w-[1600px] mx-auto px-4 md:px-6 pb-7">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:grid-flow-dense">
                    {GALLERY_ITEMS.map((item, index) => (
                        <Card
                            key={item.id}
                            item={item}
                            index={index}
                            onClick={setSelectedItem}
                        />
                    ))}
                </div>
            </main>

            <AnimatePresence>
                {selectedItem && (
                    <Modal
                        item={selectedItem}
                        onClose={() => setSelectedItem(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Modal from '../components/gallery/Modal';

// const Gallery = () => {
//     const [selectedItem, setSelectedItem] = useState(null);

//     const GALLERY_ITEMS = [
//         {
//             id: 1,
//             giphyId: 'u04b3W02LMnV6',
//             title: 'Neon Rain',
//             initialX: -800, initialY: -800,
//             top: "40px", left: "100px", width: "260px"
//         },
//         {
//             id: 2,
//             giphyId: '11jt18x5lCCjKM',
//             title: 'Pixel Sunset',
//             initialX: 0, initialY: -1000,
//             top: "40px", left: "420px", width: "520px"
//         },
//         {
//             id: 3,
//             giphyId: '3o7aD2saalBwwftBIY',
//             title: 'Abstract Flow',
//             initialX: 800, initialY: -800,
//             top: "40px", left: "980px", width: "260px"
//         },
//         {
//             id: 4,
//             giphyId: 'l41lI4bYmcsPJX9Go',
//             title: 'Retro Vibes',
//             initialX: -1000, initialY: 0,
//             top: "360px", left: "100px", width: "320px"
//         },
//         {
//             id: 5,
//             giphyId: 'JWt9bLrBuM1p6fR9p6',
//             title: 'System Error',
//             initialX: 1000, initialY: 0,
//             top: "360px", left: "460px", width: "420px"
//         },
//         {
//             id: 6,
//             giphyId: 'xT9IgN8YKZh0JObIQU',
//             title: 'Geometry',
//             initialX: -800, initialY: 800,
//             top: "360px", left: "900px", width: "260px"
//         },
//         {
//             id: 7,
//             giphyId: 'BHNpk97Fp0eMnvyyBv',
//             title: 'Night City',
//             initialX: 0, initialY: 1000,
//             top: "700px", left: "350px", width: "500px"
//         },
//         {
//             id: 8,
//             giphyId: '3o7TksjRzpUTAF7SuY',
//             title: 'Deep Space',
//             initialX: 800, initialY: 800,
//             top: "700px", left: "900px", width: "260px"
//         },
//         {
//             id: 9,
//             giphyId: 'L0JwN6UvW2SZO',
//             title: 'Dreamy',
//             initialX: 0, initialY: 1200,
//             top: "1040px", left: "350px", width: "500px"
//         },
//     ];

//     return (
//         <div className="min-h-screen pt-6 bg-black text-white overflow-x-hidden">
//             <main className="relative max-w-[1600px] mx-auto px-4 md:px-6 pb-24"
//                   style={{ height: "1500px" }}>

//                 {/* Absolute collage container */}
//                 <div className="relative w-full h-full">
//                     {GALLERY_ITEMS.map(item => (
//                         <motion.div
//                             key={item.id}
//                             className="absolute rounded-xl overflow-hidden cursor-pointer"
//                             onClick={() => setSelectedItem(item)}

//                             initial={{
//                                 opacity: 0,
//                                 x: item.initialX,
//                                 y: item.initialY
//                             }}
//                             animate={{ opacity: 1, x: 0, y: 0 }}
//                             transition={{
//                                 duration: 0.9,
//                                 ease: "easeOut"
//                             }}

//                             style={{
//                                 top: item.top,
//                                 left: item.left,
//                                 width: item.width,
//                             }}
//                         >
//                             {/* Giphy embed */}
//                             <img
//                                 Src={`https://media.giphy.com/media/${item.giphyId}/giphy.gif`}
//                                 alt={item.title}
//                                 className="w-full h-full object-cover"
//                             />
//                         </motion.div>
//                     ))}
//                 </div>
//             </main>

//             {/* Modal */}
//             <AnimatePresence>
//                 {selectedItem && (
//                     <Modal
//                         item={selectedItem}
//                         onClose={() => setSelectedItem(null)}
//                     />
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// export default Gallery;
