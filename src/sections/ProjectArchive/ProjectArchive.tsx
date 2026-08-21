import ExpandingToast from "@/components/common/ExpandingToast";
import ProjectArchiveCard from "./ProjectArchiveCard";
import { archiveProjects } from "@/data/Projects/projectArchiveData";

const ProjectArchive = () => (
  <section id="project-archive" className="bg-gray-dark py-80 md:py-120">
    <div className="content-container">
      <ExpandingToast />
      <div className="mt-34">
        {archiveProjects.map((project) => (
          <ProjectArchiveCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectArchive;
