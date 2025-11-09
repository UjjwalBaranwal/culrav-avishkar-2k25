import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/General/Navbar";

// Implementing the lazy loading
const Homepage = lazy(() => import("./pages/Homepage"));
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Homepage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
