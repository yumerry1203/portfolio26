import Badge from "@/components/common/Badge";
import ProjectStatusBadge from "@/components/common/ProjectStatusBadge";
import type { Sideproject } from "@/type/sideproject";

interface SideProjectCardProps {
  project: Sideproject;
  onViewProcess: (project: Sideproject) => void;
}

const SideProjectCard = ({ project, onViewProcess }: SideProjectCardProps) => {
  return (
    <article className="group relative overflow-hidden rounded-md bg-gray-dark text-white shadow-gray">
      <div className="relative h-170 overflow-hidden bg-black">
        <img
          src={project.image}
          alt={`${project.title} 프로젝트 미리보기`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.status && (
          <ProjectStatusBadge status={project.status} />
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 bg-black/70 px-24 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
          <button
            type="button"
            disabled={!project.viewImg}
            onClick={() => onViewProcess(project)}
            className="h-36 w-full max-w-190 cursor-pointer rounded-sm bg-white text-sm font-bold text-black transition-transform hover:-translate-y-1 disabled:cursor-not-allowed disabled:bg-gray disabled:text-gray-dark disabled:hover:translate-y-0"
          >
            작업 과정 보기
          </button>
          <a
            href={project.link}
            target={project.link ? "_blank" : undefined}
            rel={project.link ? "noreferrer" : undefined}
            aria-disabled={!project.link}
            tabIndex={project.link ? undefined : -1}
            className={`flex h-36 w-full max-w-190 items-center justify-center rounded-sm text-sm font-bold transition-transform hover:-translate-y-1 ${project.link ? "bg-primary text-black" : "pointer-events-none cursor-not-allowed bg-gray text-gray-dark"}`}
          >
            사이트 바로가기 ↗
          </a>
        </div>
      </div>

      <Badge
        variant="gradient"
        className="absolute left-20 top-170 z-10 -translate-y-1/2 px-10 py-4 text-xs font-bold text-black"
      >
        {project.year}
      </Badge>

      <div className="p-20 pt-30">
        {project.category.length > 0 && (
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-xs font-bold text-accent">
            {project.category.map((category) => (
              <span key={category} className="before:mr-5 before:content-['▪']">{category}</span>
            ))}
          </div>
        )}
        <h3 className={`${project.category.length > 0 ? "mt-8" : ""} font-heading text-xl font-bold`}>{project.title}</h3>
        <p className="mt-5 text-sm text-white/80">{project.description}</p>
      </div>
    </article>
  );
};

export default SideProjectCard;
