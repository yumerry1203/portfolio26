import DotLabel from "@/components/common/DotLabel";
import linkIcon from "@/assets/images/ico-link-purple.svg";
import unlinkIcon from "@/assets/images/ico-unlink-gray.svg";
import type { ArchiveProject } from "@/data/Projects/projectArchiveData";

interface ProjectArchiveCardProps {
  project: ArchiveProject;
}

const ProjectArchiveCard = ({ project }: ProjectArchiveCardProps) => {
  const image = (
    <div className="overflow-hidden rounded-sm bg-white">
      <img
        src={project.image}
        alt={`${project.title} 프로젝트 화면`}
        loading="lazy"
        decoding="async"
        className="block aspect-[1.54] w-full object-cover"
      />
    </div>
  );

  const projectInfo = (
    <div>
      <p className="text-sm text-white">{project.period}</p>
      <div className="mt-8">
        {project.siteUrl ? (
          <div className="flex w-fit items-center">
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} 사이트 새 창에서 열기`}
              className="peer flex items-center gap-12 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <h3 className="font-heading text-2xl font-bold leading-none text-white sm:text-3xl">{project.title}</h3>
              <span className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full">
                <img src={linkIcon} alt="" aria-hidden="true" className="h-16 w-auto" />
              </span>
            </a>
            <span
              className="pointer-events-none max-w-0 -translate-x-6 overflow-hidden whitespace-nowrap font-body text-sm font-bold text-primary opacity-0 transition-[max-width,margin,opacity,transform] duration-300 ease-out peer-hover:ml-6 peer-hover:max-w-80 peer-hover:translate-x-0 peer-hover:opacity-100 peer-focus-visible:ml-6 peer-focus-visible:max-w-80 peer-focus-visible:translate-x-0 peer-focus-visible:opacity-100"
              aria-hidden="true"
            >
              사이트 이동
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-12">
            <h3 className="font-heading text-2xl font-bold leading-none text-white sm:text-3xl">{project.title}</h3>
            <img src={unlinkIcon} alt="연결된 사이트 없음" className="h-20 w-auto" />
          </div>
        )}
      </div>
      <div className="mt-16 flex flex-wrap items-center gap-12 text-sm text-white">
        <span className="rounded-full bg-white px-10 py-2 text-xs font-heading text-black">기술</span>
        <span>{project.skills.join(" ,  ")}</span>
      </div>
      <div className="mt-12 flex min-w-0 items-center gap-8 text-sm text-white">
        <span className="shrink-0 rounded-full bg-white px-10 py-2 font-heading text-xs text-black">작업 범위</span>
        <span>{project.role}</span>
      </div>
    </div>
  );

  const projectDetails = (
    <div>
      <h4 className="text-xl font-bold text-accent">{project.workTitle}</h4>
      <ul className="mt-12 space-y-8 text-sm leading-relaxed text-white">
        {project.responsibilities.map((responsibility) => (
          <li key={responsibility} className="flex items-center gap-16">
            <DotLabel variant="red" className="h-5 w-5 shrink-0 rounded-none" />
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <article className="grid gap-24 border-t-2 border-white py-30 first:border-t-0 first:pt-20 sm:py-38 md:grid-cols-[250px_minmax(0,1fr)] md:items-center md:gap-40 lg:grid-cols-[250px_minmax(280px,1fr)_minmax(360px,1.25fr)]">
      {image}

      <div className="contents md:flex md:flex-col md:justify-center md:gap-30 lg:contents">
        {projectInfo}
        {projectDetails}
      </div>
    </article>
  );
};

export default ProjectArchiveCard;
