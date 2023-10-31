import { BsInstagram, BsGithub } from "react-icons/bs";

export default function Contact() {
  return (
    <div data-aos="fade-zoom-in" data-aos-duration="1000" id="contact">
      <div className="relative container mx-auto p-4 text-white  pt-20 pb-20">
        <h1 className="font-bold text-2xl uppercase mb-5 text-center lg:text-3xl">
          Contact me
        </h1>

        <div className="flex justify-center items-center space-x-5 text-3xl">
          <a
            href="https://www.instagram.com/fardias1/"
            rel="noreferrer"
            target="_blank"
          >
            <BsInstagram />
          </a>
          {/* <a href=""><BsWhatsapp /></a> */}
          <a href="https://github.com/Fardias" rel="noreferrer" target="_blank">
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
