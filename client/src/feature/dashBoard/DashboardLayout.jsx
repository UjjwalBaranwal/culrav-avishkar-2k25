import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { User, Menu, X } from "lucide-react";
import bgDashboard from "../../assets/bg_dashboard.jpg";
import Sidebar from "./SideBar.jsx";
import { useSelector } from "react-redux";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const NAVBAR_H = "80px";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { loading, isAuthenticated } = useSelector((state) => state.auth);

  return loading ? (
    "Loading..."
  ) : isAuthenticated ? (
    <div className="min-h-screen bg-neutral-900 text-white relative">
      <div className="relative" style={{ paddingTop: NAVBAR_H }}>
        {/* Mobile User Icon Toggle */}
        <button
          onClick={toggleSidebar}
          className={`lg:hidden fixed top-20 left-4 z-50 bg-[#0E1A20]/90
          backdrop-blur-sm border border-white/20 rounded-full p-3
          hover:bg-[#0E1A20] transition-all duration-200 shadow-lg
          ${isSidebarOpen ? "hidden" : ""}`}
        >
          <User className="w-5 h-5 text-white" />
        </button>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            style={{ top: NAVBAR_H }}
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-[280px_1fr] lg:gap-0 lg:min-h-[calc(100vh-72px)]">
          {/* Desktop Sidebar */}
          <aside className="bg-[#0E1A20]/90 backdrop-blur-sm border-r border-white/10 sticky top-[72px] h-[calc(100vh-72px)]">
            <div className="h-full p-4">
              <Sidebar />
            </div>
          </aside>

          {/* Desktop Main Content */}
          <main
            className="relative min-h-[calc(100vh-72px)]"
            style={{
              backgroundImage: `url(${bgDashboard})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="p-6 lg:p-8 pt-16 lg:pt-8">
              <div className="bg-[#0F1F26]/80 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg">
                <div className="p-6 lg:p-8">
                  <Outlet />
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile Sidebar */}
          <aside
            className={`fixed bg-[#0E1A20]/95 backdrop-blur-sm border-r border-white/10 z-40 transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{
              top: NAVBAR_H,
              left: 0,
              width: "280px",
              height: `calc(100vh - ${NAVBAR_H})`,
            }}
          >
            <div className="h-full p-4">
              <div className="justify-end flex">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  <X className="w-4 h-4 text-white/70 hover:text-white" />
                </button>
              </div>
              <Sidebar onItemClick={() => setIsSidebarOpen(false)} />
            </div>
          </aside>

          {/* Mobile Main Content */}
          <main
            className="min-h-[calc(100vh-72px)]"
            style={{
              backgroundImage: `url(${bgDashboard})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="p-4 lg:p-6 pt-16">
              <div className="bg-[#0F1F26]/80 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg">
                <div className="p-6">
                  <Outlet />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={"/login"} replace />
  );
}
