import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillCard from "./SkillCard";

gsap.registerPlugin(ScrollTrigger);

interface SkillItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

const skillItems: SkillItem[] = [
  {
    id: "user-experience-and-data-flow",
    number: "01",
    title: "사용자 경험과 데이터 흐름을 고려한 UI 구현",
    description:
      "다양한 디바이스 환경과 사용자를 고려해 반응형 UI와 인터랙션을 구현합니다. API와 상태 관리 구조를 이해하고, 데이터 변화에 따른 로딩·에러·빈 상태 등 실제 서비스에 필요한 UI 상태를 구현하며 사용 과정에서 발견되는 불편과 문제를 개선합니다.",
  },
  {
    id: "stability",
    number: "02",
    title: "안정성과 유지보수를 고려한 개발",
    description:
      "재사용 가능한 구조와 일관된 코드 작성을 지향하며, TypeScript를 활용해 예외 상황과 오류 가능성을 고려한 안정적인 UI를 구현합니다.",
  },
  {
    id: "communication",
    number: "03",
    title: "원활한 협업을 위한 커뮤니케이션",
    description:
      "디자인 요구사항을 구현 가능한 형태로 구체화하고, 디자이너·개발자와 변경사항 및 데이터 구조, 예외 상황 등을 공유하며 요구사항을 조율합니다.",
  },
  {
    id: "problem-solving",
    number: "04",
    title: "문제를 발견하고 함께 해결하는 과정",
    description:
      "구현 과정에서 발견한 문제를 적극적으로 공유하고, 원인과 영향을 파악해 관련 구성원과 해결 방향을 조율하며 개선해 나갑니다.",
  },
  {
    id: "learning",
    number: "05",
    title: "새로운 기술을 배우고 적용하는 과정",
    description:
      "새로운 기술과 개발 방식을 꾸준히 학습하고 적용합니다. AI 도구도 개발 과정에 활용하며, 결과를 이해하고 검토해 생산성과 완성도를 높입니다.",
  },
];

const SkillList = () => {
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const cards = Array.from(list.children) as HTMLElement[];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(cards, { autoAlpha: 1, y: 0 });
        return;
      }

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 120%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, list);

    return () => context.revert();
  }, []);

  return (
    <div className="mt-20 min-w-0 flex-1 pb-20 sm:mt-60 sm:px-24 sm:pb-40 xl:mt-98 xl:pr-40" aria-label="개발 역량 목록">
      <div className="flex items-end gap-16">
        <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
          HOW I WORK
        </h3>
        <span aria-hidden="true" className="mb-5 h-5 min-w-40 flex-1 bg-gradient" />
      </div>

      <div ref={listRef} className="mt-24 grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-1 xl:gap-20">
        {skillItems.map((skill) => <SkillCard key={skill.id} {...skill} />)}
      </div>
    </div>
  );
};

export default SkillList;
