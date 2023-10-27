/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div id="home">
      <div className="relative container mx-auto p-4 text-white text-center pt-20">
        <img
          className="rounded-md w-[200px] mt-14 mx-auto"
          src="../public/kucing.jpeg"
          alt="pp"
        />
        <h1 className="font-bold mt-3">Hello Guys👋, My name is</h1>
        <h1 className="font-bold text-2xl uppercase">Fardias Alfathan</h1>
        <h1 className="font-bold">And I am a</h1>
        {/* <h1 >Front End Web Developer</h1> */}
        <TypeAnimation
          className="font-bold text-2xl uppercase"
          sequence={[
            "Front End Web Developer",
            500,
            "Student",
            500,
            "Web Designer",
            500,
          ]}
          repeat={Infinity}
        />
        <p className="mt-5 text-slate-200">
          "Working as a frontend web dev is my dream"
        </p>
      </div>
    </div>
  );
}
