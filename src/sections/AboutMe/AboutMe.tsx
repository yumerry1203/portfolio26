
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "@/components/layout/SectionTitle";
import Profile from "@/assets/images/me.png";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Education from "./Education";

gsap.registerPlugin(ScrollTrigger);

const ABOUT_KEYWORDS = ["꼼꼼하게", "사용자 경험 중시", "적극적인 소통", "함께 해결"];
const ABOUT_KEYWORD_OFFSETS = ["lg:left-28", "lg:-left-20", "lg:-left-44", "lg:left-10"];

const AboutMe = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
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
        .fromTo([experienceTitle, educationTitle, certificationTitle], { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.36, stagger: 0.06, ease: "power3.out" })
        .fromTo(experienceLine, { autoAlpha: 0, scaleY: 0 }, { autoAlpha: 1, scaleY: 1, duration: 0.42, ease: "power2.out" }, "-=0.14")
        .fromTo(experienceCards, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.36, stagger: 0.08, ease: "power3.out" }, "-=0.16")
        .fromTo(educationCards, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.36, stagger: 0.08, ease: "power3.out" }, "-=0.32")
        .fromTo(certificationCards, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.36, stagger: 0.08, ease: "power3.out" }, "-=0.24");
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section className="w-full bg-black" id="about">
      <div className="about-journey-stage relative min-h-[100svh] overflow-hidden bg-black">
        <div className="content-container relative flex min-h-[100svh] flex-col justify-between gap-40 py-70 lg:grid lg:grid-cols-[1.05fr_0.85fr_1.2fr] lg:items-center lg:gap-32 lg:py-0">
          <div className="self-start lg:self-stretch lg:py-80">
            <div className="about-journey-title">
              <SectionTitle number="01" title="About Me!" />
            </div>

            <ul className="about-journey-keywords mt-44 flex flex-wrap gap-12 lg:mt-80 lg:flex-col lg:items-center lg:gap-16">
              {ABOUT_KEYWORDS.map((keyword, index) => (
                <li
                  key={keyword}
                  className={`relative rounded-full border border-white/10 bg-gray-dark px-24 py-12 text-center font-heading text-sm font-bold text-white sm:text-base lg:w-[70%] lg:px-20 ${ABOUT_KEYWORD_OFFSETS[index]}`}
                >
                  {keyword}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex min-h-360 items-end justify-center lg:min-h-0">
            <div className="relative aspect-square w-[min(88vw,38rem)] lg:hidden">
              <img src={Profile} alt="나유형 프로필 사진" className="absolute bottom-[7%] left-1/2 z-10 w-[54%] -translate-x-1/2 object-contain" />
            </div>
          </div>

          <div className="pb-20 text-white lg:pb-0 lg:pl-16">
            <div className="flex flex-wrap items-end gap-x-18 gap-y-8">
              <h3 className="about-journey-name font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">나유형</h3>
              <p className="about-journey-role pb-4 font-heading text-xl font-bold text-gray sm:text-2xl lg:text-3xl">Frontend Developer</p>
            </div>
            <p className="about-journey-quote mt-38 font-heading text-lg font-bold leading-relaxed text-primary sm:text-xl lg:whitespace-nowrap lg:text-base xl:text-xl 2xl:text-2xl">
              “숨은 문제를 발견하고, 그냥 넘기지 않습니다”
            </p>
            <p className="about-journey-description mt-28 max-w-[58rem] text-sm leading-[1.9] text-white sm:text-base lg:text-lg">
              4년간 다양한 웹 서비스를 구축하며, 사용자 경험과 유지보수를 고려한 인터페이스를 만드는 데 집중했습니다.
              React와 Vue3, TypeScript를 활용한 컴포넌트 기반 개발 경험도 보유하고 있습니다.
            </p>
          </div>
        </div>
      </div>

      <div ref={sectionRef} className="about-details content-container h-auto py-70 sm:py-32 lg:py-100">
        <div className="flex flex-col gap-60 lg:flex-row lg:justify-between">
          <Experience/>
          <div className="flex flex-col gap-60 md:gap-73">
            <Education/>
            <Certifications/>
          </div>
        </div>
      </div>
    </section>
  )
};

export default AboutMe;
