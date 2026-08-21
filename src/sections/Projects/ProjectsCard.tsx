import linkIcon from "@/assets/images/ico-link-black.svg";
import linkPurpleIcon from "@/assets/images/ico-link-purple.svg";
import unlinkIcon from "@/assets/images/ico-unlink-gray.svg";
import Badge from "@/components/common/Badge";
import type { Project } from "@/type/project";
import { useState } from "react";
import DotLabel from "@/components/common/DotLabel";
import Button from "@/components/common/Button";

interface ProjectsCardProps {
  project: Project;
  index: number;
  isLast: boolean;
  onDetailClick: (project: Project) => void;
}

const ProjectsCard = ({ project, index, isLast, onDetailClick }: ProjectsCardProps) => {
  const [activeAction, setActiveAction] = useState<"detail" | "link" | null>(null);
  const projectLink = project.detail.links?.trim();
  const isLink = Boolean(projectLink);
  const isLinkActive = activeAction === "link";

  return (
    <div className="flex flex-col">
      <div className={`flex gap-60 justify-between ${index % 2 === 1 ? "flex-row-reverse" : ""}`}>
          <img
            src={project.image}
            alt={`${project.title} 화면`}
            className="h-full w-full max-w-470 object-contain rounded-md shadow-[var(--shadow-base)]"
          />

        <div className="flex flex-col min-w-500">
          <div className="flex flex-wrap items-center gap-10">
            <Badge variant="gradient" className="min-w-70 font-heading text-base font-bold text-white">
              {project.year}
            </Badge>
            <Badge variant="black" className="min-w-70 font-heading text-base font-bold">
              {project.type}
            </Badge>
            <div className="flex gap-12 text-base font-bold text-accent font-heading">
              {project.category.map((category) => (
                <div key={category} className="flex items-center gap-4">
                  <DotLabel variant="red" className="w-9 h-9 rounded-none"/>
                  <span>{category}</span>
                </div>
              ))}
            </div>
          </div>

          <h3 className="mt-18 font-heading text-4xl font-bold leading-tight text-black">
            {project.title}
          </h3>
          <p className="mt-20 text-xl text-gray-dark">
            {project.description}
          </p>

          <dl className="mt-16 flex flex-col gap-8 text-lg">
            <div className="flex gap-35">
              <dt className="min-w-50 shrink-0 font-bold text-black">기간</dt>
              <dd className="text-gray-dark">{project.period}</dd>
            </div>
            <div className="flex gap-35">
              <dt className="min-w-50 shrink-0 font-bold text-black">기술</dt>
              <dd className="text-gray-dark">{project.skills.join(" · ")}</dd>
            </div>
            <div className="flex gap-35">
              <dt className="min-w-50 shrink-0 font-bold text-black">기여도</dt>
              <dd className="text-gray-dark">{project.contribution}</dd>
            </div>
          </dl>

          <div
            className="mt-26 flex w-274"
            onMouseLeave={() => setActiveAction(null)}
          >
            <Button
              variant="purple"
              className={`h-54 shrink-0 overflow-hidden !px-0 text-xl whitespace-nowrap transition-[width,background-color,color] duration-500 ease-out
                hover:bg-black hover:text-primary
                ${ isLinkActive ? "w-120" : "w-220"
              }`}
              onClick={() => onDetailClick(project)}
              onMouseEnter={() => setActiveAction("detail")}
              onFocus={() => setActiveAction("detail")}
            >
              DETAIL
            </Button>
            {isLink ? (
              <Button
                variant="purple"
                className={`h-54 shrink-0 overflow-hidden !px-0 whitespace-nowrap transition-[width,background-color,color] duration-500 ease-out ${
                  isLinkActive ? "w-154 !bg-black text-primary" : "w-54"
                }`}
                onClick={() => window.open(projectLink, "_blank", "noopener,noreferrer")}
                onMouseEnter={() => setActiveAction("link")}
                onFocus={() => setActiveAction("link")}
              >
                <img
                  src={isLinkActive ? linkPurpleIcon : linkIcon}
                  alt=""
                  aria-hidden="true"
                  className="w-24 h-12 shrink-0 object-contain"
                />
                <span
                  className={`overflow-hidden text-xl transition-[width,margin,opacity] duration-500 ease-out ${
                    isLinkActive ? "ml-14 w-72 opacity-100" : "ml-0 w-0 opacity-0"
                  }`}
                >
                  바로가기
                </span>
              </Button>
            ) : (
              <Button
                variant="purple"
                className="h-54 w-54 shrink-0 !px-0 !bg-muted cursor-not-allowed"
              >
                <img src={unlinkIcon} alt="연결된 프로젝트 링크 없음" className="h-16 w-32 object-contain" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {!isLast && (
        <div
          aria-hidden="true"
          className="mt-70 h-2 w-full bg-gradient [mask-image:repeating-linear-gradient(to_right,#000_0_1.4rem,transparent_1.4rem_2.6rem)] [-webkit-mask-image:repeating-linear-gradient(to_right,#000_0_1.4rem,transparent_1.4rem_2.6rem)]"
        />
      )}
    </div>
  );
};

export default ProjectsCard;
