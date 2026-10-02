
import { useState } from "react";
import SectionTitle from "@/components/layout/SectionTitle";
import { projects } from "@/data/Projects/projects.tsx"
import ProjectsCard from "./ProjectsCard";
import ProjectDetailModal from "./ProjectDetailModal";
import type { Project } from "@/type/project";
import ExpandingToast from "@/components/common/ExpandingToast";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="w-full">
      <section className="content-container h-auto py-70 sm:py-48" id="projects">
        <SectionTitle number="01" title="PROJECTS" subTit="Client Work" />
        <ExpandingToast
          title="주요 프로젝트"
          description="최근 작업한 프로젝트의 내용을 자세히 확인할 수 있습니다."
        />
        <div className="space-y-50 rounded-md bg-white px-20 py-45 sm:space-y-70 sm:px-60 sm:py-90">
          {projects.map((item, index) => (
            <ProjectsCard
              key={item.id}
              project={item}
              index={index}
              isLast={index === projects.length - 1}
              onDetailClick={setSelectedProject}
            />
          ))}
        </div>
      </section>
      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  )
};

export default Projects;
