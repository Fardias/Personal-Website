/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div id="home">
      <div className="relative container mx-auto p-4 text-white text-center pt-[80px]">
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="w-[200px] mt-14 mx-auto rounded-full border-4 border-white"
          src="/fardias.jpg"
          alt="home"
          />
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="600"
          data-aos-offset="0"
          data-aos-duration="1500"
        >
          <h1 className="font-bold mt-3 text-slate-300">
            Hello Guys👋, My name is
          </h1>
          <h1 className="font-bold text-2xl uppercase lg:text-3xl">
            Fardias Alfathan
          </h1>
          <h1 className="font-bold text-slate-300">And I am a</h1>
          {/* <h1 >Front End Web Developer</h1> */}
          <TypeAnimation
            className="font-bold text-2xl uppercase lg:text-3xl"
            sequence={[
              "Front End Web Developer",
              500,
              "Graphic Designer",
              500,
              "Web Designer",
              500,
            ]}
            repeat={Infinity}
          />
          
        </div>
      </div>
    </div>
  );
}
