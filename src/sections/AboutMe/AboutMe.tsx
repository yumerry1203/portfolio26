import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "@/components/layout/SectionTitle";
import Profile from "@/assets/images/me.png";
import EducationIcon from "@/assets/images/icon-certifications.svg";
import CertificationIcon from "@/assets/images/ico-education.svg";
import { certifications, educations } from "@/data/AboutMe/aboutme";

gsap.registerPlugin(ScrollTrigger);

interface InformationTitleProps {
  icon: string;
  title: string;
}

const InformationTitle = ({ icon, title }: InformationTitleProps) => (
  <div className="about-information-title flex items-center gap-12 border-b border-white/70 pb-14">
    <img src={icon} alt="" aria-hidden="true" className="h-20 w-24 object-contain sm:h-24 sm:w-30" />
    <h3 className="font-bricolage text-xl font-bold text-white sm:text-2xl">{title}</h3>
  </div>
);

const AboutMe = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      const title = section.querySelector<HTMLElement>(".about-overview-title");
      const profile = section.querySelector<HTMLElement>(".about-profile-frame");
      const introduction = gsap.utils.toArray<HTMLElement>(".about-introduction > *:not(.about-overview-title)");
      const informationTitles = gsap.utils.toArray<HTMLElement>(".about-information-title");
      const informationItems = gsap.utils.toArray<HTMLElement>(".about-information-item");
      const animatedElements = [title, profile, ...introduction, ...informationTitles, ...informationItems].filter(
        (element): element is HTMLElement => Boolean(element),
      );

      if (reduceMotion) {
        gsap.set(animatedElements, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
        return;
      }

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 76%",
            toggleActions: "play none none none",
            fastScrollEnd: true,
          },
          defaults: { ease: "power3.out" },
        })
        .fromTo(title, { autoAlpha: 0, y: 34 }, { autoAlpha: 1, y: 0, duration: 0.55 })
        .fromTo(
          introduction,
          { autoAlpha: 0, x: -30, y: 12 },
          { autoAlpha: 1, x: 0, y: 0, duration: 0.46, stagger: 0.09 },
          "-=0.28",
        )
        .fromTo(
          profile,
          { autoAlpha: 0, y: 58, scale: 0.95 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.68 },
          "-=0.48",
        )
        .fromTo(
          informationTitles,
          { autoAlpha: 0, x: 30 },
          { autoAlpha: 1, x: 0, duration: 0.42, stagger: 0.12 },
          "-=0.38",
        )
        .fromTo(
          informationItems,
          { autoAlpha: 0, x: 28, y: 10 },
          { autoAlpha: 1, x: 0, y: 0, duration: 0.4, stagger: 0.07 },
          "-=0.3",
        );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="w-full overflow-hidden bg-black text-white">
      <div className="content-container flex min-h-[100svh] flex-col justify-center py-80 sm:py-100 lg:py-120">
        <div className="grid items-center gap-52 lg:grid-cols-[0.95fr_0.82fr_1.18fr] lg:gap-30 xl:gap-48">
          <div className="about-introduction lg:self-stretch">
            <div className="about-overview-title">
              <SectionTitle number="01" title="About Me!" />
            </div>

            <div className="mt-52 flex flex-wrap items-end gap-x-16 gap-y-6 lg:mt-80">
              <h3 className="font-heading text-5xl font-bold sm:text-6xl">나유형</h3>
              <p className="pb-4 font-bricolage text-xl font-bold text-gray sm:text-2xl">Frontend Developer</p>
            </div>

            <p className="mt-38 font-heading text-xl font-bold leading-relaxed text-primary sm:text-2xl lg:text-xl xl:text-2xl">
              “숨은 문제를 발견하고, 그냥 넘기지 않습니다”
            </p>

            <p className="mt-28 max-w-[48rem] font-body text-sm leading-[1.9] text-white sm:text-base">
              4년간 웹 UI 구현에서 시작해 Vue와 React 기반 프로젝트까지 경험하며, 사용자 흐름과 유지보수성을 함께 고려해 왔습니다.
            </p>
          </div>

          <div className="flex justify-center lg:self-center">
            <div className="about-profile-frame relative aspect-[0.72] w-[min(74vw,34rem)] overflow-hidden rounded-[50%] bg-gradient-to-b from-[#48474d] via-[#333238] to-[#1f1f22] ring-1 ring-inset ring-white/30 sm:w-[36rem] lg:w-full lg:max-w-[39rem]">
              <img
                src={Profile}
                alt="나유형 프로필 사진"
                className="absolute bottom-0 left-1/2 h-[91%] w-auto max-w-none -translate-x-1/2 object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-48 lg:gap-58">
            <section aria-labelledby="about-education-title">
              <div id="about-education-title">
                <InformationTitle icon={EducationIcon} title="Education" />
              </div>
              <ol className="mt-18 flex flex-col gap-18 sm:mt-24 sm:gap-22">
                {educations.map((item) => (
                  <li
                    key={item.id}
                    className="about-information-item grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-12 font-body"
                  >
                    <span className="mt-7 size-6 shrink-0 rounded-full bg-primary sm:size-7" aria-hidden="true" />
                    <p className="min-w-0 text-sm font-bold leading-[1.55] text-white sm:text-base">
                      <span className="mr-6">{item.description}</span>
                      {item.title}
                    </p>
                    <time className="pt-2 text-xs font-bold text-gray sm:text-sm">({item.date})</time>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="about-certification-title">
              <div id="about-certification-title">
                <InformationTitle icon={CertificationIcon} title="Certifications" />
              </div>
              <ol className="mt-18 flex flex-col gap-14 sm:mt-24 sm:gap-18">
                {certifications.map((item) => (
                  <li
                    key={item.id}
                    className="about-information-item grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-12 font-body"
                  >
                    <span className="mt-7 size-6 shrink-0 rounded-full bg-accent sm:size-7" aria-hidden="true" />
                    <p className="min-w-0 text-sm font-bold leading-[1.55] text-white sm:text-base">
                      {item.title}
                      <span className="ml-8 text-xs font-normal text-gray sm:text-sm">{item.description}</span>
                    </p>
                    <time className="pt-2 text-xs font-bold text-gray sm:text-sm">({item.date})</time>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
