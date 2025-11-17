//MyTeamsCard
import React from "react";

export default function TeamCard({ team, onSelect }) {
    return (
        <div className="flex items-center justify-between bg-blue-50 border border-blue-200 p-4 rounded-md shadow-sm">
            <button
                onClick={onSelect}
                className="font-semibold text-lg text-blue-800 hover:text-blue-600 transition-colors flex-1 text-left"
            >
                {team.name}
            </button>
            <button
                className="ml-auto px-2 lg:px-3 py-2 rounded-md text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                onClick={(e) => {
                    e.stopPropagation();
                    console.log('Delete', team.id); // Add delete logic here
                }}
            >
                Delete
            </button>
        </div>
    );
}