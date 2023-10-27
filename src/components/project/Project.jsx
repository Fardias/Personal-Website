import Card from "./Card";

export default function Project() {
  return (
    <div id="project">
      <div className="relative container mx-auto p-4 text-white  pt-20">
        <h1 className="font-bold text-2xl uppercase mb-5 text-center">Latest Project</h1>
        <div className="space-y-6">
          <Card title="Project 1" href="#" img="../public/project.jpeg"/>
          <Card title="Project 2" href="#" img="../public/project.jpeg"/>
          <Card title="Project 3" href="#" img="../public/project.jpeg"/>
          <Card title="Project 4" href="#" img="../public/project.jpeg"/>
        </div>
      </div>
    </div>
  );
}
