import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExpandingToast from "@/components/common/ExpandingToast";
import ProjectArchiveCard from "./ProjectArchiveCard";
import { archiveProjects } from "@/data/Projects/projectArchiveData";

gsap.registerPlugin(ScrollTrigger);

const ProjectArchive = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const wipe = wipeRef.current;
    const content = contentRef.current;
    if (!section || !wipe || !content) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(wipe, { scaleX: 1 });
        gsap.set(content, { autoAlpha: 1, y: 0 });
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .to(wipe, { scaleX: 1, duration: 0.55, ease: "power3.inOut" })
        .fromTo(content, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" }, 0.12);
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="project-archive" className="relative overflow-hidden bg-black py-60 sm:py-80 md:py-48">
      <div ref={wipeRef} aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 bg-gray-dark" />
      <div ref={contentRef} className="content-container relative z-10">
        <ExpandingToast />
        <div className="mt-16 sm:mt-34">
          {archiveProjects.map((project) => (
            <ProjectArchiveCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectArchive;
