import React from "react";

export default function EventCard({ event }) {
    return (
        <div className="p-3 bg-green-50 border border-green-200 rounded-md">
            <span className="font-medium text-green-800">{event.name}</span>
        </div>
    );
}