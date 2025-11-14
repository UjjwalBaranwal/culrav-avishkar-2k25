import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Login from "./feature/auth/Login"
// Implementing the lazy loading
import Navbar from "./components/General/Navbar";
// import AvishkarEvents from "./pages/AvishkarEvent";

// Implementing lazy loading
const Homepage = lazy(() => import("./pages/Homepage"));
const CulravEvent = lazy(() => import("./pages/culravEvent"));
const Card = lazy(() => import("./components/General/AvishkarCard"));
const AvishkarEvents = lazy(() => import("./pages/AvishkarAllEvent"));

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/avishkar" element={<AvishkarEvents/>} />
          <Route path="/culrav" element={<CulravEvent/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
