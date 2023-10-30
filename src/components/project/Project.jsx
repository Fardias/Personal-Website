import Card from "./Card";

export default function Project() {
  return (
    <div id="project">
      <div className="relative container mx-auto p-4 text-white pt-20">
        <h1 className="font-bold text-2xl uppercase mb-5 text-center lg:text-3xl">Latest Project</h1>
        <div className="space-y-6 grid md:grid-cols-2 md:space-y-0 md:gap-7 md:pt-5 lg:gap-10 lg:p-12 xl:px-[400px]">
          <Card title="Project 1" href="#" img="/project.jpeg"/>
          <Card title="Project 2" href="#" img="/project.jpeg"/>
          <Card title="Project 3" href="#" img="/project.jpeg"/>
          <Card title="Project 4" href="#" img="/project.jpeg"/>
        </div>
      </div>
    </div>
  );
}
