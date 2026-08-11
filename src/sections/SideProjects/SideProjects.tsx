
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
      const pauseDistance = () => window.innerHeight * 0.6;
      const updateTrackPosition = (progress: number) => {
        const distance = horizontalDistance();
        const travelProgress = distance === 0
          ? 0
          : Math.min(1, (progress * (distance + pauseDistance())) / distance);

        gsap.set(track, { x: -distance * travelProgress });
      };

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${horizontalDistance() + pauseDistance()}`,
        pin: true,
        pinType: "fixed",
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => updateTrackPosition(self.progress),
        onRefresh: (self) => updateTrackPosition(self.progress),
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full">
      <section ref={sectionRef} className="flex h-screen flex-col overflow-hidden py-80" id="side-projects">
        <div className="content-container">
          <SectionTitle number="03" title="SIDE PROJECTS" subTit="Personal Work" />          
        </div>
        <div ref={viewportRef} className="mt-50 min-h-0 flex-1 overflow-hidden">
          <div
            ref={trackRef}
            className="grid h-full w-max grid-flow-col grid-rows-2 auto-cols-[62rem] gap-20"
            style={{ paddingLeft: "max(var(--container-padding), calc((100vw - var(--container-width)) / 2))" }}
          >
            {sideproject.map((project, index) => (
              <SideProjectCard key={`${project.id}-${index}`} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
};

export default SideProjects;
