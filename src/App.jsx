import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import { Home } from "./pages";
import { useState } from "react";

const App = () => {
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);

  // console.log(
  //   "Main Theme (Overture) | The Grand Score by Alexander Nakarada | https://creatorchords.com/ \n" +
  //     "Music promoted by https://www.chosic.com/free-music/all/Attribution 4.0 International (CC BY 4.0) \n" +
  //     "https://creativecommons.org/licenses/by/4.0/"
  // );

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
