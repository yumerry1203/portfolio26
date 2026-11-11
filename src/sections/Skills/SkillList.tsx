import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillCard from "./SkillCard";
import DotLabel from "@/components/common/DotLabel";
import codeBackground from "@/assets/images/animated-code-typing.svg";
import { skillItems } from "./howIWorkData";

gsap.registerPlugin(ScrollTrigger);

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
    <section
      ref={sectionRef}
      className="w-full bg-gray-dark py-70 sm:py-120"
      aria-labelledby="how-i-work-title"
    >
      <div ref={pinRef} className="content-container max-w-1300">
        <div className="flex flex-col gap-18 lg:flex-row lg:items-center lg:justify-between lg:gap-40">
          <div className="shrink-0">
            <span className="font-bricolage text-lg font-bold text-white sm:text-2xl">04.</span>
            <h2 id="how-i-work-title" className="mt-6 font-bricolage text-4xl font-bold text-primary sm:text-6xl">
              HOW I WORK ?
            </h2>
          </div>

          <div
            className="flex w-full max-w-760 flex-wrap items-center justify-center gap-x-8 gap-y-2 rounded-full bg-white px-18 py-14 text-center shadow-[var(--shadow-base)] sm:flex-nowrap sm:justify-start sm:gap-16 sm:px-28 lg:ml-auto"
            aria-live="polite"
          >
            <DotLabel variant="purpleLightLine" className="size-16 shrink-0 border-0 bg-gradient sm:size-22" />
            <strong className="font-heading text-base text-black sm:text-xl">일하는 방식</strong>
            <span className="w-full text-xs leading-snug text-gray-dark sm:w-auto sm:text-lg">
              업무 과정에서 중요하게 생각하는 저만의 작업 방식을 소개합니다.
            </span>
          </div>
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
