import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SlidingPanel({ open, onClose, image, title, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Panel */}
          <motion.div
            className="
              absolute bottom-0 
              w-full max-h-[90vh] 
              bg-[#0f0f0f] rounded-t-2xl 
              overflow-y-auto shadow-lg
            "
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 140 }}
          >
            {/* Banner Image */}
            <img
              src={image}
              alt="event"
              className="w-full h-56 object-cover rounded-t-2xl"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>

              {/* Content passed from parent */}
              <div className="text-gray-300 text-lg leading-relaxed">
                {children}
              </div>

              <button
                className="mt-6 px-6 py-2 bg-red-500 text-white rounded-xl"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
