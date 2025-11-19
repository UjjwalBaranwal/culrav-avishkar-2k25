import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TeamCard from './TeamCard';
import JoinedTeamCard from './JoinedTeamCard';

export default function TeamList({ onSelectTeam, listItemVariants }) {

    const mockMyTeams = [
        {
            id: 't1',
            name: 'Trycatch',
            stats: {
                size: 3,
                accepted: 2,
                pending: 1,
            },
            events: [
                { id: 'e1', name: 'General Quiz' },
                { id: 'e2', name: 'MELA Quiz' },
                { id: 'e3', name: 'BizTech Quiz' },
                { id: 'e4', name: 'Sports Quiz' },
                { id: 'e5', name: 'India Quiz' },
                { id: 'e6', name: 'Another Quiz' },
            ],
            members: [
                { id: 'm1', name: 'Tina Turner', carId: 'CAR372R' },
                { id: 'm2', name: 'James Thomas', carId: 'CAR372R' },
                { id: 'm3', name: 'Lilly Potter', carId: 'CAR372R' },
                { id: 'm4', name: 'Nicki Minaj', carId: 'CAR372R' },
            ],
        },
        { id: 't2', name: 'Trycatch-2' },
        { id: 't3', name: 'Trycatch-3' },
        { id: 't4', name: 'Trycatch-4' },
        { id: 't5', name: 'Trycatch-5' },
        { id: 't6', name: 'Trycatch-6' },
    ];

    const mockJoinedTeams = [
        { id: 'j1', name: 'Trycatch' },
        { id: 'j2', name: 'Onepiece' },
        { id: 'j3', name: 'JustOneMore' },
        { id: 'j4', name: 'Jack&Joe' },
        { id: 'j5', name: 'FindTry' },
        { id: 'j6', name: 'Another Team' },
    ];

    const listContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 min-h-0">

            {/* Column 1: My Teams */}
            <div className="flex flex-col min-h-0">
                <h2 className="text-xl font-semibold text-cyan-400 mb-4 flex-shrink-0">My teams</h2>
                <motion.div
                    className="bg-gray-800 rounded-lg border border-gray-700 p-4 space-y-3 overflow-y-auto flex-1" 
                    variants={listContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {mockMyTeams.map(team => (
                        <motion.div key={team.id} variants={listItemVariants}>
                            <TeamCard team={team} onSelect={() => onSelectTeam(team)} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Column 2: Teams Joined */}
            <div className="flex flex-col min-h-0">
                <h2 className="text-xl font-semibold text-cyan-400 mb-4 flex-shrink-0">Teams Joined</h2>
                <motion.div
                    className="bg-gray-800 rounded-lg border border-gray-700 p-4 space-y-3 overflow-y-auto flex-1" // Use flex-1 and overflow-y-auto
                    variants={listContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {mockJoinedTeams.map(team => (
                        <motion.div key={team.id} variants={listItemVariants}>
                            <JoinedTeamCard team={team} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}