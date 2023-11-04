import { Figma } from "./icon/Figma";
import { PhotoShop } from "./icon/PhotoShop";
import React from "./icon/React";
import { Tailwind } from "./icon/Tailwind";

export default function Skill() {
  return (
    <div id="skill" className="xl:mt-14 md:mt-16">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="relative container mx-auto p-4 text-slate-800 text-center pt-20 md:px-[200px] xl:px-[300px] 2xl:px-[500px]"
      >
        <h1 className="font-bold text-2xl uppercase mb-5 lg:text-3xl">
          My Skills
        </h1>
        <div className="text-5xl grid grid-cols-2 gap-5 border-2 border-slate-800/50 rounded-xl p-5 lg:font-bold">
          <div className="text-center flex flex-col justify-center items-center ">
            <React />
            <p className="text-base mt-3 md:text-lg">React JS</p>
          </div>
          <div className="text-center flex flex-col justify-center items-center ">
            <Tailwind />
            <p className="text-base mt-3 md:text-lg">Tailwind</p>
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <PhotoShop />
            <p className="text-base mt-3 md:text-lg">Photoshop</p>
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <Figma />
            <p className="text-base mt-3 md:text-lg">Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
}
