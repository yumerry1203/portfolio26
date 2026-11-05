import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import lineArt from "@/assets/images/home-line-art.svg";

const TITLE_CHARACTERS = Array.from("Portfolio");

const ProjectsIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className="size-14 shrink-0 sm:size-18" fill="none">
    <rect x="5" y="5" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2.2" />
    <rect x="19" y="5" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2.2" />
    <rect x="5" y="19" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2.2" />
    <rect x="19" y="19" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2.2" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-14 shrink-0 sm:size-18" fill="currentColor">
    <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.22c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.58-.29-5.29-1.29-5.29-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.16 1.18a10.95 10.95 0 0 1 5.76 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.4-2.72 5.38-5.31 5.67.42.36.79 1.07.79 2.16v3.21c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
  </svg>
);

const DevNoteIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className="size-14 shrink-0 sm:size-18" fill="none">
    <rect x="7" y="4" width="18" height="24" rx="3" stroke="currentColor" strokeWidth="2.2" />
    <path d="M12 10h8M12 15h8M12 20h5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const homeLinkClassName =
  "flex h-34 min-w-0 cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-[1rem] border px-4 font-body text-[1rem] font-medium transition-[flex,color,background-color,border-color] duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary sm:h-44 sm:gap-7 sm:px-13 sm:text-[1.5rem] lg:h-49 lg:text-[2rem]";

const HeroV2 = () => {
  const [activeLink, setActiveLink] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const titleCharactersRef = useRef<HTMLSpanElement[]>([]);
  const introRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const getLinkClassName = (index: number) =>
    `${homeLinkClassName} ${
      activeLink === index ? "border-transparent bg-gradient text-black" : "border-white bg-black text-white"
    }`;

  const getLinkStyle = (index: number) => ({
    flex: activeLink === null ? "1 1 0%" : activeLink === index ? "2.35 1 0%" : "0.38 1 0%",
  });

  const getLabelClassName = (index: number) =>
    `overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-300 ${
      activeLink !== null && activeLink !== index ? "max-w-0 opacity-0" : "max-w-[30rem] opacity-100"
    }`;

  const getLinkLabel = (index: number, label: string) => (activeLink === index ? `${label} 바로가기` : label);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const name = nameRef.current;
    const intro = introRef.current;
    const description = descriptionRef.current;
    const buttons = buttonRef.current;
    const titleCharacters = titleCharactersRef.current;

    if (!hero || !name || !intro || !description || !buttons) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      if (reduceMotion) {
        gsap.set([name, intro, description, buttons, ...titleCharacters], {
          autoAlpha: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
        });
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(name, { autoAlpha: 0, x: -28 }, { autoAlpha: 1, x: 0, duration: 0.48 })
        .fromTo(
          titleCharacters,
          { autoAlpha: 0, y: 42, filter: "blur(10px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.46, stagger: 0.055 },
          "-=0.2",
        )
        .fromTo(intro, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.42 }, "-=0.12")
        .fromTo(description, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.42 }, "-=0.22")
        .fromTo(buttons, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.44 }, "-=0.18");
    }, hero);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative isolate flex min-h-0 flex-1 overflow-hidden px-20 pb-28 pt-20 sm:px-42 sm:pb-38 sm:pt-24 lg:px-60 lg:pb-52 lg:pt-28"
    >
      <img
        src={lineArt}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-0 hidden h-[82%] w-[58%] origin-[72%_54%] object-fill will-change-transform md:block"
      />

      <div className="relative z-10 flex w-full min-h-0 flex-col justify-center">
        <div className="max-w-[74rem] lg:-mt-28">
          <p ref={nameRef} className="font-sedgwick text-3xl text-secondary sm:text-[42px] lg:text-[52px]">
            NaYuhyeong
          </p>

          <h1 className="mt-4 whitespace-nowrap font-bricolage text-[58px] font-extrabold leading-[0.9] tracking-[-0.045em] text-white sm:text-[96px] lg:text-[162px]">
            <span className="sr-only">Portfolio</span>
            <span aria-hidden="true">
              {TITLE_CHARACTERS.map((character, index) => (
                <span
                  key={`${character}-${index}`}
                  ref={(element) => {
                    if (element) titleCharactersRef.current[index] = element;
                  }}
                  className="inline-block will-change-[transform,opacity,filter]"
                >
                  {character}
                </span>
              ))}
            </span>
          </h1>

          <p ref={introRef} className="mt-24 font-body text-base text-white sm:mt-28 sm:text-2xl lg:text-[2.6rem]">
            안녕하세요, <strong className="font-bold text-primary">Frontend Developer</strong> 나유형입니다.
          </p>

          <p ref={descriptionRef} className="mt-18 max-w-[55rem] font-body text-sm leading-[1.7] text-gray sm:text-base lg:text-lg">
            사용자 경험을 고민하고, 문제를 해결하며 더 나은 서비스를 만드는<br className="hidden sm:block" />
            프론트엔드 개발자입니다.
          </p>
        </div>

        <div
          ref={buttonRef}
          className="mt-34 flex w-full max-w-[49rem] items-stretch gap-2 self-end sm:mt-40 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0"
          onMouseLeave={() => setActiveLink(null)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setActiveLink(null);
          }}
        >
          <button
            type="button"
            className={getLinkClassName(0)}
            style={getLinkStyle(0)}
            onMouseEnter={() => setActiveLink(0)}
            onFocus={() => setActiveLink(0)}
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ProjectsIcon />
            <span className={getLabelClassName(0)}>{getLinkLabel(0, "Projects")}</span>
          </button>

          <a
            href="https://github.com/yumerry1203/portfolio26"
            target="_blank"
            rel="noreferrer"
            className={getLinkClassName(1)}
            style={getLinkStyle(1)}
            onMouseEnter={() => setActiveLink(1)}
            onFocus={() => setActiveLink(1)}
            aria-label="포트폴리오 GitHub 새 창으로 열기"
          >
            <GithubIcon />
            <span className={getLabelClassName(1)}>{getLinkLabel(1, "GitHub")}</span>
          </a>

          <a
            href="https://yumerry1203.github.io/react-practice-note/"
            target="_blank"
            rel="noreferrer"
            className={getLinkClassName(2)}
            style={getLinkStyle(2)}
            onMouseEnter={() => setActiveLink(2)}
            onFocus={() => setActiveLink(2)}
            aria-label="Frontend Dev Note 새 창으로 열기"
          >
            <DevNoteIcon />
            <span className={getLabelClassName(2)}>{getLinkLabel(2, "Dev Note")}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroV2;
