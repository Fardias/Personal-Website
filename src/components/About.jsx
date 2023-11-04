export default function About() {
  return (
    <div
      id="about"
      className="xl:px-[100px] lg:max-w-[1600px] mx-auto md:border-2 md:border-transparent mt-28 md:mt-5 border-2 border-2-black"
    >
      <div className="mt-[150px] bg-slate-400 py-4 xl:py-0 xl:rounded-3xl xl:shadow-xl lg:pb-5 xl:mt-0 pt-12 md:pt-5">
        <div
          data-aos="fade-down"
          data-aos-delay="75"
          data-aos-duration="1500"
          data-aos-once="true"
          className="relative container mx-auto p-4 px-10 text-slate-800 text-center xl:mt-24"
        >
          <h1 className="lg:hidden font-bold text-2xl uppercase mb-5 lg:text-3xl xl:mb-1">
            About me
          </h1>
          <div className="md:flex md:justify-between md:items-center md:space-x-10 lg:space-x-5 lg:justify-around xl:px-32">
            <img
              className="w-[200px] mx-auto xl:mr-20 lg:w-[300px]"
              src="/about.png"
              alt="error"
            />
            <div className="md:text-start lg:w-[600px] lg:pr-[25px] lg:text-lg">
              <h1 className="hidden lg:block font-bold text-2xl uppercase mb-5 lg:text-3xl xl:mb-1">
                About me
              </h1>
              <p className="text-slate-800 text-md font-medium mt-5">
                Hello! My name is Fardias Alfathan, and I am happy to welcome
                you to my website. I am a Frontend Developer with a broad
                interest in Website Creation.
              </p>
              <p className="text-slate-800 text-md font-medium mt-2">
                I am a student at Budi Luhur University, majoring in Informatics
                Engineering, I entered this department because I wanted to study
                and learn new things in the world of IT, especially in creating
                websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
