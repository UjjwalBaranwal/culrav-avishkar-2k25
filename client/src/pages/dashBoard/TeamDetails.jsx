import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import EventCard from "../../components/General/EventCard";
import MemberCard from "../../components/General/MemberCard";
import { teamDetail } from "../../services/apiTeam";

export default function TeamDetail() {
  const { teamId } = useParams();
  const navigate = useNavigate();

  const [team, setTeam] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    if (!teamId) {
      setLoadError("Missing team id.");
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchTeam() {
      setIsLoading(true);
      setLoadError(null);

      try {
        // Adjust the endpoint if your API path differs.
        // console.log("Fetching team details for ID:", teamId);
        const res = await teamDetail(teamId);
        if (!res.success) {
          const text = await res.text();
          throw new Error(`Server responded ${res.status}: ${text}`);
        }

        // Expecting: { success: true, team: { ... } }
        if (res.success && res.team) {
          setTeam(res.team);
        } else if (res.team) {
          // tolerant fallback
          setTeam(res.team);
        } else {
          throw new Error(res.message || "Invalid response from server");
        }
      } catch (err) {
        if (err.name === "AbortError") {
          // request was cancelled — do nothing
          return;
        }
        console.error("Failed to load team detail:", err);
        setLoadError(err.message || "Failed to load team");
        setTeam(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTeam();

    return () => controller.abort();
  }, [teamId]);

  // Animation Variants
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Loading UI: spinner + skeleton boxes
  if (isLoading) {
    return (
      <div className="min-h-full bg-gray-900 text-gray-200 p-4 md:p-8 top-0 rounded-2xl flex flex-col overflow-hidden fixed">
        <div className="max-w-6xl mx-auto w-full animate-pulse space-y-6">
          <div className="h-8 w-24 bg-gray-700 rounded-md" />
          <div className="h-12 w-3/5 bg-gray-700 rounded-md" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 h-40" />
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 h-28" />
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 h-64" />
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 h-64" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error UI
  if (loadError) {
    return (
      <div className="min-h-full bg-gray-900 text-gray-200 p-4 md:p-8 top-0 rounded-2xl flex flex-col overflow-hidden fixed">
        <div className="max-w-6xl mx-auto flex flex-col w-full">
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-300 font-medium hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <h1 className="text-2xl font-bold text-white mb-4">Unable to load team</h1>
            <p className="text-gray-400 mb-6">Error: {loadError}</p>
          </div>
        </div>
      </div>
    );
  }

  // If team is null but no error — show not found
  if (!team) {
    return (
      <div className="min-h-full bg-gray-900 text-gray-200 p-4 md:p-8 top-0 rounded-2xl flex flex-col overflow-hidden fixed">
        <div className="max-w-6xl mx-auto flex flex-col w-full">
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-300 font-medium hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <h1 className="text-2xl font-bold text-white mb-4">Team not found</h1>
          </div>
        </div>
      </div>
    );
  }

  // Normal render with real team data
  return (
    <div className="min-h-full bg-gray-900 text-gray-200 p-4 md:p-8 top-0 rounded-2xl flex flex-col overflow-hidden fixed">
      <div className="max-w-6xl mx-auto flex flex-col w-full">
        {/* Header */}
        <div className="flex-shrink-0">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-300 font-medium hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <h1 className="text-4xl font-bold text-white mb-8">{team.name}</h1>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0 overflow-y-auto pr-2">
          {/* Left Column: Sticky Sidebar */}
          <div className="lg:col-span-1 space-y-6 lg:sticky top-0 self-start">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md">
              <div className="flex gap-2 mb-3">
                <input
                  type="email"
                  placeholder="Email ID"
                  className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-300"
                />
              </div>
              <button
                onClick={() => console.log("Add member (not implemented)")}
                className="w-full py-2.5 rounded-md font-semibold bg-green-600 hover:bg-green-700 text-white transition-colors"
              >
                Add team member
              </button>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Team size:</span>
                  <span className="font-medium text-white">{team.stats?.size ?? "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Accepted Members:</span>
                  <span className="font-medium text-white">{team.stats?.accepted ?? 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pending Invites:</span>
                  <span className="font-medium text-white">{team.stats?.pending ?? 0}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Events & Members */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Participated Events */}
            <div className="flex flex-col min-h-0">
              <h3 className="font-semibold text-lg text-green-400 mb-4 flex-shrink-0">Participated Events</h3>
              <motion.div
                className="bg-gray-800 p-4 rounded-lg border border-gray-700 space-y-3 overflow-y-auto flex-1"
                variants={listContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {Array.isArray(team.events) && team.events.length > 0 ? (
                  team.events.map((event) => (
                    <motion.div key={event.id} variants={listItemVariants}>
                      <EventCard event={event} />
                    </motion.div>
                  ))
                ) : (
                  <p className="text-gray-400 text-center py-6">No events registered.</p>
                )}
              </motion.div>
            </div>

            {/* Team Members */}
            <div className="flex flex-col min-h-0">
              <h3 className="font-semibold text-lg text-cyan-400 mb-4 flex-shrink-0">Team members</h3>
              <motion.div
                className="bg-gray-800 p-4 rounded-lg border border-gray-700 space-y-3 overflow-y-auto flex-1"
                variants={listContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {Array.isArray(team.members) && team.members.length > 0 ? (
                  team.members.map((member) => (
                    <motion.div key={member.id} variants={listItemVariants}>
                      <MemberCard member={member} />
                    </motion.div>
                  ))
                ) : (
                  <p className="text-gray-400 text-center py-6">No members found.</p>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
