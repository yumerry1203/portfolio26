
import { useState } from "react";
import SectionTitle from "@/components/layout/SectionTitle";
import { projects } from "@/data/Projects/projects"
import { showcase } from "@/data/Projects/projectsshowcase"
import ProjectsCard from "./ProjectsCard";
import ProjectShowcaseCard from "./ProjectShowcaseCard";
import Button from "@/components/common/Button";
import IcoArrowPurple from "@/assets/images/ico-arrow-purple.svg"

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <section className="content-container h-auto py-120" id="projects">
        <SectionTitle number="02" title="PROJECTS" subTit="Client Work" />
        <div className="mt-60 space-y-70 bg-white rounded-md py-90 px-60">
          {projects.map((item, index) => (
            <ProjectsCard key={item.id} project={item} index={index} />
          ))}

          {isOpen && (
            <div className="grid grid-cols-1 gap-30 md:grid-cols-2 xl:grid-cols-3">
              {showcase.map((item) => (
                <ProjectShowcaseCard key={item.id} project={item} />
              ))}
            </div>
          )}
          
          <div className="flex justify-center">
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
          </div>
        </div>
      </section>
    </div>
  )
};

export default Projects;
