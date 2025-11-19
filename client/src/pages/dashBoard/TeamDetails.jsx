import React, { useState } from "react";
import { motion } from 'framer-motion';
import { ArrowLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import EventCard from "./EventCard";
import MemberCard from "./MemberCard";

export default function TeamDetail() {
    const { teamId } = useParams();
    const navigate = useNavigate();

    // Logic: Defined as an Object
    const team = {
        id: teamId,
        name: 'Trycatch',
        stats: { size: 3, accepted: 2, pending: 1 },
        events: [
            { id: 'e1', name: 'General Quiz' },
            { id: 'e2', name: 'MELA Quiz' },
        ],
        members: [
            { id: 'm1', name: 'Tina Turner', carId: 'CAR372R' },
            { id: 'm2', name: 'James Thomas', carId: 'CAR372R' },
        ],
    };

    const [email, setEmail] = useState('');

    // Animation Variants
    const listContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const listItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    if (!team) return <div className="bg-gray-900 h-full text-white p-8">Team not found</div>;

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

                {/* Main Grid Content with Internal Scroll (From your snippet) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0 overflow-y-auto pr-2">

                    {/* Left Column: Sticky Sidebar (From your snippet) */}
                    <div className="lg:col-span-1 space-y-6 lg:sticky top-0 self-start">
                        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md">
                            <div className="flex gap-2 mb-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email ID"
                                    className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-300"
                                />
                            </div>
                            <button
                                onClick={() => { console.log(email); setEmail('') }}
                                className="w-full py-2.5 rounded-md font-semibold bg-green-600 hover:bg-green-700 text-white transition-colors"
                            >
                                Add team member
                            </button>
                        </div>

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
        </div>
    );
}