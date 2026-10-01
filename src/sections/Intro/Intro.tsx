import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Logo3D from "@/assets/images/logo-3d.png";
import "./Intro.css";

interface IntroProps {
  onComplete: () => void;
}

const ARCHIVE_TEXT = " NA YUHYEONG'S DIGITAL ARCHIVE ";
const ARCHIVE_CHARACTERS = Array.from(ARCHIVE_TEXT);
const getCharacterWeight = (index: number) => (
  index === 0 || index === ARCHIVE_CHARACTERS.length - 1 ? 0.45 : 1
);
const TOTAL_CHARACTER_WEIGHT = ARCHIVE_CHARACTERS.reduce(
  (total, _, index) => total + getCharacterWeight(index),
  0,
);

const Intro = ({ onComplete }: IntroProps) => {
  const introRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const charactersRef = useRef<HTMLSpanElement[]>([]);

  useLayoutEffect(() => {
    const intro = introRef.current;
    const logo = logoRef.current;

    if (!intro || !logo) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete,
      });

      timeline.set(intro, { autoAlpha: 1 });

      if (reduceMotion) {
        timeline
          .fromTo(logo, { autoAlpha: 0, scale: 0.9 }, { autoAlpha: 1, scale: 1, duration: 0.15, ease: "power2.out" })
          .to(charactersRef.current, { autoAlpha: 1, duration: 0.1, stagger: 0.008 })
          .to(intro, { autoAlpha: 0, duration: 0.2, delay: 0.15, ease: "power2.inOut" });
        return;
      }

      timeline
        .fromTo(
          logo,
          { autoAlpha: 0, scale: 0.52, rotationY: -18, transformPerspective: 800 },
          { autoAlpha: 1, scale: 1.1, rotationY: 0, duration: 0.28, ease: "power4.out" },
        )
        .to(logo, { scale: 1, duration: 0.1, ease: "power2.out" })
        .to(charactersRef.current, { autoAlpha: 1, duration: 0.03, stagger: 0.01, ease: "power1.out" })
        .to(intro, { autoAlpha: 0, duration: 0.25, delay: 0.15, ease: "power2.inOut" });
    }, intro);

    return () => context.revert();
  }, [onComplete]);

  return (
    <div ref={introRef} className="intro" aria-hidden="true">
      <div className="intro__mark">
        <img ref={logoRef} className="intro__logo" src={Logo3D} alt="" />
        <div className="intro__archive-text">
          {ARCHIVE_CHARACTERS.map((character, index) => {
            const previousWeight = ARCHIVE_CHARACTERS
              .slice(0, index)
              .reduce((total, _, characterIndex) => total + getCharacterWeight(characterIndex), 0);
            const angle = 180 + ((previousWeight + getCharacterWeight(index) / 2) / TOTAL_CHARACTER_WEIGHT) * 360;

            return (
              <span
                key={`${character}-${index}`}
                ref={(element) => {
                  if (element) charactersRef.current[index] = element;
                }}
                className="intro__character"
                style={{ "--character-angle": `${angle}deg` } as React.CSSProperties}
              >
                {character === " " ? "\u00A0" : character}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Intro;
