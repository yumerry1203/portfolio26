import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Profile from "@/assets/images/me.png";
import ArrowBlack from "@/assets/images/arrow-black.svg";
import Badge from "@/components/common/Badge";
import DotLabel from "@/components/common/DotLabel";
import Button from "@/components/common/Button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const mainPanelRef = useRef<HTMLDivElement>(null);
  const profilePanelRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const mainPanel = mainPanelRef.current;
    const profilePanel = profilePanelRef.current;
    const buttons = buttonsRef.current;
    const sparkles = sparklesRef.current?.children;

    if (!hero || !mainPanel || !profilePanel || !buttons || !sparkles) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      const timeline = gsap.timeline();

      if (reduceMotion) {
        timeline
          .set([mainPanel, profilePanel], { x: 0, opacity: 1 })
          .set(sparkles, { autoAlpha: 1, scale: 1 })
          .fromTo(buttons, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 });
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

  return (
    <div ref={heroRef}>
      <div className="relative mt-40">
        <div ref={mainPanelRef} className="hero-main-panel relative flex items-center bg-black rounded-xl px-72 w-1076 h-533">
          <h1 className="font-heading text-[160px] font-bold z-10">Portfolio</h1>
          <h2 className="absolute top-120 right-170 font-point text-primary text-[76px]">Front-End</h2>
          <h3 className="absolute bottom-130 left-270 font-heading text-6xl font-bold text-white/60">NA YU HYEONG 
            <span className="text-2xl text-white font-normal"> (2026ver)</span>
          </h3>
        </div>
        <div 
          ref={profilePanelRef}
          className="hero-profile-panel absolute top-50 right-0 z-10 w-540 h-510 
          bg-[url('/src/assets/images/shape.svg')] bg-no-repeat bg-contain "
        >
          <Badge 
            variant="default" 
            className="absolute bottom-[102%] right-8 gap-8 font-heading"
          >
            <DotLabel variant="green" />
            September 2026
          </Badge>
          <img 
            src={Profile} 
            className="absolute w-270 bottom-3 left-190"
            alt="나유형 프로필 사진"               
          /> 
          <div ref={sparklesRef} className="pointer-events-none absolute left-406 top-98 z-20 h-42 w-42" aria-hidden="true">
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
      <div ref={buttonsRef} className="flex gap-12 mt-20">
        <Button 
          variant="gradient" 
          className="group text-2xl gap-12 px-30 py-15 transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0.7rem_0.9rem_0_0_#111] hover:brightness-110 active:translate-y-0 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          {`{ PROJECT }`}
          <img src={ArrowBlack} alt="화살표" className="transition-transform duration-300 group-hover:translate-x-4" />
          </Button>
        <Button
          variant="white"
          className="text-2xl px-30 py-15 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0.7rem_0.9rem_0_0_#111] active:translate-y-0 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        > 
          {`{ CONTACT }`}
        </Button>
      </div>
    </div>
  )
};

export default Hero;
