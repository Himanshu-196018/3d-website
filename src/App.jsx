import Navbar from "./components/Navbar";
import { Home } from "./pages";

const App = () => {
  console.log(
    "Main Theme (Overture) | The Grand Score by Alexander Nakarada | https://creatorchords.com/ \n" +
      "Music promoted by https://www.chosic.com/free-music/all/Attribution 4.0 International (CC BY 4.0) \n" +
      "https://creativecommons.org/licenses/by/4.0/"
  );
  return (
    <main className="bg-slate-300/20">
      <Navbar />
      <Home />
    </main>
  );
};

export default App;
