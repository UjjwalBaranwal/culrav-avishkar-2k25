import React, { useState , useEffect} from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import { Users } from 'lucide-react';
import TeamCard from '../../components/General/TeamCard'; 
import JoinedTeamCard from '../../components/General/JoinedTeamCard';
import {AnimatePresence } from 'framer-motion';
import TeamList from '../../components/General/TeamList';
import TeamDetail from '../../pages/dashBoard/TeamDetails';
import { getMyTeams } from '../../services/apiTeam';

export default function MyTeams() {
  const navigate = useNavigate();
  
  // const myTeams = [
  //   { id: 't1', name: 'Trycatch'}, 
  //   { id: 't2', name: 'Trycatch-2'},
  //   { id: 't3', name: 'Trycatch-2'},
  // ];
  // const joinedTeams = [
  //   { id: 'j1', name: 'OnePiece Fan Club' },
  //   { id: 'j2', name: 'React Developers' },
  // ];
  const [myTeams, setMyTeams] = useState([]);
  const [joinedTeams, setJoinedTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    async function fetchTeams() {
      try {
        setIsLoading(true);
        const res = await getMyTeams();
        console.log("API Response:", res);
        setMyTeams(res?.myTeams || []);
        setJoinedTeams(res?.participatingTeams || []);
      } catch (error) {
        console.error("Error fetching teams:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTeams();
  },[]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="h-full bg-gray-900 text-gray-200 p-4 md:p-8 overflow-hidden flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full h-full min-h-0">
          
          {/* COLUMN 1: MY TEAMS */}
          <div className="flex flex-col min-h-0">
            <h2 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" /> My Teams
            </h2>
            <motion.div 
              className="bg-gray-800 rounded-lg border border-gray-700 p-4 space-y-3 overflow-y-auto scrollbar-hide flex-1"
              // variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              { isLoading ? (
                <p className="text-gray-500 text-center py-4">Loading teams...</p>
              ) :
              myTeams.length === 0 ? (
                <p className="text-gray-500 text-center py-4">You haven't created any teams.</p>
              ) : (
                myTeams.map(team => (
                  <motion.div key={team.id}>
                    <TeamCard 
                      team={team} 
                      onSelect={() => navigate(`/dashboard/my-teams/${team.id}`)} 
                    />
                  </motion.div>
                ))
              )}
            </motion.div>
          </div>

          {/* COLUMN 2: JOINED TEAMS */}
          <div className="flex flex-col min-h-0">
            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" /> Teams Joined
            </h2>
            <motion.div 
              className="bg-gray-800 rounded-lg border border-gray-700 p-4 space-y-3 overflow-y-auto scrollbar-hide flex-1"
              // variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              { isLoading ? (
                <p className="text-gray-500 text-center py-4">Loading teams...</p>
              ) :
              joinedTeams.length === 0 ? (
                <p className="text-gray-500 text-center py-4">You haven't joined any teams.</p>
              ) : (
                joinedTeams.map(team => (
                  <motion.div key={team.id} >
                    <JoinedTeamCard team={team} />
                  </motion.div>
                ))
              )}
            </motion.div>
          </div>

        </div>
    </div>
  );
}