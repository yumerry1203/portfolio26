import { useEffect, useRef } from "react";
import Badge from "@/components/common/Badge";
import ProjectStatusBadge from "@/components/common/ProjectStatusBadge";
import type { Sideproject } from "@/type/sideproject";
import { preloadProcessImage } from "./processImagePreloader";

interface SideProjectCardProps {
  project: Sideproject;
  onViewProcess: (project: Sideproject) => void;
}

const SideProjectCard = ({ project, onViewProcess }: SideProjectCardProps) => {
  const cardRef = useRef<HTMLElement>(null);
  const hasProcessModal = Boolean(project.viewImg || project.id === "portfolio");

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !project.viewImg || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || !project.viewImg) return;

        void preloadProcessImage(project.viewImg).catch(() => undefined);
        observer.disconnect();
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [project.viewImg]);

  const preloadProcess = () => {
    if (!project.viewImg) return;
    void preloadProcessImage(project.viewImg).catch(() => undefined);
  };

  return (
    <article
      ref={cardRef}
      onPointerEnter={preloadProcess}
      onFocus={preloadProcess}
      className="group relative overflow-hidden rounded-md bg-white text-black shadow-gray"
    >
      <div className={`relative h-170 overflow-hidden ${project.image ? "bg-black" : "bg-[#ffffff]"}`}>
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} 프로젝트 미리보기`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {project.status && (
          <ProjectStatusBadge status={project.status} />
        )}
        {(hasProcessModal || project.link) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 bg-black/70 px-24 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
            <button
              type="button"
              disabled={!hasProcessModal}
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
        )}
      </div>

      <Badge
        variant="gradient"
        className="absolute left-20 top-170 z-10 -translate-y-1/2 px-10 py-4 text-xs font-bold text-black"
      >
        {project.year}
      </Badge>

      <div className="p-20 pt-30">
        <h3 className="font-heading text-xl font-bold">{project.title}</h3>
        <p className="mt-5 text-sm text-black">{project.description}</p>
      </div>
    </article>
  );
};

export default SideProjectCard;
