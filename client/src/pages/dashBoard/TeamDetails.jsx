import React from "react";
import { useState } from "react";
import { motion } from 'framer-motion';
import { ArrowLeft } from "lucide-react";
import EventCard from "../../components/General/EventCard";
import MemberCard from "../../components/General/MemberCard";

export default function TeamDetail({ team, onBack, listItemVariants }) {
    const [email, setEmail] = useState('');

    const handleAddMember = (e) => {
        e.preventDefault();
        console.log('Adding member:', email); // Add logic here
        setEmail('');
    };

    const listContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    return (
        <div className="max-w-6xl mx-auto flex flex-col h-full">
            <div className="flex-shrink-0">
                <button onClick={onBack} className="flex items-center gap-2 text-gray-300 font-medium hover:text-white transition-colors mb-4">
                    <ArrowLeft />
                    Back
                </button>
                <h1 className="text-4xl font-bold text-white mb-8">{team.name}</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0 overflow-y-auto pr-2">

                {/* Left Column: Add Member & Stats */}
                <div className="lg:col-span-1 space-y-6 lg:sticky top-0 self-start">
                    <form onSubmit={handleAddMember} className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email ID"
                            className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-300 mb-3"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full py-2.5 rounded-md font-semibold bg-green-600 hover:bg-green-700 text-white transition-colors"
                        >
                            Add team member
                        </button>
                    </form>

                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md">
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Team size:</span>
                                <span className="font-medium text-white">{team.stats.size}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Accepted Members:</span>
                                <span className="font-medium text-white">{team.stats.accepted}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Pending Invites:</span>
                                <span className="font-medium text-white">{team.stats.pending}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Participated Events */}
                    <div className="flex flex-col min-h-0">
                        <h3 className="font-semibold text-lg text-green-400 mb-4 flex-shrink-0">Participated Events</h3>
                        <motion.div
                            className="bg-gray-800 p-4 rounded-lg border border-gray-700 space-y-3 overflow-y-auto flex-1" // Use flex-1 and overflow-y-auto
                            variants={listContainerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {team.events.map(event => (
                                <motion.div key={event.id} variants={listItemVariants}>
                                    <EventCard event={event} />
                                </motion.div>
                            ))}
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
                            {team.members.map(member => (
                                <motion.div key={member.id} variants={listItemVariants}>
                                    <MemberCard member={member} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
}