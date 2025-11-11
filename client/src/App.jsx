import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Login from "./feature/auth/Login"
// Implementing the lazy loading
import Navbar from "./components/General/Navbar";
import Schedule from "./pages/Schedule";

// Implementing lazy loading
const Homepage = lazy(() => import("./pages/Homepage"));
const CulravEvent = lazy(() => import("./pages/culravEvent"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/culrav" element={<CulravEvent />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
