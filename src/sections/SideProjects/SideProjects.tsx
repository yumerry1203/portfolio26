
import { useState } from "react";
import SectionTitle from "@/components/layout/SectionTitle";
import ExpandingToast from "@/components/common/ExpandingToast";
import { sideproject } from "@/data/SideProjects/sideprojects";
import SideProjectCard from "./SideProjectCard";
import SideProjectModal from "./SideProjectModal";
import type { Sideproject } from "@/type/sideproject";

const SideProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Sideproject | null>(null);

  return (
    <section className="py-100" id="side-projects">
      <div className="content-container">
        <SectionTitle number="03" title="SIDE PROJECTS" subTit="Personal Work" />
        <div className="mt-15">
          <ExpandingToast
            title="개인 프로젝트"
            description="직접 기획, 디자인, 퍼블리싱한 개인 작업들 입니다."
          />
        </div>
        <div className="mt-20 grid grid-cols-1 gap-28 sm:grid-cols-2 lg:grid-cols-3">
          {sideproject.map((project) => (
            <SideProjectCard key={project.id} project={project} onViewProcess={setSelectedProject} />
          ))}
        </div>
      </div>
      {selectedProject && (
        <SideProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
};

export default SideProjects;
