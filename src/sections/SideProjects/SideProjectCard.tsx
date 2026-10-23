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
  const hasProcessAction = Boolean(hasProcessModal || project.processLink);

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
      className="group relative overflow-hidden rounded-md bg-gray-dark text-white shadow-gray"
    >
      <div className={`relative h-170 overflow-hidden ${project.image ? "bg-black" : "bg-white"}`}>
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
        {(hasProcessAction || project.link || project.github) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 bg-black/70 px-24 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
            {project.processLink ? (
              <a
                href={project.processLink}
                target="_blank"
                rel="noreferrer"
                className="flex h-36 w-full max-w-190 items-center justify-center rounded-sm bg-white text-sm font-bold text-black transition-transform hover:-translate-y-1"
              >
                작업 과정 보기
              </a>
            ) : hasProcessModal ? (
              <button
                type="button"
                onClick={() => onViewProcess(project)}
                className="h-36 w-full max-w-190 cursor-pointer rounded-sm bg-white text-sm font-bold text-black transition-transform hover:-translate-y-1"
              >
                작업 과정 보기
              </button>
            ) : null}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex h-36 w-full max-w-190 items-center justify-center rounded-sm bg-primary text-sm font-bold text-black transition-transform hover:-translate-y-1"
              >
                사이트 바로가기 ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-36 w-full max-w-190 items-center justify-center rounded-sm bg-gray-dark text-sm font-bold text-white transition-transform hover:-translate-y-1"
              >
                Github ↗
              </a>
            )}
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
        <ul className="mb-8 flex flex-wrap gap-x-14 gap-y-5" aria-label={`${project.title} 주요 기술`}>
          {project.technologies.map((technology) => (
            <li key={technology} className="flex items-center gap-6 text-xs font-bold text-accent sm:text-sm">
              <span className="h-5 w-5 shrink-0 bg-accent" aria-hidden="true" />
              {technology}
            </li>
          ))}
        </ul>
        <h3 className="font-heading text-xl font-bold">{project.title}</h3>
        <p className="mt-5 text-sm text-white/75">{project.description}</p>
      </div>
    </article>
  );
};

export default SideProjectCard;
