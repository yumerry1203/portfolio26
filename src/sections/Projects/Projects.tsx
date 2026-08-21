
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
      <section className="content-container h-auto py-120" id="projects">
        <SectionTitle number="02" title="PROJECTS" subTit="Client Work" />
        <ExpandingToast
          title="주요 프로젝트"
          description="최근 작업한 프로젝트의 내용을 자세히 확인할 수 있습니다."
        />
        <div className="space-y-70 bg-white rounded-md py-90 px-60">
          {projects.map((item, index) => (
            <ProjectsCard
              key={item.id}
              project={item}
              index={index}
              isLast={index === projects.length - 1}
              onDetailClick={setSelectedProject}
            />
          ))}

          {/* {isOpen && (
            <div className="grid grid-cols-1 gap-30 md:grid-cols-2 xl:grid-cols-3">
              {showcase.map((item) => (
                <ProjectShowcaseCard key={item.id} project={item} />
              ))}
            </div>
          )} */}
          
          {/* <div className="flex justify-center">
            <Button
              variant="purpleLine"
              className="w-120 h-40 text-lg px-0"
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? "접기" : "열기"}
              <img
                src={IcoArrowPurple}
                alt=""
                aria-hidden="true"
                className={`transition-transform duration-200 ml-12 ${isOpen ? "" : "rotate-180"}`}
              />
            </Button>
          </div> */}
        </div>
      </section>
      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  )
};

export default Projects;
