import { MenuIcon, LayoutDashboard } from "lucide-react";
import Toggle from "./Toggle";
import { useLocation } from "react-router";

type HeaderProps = {
  onToggleSidebar: () => void;
};

const Header = ({ onToggleSidebar }: HeaderProps) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  return (
    <header className="w-full bg-base-100 shadow-md h-[80px] flex items-center sticky top-0 z-50">
      <div className="w-[90%] sm:w-[85%] max-w-[1280px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="btn btn-square btn-ghost lg:hidden"
            aria-label="Toggle sidebar"
          >
            <MenuIcon className="w-5 h-5" />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 text-primary font-extrabold text-xl sm:text-2xl">
            <LayoutDashboard className="w-6 h-6" />
            <span>Hrdeck</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {isDashboard && (
            <button className="btn btn-primary btn-sm sm:btn-md rounded-full px-4 sm:px-6 transition-transform hover:scale-105">
              <span className="text-lg font-bold">+</span>
              <span className="hidden sm:inline ml-1">New</span>
            </button>
          )}

          <Toggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
