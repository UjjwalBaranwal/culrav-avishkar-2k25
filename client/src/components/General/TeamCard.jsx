// TeamCard.jsx
import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { deleteTeam } from "../../services/apiTeam";
import { toast } from "sonner";

/**
 * Props:
 * - team: object
 * - onSelect: fn
 * - onDelete: fn(teamId)  // called after successful deletion so parent can update state
 */
export default function TeamCard({ team, onSelect, onDelete }) {
  const teamId = team.id ?? team._id;
  const [showConfirm, setShowConfirm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // open modal (stopPropagation so parent click doesn't run)
  const openConfirm = (e) => {
    e?.stopPropagation();
    setShowConfirm(true);
  };

  // close modal (don't allow closing while processing)
  const closeConfirm = useCallback(() => {
    if (isProcessing) return;
    setShowConfirm(false);
  }, [isProcessing]);

  // close on Escape key
  useEffect(() => {
    if (!showConfirm) return;
    const handler = (e) => {
      if (e.key === "Escape") closeConfirm();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showConfirm, closeConfirm]);

  const handleDeleteConfirmed = async () => {
    setIsProcessing(true);
    try {
      const res = await deleteTeam(teamId);
      if (res?.success) {
        // notify parent to remove team from UI
        if (typeof onDelete === "function") onDelete(teamId);
        setShowConfirm(false);
      } else {
        // handle API returning success=false
        console.warn("Delete returned success=false:", res);
      }
      toast.success("Team deleted!");
    } catch (error) {
      console.error("Error deleting team:", error);
      toast.error(error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <div
        onClick={() => onSelect && onSelect()}
        className="flex items-center justify-between bg-blue-50 border border-blue-200 p-4 rounded-md shadow-sm cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && onSelect && onSelect()
        }
      >
        <div className="font-semibold text-lg text-blue-800 hover:text-blue-600 transition-colors flex-1 text-left">
          {team.name}
        </div>

        <button
          className="ml-4 px-2 lg:px-3 py-2 rounded-md text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors"
          onClick={openConfirm}
          aria-label={`Delete ${team.name}`}
          title={`Delete ${team.name}`}
        >
          Delete
        </button>
      </div>

      {/* Inline Confirm Modal */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div
            key="confirm-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeConfirm}
              aria-hidden="true"
            />

            {/* modal panel */}
            <motion.div
              key="confirm-panel"
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.16 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`confirm-title-${teamId}`}
              className="relative w-full max-w-md mx-4 rounded-2xl bg-gray-800 border border-gray-700 shadow-2xl p-6 text-left"
            >
              <h3
                id={`confirm-title-${teamId}`}
                className="text-lg font-semibold text-gray-100"
              >
                Delete "{team.name}"?
              </h3>

              <div className="mt-3 text-sm text-gray-300">
                This will permanently delete the team and cannot be undone.
                <div className="mt-2 text-xs text-gray-400">
                  Team Name: {team.name}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeConfirm}
                  className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-700 hover:bg-gray-700/90 text-gray-200 transition"
                  disabled={isProcessing}
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleDeleteConfirmed}
                  className={`px-3 py-2 rounded-lg text-sm font-medium text-white transition
                    ${isProcessing ? "bg-red-600/80 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"}`}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="w-4 h-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      Deleting...
                    </span>
                  ) : (
                    "Delete"
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
