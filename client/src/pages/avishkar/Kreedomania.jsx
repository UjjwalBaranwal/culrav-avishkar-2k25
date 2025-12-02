import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";

import AvishkarBG from "../../assets/a_s_bg.png";
import dummy from "../../assets/dummy.png";

const KreedomaniaData = {
  eventName: "Kreedomania",
  tagline: "Let the Game Begin",
  instagramLink: "http://surl.li/qohpz",
  events: [
    {
      eventName: "Valorant",
      eventId: "100",
      description:
        "A 5v5 character-based tactical shooter. Carry krpaoge apne team ko ?. Kya lgta hai ? ;)",
      rules: [
        "We will follow a knockout format with prelims to be held online..",
        "The final 2 teams will play 3 matches and the team with the highest cumulative score will win.",
        "Participants will have to play on their setup..",
        "The matchmaking would be done randomly and the brackets would be released 12 hours ago on the day of prelims.",
        "The team must be ready to play within 15 minutes of the commencement time of their match, any further delay might result in disqualification of the team and the opponent team would get promoted to the next round",
        "Players must have a Valorant account eligible for competitive games to compete. This account must be used for all matches during the Competition.",
        "The riot accounts used in the competition must made public for thorough scrutiny. Participants will have to play on their setup.",
        "Players are allowed to compete from only one team during the competition.",
        "Any sort of misconduct during the event will lead to disqualification..",
        "The organizers decision would be final.",
      ],
      minTeamSize: 5,
      maxTeamSize: 5,
      PsLink: "",
      coordinators: [],
    },
    {
      eventName: "BGMI",
      eventId: "101",
      description:
        "INDIA KA BATTLEGROUNDS IS HERE. Georgo ho ya Pochinki, squad fights rukni nahi chahiyye. Let's go !",
      rules: [
        "ALL THE TEAMS WILL BE DIVIDED INTO SUBGROUPS",
        "3 BATTLE ROYALE WILL BE PLAYED AND YOU’LL BE AWARDED POINTS IN EACH BR ACCORDING TO THE FOLLOWING POINT SYSTEM - #1 - 10 POINTS #5 - 3 POINTS #2 - 6 POINTS #6 - 2 POINTS #3 - 5POINTS #(7-8) - 1 POINTS #4 - 4 POINTS #(9-16) - 0 POINTS (AND 1 POINT FOR EACH KILL FOR ALL TEAMS)",
        "TOP 8 TEAMS WILL MOVE ON TO THE NEXT ROUND FROM EACH GROUP.",
        "3 BATTLE ROYALE WILL BE PLAYED IN THE FINALS AND SAME POINT SYSTEM WILL BE FOLLOWED.",
        "ORGANIZERS DECISIONS WILL BE FINAL",
        "ROOM ID AND PASSWORD WILL BE SHARED 15 MINUTES PRIOR TO THE ALLOTED TIMINGS AND MATCHES WILL START ON TIME, WE’LL NOT WAIT FOR ANYONE.",
      ],
      minTeamSize: 4,
      maxTeamSize: 4,
      PsLink: "",
      coordinators: [],
    },
    {
      eventName: "Mini Militia",
      eventId: "102",
      description: "Combat an intense battle at the arena with the Doodle Army",
      rules: [
        "The game will be played in a team death match format with a team size of 3.",
        "Tournament will be played on the apk provided by the organisers",
        "Map will be decided by the organisers on a random basis.",
        "All teams will be divided in groups and 3 team death match will be played. The top 1 or 2 teams will proceed to the next round.",
        "Finals will be played on 3 maps and the collective ranking system will be used for the final result.",
        "Matches will be played offline",
      ],
      minTeamSize: 3,
      maxTeamSize: 3,
      PsLink: "",
      coordinators: [],
    },
    {
      eventName: "Stumble Guys",
      eventId: "103",
      description:
        "Stumble Guys is a multiplayer battle royale obstacle course game where players race to become the last one standing",
      rules: [
        "Game Settings: Default settings will apply to all rounds (randomized maps, obstacles, etc.). Players are prohibited from using custom skins or modifications.",
        "Character Selection: Players may choose any character from the base game, but custom skins are not allowed.",
        "Fair Play: Cheating, hacking, or use of third-party software will result in immediate disqualification. Any unsportsmanlike behavior, such as foul language or harassment, is grounds for disqualification.",
        `Organizer’s Decisions: All decisions by the organizers are final and binding. Organizers will resolve any disputes or issues.`,
      ],
      minTeamSize: 1,
      maxTeamSize: 1,
      PsLink: "",
      coordinators: [],
    },
    {
      eventName: "FIFA 23",
      eventId: "104",
      description:
        "Offline knockout format. Players select any regular season team; a toss determines first choice.",
      rules: [
        "Participants are allowed to choose any regular season team available in the original game, excluding all-star teams. The first player to make a choice will be determined by a toss.",
        "Overtime: If the scores are level after the regular time duration of play, the game will proceed directly to a penalty shootout. Game settings: Default.",
        "The full tournament will be held offline from 10th March 2023, and it will be a Knockout tournament. In case of a tie, 2 matches will be played in 1v1 format, and the number of goals will decide the winner.",
        "Two pauses of 10 seconds each will be allowed to each player during the entire game, excluding the half-time stoppage. Game settings: Default.",
        "Participants are expected to adhere to these rules at all times, and any violations will be subject to penalties as determined by the judges. The decision made by the judges will be final with no further discussion.",
        "Organizers' decision will be final.",
        "Game settings: Default.",
      ],
      minTeamSize: 1,
      maxTeamSize: 1,
      PsLink: "",
      coordinators: [],
    },
    {
      eventName: "Clash Royale",
      eventId: "105",
      description:
        "Clash Royale is a real-time multiplayer game starring the Royales, your favourite Clash characters and much, much more.",
      rules: [
        "Each participant will be divided into sub groups",
        " Round robin will be followed in the first stage.",
        " Top 2 from each group will be promoted to next round",
        " Semi finals and finals wil be a 1v1 format against each other",
        " Only 2 legendary cards will be allowed in each game.(No hero card allowed)",
        "  Matches will be played offline",
      ],
      minTeamSize: 1,
      maxTeamSize: 1,
      PsLink: "",
      coordinators: [],
    },
    {
      eventName: "COD Mobile",
      eventId: "108",
      description:
        "Unlock your potential in this fun FPS multiplayer shooter game. Roger that !",
      rules: [
        "Start Time: Matches start promptly; teams must be ready on time.",
        "Banned Operator Skills: Annihilator and War Machine.",
        "Each team should have 5 players .",
        "Scoring: Each mode follows its specific point or round system. Winners are determined by the best of the rounds.",
        "The next final round will be a series of battle royale consisting of 3 rounds",
        "same point system will be followed.",
        "organizers decisions will be final",
        `Room ID and password will be shared 15 minutes prior to the alloted timings and matches will start on time, we’ll not wait for anyone.`,
      ],
      minTeamSize: 5,
      maxTeamSize: 5,
      PsLink: "",
      coordinators: [],
    },
    {
      eventName: "Free Fire",
      eventId: "107",
      description:
        "Free Fire is a free-to-play battle royale game developed and published by Garena for Android and iOS.",
      rules: [
        "ALL THE TEAMS WILL BE DIVIDED INTO SUBGROUPS",
        `3 BATTLE ROYALE WILL BE PLAYED AND YOU’LL BE AWARDED POINTS IN EACH BR ACCORDING TO THE FOLLOWING POINT SYSTEM #1 - 12 POINTS #7 - 4 POINTS #2 - 9 POINTS #6- 3 POINTS #3 - 8 POINTS #9 - 2 POINTS #4 - 7 POINTS #10 - 1 POINTS #5 - 6 POINTS #11- 0 POINTS #6 - 5 POINTS #12 - 0 POINTS (AND 1 POINT FOR EACH KILL FOR ALL TEAMS)`,
        "TOP 8 TEAMS WILL MOVE ON TO THE NEXT ROUND FROM EACH GROUP.",
        "THE NEXT FINAL ROUND WILL BE A SERIES OF BATTLE ROYALE CONSISTING OF 3 ROUNDS.",
        "SAME POINT SYSTEM WILL BE FOLLOWED",
        "ORGANIZERS DECISIONS WILL BE FINAL",
        "SKIN ATTRIBUTES IS NOT ALLOWED",
        "ROOM ID AND PASSWORD WILL BE SHARED 15 MINUTES PRIOR TO THE ALLOTED TIMINGS AND MATCHES WILL START ON TIME, WE’LL NOT WAIT FOR ANYONE.",
      ],
      minTeamSize: 4,
      maxTeamSize: 4,
      PsLink: "",
      coordinators: [],
    },
    {
      eventName: "Chess",
      eventId: "121",
      description:
        "A team-based chess tournament featuring league rounds with Swiss system pairing followed by finals. Fair play, strategy, and consistency will determine the champions.\n\nUseful Links:\nChess Resources: https://tinyurl.com/yn73pfja\nMNNIT Lichess Team: https://lichess.org/team/mnnit-chess-club\nInstagram: https://instagram.com/mnnit_chess_club",
      rules: [
        "The event consists of two stages: League Stage and Finals.",
        "The League Stage will follow the Swiss system. Teams will be paired against each other every round and must maintain a fixed board order throughout the tournament.",
        "Teams must play all games; no match can be skipped.",
        "Players are not allowed to agree to draws. Only 3-fold repetition or 50-move rule can result in a draw.",
        "Entry fee: ₹100 per team (MNNIT students) and ₹200 per team (others).",
        "Teams must follow standard FIDE rules.",
        "Outcome fixing or use of unfair means will lead to immediate disqualification.",
        "Each tournament match consists of 2 games with opposite colors for each board.",
        "Scoring: Win = 1 point, Draw = 0.5 point, Loss = 0 points.",
        "A team wins the round if their cumulative score across the two games exceeds 4.",
        "If a team wins both games or wins one and draws the other, they win the round.",
        "If each team wins one game, or both games are drawn, the round is a draw.",
        "Tiebreakers after League Stage: 1) Total Match Points, 2) Swiss Sonneborn-Berger, 3) Blitz tiebreak (3+0) until a decisive result.",
        "Finals tiebreak: One 3+0 team game; higher-ranked team from League Stage gets White.",
        "All participants are eligible for a separate individual bullet (1+1) tournament.",
        "The organizers' decision will be final in case of disputes.",
      ],
      minTeamSize: 4,
      maxTeamSize: 4,
      PsLink: "",
      coordinators: [],
    },
  ],
};

const KreedomaniaPage = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (link) => {
    if (link && link.trim() !== "") {
      // Open Google Form in a new tab
      window.open(link, "_blank");
    } else {
      // Redirect to Coming Soon page
      navigate("/coming-soon")
    }
  };

  return (
    <div className="relative min-h-screen font-sans text-gray-300">
      {/* Responsive Background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src={AvishkarBG}
          alt="Mobile Background"
          className="block sm:hidden w-full h-full object-cover"
        />
        <img
          src={AvishkarBG}
          alt="Desktop Background"
          className="hidden sm:block w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <main className="relative flex flex-col items-center justify-center px-4 py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-4xl text-center">
          <h1 className="font-bold uppercase tracking-wide neon-shadow drop-shadow-xl text-gray-100 text-3xl sm:text-5xl lg:text-6xl leading-tight sm:leading-snug mb-3 sm:mb-4">
            {KreedomaniaData.eventName}
          </h1>

          {KreedomaniaData.tagline && (
            <p className="mx-auto text-gray-200 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mt-2 sm:mt-3">
              {KreedomaniaData.tagline}
            </p>
          )}
        </div>
      </main>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[...KreedomaniaData.events]
          .sort((a, b) => a.eventName.localeCompare(b.eventName))
          .map((event) => (
            <motion.div
              key={event.eventId}
              initial={{ scale: 1, boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(255,115,0,0.5)",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.98 }}
              className="relative p-6 border border-gray-400 rounded-xl bg-black/90 backdrop-blur-md shadow-md cursor-pointer text-center select-none"
              onClick={() => setSelected(event)}
            >
              <h2 className="text-2xl font-bold neon-shadow text-gray-300 mb-2">
                {event.eventName}
              </h2>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(event);
                }}
                className="mt-4 py-2 w-full border border-gray-300 rounded-lg bg-gray-300 text-black font-semibold hover:bg-gray-200 transition"
              >
                Explore
              </button>
            </motion.div>
          ))}
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-xl border-t border-gray-300/50 z-50 p-8 overflow-y-auto neon-shadow"
            style={{ overflowX: "hidden", overscrollBehavior: "contain" }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-10 text-4xl text-gray-300 hover:text-gray-200 font-bold focus:outline-none"
              aria-label="Close Explore Panel"
            >
              ✕
            </button>
            <h2 className="text-4xl font-bold mt-4 neon-shadow text-gray-400 mb-8 text-center">
              {selected.eventName}
            </h2>
            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">
                  About the Event
                </h3>
                <p className="text-gray-300 whitespace-pre-wrap">
                  {selected.description}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">
                  Rules
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 max-h-[60vh] overflow-y-auto pr-4">
                  {selected.rules.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">
                  Coordinators
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300 text-center">
                  {selected.coordinators.length == 0 ?
                    <h1 >No coordinators listed</h1> :
                    selected.coordinators.map((c, i) => (
                      <li key={i}>
                        {c.name} — {c.contact}
                      </li>
                    ))}
                </ul>
                {/* <p className="mt-6 text-gray-300 text-left"><strong>Team size:</strong> {selected.minTeamSize} - {selected.maxTeamSize}</p> */}
              </div>
            </section>

            <button
              onClick={() => handleRegister(selected.registrationLink)}
              className="
    relative
    block mx-auto mt-8
    px-3 py-2 text-sm

    md:fixed md:bottom-8 md:right-8 md:mx-0 md:mt-0
    md:px-8 md:py-3 md:text-lg

    lg:px-10 lg:py-4 lg:text-xl
    z-50 group bg-black border-[3px] border-cyan-400 text-white 
    font-bold uppercase tracking-[0.15em]
    shadow-[4px_4px_0_#d946ef,-3px_-3px_0_#06b6d4]
    hover:shadow-[-6px_-6px_0_#d946ef,6px_6px_0_#06b6d4]
    hover:border-fuchsia-500 hover:text-cyan-300
    transition-all duration-150 ease-linear 
    active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
    select-none overflow-hidden
  "
            >
              {/* scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.7)_50%)] bg-[length:100%_4px] pointer-events-none z-20 opacity-60"></div>

              <span className="relative z-30 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                Register Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="
        w-4 h-4 
        md:w-6 md:h-6
        text-fuchsia-500 
        group-hover:text-cyan-400 
        group-hover:translate-x-2 
        transition-all duration-150
      "
                >
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>

              <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[25deg] group-hover:animate-[ping_0.3s_linear_1] opacity-0"></div>
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default KreedomaniaPage;
