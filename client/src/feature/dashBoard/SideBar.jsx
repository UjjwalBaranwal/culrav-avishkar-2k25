import { NavLink } from "react-router-dom";

const items = [
  { to: "/dashboard/profile", label: "Profile" },
  { to: "/dashboard/upload-resume", label: "Upload Resume" },
  { to: "/dashboard/my-teams", label: "My teams" },
  { to: "/dashboard/create-team", label: "Create Team" },
  { to: "/dashboard/view-invitation", label: "View Invitation" },
  { to: "/dashboard/logout", label: "Logout" },
];

export default function Sidebar({ onItemClick }) {
  return (
    <nav className="flex flex-col gap-1">
      {items.map((i) => (
        <NavLink
          key={i.to}
          to={i.to}
          onClick={onItemClick}
          className={({ isActive }) =>
            [
              "w-full px-4 py-3 rounded-lg text-sm transition-all duration-200",
              "hover:bg-white/10 hover:scale-[1.02]",
              "flex items-center gap-3",
              isActive ? "bg-white/15 border border-white/20 shadow-lg" : "bg-transparent",
            ].join(" ")
          }
          end
        >
          <span className="text-white/80">{getIcon(i.label)}</span>
          <span>{i.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

// Helper function to get icons for each menu item
function getIcon(label) {
  const icons = {
    "Profile": "👤",
    "Upload Resume": "📄",
    "My teams": "👥", 
    "Create Team": "➕",
    "View Invitation": "📧",
    "Logout": "🚪"
  };
  return icons[label] || "📋";
}
