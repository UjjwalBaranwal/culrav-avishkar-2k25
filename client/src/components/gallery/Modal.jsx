import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ item, onClose }) => {
    if (!item) return null;

    const gifSrc = item.staticSrc;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                className="relative w-full max-w-6xl bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-all"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 h-full max-h-[85vh] ">
                    <div className="h-[50vh] md:h-full relative bg-black flex items-center justify-center overflow-hidden ">
                        <img
                            src={gifSrc}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-4 md:p-16 flex flex-col justify-center bg-[#111]">
                        <div className="mb-8">
                            <motion.h2
                                className="text-4xl md:text-6xl font-bold text-white mb-6"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                className="text-gray-400 text-lg leading-relaxed font-light"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam veritatis minus accusantium, iusto doloribus soluta expedita repellendus veniam dignissimos at natus, numquam a, praesentium ab laboriosam explicabo hic quia odio.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Modal;