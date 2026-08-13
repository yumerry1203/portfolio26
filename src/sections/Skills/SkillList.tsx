import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillCard from "./SkillCard";

gsap.registerPlugin(ScrollTrigger);

const skillItems = Array.from({ length: 6 }, (_, index) => ({
  id: index,
  name: "react",
}));

const SkillList = () => {
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-skill-card]");

      cards.forEach((card) => {
        // 아래 카드가 상단 스택 영역으로 들어올수록 자연스럽게 커집니다.
        gsap.fromTo(card, { scale: 0.82, opacity: 0.56 }, {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            scroller: list,
            start: "top bottom-=30",
            end: "top top+=64",
            scrub: 0.35,
          },
        });
      });
    });

    ScrollTrigger.refresh();
    return () => context.revert();
  }, []);

  return (        
    <div
      ref={listRef}
      className="skills-card-list h-800 min-w-0 flex-1 overflow-y-auto pl-24 pr-40 pt-58 pb-40 mt-60"
      aria-label="기술 목록"
    >
      <div className="space-y-40">
        {skillItems.map((skill, index) => (
          <div key={skill.id}>
            <SkillCard name={skill.name} depth={index} />
          </div>
        ))}
      </div>
    </div>
  )
};

export default SkillList;
