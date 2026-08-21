
import SectionTitle from "@/components/layout/SectionTitle";
import ExpandingToast from "@/components/common/ExpandingToast";
import { sideproject } from "@/data/SideProjects/sideprojects";
import SideProjectCard from "./SideProjectCard";

const SideProjects = () => {
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
            <SideProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
};

export default SideProjects;
