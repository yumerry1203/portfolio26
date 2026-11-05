
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
      const journeyStage = section.querySelector<HTMLElement>(".about-journey-stage");
      const journeyTitle = section.querySelector<HTMLElement>(".about-journey-title");
      const journeyKeywords = gsap.utils.toArray<HTMLElement>(".about-journey-keywords li");
      const journeyProfile = section.querySelector<HTMLElement>(".about-journey-profile");
      const journeyCopy = gsap.utils.toArray<HTMLElement>(
        ".about-journey-name, .about-journey-role, .about-journey-quote, .about-journey-description",
      );
      const details = section.querySelector<HTMLElement>(".about-details");
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
            journeyTitle,
            journeyProfile,
            ...journeyKeywords,
            ...journeyCopy,
          ],
          { autoAlpha: 1, x: 0, y: 0, scale: 1, scaleY: 1 },
        );
        return;
      }

      if (journeyStage) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: journeyStage,
              start: "top 78%",
              toggleActions: "play none none none",
              fastScrollEnd: true,
            },
          })
          .fromTo(
            journeyTitle,
            { autoAlpha: 0, y: 36 },
            { autoAlpha: 1, y: 0, duration: 0.58, ease: "power3.out" },
          )
          .fromTo(
            journeyKeywords,
            { autoAlpha: 0, x: -34, y: 16 },
            { autoAlpha: 1, x: 0, y: 0, duration: 0.48, stagger: 0.1, ease: "power3.out" },
            "-=0.28",
          )
          .fromTo(
            journeyProfile,
            { autoAlpha: 0, y: 64, scale: 0.94 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.72, ease: "power3.out" },
            "-=0.46",
          )
          .fromTo(
            journeyCopy,
            { autoAlpha: 0, x: 38, y: 12 },
            { autoAlpha: 1, x: 0, y: 0, duration: 0.5, stagger: 0.09, ease: "power3.out" },
            "-=0.42",
          );
      }

      if (!details) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: details,
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
    <section ref={sectionRef} className="w-full bg-black" id="about">
      <div className="about-journey-stage relative min-h-[100svh] overflow-hidden bg-black">
        <div className="content-container relative flex min-h-[100svh] flex-col justify-between gap-40 py-70 lg:grid lg:grid-cols-[1.05fr_0.85fr_1.2fr] lg:items-center lg:gap-16 lg:pb-0 lg:pt-140">
          <div className="self-start lg:self-stretch lg:translate-x-20">
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
            <div className="relative aspect-square w-[min(88vw,38rem)] lg:w-full">
              <img src={Profile} alt="나유형 프로필 사진" className="about-journey-profile absolute bottom-[7%] left-1/2 z-10 w-[54%] -translate-x-1/2 object-contain lg:w-[72%]" />
            </div>
          </div>

          <div className="pb-20 text-white lg:-translate-x-20 lg:pb-0">
            <div className="flex flex-wrap items-end gap-x-18 gap-y-8">
              <h3 className="about-journey-name font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">나유형</h3>
              <p className="about-journey-role pb-4 font-heading text-xl font-bold text-gray sm:text-2xl lg:text-3xl">Frontend Developer</p>
            </div>
            <p className="about-journey-quote mt-38 font-heading text-lg font-bold leading-relaxed text-primary sm:text-xl lg:whitespace-nowrap lg:text-lg xl:text-[2.2rem] 2xl:text-[2.6rem]">
              “숨은 문제를 발견하고, 그냥 넘기지 않습니다”
            </p>
            <p className="about-journey-description mt-28 max-w-[58rem] text-[1.3rem] leading-[1.9] text-white sm:text-sm lg:text-base">
              4년간 다양한 웹 서비스를 구축하며, 사용자 경험과 유지보수를 고려한 인터페이스를 만드는 데 집중했습니다.
              React와 Vue3, TypeScript를 활용한 컴포넌트 기반 개발 경험도 보유하고 있습니다.
            </p>
          </div>
        </div>
      </div>

      <div className="about-details content-container h-auto py-70 sm:py-32 lg:pb-100 lg:pt-10">
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
