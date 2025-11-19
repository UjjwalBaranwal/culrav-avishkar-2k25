import React from "react";

export default function MemberCard({ member }) {
    return (
        <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-md">
            <div>
                <div className="font-medium text-blue-800">{member.name}</div>
                <div className="text-sm text-blue-600">{member.carId}</div>
            </div>
            <button
                className="px-3 py-1.5 rounded-md text-xs font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                onClick={() => console.log('Delete', member.id)}
            >
                Delete
            </button>
        </div>
    );
}