import { Home, Users, LogOut } from "lucide-react";
import { NavLink } from "react-router";

type SidebarProps = {
  onToggleSidebar: () => void;
};

const navLinks = [
  { label: "Dashboard", icon: Home, to: "/dashboard" },
  { label: "Employees", icon: Users, to: "/employees" },
];

const Sidebar = ({ onToggleSidebar }: SidebarProps) => {
  return (
    <div className="h-full w-64 bg-base-200 text-base-content p-4 flex flex-col">
      {/* Admin Info */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="Admin Avatar"
          className="w-20 h-20 rounded-full border-4 border-primary object-cover"
        />
        <p className="text-lg font-semibold text-center">Admin John</p>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-1">
        {navLinks.map(({ label, icon: Icon, to }) => (
          <NavLink
            onClick={onToggleSidebar}
            key={label}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive ? "bg-primary font-semibold text-white" : ""
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm">{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-auto pt-4 border-t border-base-300">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-base-300 transition">
          <LogOut className="w-5 h-5" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
