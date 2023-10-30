import About from "./components/About";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Skill/Skill";
import Project from "./components/project/Project";

function App() {
  return (
    <div className="mx-auto container relative">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
