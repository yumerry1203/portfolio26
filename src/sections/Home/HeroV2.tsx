import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Profile from "@/assets/images/me.png";
import DotLabel from "@/components/common/DotLabel";
import projectFolderIcon from "@/assets/images/ico-project-folder.svg";

const TITLE_CHARACTERS = Array.from("PORTFOLIO");
const INTRO_WORDS = ["안녕하세요,", "Frontend Developer", "나유형", "입니다."];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-20 shrink-0 sm:size-22" fill="currentColor">
    <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.22c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.58-.29-5.29-1.29-5.29-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.16 1.18a10.95 10.95 0 0 1 5.76 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.4-2.72 5.38-5.31 5.67.42.36.79 1.07.79 2.16v3.21c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className="size-20 shrink-0 sm:size-22">
    <path d="m11 7-8 9 8 9M21 7l8 9-8 9M19 4l-6 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type HomeLinkId = "projects" | "github" | "dev-note";

const homeLinkClassName =
  "group flex min-w-46 cursor-pointer items-center justify-center overflow-hidden rounded-md px-12 font-heading text-xs font-bold transition-[flex-grow,flex-basis,background-color] duration-500 ease-out focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white sm:min-w-52 sm:px-14 sm:text-base";

const HeroV2 = () => {
  const [activeLink, setActiveLink] = useState<HomeLinkId | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleCharactersRef = useRef<HTMLSpanElement[]>([]);
  const introWordsRef = useRef<HTMLSpanElement[]>([]);
  const badgeRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const getLinkStyle = (id: HomeLinkId) => ({
    flex: activeLink === null ? "1 1 0%" : activeLink === id ? "3 1 0%" : "0.55 1 0%",
  });

  const getLabelClassName = (id: HomeLinkId) =>
    `overflow-hidden whitespace-nowrap transition-[max-width,opacity,margin] duration-500 ease-out ${
      activeLink === null || activeLink === id ? "ml-6 max-w-160 opacity-100 sm:ml-8" : "ml-0 max-w-0 opacity-0"
    }`;

  const getSuffixClassName = (id: HomeLinkId) =>
    `inline-block overflow-hidden align-bottom whitespace-nowrap transition-[max-width,opacity] duration-500 ease-out ${
      activeLink === id ? "max-w-80 opacity-100" : "max-w-0 opacity-0"
    }`;

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const badge = badgeRef.current;
    const scrollContent = scrollContentRef.current;
    const button = buttonRef.current;
    const titleCharacters = titleCharactersRef.current;
    const introWords = introWordsRef.current;

    if (!hero || !badge || !scrollContent || !button) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      if (reduceMotion) {
        gsap.set([badge, button, ...titleCharacters, ...introWords], {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        });
        return;
      }

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .fromTo(
          titleCharacters,
          { autoAlpha: 0, y: 54, scale: 0.9, filter: "blur(12px)" },
          { autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.48, stagger: 0.065 },
        )
        .fromTo(
          introWords,
          { autoAlpha: 0, y: 24, filter: "blur(8px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.42, stagger: 0.12 },
          "-=0.08",
        )
        .fromTo(
          [badge, button],
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.1 },
          "-=0.12",
        );

      gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top+=28%",
          scrub: 0.75,
          invalidateOnRefresh: true,
        },
      }).to(scrollContent, {
        autoAlpha: 0,
        y: -170,
        stagger: 0.04,
        ease: "none",
      });
    }, hero);

    return () => context.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative mt-12 sm:mt-40">
      <div className="relative flex min-h-610 overflow-hidden bg-black px-20 pb-38 pt-86 sm:min-h-720 sm:px-48 sm:pb-52 sm:pt-100 lg:min-h-760 lg:px-72">
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 flex aspect-square w-[min(88vw,42rem)] -translate-x-1/2 items-end justify-center lg:hidden">
          <img src={Profile} alt="나유형 프로필 사진" className="relative bottom-40 z-10 w-[54%] object-contain" />
        </div>

        <div ref={scrollContentRef} className="relative -top-24 z-10 flex w-full flex-col items-center justify-center text-center will-change-[transform,opacity] sm:-top-32 lg:-top-24 lg:justify-start lg:items-end lg:pl-[34%]">
          <div className="relative">
            <div ref={badgeRef} className="absolute left-0 top-[-2.8rem] z-20 flex items-center gap-8 whitespace-nowrap font-heading text-xs text-white sm:text-sm lg:text-base">
              <DotLabel variant="green" className="size-10" />
              October 2026
            </div>

            <h1 className="relative z-10 mt-10 whitespace-nowrap font-heading text-[clamp(4.5rem,13.2vw,15rem)] font-normal leading-none tracking-[-0.03em] text-white sm:mt-0 lg:text-[clamp(8rem,10vw,14rem)]">
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
          </div>

          <p className="absolute bottom-82 z-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 font-body text-base text-white sm:bottom-94 sm:text-2xl lg:static lg:mt-36 lg:text-3xl">
            {INTRO_WORDS.map((word, index) => (
              <span
                key={word}
                ref={(element) => {
                  if (element) introWordsRef.current[index] = element;
                }}
                className={`inline-block will-change-[transform,opacity,filter] ${index === 1 ? "font-bold text-primary" : ""}`}
              >
                {word}
              </span>
            ))}
          </p>

          <div
            ref={buttonRef}
            className="absolute bottom-0 z-10 flex h-46 w-full max-w-460 items-stretch gap-2 sm:h-50 lg:static lg:mr-[6%] lg:mt-44 lg:h-54 lg:self-end"
            onMouseLeave={() => setActiveLink(null)}
          >
            <button
              type="button"
              className={`${homeLinkClassName} bg-sky text-black`}
              style={getLinkStyle("projects")}
              onMouseEnter={() => setActiveLink("projects")}
              onFocus={() => setActiveLink("projects")}
              onBlur={() => setActiveLink(null)}
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <img src={projectFolderIcon} alt="" aria-hidden="true" className="h-16 w-20 shrink-0 sm:h-18 sm:w-22" />
              <span className={getLabelClassName("projects")}>
                프로젝트<span className={getSuffixClassName("projects")}>&nbsp;바로가기</span>
              </span>
            </button>

            <a
              href="https://github.com/yumerry1203/portfolio26"
              target="_blank"
              rel="noreferrer"
              className={`${homeLinkClassName} bg-gradient text-black`}
              style={getLinkStyle("github")}
              onMouseEnter={() => setActiveLink("github")}
              onFocus={() => setActiveLink("github")}
              onBlur={() => setActiveLink(null)}
              aria-label="포트폴리오 GitHub 새 창으로 열기"
            >
              <GithubIcon />
              <span className={getLabelClassName("github")}>
                깃허브<span className={getSuffixClassName("github")}>&nbsp;바로가기</span>
              </span>
            </a>

            <a
              href="https://yumerry1203.github.io/react-practice-note/"
              target="_blank"
              rel="noreferrer"
              className={`${homeLinkClassName} bg-primary text-black`}
              style={getLinkStyle("dev-note")}
              onMouseEnter={() => setActiveLink("dev-note")}
              onFocus={() => setActiveLink("dev-note")}
              onBlur={() => setActiveLink(null)}
              aria-label="Frontend Dev Note 새 창으로 열기"
            >
              <CodeIcon />
              <span className={getLabelClassName("dev-note")}>
                개발노트<span className={getSuffixClassName("dev-note")}>&nbsp;바로가기</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroV2;
