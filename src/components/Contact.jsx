import { BsInstagram, BsWhatsapp, BsGithub } from "react-icons/bs";

export default function Contact() {
  return (
    <div id="contact">
      <div className="relative container mx-auto p-4 text-white  pt-20 pb-20">
        <h1 className="font-bold text-2xl uppercase mb-5 text-center lg:text-3xl">
          Contact me
        </h1>

        <div className="flex justify-center items-center space-x-5 text-3xl">
          <BsInstagram />
          <BsWhatsapp />
          <BsGithub />
        </div>
      </div>
    </div>
  );
}
