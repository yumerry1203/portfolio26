import linkIcon from "@/assets/images/ico-link-black.svg";
import linkPurpleIcon from "@/assets/images/ico-link-purple.svg";
import unlinkIcon from "@/assets/images/ico-unlink-gray.svg";
import Badge from "@/components/common/Badge";
import type { Project } from "@/type/project";
import { useLayoutEffect, useRef, useState } from "react";
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
  const [activeAction, setActiveAction] = useState<"detail" | "link" | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const projectLink = project.detail.links?.trim();
  const isLink = Boolean(projectLink);
  const isLinkActive = activeAction === "link";

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
      <div className={`flex flex-col gap-30 justify-between xl:flex-row xl:gap-60 ${index % 2 === 1 ? "xl:flex-row-reverse" : ""}`}>
          <img
            src={project.image}
            alt={`${project.title} 화면`}
            className="h-auto w-full self-start rounded-md object-contain shadow-[var(--shadow-base)] xl:max-w-470"
          />

        <div className="flex min-w-0 flex-1 flex-col xl:min-w-500">
          <div className="flex flex-wrap items-center gap-10">
            <Badge variant="gradient" className="min-w-70 font-heading text-base font-bold text-white">
              {project.year}
            </Badge>
            <Badge variant="black" className="min-w-70 font-heading text-base font-bold">
              {project.type}
            </Badge>
            <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm font-heading font-bold text-accent sm:text-base">
              {project.category.map((category) => (
                <div key={category} className="flex items-center gap-4">
                  <DotLabel variant="red" className="w-9 h-9 rounded-none"/>
                  <span>{category}</span>
                </div>
              ))}
            </div>
          </div>

          <h3 className="mt-18 font-heading text-2xl font-bold leading-tight text-black sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-16 text-base text-gray-dark sm:mt-20 sm:text-xl">
            {project.description}
          </p>

          <dl className="mt-16 flex flex-col gap-8 text-sm sm:text-lg">
            <div className="flex gap-16 sm:gap-35">
              <dt className="min-w-50 shrink-0 font-bold text-black">기간</dt>
              <dd className="text-gray-dark">{project.period}</dd>
            </div>
            <div className="flex gap-16 sm:gap-35">
              <dt className="min-w-50 shrink-0 font-bold text-black">기술</dt>
              <dd className="text-gray-dark">{project.skills.join(" · ")}</dd>
            </div>
            <div className="flex gap-16 sm:gap-35">
              <dt className="min-w-50 shrink-0 font-bold text-black">기여도</dt>
              <dd className="text-gray-dark">{project.contribution}</dd>
            </div>
          </dl>

          <div
            className="mt-26 flex w-full max-w-274"
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
          className="mt-50 h-2 w-full bg-gradient sm:mt-70 [mask-image:repeating-linear-gradient(to_right,#000_0_1.4rem,transparent_1.4rem_2.6rem)] [-webkit-mask-image:repeating-linear-gradient(to_right,#000_0_1.4rem,transparent_1.4rem_2.6rem)]"
        />
      )}
    </div>
  );
};

export default ProjectsCard;
