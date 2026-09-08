import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Profile from "@/assets/images/me.png";
import ArrowBlack from "@/assets/images/arrow-black.svg";
import Badge from "@/components/common/Badge";
import DotLabel from "@/components/common/DotLabel";
import Button from "@/components/common/Button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const mainPanelRef = useRef<HTMLDivElement>(null);
  const profilePanelRef = useRef<HTMLDivElement>(null);
  const portfolioTitleRef = useRef<HTMLHeadingElement>(null);
  const frontEndTitleRef = useRef<HTMLHeadingElement>(null);
  const nameTitleRef = useRef<HTMLHeadingElement>(null);
  const mobileProfileRef = useRef<HTMLImageElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const mainPanel = mainPanelRef.current;
    const profilePanel = profilePanelRef.current;
    const portfolioTitle = portfolioTitleRef.current;
    const frontEndTitle = frontEndTitleRef.current;
    const nameTitle = nameTitleRef.current;
    const mobileProfile = mobileProfileRef.current;
    const buttons = buttonsRef.current;
    const sparkles = sparklesRef.current?.children;

    if (!hero || !mainPanel || !profilePanel || !portfolioTitle || !frontEndTitle || !nameTitle || !mobileProfile || !buttons || !sparkles) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCompactHero = window.matchMedia("(max-width: 1023px)").matches;
    const context = gsap.context(() => {
      const timeline = gsap.timeline();

      if (reduceMotion) {
        timeline
          .set([mainPanel, profilePanel], { x: 0, opacity: 1, visibility: "visible" })
          .set([portfolioTitle, frontEndTitle, nameTitle, mobileProfile], { x: 0, y: 0, autoAlpha: 1 })
          .set(sparkles, { autoAlpha: 1, scale: 1 })
          .fromTo(buttons, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 });
        return;
      }

      if (isCompactHero) {
        timeline
          .set(mainPanel, { visibility: "visible", x: 0, opacity: 1 })
          .fromTo([frontEndTitle, portfolioTitle], { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.42, stagger: 0.1, ease: "power3.out" })
          .fromTo(mobileProfile, { autoAlpha: 0, x: -28 }, { autoAlpha: 1, x: 0, duration: 0.48, ease: "power3.out" }, "-=0.18")
          .fromTo(nameTitle, { autoAlpha: 0, x: 28 }, { autoAlpha: 1, x: 0, duration: 0.48, ease: "power3.out" }, "<")
          .fromTo(buttons, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.35, ease: "power2.out" }, "-=0.16");
        return;
      }

      timeline
        .set([mainPanel, profilePanel], { visibility: "visible" })
        .to(mainPanel, { x: 0, opacity: 1, duration: 0.9, ease: "power2.out" })
        .to(profilePanel, { x: 0, opacity: 1, duration: 0.9, ease: "power2.out" }, "<0.1")
        .fromTo(buttons, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, ease: "power2.out" }, "-=0.05")
        .fromTo(sparkles, { autoAlpha: 0, scale: 0.35, rotation: -12 }, { autoAlpha: 1, scale: 1, rotation: 0, duration: 0.2, stagger: 0.08, ease: "back.out(2.5)" }, "-=0.05")
        .to(sparkles, { autoAlpha: 0, scale: 1.45, duration: 0.24, stagger: 0.06, ease: "power2.in" });
    }, hero);

    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const narrowDesktop = window.matchMedia("(min-width: 1024px) and (max-width: 1279px)");
    const updateScale = () => {
      const scale = narrowDesktop.matches
        ? Math.min(1, Math.max(0.78, stage.clientWidth / 1240))
        : 1;

      stage.style.setProperty("--hero-scale", String(scale));
    };

    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(stage);
    narrowDesktop.addEventListener("change", updateScale);
    updateScale();

    return () => {
      resizeObserver.disconnect();
      narrowDesktop.removeEventListener("change", updateScale);
    };
  }, []);

  return (
    <div ref={heroRef}>
      <div ref={stageRef} className="hero-stage relative mt-12 sm:mt-40">
        <div ref={mainPanelRef} className="hero-main-panel relative aspect-[1.32] w-full overflow-hidden rounded-[24px] border-[3px] border-secondary bg-black px-24 lg:aspect-auto lg:flex lg:h-533 lg:w-1076 lg:items-center lg:rounded-xl lg:border-0 lg:px-72">
          <h1 ref={portfolioTitleRef} className="absolute left-1/2 top-[37%] z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-heading text-[clamp(5.2rem,16vw,10rem)] font-bold lg:static lg:translate-x-0 lg:translate-y-0 lg:text-[160px]">Portfolio</h1>
          <h2 ref={frontEndTitleRef} className="absolute left-1/2 top-[9%] -translate-x-1/2 whitespace-nowrap font-point text-[clamp(3.2rem,9vw,6rem)] text-primary lg:left-auto lg:right-170 lg:top-120 lg:translate-x-0 lg:text-[76px]">Front-End</h2>
          <img ref={mobileProfileRef} src={Profile} alt="나유형 프로필 사진" className="absolute bottom-[-9%] left-[8%] w-[34%] lg:hidden" />
          <h3 ref={nameTitleRef} className="absolute bottom-[15%] right-[10%] text-right font-heading text-[clamp(2rem,5vw,4rem)] font-bold text-white/60 lg:bottom-130 lg:left-270 lg:right-auto lg:text-left lg:text-6xl">NA YU HYEONG
            <span className="block pt-6 text-[clamp(1.5rem,3.5vw,2.4rem)] font-normal text-white lg:inline lg:pt-0"> (2026ver)</span>
          </h3>
        </div>
        <div 
          ref={profilePanelRef}
          className="hero-profile-panel absolute right-0 top-50 z-10 hidden h-510 w-540 lg:block
          bg-[url('/src/assets/images/shape.svg')] bg-no-repeat bg-contain "
        >
          <Badge 
            variant="default" 
            className="absolute bottom-[102%] right-4 gap-4 font-heading text-xs sm:right-8 sm:gap-8 sm:text-base"
          >
            <DotLabel variant="green" />
            September 2026
          </Badge>
          <img 
            src={Profile} 
            className="absolute bottom-2 left-98 w-145 sm:left-145 sm:w-215 lg:bottom-3 lg:left-190 lg:w-270"
            alt="나유형 프로필 사진"               
          /> 
          <div ref={sparklesRef} className="pointer-events-none absolute left-210 top-50 z-20 h-28 w-28 sm:left-325 sm:top-76 sm:h-36 sm:w-36 lg:left-406 lg:top-98 lg:h-42 lg:w-42" aria-hidden="true">
            <svg className="absolute left-0 top-13 h-22 w-22 text-primary opacity-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="m12 0 1.2 10.8L24 12l-10.8 1.2L12 24l-1.2-10.8L0 12l10.8-1.2L12 0Z" />
            </svg>
            <svg className="absolute right-0 top-0 h-16 w-16 text-secondary opacity-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="m12 0 1.2 10.8L24 12l-10.8 1.2L12 24l-1.2-10.8L0 12l10.8-1.2L12 0Z" />
            </svg>
          </div>
          {/* <span className="absolute top-34 right-34 font-heading text-secondary text-lg text-right">
            Front-end Developer · Web<br /> 
            Publisher
          </span> */}
        </div>
      </div>
      <div ref={buttonsRef} className="hero-actions mt-20 flex flex-wrap gap-10 sm:gap-12">
        <Button 
          variant="gradient" 
          className="group min-w-0 flex-1 gap-4 px-10 py-12 text-sm transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0.7rem_0.9rem_0_0_#111] hover:brightness-110 active:translate-y-0 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:flex-none sm:gap-12 sm:px-30 sm:py-15 sm:text-2xl"
          onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          {`{ PROJECT }`}
          <img src={ArrowBlack} alt="화살표" className="h-12 w-18 shrink-0 transition-transform duration-300 group-hover:translate-x-4 sm:h-auto sm:w-auto" />
          </Button>
        <Button
          variant="white"
          className="min-w-0 flex-1 px-10 py-12 text-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0.7rem_0.9rem_0_0_#111] active:translate-y-0 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:flex-none sm:px-30 sm:py-15 sm:text-2xl"
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        > 
          {`{ CONTACT }`}
        </Button>
      </div>
    </div>
  )
};

export default Hero;
