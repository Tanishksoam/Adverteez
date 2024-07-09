import "./App.css";
import Contact from "./components/Contact";
import Design from "./components/Design";
import Navbar from "./components/Navbar";
import TargetAudience from "./components/TargetAudience";
import Track from "./components/Track";
import Hero from "./components/hero";

function App() {
  return (
    <div className=" w-full flex flex-col items-start justify-start font-mono ">
      <div className="w-full flex flex-col items-start justify-start  bg-[#f3f3ff] px-52 py-6">
        <Navbar />
        <Hero />
      </div>

      <div className="w-full flex flex-col items-start justify-start  bg-[#018CE1] px-52 py-6">
        <TargetAudience />
      </div>

      <div className="w-full flex flex-col items-start justify-start  bg-[#f3f3ff] px-52 py-6">
        <Design />
        <Track />
      </div>
      <div className="w-full flex flex-col items-start justify-start  bg-[#0e0e31] px-52 py-6">
        <Contact />
      </div>
    </div>
  );
}

export default App;
