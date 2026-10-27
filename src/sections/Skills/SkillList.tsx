import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillCard from "./SkillCard";
import codeBackground from "@/assets/images/animated-code-typing.svg";
import ideaCharacter from "@/assets/images/3d-developer-idea-transparent.png";
import codingMonitor from "@/assets/images/3d-coding-monitor.png";
import collaboration from "@/assets/images/3d-collaboration-handshake.png";

gsap.registerPlugin(ScrollTrigger);

interface SkillItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const skillItems: SkillItem[] = [
  {
    id: "user-experience-and-data-flow",
    number: "01",
    title: "사용자 경험과 데이터 흐름을 고려한 UI 구현",
    description:
      "다양한 디바이스 환경과 사용자를 고려해 반응형 UI와 인터랙션을 구현합니다. API와 상태 관리 구조를 이해하고, 데이터 변화에 따른 로딩, 에러, 빈 상태 등 실제 서비스에 필요한 UI 상태를 구현하며 사용 과정에서 발견되는 불편과 문제를 개선합니다.",
    image: ideaCharacter,
    imageAlt: "노트북으로 작업하며 아이디어를 떠올리는 개발자 캐릭터",
  },
  {
    id: "stability",
    number: "02",
    title: "안정성과 유지보수를 고려한 개발",
    description:
      "재사용 가능한 구조와 일관된 코드 작성을 지향하며, TypeScript를 활용해 예외 상황과 오류 가능성을 고려한 안정적인 UI를 구현합니다.",
    image: codingMonitor,
    imageAlt: "코드가 표시된 모니터",
  },
  {
    id: "communication",
    number: "03",
    title: "원활한 협업을 위한 커뮤니케이션",
    description:
      "디자인 요구사항을 구현 가능한 형태로 구체화하고, 디자이너, 개발자와 변경사항 및 데이터 구조, 예외 상황 등을 공유하며 요구사항을 조율합니다.",
    image: collaboration,
    imageAlt: "협업을 의미하는 악수",
  },
  {
    id: "problem-solving",
    number: "04",
    title: "문제를 발견하고 함께 해결하는 과정",
    description:
      "구현 과정에서 발견한 문제를 적극적으로 공유하고, 원인과 영향을 파악해 관련 구성원과 해결 방향을 조율하며 개선해 나갑니다.",
    image: ideaCharacter,
    imageAlt: "문제 해결 아이디어를 떠올리는 개발자 캐릭터",
  },
  {
    id: "learning",
    number: "05",
    title: "새로운 기술을 배우고 적용하는 과정",
    description:
      "새로운 기술과 개발 방식을 꾸준히 학습하고 적용합니다. AI 도구도 개발 과정에 활용하며, 결과를 이해하고 검토해 생산성과 완성도를 높입니다.",
    image: codingMonitor,
    imageAlt: "새로운 기술을 학습하는 코딩 화면",
  },
];

const SkillList = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pinLayout = pinRef.current;
    const stage = stageRef.current;
    const cardsContainer = cardsRef.current;
    if (!section || !pinLayout || !stage || !cardsContainer) return;

    const cards = Array.from(cardsContainer.children) as HTMLElement[];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const media = gsap.matchMedia();

    media.add("(min-width: 1024px)", () => {
      if (reduceMotion) return;

      const stageHeight = stage.clientHeight;
      const startY = stageHeight * 0.72;
      const cardScrollDistance = 480;
      const lastCardHold = 1.25;
      const lastCard = cards.at(-1);
      const lastCardCenter = lastCard
        ? lastCard.offsetTop + lastCard.offsetHeight / 2
        : cardsContainer.scrollHeight;
      const endY = stageHeight / 2 - lastCardCenter;
      let activeCardIndex = -1;

      gsap.set(cards, {
        autoAlpha: 0.24,
        y: 0,
        scale: 0.9,
        transformOrigin: "center center",
      });
      gsap.set(cardsContainer, { y: startY });

      const updateActiveCard = () => {
        const currentTrackY = Number(gsap.getProperty(cardsContainer, "y"));
        const stageCenter = stageHeight / 2;
        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        cards.forEach((card, index) => {
          const cardCenter = currentTrackY + card.offsetTop + card.offsetHeight / 2;
          const distance = Math.abs(stageCenter - cardCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        if (closestIndex === activeCardIndex) return;
        activeCardIndex = closestIndex;

        gsap.killTweensOf(cards);
        cards.forEach((card, index) => {
          if (index !== activeCardIndex) {
            gsap.set(card, { autoAlpha: 0.24, scale: 0.9 });
          }
        });
        gsap.to(cards[activeCardIndex], {
          autoAlpha: 1,
          scale: 1,
          duration: 0.28,
          ease: "power2.out",
          overwrite: true,
        });
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: pinLayout,
          start: "top top+=12",
          end: `+=${(cards.length + lastCardHold) * cardScrollDistance}`,
          pin: pinLayout,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(cardsContainer, {
        y: endY,
        duration: cards.length,
        ease: "none",
      }, 0);
      timeline.to(cardsContainer, {
        y: endY,
        duration: lastCardHold,
        ease: "none",
      });

      timeline.eventCallback("onUpdate", updateActiveCard);
      updateActiveCard();

      return () => {
        timeline.eventCallback("onUpdate", null);
        gsap.killTweensOf(cards);
      };
    });

    media.add("(max-width: 1023px)", () => {
      if (reduceMotion) {
        gsap.set(cardsContainer, { clearProps: "transform" });
        gsap.set(cards, { autoAlpha: 1, y: 0, scale: 1 });
        return;
      }

      gsap.set(cardsContainer, { clearProps: "transform" });
      cards.forEach((card) => {
        gsap.fromTo(card, { autoAlpha: 0, y: 36 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => media.revert();
  }, []);

  return (
    <section ref={sectionRef} className="content-container mt-100 max-w-1300 sm:mt-140" aria-labelledby="how-i-work-title">
      <div ref={pinRef}>
        <div>
          <span className="font-heading text-lg font-bold text-white sm:text-2xl">HOW I WORK</span>
          <h2 id="how-i-work-title" className="mt-6 font-heading text-4xl font-bold text-primary sm:text-6xl">
            HOW I WORK_?
          </h2>
        </div>

        <div ref={stageRef} className="mt-32 grid min-h-0 gap-24 lg:min-h-640 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch lg:gap-32">
          <div className="relative min-h-360 overflow-hidden lg:min-h-640">
            <img
              src={codeBackground}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover object-left-top opacity-80"
            />
          </div>

          <div className="relative lg:h-640 lg:overflow-hidden motion-reduce:!h-auto motion-reduce:!overflow-visible">
            <div ref={cardsRef} className="flex flex-col gap-16 lg:absolute lg:inset-x-0 lg:top-0">
              {skillItems.map((skill) => (
                <div key={skill.id} className="w-full shrink-0">
                  <SkillCard {...skill} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillList;
