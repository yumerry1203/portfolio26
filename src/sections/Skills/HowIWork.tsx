import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillCard from "./SkillCard";
import { skillItems } from "./howIWorkData";

gsap.registerPlugin(ScrollTrigger);

const HowIWork = () => {
  const pinRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const pinLayout = pinRef.current;
    const stage = stageRef.current;
    const cardsContainer = cardsRef.current;
    if (!pinLayout || !stage || !cardsContainer) return;

    const cards = Array.from(cardsContainer.children) as HTMLElement[];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const media = gsap.matchMedia();

    media.add("(min-width: 1024px)", () => {
      if (reduceMotion) {
        gsap.set(cards, { autoAlpha: 1, y: 0, scale: 1 });
        return;
      }

      const stageHeight = stage.clientHeight;
      const firstCard = cards[0];
      const firstCardCenter = firstCard
        ? firstCard.offsetTop + firstCard.offsetHeight / 2
        : 0;
      const startY = stageHeight / 2 - firstCardCenter;
      const cardScrollDistance = 460;
      const lastCardHold = 1.2;
      const lastCard = cards.at(-1);
      const lastCardCenter = lastCard
        ? lastCard.offsetTop + lastCard.offsetHeight / 2
        : cardsContainer.scrollHeight;
      const endY = stageHeight / 2 - lastCardCenter;
      let activeCardIndex = -1;

      gsap.set(cards, {
        autoAlpha: 0.22,
        y: 0,
        scale: 0.86,
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
          if (index !== activeCardIndex) gsap.set(card, { autoAlpha: 0.22, scale: 0.86 });
        });
        gsap.to(cards[activeCardIndex], {
          autoAlpha: 1,
          scale: 1.08,
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

      timeline.to(cardsContainer, { y: endY, duration: cards.length, ease: "none" }, 0);
      timeline.to(cardsContainer, { y: endY, duration: lastCardHold, ease: "none" });
      timeline.eventCallback("onUpdate", updateActiveCard);
      updateActiveCard();

      return () => {
        timeline.eventCallback("onUpdate", null);
        gsap.killTweensOf(cards);
      };
    });

    media.add("(max-width: 1023px)", () => {
      gsap.set(cardsContainer, { clearProps: "transform" });

      if (reduceMotion) {
        gsap.set(cards, { autoAlpha: 1, y: 0, scale: 1 });
        return;
      }

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    return () => media.revert();
  }, []);

  return (
    <section className="w-full bg-black pb-70 pt-24 sm:pb-120 sm:pt-40" aria-labelledby="how-i-work-title">
      <div ref={pinRef} className="content-container max-w-1300 lg:h-[100svh] lg:overflow-hidden lg:pt-60">
        <h2
          id="how-i-work-title"
          className="text-center font-bricolage text-4xl font-bold text-white sm:text-5xl"
        >
          HOW I WORK ?
        </h2>

        <div ref={stageRef} className="relative mx-auto mt-28 min-h-0 max-w-1120 lg:mt-20 lg:h-[calc(100svh-28rem)] lg:overflow-hidden">
          <div ref={cardsRef} className="flex flex-col gap-18 lg:absolute lg:inset-x-50 lg:top-0">
            {skillItems.map((skill) => (
              <div key={skill.id} className="w-full shrink-0">
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
