import Badge from "@/components/common/Badge";
import type { Project } from "@/type/project";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DotLabel from "@/components/common/DotLabel";
import Button from "@/components/common/Button";

gsap.registerPlugin(ScrollTrigger);

interface ProjectsCardProps {
  project: Project;
  index: number;
  isLast: boolean;
  onDetailClick: (project: Project) => void;
}

const ProjectsCard = ({ project, index, isLast, onDetailClick }: ProjectsCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(card, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 44 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, card);

    return () => context.revert();
  }, []);

  return (
    <div ref={cardRef} className="flex flex-col">
      <div className={`flex flex-col gap-30 justify-between xl:flex-row xl:items-center xl:gap-60 ${index % 2 === 1 ? "xl:flex-row-reverse" : ""}`}>
          <img
            src={project.image}
            alt={`${project.title} 화면`}
            className="h-auto w-full self-start rounded-md object-contain shadow-[var(--shadow-base)] xl:max-w-470 xl:self-center"
          />

        <div className="flex min-w-0 flex-1 flex-col xl:min-w-500">
          <div className="flex flex-wrap items-center gap-10">
            <Badge variant="gradient" className="min-w-60 !px-12 !py-5 font-heading !text-sm font-bold text-white">
              {project.year}
            </Badge>
            <Badge variant="black" className="min-w-60 !px-12 !py-5 font-heading !text-sm font-bold">
              {project.type}
            </Badge>
            <div className="flex flex-wrap gap-x-10 gap-y-4 font-heading text-xs font-bold text-accent sm:text-sm">
              {project.category.map((category) => (
                <div key={category} className="flex items-center gap-4">
                  <DotLabel variant="red" className="!h-7 !w-7 rounded-none"/>
                  <span>{category}</span>
                </div>
              ))}
            </div>
          </div>

          <h3 className="mt-18 font-heading text-2xl font-bold leading-tight text-black sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-16 text-lg text-gray-dark sm:mt-20">
            {project.description}
          </p>

          <dl className="mt-16 flex flex-col gap-8 text-sm sm:text-lg">
            <div className="flex gap-16 sm:gap-35">
              <dt className="min-w-70 shrink-0 font-bold text-black">기간</dt>
              <dd className="text-base text-gray-dark">{project.period}</dd>
            </div>
            <div className="flex gap-16 sm:gap-35">
              <dt className="min-w-70 shrink-0 font-bold text-black">역할</dt>
              <dd className="text-base text-gray-dark">{project.role}</dd>
            </div>
            <div className="flex gap-16 sm:gap-35">
              <dt className="min-w-70 shrink-0 font-bold text-black">주요 기술</dt>
              <dd className="text-base text-gray-dark">{project.skills.join(" · ")}</dd>
            </div>
          </dl>

          <div className="mt-26 w-full max-w-220">
            <Button
              variant="purple"
              className="h-54 w-full !px-0 text-xl whitespace-nowrap transition-[background-color,color] duration-500 ease-out hover:bg-black hover:text-primary"
              onClick={() => onDetailClick(project)}
            >
              DETAIL
            </Button>
          </div>
        </div>
      </div>

      {!isLast && (
        <div
          aria-hidden="true"
          className="mt-50 h-2 w-full bg-gradient sm:mt-70 [mask-image:repeating-linear-gradient(to_right,#000_0_1.4rem,transparent_1.4rem_2.6rem)] [-webkit-mask-image:repeating-linear-gradient(to_right,#000_0_1.4rem,transparent_1.4rem_2.6rem)]"
        />
      )}
    </div>
  );
};

export default ProjectsCard;
