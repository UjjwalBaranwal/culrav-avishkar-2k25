import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Loader from "./components/Loader";
import Login from "./feature/auth/Login";
import { TeamPage } from "./pages/TeamPage";
import { Toaster } from "sonner";
import Navbar from "./components/General/Navbar";
import Schedule from "./pages/Schedule";
import ConfirmEmail from "./feature/auth/ConfirmEmail";
import ResetPassword from "./feature/auth/ResetPassword";

// lazy loaded pages
const Homepage = lazy(() => import("./pages/Homepage"));
const CulravEvent = lazy(() => import("./pages/culravEvent"));
const DashboardLayout = lazy(
  () => import("./feature/dashBoard/DashboardLayout")
);

const Profile = lazy(() => import("./pages/dashBoard/Profile"));
const UploadResume = lazy(() => import("./pages/dashBoard/UploadResume"));
const MyTeams = lazy(() => import("./pages/dashBoard/MyTeams"));
const CreateTeam = lazy(() => import("./pages/dashBoard/CreateTeam"));
const ViewInvitation = lazy(
  () => import("./pages/dashBoard/ViewInvitation")
);
const Logout = lazy(() => import("./pages/dashBoard/Logout"));

const Sponsers = lazy(() =>
  import("./components/Sponsers/Sponsers.jsx")
);

const AvishkarEvents = lazy(
  () => import("./pages/AvishkarAllEvent")
);

// ⭐ Culrav sub-event pages ⭐
const Anunaad = lazy(() => import("./pages/culrav/Anunaad"));
const Darkroom = lazy(() => import("./pages/culrav/Darkroom"));
const Rangmanch = lazy(() => import("./pages/culrav/Rangmanch"));
const Litmuse = lazy(() => import("./pages/culrav/Litmuse"));
const Rangsazzi = lazy(() => import("./pages/culrav/Rangsazzi"));
const Spandan = lazy(() => import("./pages/culrav/Spandan"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>

            <Route index element={<Homepage />} />

            {/* Culrav main page */}
            <Route path="/culrav" element={<CulravEvent />} />

            {/* Culrav Sub-events */}
            <Route path="/culrav/anunaad" element={<Anunaad />} />
            <Route path="/culrav/darkroom" element={<Darkroom />} />
            <Route path="/culrav/rangmanch" element={<Rangmanch />} />
            <Route path="/culrav/litmuse" element={<Litmuse />} />
            <Route path="/culrav/rangsazzi" element={<Rangsazzi />} />
            <Route path="/culrav/spandan" element={<Spandan />} />

            {/* Team Page */}
            <Route path="/team" element={<TeamPage />} />

            {/* Dashboard */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Navigate to="profile" replace />} />
              <Route path="profile" element={<Profile />} />
              <Route path="upload-resume" element={<UploadResume />} />
              <Route path="my-teams" element={<MyTeams />} />
              <Route path="create-team" element={<CreateTeam />} />
              <Route path="view-invitation" element={<ViewInvitation />} />
              <Route path="logout" element={<Logout />} />
            </Route>

            <Route path="/schedule" element={<Schedule />} />
            <Route path="/sponsors" element={<Sponsers />} />
            <Route path="/avishkar" element={<AvishkarEvents />} />
            <Route path="/login" element={<Login />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route path="/reset-password" element={<ResetPassword />} />

          </Routes>
        </Suspense>
      </BrowserRouter>

      {/* Global toaster */}
      <Toaster richColors position="top-right" />
    </>
  );
}

export default App;
