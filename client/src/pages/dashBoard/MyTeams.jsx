import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TeamList from './TeamList';
import TeamDetail from './TeamDetails';

export default function MyTeams() {
  const [selectedTeam, setSelectedTeam] = useState(null);
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


  const handleSelectTeam = (team) => {
    const fullTeam = mockMyTeams.find(t => t.id === team.id);
    // Only switch views if the team has details
    if (fullTeam && fullTeam.stats) {
      setSelectedTeam(fullTeam);
    } else {
      console.log("This team has no details to show.");
    }
  };

  const handleBack = () => {
    setSelectedTeam(null);
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="h-screen bg-gray-900 text-gray-200 p-4 md:p-8 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {selectedTeam ? (

          <motion.div
            key="details"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute inset-0 bg-gray-900 p-4 md:p-8 flex flex-col"
          >
            <TeamDetail
              team={selectedTeam}
              onBack={handleBack}
              listItemVariants={listItemVariants}
            />
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="max-w-6xl mx-auto h-full flex flex-col"
          >{mockMyTeams.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-300">
              <h2 className="text-2xl font-semibold mb-2">No teams</h2>
              <p className="text-gray-400">You can create a team to get started!</p>
            </div>
          ) : (
            <TeamList
              onSelectTeam={handleSelectTeam}
              listItemVariants={listItemVariants}
            />
          )}
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}