import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/General/Navbar";
import VideoLoader from "./components/VideoLoader";

// Implementing lazy loading
const Homepage = lazy(() => import("./pages/Homepage"));
const CulravEvent = lazy(() => import("./pages/culravEvent"));

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("introPlayed");

    if (!hasSeenIntro) {
      setLoading(true);
    }
  }, []);

  const handleVideoEnd = () => {
    localStorage.setItem("introPlayed", "true");
    setLoading(false);
  };

  if (loading) {
    return <VideoLoader onVideoEnd={handleVideoEnd} />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/culrav" element={<CulravEvent />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
