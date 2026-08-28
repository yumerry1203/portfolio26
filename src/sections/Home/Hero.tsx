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

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const mainPanel = mainPanelRef.current;
    const profilePanel = profilePanelRef.current;
    const buttons = buttonsRef.current;

    if (!hero || !mainPanel || !profilePanel || !buttons) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      const timeline = gsap.timeline();

      if (reduceMotion) {
        timeline
          .set([mainPanel, profilePanel], { x: 0, opacity: 1 })
          .fromTo(buttons, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 });
        return;
      }

      timeline
        .set([mainPanel, profilePanel], { visibility: "visible" })
        .to(mainPanel, { x: 0, opacity: 1, duration: 0.9, ease: "power2.out" })
        .to(profilePanel, { x: 0, opacity: 1, duration: 0.9, ease: "power2.out" }, "<0.1")
        .fromTo(buttons, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, ease: "power2.out" }, "-=0.05");
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
            August 2026
          </Badge>
          <img 
            src={Profile} 
            className="absolute w-253 bottom-3 left-174"
            alt="나유형 프로필 사진"               
          /> 
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
