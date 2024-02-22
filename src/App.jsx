import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import { Home } from "./pages";
import { useState } from "react";

const App = () => {
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);

  return (
    <main
      className={`bg-slate-300/20 relative ${
        isRoadmapOpen ? "overflow-hidden" : ""
      }`}
    >
      <Navbar />
      <Home handleRoadmapClick={() => setIsRoadmapOpen(true)} />
      {isRoadmapOpen && <Roadmap handleClick={() => setIsRoadmapOpen(false)} />}
    </main>
  );
};

export default App;
