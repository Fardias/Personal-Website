import { BiMenuAltRight } from "react-icons/bi";
import Menu from "./Menu";
import { useState } from "react";
export default function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
    const body = document.querySelector("body");
    body.classList.toggle("overflow-y-hidden");
  }
  return (
    <>
      <div className="container mx-auto fixed w-full bg-slate-800 text-white p-4 flex justify-between items-center text-2xl z-50 border-b-2">
        <a href="/" className="font-bold z-20 ">
          FARALF
        </a>
        <BiMenuAltRight className="z-20 hover:opacity-50" onClick={handleNav} />

        {/* menu for mobile device */}
        <ul
          className={
            nav
              ? "text-white opacity-100 absolute py-2 bg-slate-800 border-b-2 right-[0px] min-h-screen w-full top-0 flex flex-col space-y-10 text-[20px] text-center font-semibold items-center pt-32 transition-all duration-300 ease-in z-10"
              : "text-white opacity-0 absolute py-2 bg-slate-800 border-b-2 -right-[700px] min-h-screen w-full top-0 flex flex-col space-y-10 text-[20px] text-center font-semibold items-center pt-32 transition-all duration-300 ease-in z-10"
          }
        >
          <Menu onClick={handleNav} title="Home" href="#home" />
          <Menu onClick={handleNav} title="About" href="#about" />
          <Menu onClick={handleNav} title="Skill" href="#skill" />
          <Menu onClick={handleNav} title="Project" href="#project" />
          <Menu onClick={handleNav} title="Contact" href="#contact" />
        </ul>
      </div>
    </>
  );
}
