import Navbar from "./components/Navbar";
import { Home } from "./pages";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Navbar />
      <Home />
    </main>
  );
};

export default App;
