import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Loader from "./components/Loader";
import Login from "./feature/auth/Login";
import { TeamPage } from "./pages/TeamPage";
import { Toaster } from "sonner";
// Implementing the lazy loading
import Navbar from "./components/General/Navbar";
import Schedule from "./pages/Schedule";
import ConfirmEmail from "./feature/auth/ConfirmEmail";
import ResetPassword from "./feature/auth/ResetPassword";
import { useDispatch } from "react-redux";
import { loadUser } from "./feature/auth/authSlice.js";

// Implementing lazy loading
const Homepage = lazy(() => import("./pages/Homepage"));
const CulravEvent = lazy(() => import("./pages/culravEvent"));
const DashboardLayout = lazy(
  () => import("./feature/dashBoard/DashboardLayout"),
);

const Profile = lazy(() => import("./pages/dashBoard/Profile"));
const UploadResume = lazy(() => import("./pages/dashBoard/UploadResume"));
const MyTeams = lazy(() => import("./pages/dashBoard/MyTeams"));
const CreateTeam = lazy(() => import("./pages/dashBoard/CreateTeam"));
const ViewInvitation = lazy(() => import("./pages/dashBoard/ViewInvitation"));
const Logout = lazy(() => import("./pages/dashBoard/Logout"));
const Sponsers = lazy(() => import("../src/components/Sponsers/Sponsers.jsx"));
const AvishkarEvents = lazy(() => import("./pages/AvishkarAllEvent"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) dispatch(loadUser());
  });
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/culrav" element={<CulravEvent />} />
            <Route path="/team" element={<TeamPage />} />

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
      <Toaster richColors position="bottom-right" />
    </>
  );
}

export default App;
