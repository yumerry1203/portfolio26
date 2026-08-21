import ContributionSlider from "@/components/common/ContributionSlider";
import DotLabel from "@/components/common/DotLabel";
import linkIcon from "@/assets/images/ico-link-purple.svg";
import unlinkIcon from "@/assets/images/ico-unlink-gray.svg";
import type { ArchiveProject } from "@/data/Projects/projectArchiveData";

interface ProjectArchiveCardProps {
  project: ArchiveProject;
}

const ProjectArchiveCard = ({ project }: ProjectArchiveCardProps) => {
  const leftContent = (
    <>
      <div className="overflow-hidden rounded-sm bg-white">
        <img
          src={project.image}
          alt={`${project.title} 프로젝트 화면`}
          className="aspect-[1.54] w-full max-w-300 object-cover"
        />
      </div>
      <div>
        <p className="text-sm text-white">{project.period}</p>
        <div className="mt-8 flex items-center gap-12">
          <h3 className="font-heading text-3xl font-bold leading-none text-white">{project.title}</h3>
          <img
            src={project.siteUrl ? linkIcon : unlinkIcon}
            alt={project.siteUrl ? "연결된 사이트 있음" : "연결된 사이트 없음"}
            className={`w-auto ${project.siteUrl ? "h-16" : "h-20"}`}
          />
        </div>
        <div className="mt-16 flex flex-wrap items-center gap-12 text-sm text-white">
          <span className="rounded-full bg-white px-10 py-2 text-xs font-heading text-black">기술</span>
          <span>{project.skills.join(" · ")}</span>
        </div>
        <div className="mt-12 flex max-w-340 items-center gap-18">
          <span className="shrink-0 text-sm text-white">기여도</span>
          <ContributionSlider contribution={project.contribution} className="min-w-210 flex-1 gap-14 [&_span]:text-sm" />
        </div>
      </div>
    </>
  );

  return (
    <article className="grid gap-24 border-t-2 border-white py-38 first:border-t-0 first:pt-20 lg:grid-cols-[250px_minmax(280px,1fr)_minmax(360px,1.25fr)] lg:items-center lg:gap-40">
      {project.siteUrl ? (
        <a
          href={project.siteUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} 사이트 새 창에서 열기`}
          className="group contents cursor-pointer"
        >
          {leftContent}
        </a>
      ) : leftContent}

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
    </article>
  );
};

export default ProjectArchiveCard;
