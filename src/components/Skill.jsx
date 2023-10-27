import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function Skill() {
  return (
    <div id="skill">
      <div className="relative container mx-auto p-4 text-white text-center pt-20">
        <h1 className="font-bold text-2xl uppercase mb-5">My Skills</h1>
        <div className="text-5xl flex flex-col justify-center items-center space-y-5">
          <div className="text-cente flex flex-col justify-center items-center">
            <FaReact />
            <p className="text-base mt-3">React | Intermediate</p>
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <SiTailwindcss />
            <p className="text-base mt-3">Tailwind | Intermediate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
