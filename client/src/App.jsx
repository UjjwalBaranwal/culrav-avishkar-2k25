import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Loader from "./components/Loader";
import Login from "./feature/auth/Login";
import Navbar from "./components/General/Navbar";
import Schedule from "./pages/Schedule";

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

// ⭐ ADDING ONLY THESE 6 SUBEVENT PAGES ⭐
const Anunaad = lazy(() => import("./pages/culrav/Anunaad"));
const Darkroom = lazy(() => import("./pages/culrav/Darkroom"));
const Rangmanch = lazy(() => import("./pages/culrav/Rangmanch"));
const Litmuse = lazy(() => import("./pages/culrav/Litmuse"));
const Rangsazzi = lazy(() => import("./pages/culrav/Rangsazzi"));
const Spandan = lazy(() => import("./pages/culrav/Spandan"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>

          <Route index element={<Homepage />} />

          {/* Culrav main page */}
          <Route path="/culrav" element={<CulravEvent />} />

         
          <Route path="/culrav/anunaad" element={<Anunaad />} />
          <Route path="/culrav/darkroom" element={<Darkroom />} />
          <Route path="/culrav/rangmanch" element={<Rangmanch />} />
          <Route path="/culrav/litmuse" element={<Litmuse />} />
          <Route path="/culrav/rangsazzi" element={<Rangsazzi />} />
          <Route path="/culrav/spandan" element={<Spandan />} />

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

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
