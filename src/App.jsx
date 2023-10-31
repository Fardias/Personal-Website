import { useEffect, useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Skill/Skill";
import Rocket from "./components/Skill/icon/Rocket";
import Project from "./components/project/Project";

function App() {
  const rocket = useRef(null);
  useEffect(() => {
    // Use the useEffect hook to add a scroll listener
    const handleScroll = () => {
      if (window.scrollY < 150) {
        rocket.current.style.opacity = "0";
      } else {
        rocket.current.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the scroll listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Pass an empty dependency array to run the effect only once
  
  return (
    <div className="mx-auto container relative">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
      <a
        ref={rocket}
        className="opacity-0 inset-4transition-all duration-300 ease-in-out"
        href="#home"
      >
        <Rocket />
      </a>
    </div>
  );
}

export default App;
