import Badge from "@/components/common/Badge";
import ContributionSlider from "@/components/common/ContributionSlider";
import DotLabel from "@/components/common/DotLabel";
import type { Showcase } from "@/type/showcase";

interface ProjectShowcaseCardProps {
  project: Showcase;
  className?: string;
}

const ProjectShowcaseCard = ({
  project,
  className = "",
}: ProjectShowcaseCardProps) => {
  return (
    <div
      className={`overflow-hidden h-340 rounded-md bg-gray-dark ${className}`}
    >
      <div className="h-150 w-full overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} 대표 화면`}
          className="min-h-full min-w-full object-contain"
        />        
      </div>

      <div className="relative px-30 pt-42 pb-20">
        <Badge
          variant="gradient"
          className="absolute -top-15 font-heading text-sm font-bold w-92"
        >
          {project.type}
        </Badge>
        <div className="flex flex-wrap items-center gap-x-20 gap-y-10">
          <h3 className="font-heading text-lg font-bold">{project.title}</h3>
          <div className="flex flex-wrap gap-x-8 font-heading text-xs font-bold text-accent">
            {project.category.map((category) => (
              <span key={category} className="flex items-center gap-4">
                <DotLabel variant="red" className="w-6 h-6 rounded-none" />
                {category}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-4 text-base leading-snug">
          {project.description}
        </p>

        <div className="mt-14 flex items-center gap-20">
          <span className="shrink-0 text-sm">기여도</span>
          <ContributionSlider contribution={project.contribution} className="flex-1" />
        </div>

        <p className="mt-15 text-sm text-gray">{project.period}</p>
      </div>
    </div>
  );
};

export default ProjectShowcaseCard;
