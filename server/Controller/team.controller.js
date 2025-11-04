import Team from "../Model/team.model";
import User from "../Model/user.model"

const createTeam = async (req, res, next) => {
    const { teamName, leader, size } = req.body;

    // Validate input fields
    if (!teamName) {
        return res.status(400).json({
            success: false,
            message: "Team name is missing",
        });
    }

    if (!leader) {
        return res.status(400).json({
            success: false,
            message: "Leader ID is missing.",
        });
    }

    try {
        // Validate leader existence
        const leaderUser = await User.findById(leader);
        if (!leaderUser) {
            return res.status(422).json({
                success: false,
                message:
                    "Cannot create team — leader ID is invalid or leader is not registered.",
            });
        }

        // Check if a team with the same name already exists for this leader
        const existingTeam = await Team.findOne({ teamName, leader });

        if (existingTeam) {
            return res.status(409).json({
                success: false,
                message: "A team with the same name already exists.",
                team: existingTeam,
            });
        }

        // Create a new team
        const team = await Team.create({ teamName, leader, size });

        // Update relationships
        team.acceptedMembers = [...team.acceptedMembers, leader];

        leaderUser.participatingTeam = [
            ...leaderUser.participatingTeam,
            team._id,
        ];

        // Save both updates
        await leaderUser.save();
        await team.save();

        return res.status(200).json({
            success: true,
            message: "Team created successfully!",
            team: {
                _id: team._id,
                teamName: team.teamName,
                leader: team.leader,
                size: team.size,
                acceptedMembers: team.acceptedMembers,
                pendingMembers: team.pendingMembers,
                registeredEvents: team.registeredEvents,
                __v: team.__v,
            },
        });
    } catch (error) {
        next(error);
    }
};



export {
    createTeam,
}