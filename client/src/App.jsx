import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes ,Navigate } from "react-router-dom";
import Loader from "./components/Loader";
import Login from "./feature/auth/Login"
// Implementing the lazy loading
import Navbar from "./components/General/Navbar";

// Implementing lazy loading
const Homepage = lazy(() => import("./pages/Homepage"));
const CulravEvent = lazy(() => import("./pages/culravEvent"));
const DashboardLayout = lazy(() => import("./feature/dashBoard/DashboardLayout"));

const Profile = lazy(() => import("./pages/dashBoard/Profile"));
const UploadResume = lazy(() => import("./pages/dashBoard/UploadResume"));
const MyTeams = lazy(() => import("./pages/dashBoard/MyTeams"));
const CreateTeam = lazy(() => import("./pages/dashBoard/CreateTeam"));
const ViewInvitation = lazy(() => import("./pages/dashBoard/ViewInvitation"));
const Logout = lazy(() => import("./pages/dashBoard/Logout"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/culrav" element={<CulravEvent />} />

          <Route path="/dashboard" 
              element={<DashboardLayout />}>
              <Route index element={<Navigate to="profile" replace />} />
              <Route path="profile" element={<Profile />} />
              <Route path="upload-resume" element={<UploadResume />} />
              <Route path="my-teams" element={<MyTeams />} />
              <Route path="create-team" element={<CreateTeam />} />
              <Route path="view-invitation" element={<ViewInvitation />} />
              <Route path="logout" element={<Logout />} />
        </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
