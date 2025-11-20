import React from "react";

export default function JoinedTeamCard({ team }) {
    return (
        <div className="flex items-center justify-between bg-blue-50 border border-blue-200 p-4 rounded-md shadow-sm">
            <span className="font-semibold text-lg text-blue-800">{team.name}</span>
        </div>
    );
}