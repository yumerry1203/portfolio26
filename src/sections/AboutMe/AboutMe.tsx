
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "@/components/layout/SectionTitle";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Education from "./Education";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      const introItems = gsap.utils.toArray<HTMLElement>(".about-intro-reveal");
      const experienceTitle = section.querySelector<HTMLElement>(".about-experience-title");
      const experienceLine = section.querySelector<HTMLElement>(".about-experience-line");
      const experienceCards = gsap.utils.toArray<HTMLElement>(".about-experience-card");
      const educationTitle = section.querySelector<HTMLElement>(".about-education-title");
      const educationCards = gsap.utils.toArray<HTMLElement>(".about-education-card");
      const certificationTitle = section.querySelector<HTMLElement>(".about-certification-title");
      const certificationCards = gsap.utils.toArray<HTMLElement>(".about-certification-card");

      if (reduceMotion) {
        gsap.set(
          [
            ...introItems,
            experienceTitle,
            experienceLine,
            ...experienceCards,
            educationTitle,
            ...educationCards,
            certificationTitle,
            ...certificationCards,
          ],
          { autoAlpha: 1, y: 0, scaleY: 1 },
        );
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none",
          fastScrollEnd: true,
        },
      });

      timeline
        .fromTo(introItems, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.42, stagger: 0.07, ease: "power3.out" })
        .fromTo([experienceTitle, educationTitle, certificationTitle], { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.36, stagger: 0.06, ease: "power3.out" }, "-=0.18")
        .fromTo(experienceLine, { autoAlpha: 0, scaleY: 0 }, { autoAlpha: 1, scaleY: 1, duration: 0.42, ease: "power2.out" }, "-=0.14")
        .fromTo(experienceCards, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.36, stagger: 0.08, ease: "power3.out" }, "-=0.16")
        .fromTo(educationCards, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.36, stagger: 0.08, ease: "power3.out" }, "-=0.32")
        .fromTo(certificationCards, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.36, stagger: 0.08, ease: "power3.out" }, "-=0.24");
    }, section);

    return () => context.revert();
  }, []);

  return (
    <div className="w-full">
      <section ref={sectionRef} className="content-container h-auto py-70 sm:py-32 lg:pt-100" id="about">
        <div className="flex flex-col gap-28 lg:flex-row lg:justify-between">
          <div className="about-intro-reveal">
            <SectionTitle number="01" title="About Me!" />
          </div>
          <div className="about-intro-reveal">
            <h3 className="font-heading text-xl font-bold sm:text-2xl">Fronted Developer</h3>
            <p className="mt-12 text-sm sm:text-base">
              4년간 다양한 웹 서비스를 구축하며, 사용자 경험과 유지보수를 고려한 인터페이스를 만드는 데 집중했습니다.<br className="hidden sm:block" />
              React&Vue3와 TypeScript를 활용한 컴포넌트 기반 개발 경험도 보유하고 있습니다.
            </p>
          </div>
        </div>
        <div className="mt-60 flex flex-col gap-60 lg:mt-100 lg:flex-row lg:justify-between">
          <Experience/>
          <div className="flex flex-col gap-60 md:gap-73">
            <Education/>
            <Certifications/>
          </div>
        </div>
      </section>
    </div>
  )
};

export default AboutMe;
