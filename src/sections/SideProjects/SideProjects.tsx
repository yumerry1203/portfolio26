
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "@/components/layout/SectionTitle";
import { sideproject } from "@/data/SideProjects/sideprojects";
import SideProjectCard from "./SideProjectCard";

gsap.registerPlugin(ScrollTrigger);

const SideProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) return;

    const ctx = gsap.context(() => {
      const horizontalDistance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
      const columns = Math.ceil(sideproject.length / 2);

      gsap.to(track, {
        x: () => -horizontalDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${horizontalDistance()}`,
          pin: true,
          scrub: 1,
          snap: columns > 1 ? 1 / (columns - 1) : undefined,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full">
      <section ref={sectionRef} className="h-screen overflow-hidden py-80" id="side-projects">
        <div className="content-container flex h-full flex-col">
          <div className="flex items-end justify-between">
            <SectionTitle number="03" title="SIDE PROJECTS" subTit="Personal Work" />
            <p className="text-base text-gray">SCROLL TO EXPLORE →</p>
          </div>
          <div ref={viewportRef} className="mt-50 flex-1 overflow-hidden">
            <div ref={trackRef} className="grid h-full w-max grid-flow-col grid-rows-2 auto-cols-[62rem] gap-20">
          {sideproject.map((project, index) => (
            <SideProjectCard key={`${project.id}-${index}`} project={project} />
          ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default SideProjects;
