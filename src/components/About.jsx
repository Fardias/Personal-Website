export default function About() {
  return (
    <div
      id="about"
      data-aos="fade-down"
      data-aos-delay="75"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <div className="relative container mx-auto p-4 px-10 text-white text-center pt-20 xl:mt-24">
        <h1 className="font-bold text-2xl uppercase mb-5 lg:text-3xl xl:mb-12">
          About me
        </h1>
        <div className="md:flex md:justify-between md:items-center md:space-x-10 lg:space-x-5 lg:justify-around xl:px-32">
          <img
            className="rounded-full w-[200px] mx-auto border-4 border-white xl:mr-20"
            src="/about.jpeg"
            alt="error"
          />
          <div className="md:text-start lg:w-[600px] lg:pr-[25px] lg:text-lg">
            <p className="text-slate-200 text-md font-medium mt-5">
              Hello! My name is Fardias Alfathan, and I am happy to welcome you
              to my website. I am a Frontend Developer with a broad interest in
              Website Creation.
            </p>
            <p className="text-slate-200 text-md font-medium mt-2">
              I am a student at Budi Luhur University, majoring in Informatics
              Engineering, I entered this department because I wanted to study
              and learn new things in the world of IT, especially in creating
              websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
