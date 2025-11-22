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
            title: 'Mame Khan',
            text: "Folk Maestro of India. One of India’s most celebrated folk voices, known for carrying the rich Manganiyar tradition to global audiences. His powerful vocals and vibrant stage presence make every performance unforgettable.",
            size: 'md:col-span-2 md:row-span-1 col-span-1 row-span-1', 
            aspectRatio: 'aspect-[2/1]',
            color: 'bg-grey-300',
            initialX: -800, initialY: -800
        },
        {
            id: 13,
            staticSrc: galleryImg11,
            title: 'Mame Khan',
            text: "From Coke Studio to international festivals, he continues to redefine Indian folk with unmatched energy and emotion.",
            size: 'md:col-span-2 md:row-span-1 col-span-1 row-span-1',
            aspectRatio: 'aspect-[2/1]',
            color: 'bg-grey-300',
            initialX: 0, initialY: 900
        },
        {
            id: 2,
            staticSrc: galleryImg1,
            title: 'Mohit chauhan',
            text: "Mohit Chauhan is one of India’s most loved playback singers, known for his soulful tone and heartfelt melodies.With chart-topping hits across decades, his voice has become a defining sound of modern Indian music.Live or recorded, his performances carry emotion, nostalgia, and timeless charm.",
            size: 'col-span-1 row-span-1 md:row-span-2', 
            aspectRatio: 'aspect-[1/2]',
            color: 'bg-grey-300',
            initialX: 0, initialY: -1000
        },
        {
            id: 3,
            staticSrc: galleryImg3,
            title: 'Rajat Chauhan',
            text: "The Relatable Comedy Storyteller. Known for his clean, witty humour and everyday observations, his effortless storytelling makes him a favourite among audiences of all ages.",
            size: 'md:col-span-2 md:row-span-2 col-span-1 row-span-1', 
            aspectRatio: 'aspect-square',
            color: 'bg-grey-300',
            initialX: 800, initialY: -800
        },
        {
            id: 4,
            staticSrc: galleryImg4,
            title: 'MS Bitta',
            text: "Icon of Courage, Patriotism & Resilience. A respected national figure and survivor of violent attacks, he continues to inspire millions through his strength, leadership, and powerful speeches.",
            size: 'col-span-1 row-span-1 md:row-span-2', 
            aspectRatio: 'aspect-[1/2]',
            color: 'bg-grey-300',
            initialX: -1000, initialY: 0
        },
        {
            id: 5,
            staticSrc: galleryImg5,
            title: 'Rakesh Addlakha',
            text: "Rising Voice of Contemporary Music. An emerging singer whose expressive tone and dynamic style connect instantly with listeners, blending melody, passion, and youthful freshness.",
            size: 'col-span-1 row-span-1 md:row-span-2', 
            aspectRatio: 'aspect-[1/2]',
            color: 'bg-grey-300',
            initialX: 1000, initialY: 0
        },
        {
            id: 6,
            staticSrc: galleryImg6,
            title: 'Ashish Solanki',
            text: "Comicstaan Champion & Stand-Up Powerhouse. Ashish brings bold humour, sharp punchlines, and high energy to every stage. His performances are fast-paced, fearless, and always crowd-pleasing.",
            size: 'md:col-span-2 md:row-span-2 col-span-1 row-span-1', 
            aspectRatio: 'aspect-square',
            color: 'bg-grey-300',
            initialX: -800, initialY: 800
        },
        {
            id: 7,
            staticSrc: galleryImg7,
            title: 'Tigmanshu Dhulia',
            text: "Visionary Filmmaker & Actor. Celebrated for his bold storytelling and realistic cinematic style. With acclaimed films and memorable roles, he has shaped contemporary Indian cinema.",
            size: 'col-span-1 row-span-1', 
            aspectRatio: 'aspect-square',
            color: 'bg-grey-300',
            initialX: 0, initialY: 1000
        },
        {
            id: 8,
            staticSrc: galleryImg8,
            title: 'Suhani Shah',
            text: "India’s Leading Illusionist & Mentalist. Captivating audiences with mind-reading, psychological tricks, and immersive storytelling. She is a trailblazer in modern magic.",
            size: 'md:col-span-1 md:row-span-1 col-span-1 row-span-1', 
            aspectRatio: 'aspect-square', 
            color: 'bg-grey-300',
            initialX: 0, initialY: 1200
        },
        {
            id: 9,
            staticSrc: galleryImg9,
            title: 'Nalayak',
            text: "India’s Raw & Revolutionary Indie Rock Band. A sensation in the indie scene with high-voltage performances and honest music. Their sound blends raw emotion with rebellious energy.",
            size: 'md:col-span-2 md:row-span-2 col-span-1 row-span-1',
            aspectRatio: 'aspect-square', 
            color: 'bg-grey-300',
            initialX: 0, initialY: 1100
        },
        {
            id: 10,
            staticSrc: galleryImg10,
            title: 'Monali Thakur',
            text: "National Award–Winning Playback Sensation. A versatile singer with an expressive voice and wide musical range. Her songs blend clarity, finesse, and emotion.",
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