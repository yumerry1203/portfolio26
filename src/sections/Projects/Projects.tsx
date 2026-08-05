
import SectionTitle from "@/components/layout/SectionTitle";
import { projects } from "@/data/Projects/projects"
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div className="w-full">
      <section className="content-container h-auto py-120" id="projects">
        <SectionTitle number="02" title="PROJECTS" subTit="Client Work" />
        <div className="mt-60 space-y-40 bg-white rounded-md py-90 px-60">
          {projects.map((item) => (
            <ProjectsCard key={item.id} project={item} />
          ))}
        </div>
      </section>
    </div>
  )
};

export default Projects;
