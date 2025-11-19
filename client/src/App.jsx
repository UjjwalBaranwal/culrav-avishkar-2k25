import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Loader from "./components/Loader";
import Login from "./feature/auth/Login";
import { TeamPage } from "./pages/TeamPage";
import Gallery from "./pages/Gallery.jsx"
import { Toaster } from "sonner";
import Navbar from "./components/General/Navbar";
import Schedule from "./pages/Schedule";
import ConfirmEmail from "./feature/auth/ConfirmEmail";
import ResetPassword from "./feature/auth/ResetPassword";
import { useDispatch } from "react-redux";
import { loadUser } from "./feature/auth/authSlice.js";
import TeamDetail from "./pages/dashBoard/TeamDetails.jsx";

// lazy loaded pages
const Homepage = lazy(() => import("./pages/Homepage"));
const CulravEvent = lazy(() => import("./pages/culravEvent"));
const DashboardLayout = lazy(() => import("./feature/dashBoard/DashboardLayout"));

const Profile = lazy(() => import("./pages/dashBoard/Profile"));
const UploadResume = lazy(() => import("./pages/dashBoard/UploadResume"));
const MyTeams = lazy(() => import("./pages/dashBoard/MyTeams"));
const CreateTeam = lazy(() => import("./pages/dashBoard/CreateTeam"));
const ViewInvitation = lazy(() => import("./pages/dashBoard/ViewInvitation"));
const Logout = lazy(() => import("./pages/dashBoard/Logout"));

const Sponsers = lazy(() => import("./components/Sponsers/Sponsers.jsx"));
const AvishkarEvents = lazy(() => import("./pages/AvishkarAllEvent"));

// Culrav sub-event pages
const Anunaad = lazy(() => import("./pages/culrav/Anunaad"));
const Darkroom = lazy(() => import("./pages/culrav/Darkroom"));
const Rangmanch = lazy(() => import("./pages/culrav/Rangmanch"));
const Litmuse = lazy(() => import("./pages/culrav/Litmuse"));
const Rangsazzi = lazy(() => import("./pages/culrav/Rangsazzi"));
const Spandan = lazy(() => import("./pages/culrav/Spandan"));
const Razzmatazz = lazy(() => import("./pages/culrav/Razzmatazz"));

// New event main pages — updated exact paths
const CyberQuestPage = lazy(() => import("./pages/avishkar/CyberQuest"));
const GenesisPage = lazy(() => import("./pages/avishkar/Genesis"));
const ElectromaniaPage = lazy(() => import("./pages/avishkar/Electromania"));
const KreedomaniaPage= lazy(() => import("./pages/avishkar/Kreedomania"));
const MechrocosmPage = lazy(() => import("./pages/avishkar/Mechrocosm"));
const MonopolyPage = lazy(() => import("./pages/avishkar/Monopoly"));
const NirmaanPage = lazy(() => import("./pages/avishkar/Nirmaan"));
const OligopolyPage = lazy(() => import("./pages/avishkar/Oligopoly"));
const PowerSurgePage = lazy(() => import("./pages/avishkar/PowerSurge"));
const RasayansPage = lazy(() => import("./pages/avishkar/Rasayans"));


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route index element={<Homepage />} />

            {/* Culrav main and sub-events */}
            <Route path="/culrav" element={<CulravEvent />} />
            <Route path="/culrav/anunaad" element={<Anunaad />} />
            <Route path="/culrav/darkroom" element={<Darkroom />} />
            <Route path="/culrav/rangmanch" element={<Rangmanch />} />
            <Route path="/culrav/litmuse" element={<Litmuse />} />
            <Route path="/culrav/rangsazzi" element={<Rangsazzi />} />
            <Route path="/culrav/spandan" element={<Spandan />} />
            <Route path="/culrav/razzmatazz" element={<Razzmatazz />} />

            {/* Avishkar main and sub-events */}
            <Route path="/avishkar/cyberquest" element={<CyberQuestPage />} />
            <Route path="/avishkar/genesis" element={<GenesisPage />} />
            <Route path="/avishkar/electromania" element={<ElectromaniaPage />} />
            <Route path="/avishkar/kreedomania" element={<KreedomaniaPage />} />
            <Route path="/avishkar/mechrocosm" element={<MechrocosmPage />} />
            <Route path="/avishkar/monopoly" element={<MonopolyPage />} />
            <Route path="/avishkar/nirmaan" element={<NirmaanPage />} />
            <Route path="/avishkar/oligopoly" element={<OligopolyPage />} />
            <Route path="/avishkar/powersurge" element={<PowerSurgePage />} />
            <Route path="/avishkar/rasayans" element={<RasayansPage />} />

            {/* Team Page */}
            <Route path="/team" element={<TeamPage />} />
            <Route path="/gallery" element={<Gallery />} />

            {/* Dashboard */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Navigate to="profile" replace />} />
              <Route path="profile" element={<Profile />} />
              <Route path="upload-resume" element={<UploadResume />} />
              <Route path="my-teams" element={<MyTeams />} />
              <Route path="my-teams/:teamId" element={<TeamDetail />} />
              <Route path="create-team" element={<CreateTeam />} />
              <Route path="view-invitation" element={<ViewInvitation />} />
              <Route path="logout" element={<Logout />} />
            </Route>

            {/* Other standalone pages */}
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/sponsors" element={<Sponsers />} />
            <Route path="/avishkar" element={<AvishkarEvents />} />
            <Route path="/login" element={<Login />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      {/* Global Toaster */}
      <Toaster richColors position="top-right" />
    </>
  );
}

export default App;
