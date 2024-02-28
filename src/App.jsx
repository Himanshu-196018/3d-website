import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import { Home } from "./pages";
import { useState } from "react";

const App = () => {
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);

  return (
    <main className={`relative ${isRoadmapOpen ? "overflow-hidden" : ""}`}>
      <video
        autoPlay
        loop
        muted
        id="video"
        src="/videos/bg-night-sky.mp4"
      ></video>
      <Navbar />
      <Home handleRoadmapClick={() => setIsRoadmapOpen(true)} />
      {isRoadmapOpen && <Roadmap handleClick={() => setIsRoadmapOpen(false)} />}
    </main>
  );
};

export default App;
