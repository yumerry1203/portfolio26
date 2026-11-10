import { Link } from "react-router-dom";

import Profile from "@/assets/images/me.png";
import ExperienceItem from "./components/ExperienceItem";
import ResumeSectionTitle from "./components/ResumeSectionTitle";
import ResumeSheet from "./components/ResumeSheet";
import SkillTag from "./components/SkillTag";
import {
  awards,
  certificates,
  course,
  educationItems,
  experiences,
  skillGroups,
} from "./resumeData";
import "./ResumePage.css";

const ContactIcon = ({ type }: { type: "phone" | "email" | "web" | "github" }) => {
  const paths = {
    phone: <path d="M7.2 3.5 9 7 7.5 8.6c.9 1.9 2.5 3.5 4.4 4.4l1.6-1.5 3.5 1.8-.7 3.1c-.2.8-.9 1.3-1.7 1.3C8.2 17.7 3 12.5 3 6.1c0-.8.5-1.5 1.3-1.7l2.9-.9Z" />,
    email: <path d="M3 5h14v10H3V5Zm1 1 6 4.5L16 6" />,
    web: <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-7-8h14M10 2c2 2.2 3 4.8 3 8s-1 5.8-3 8c-2-2.2-3-4.8-3-8s1-5.8 3-8Z" />,
    github: <path d="M10 2a8 8 0 0 0-2.5 15.6v-2c-2 .4-2.5-.9-2.5-.9-.3-.8-.8-1.1-.8-1.1-.7-.5.1-.5.1-.5.7.1 1.1.8 1.1.8.7 1.1 1.7.8 2.1.6.1-.5.3-.8.5-1-1.6-.2-3.3-.8-3.3-3.6 0-.8.3-1.4.7-1.9-.1-.2-.3-.9.1-1.9 0 0 .6-.2 2 .7a7 7 0 0 1 3.6 0c1.4-.9 2-.7 2-.7.4 1 .1 1.7.1 1.9.5.5.7 1.1.7 1.9 0 2.8-1.7 3.4-3.3 3.6.3.2.5.7.5 1.4v2.7A8 8 0 0 0 10 2Z" />,
  };

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="size-11 shrink-0 fill-none stroke-current stroke-[1.5]">
      {paths[type]}
    </svg>
  );
};

const ResumePage = () => (
  <main className="resume-page flex min-h-svh flex-col items-center gap-28 bg-[#ececec] py-32 text-black print:bg-white">
    <nav className="resume-page-actions fixed inset-x-20 top-20 z-20 flex items-center justify-between" aria-label="이력서 페이지 기능">
      <Link
        to="/"
        className="flex size-44 cursor-pointer items-center justify-center rounded-full bg-black text-[22px] font-bold leading-none text-white shadow-lg transition-colors hover:bg-primary hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        aria-label="포트폴리오로 돌아가기"
      >
        <span aria-hidden="true">←</span>
      </Link>

      <button
        type="button"
        className="cursor-pointer rounded-full bg-black px-20 py-12 text-[13px] font-bold text-white shadow-lg transition-colors hover:bg-primary hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        onClick={() => window.print()}
      >
        PDF로 저장하기
      </button>
    </nav>

    <ResumeSheet page={1} totalPages={2}>
      <h1 className="resume-title text-center text-[27px] font-bold tracking-[0.16em]">이력서</h1>

      <header className="mt-16 grid grid-cols-[58px_160px_1fr] items-center gap-18">
        <div className="resume-profile-photo h-60 w-58 overflow-hidden rounded-md bg-[#efefef]">
          <img src={Profile} alt="나유형 프로필" className="h-[145%] w-full object-cover object-top" />
        </div>
        <div className="border-r border-black pr-18">
          <strong className="resume-name block text-[20.5px]">나유형</strong>
          <span className="resume-role mt-2 block text-[14.4px] font-bold text-[#888]">Frontend Developer</span>
        </div>
        <address className="resume-contact grid grid-cols-2 gap-x-14 gap-y-7 text-[9px] not-italic">
          <span className="flex items-center gap-5"><ContactIcon type="phone" />010.6341.3324</span>
          <span className="flex items-center gap-5"><ContactIcon type="email" />moa3627@naver.com</span>
          <span className="col-span-2 flex items-center gap-5"><ContactIcon type="web" />https://yumerry1203.github.io/portfolio26</span>
          <span className="col-span-2 flex items-center gap-5"><ContactIcon type="github" />https://github.com/yumerry1203</span>
        </address>
      </header>

      <section className="resume-intro-section mt-24">
        <p className="resume-intro text-[16.4px] font-bold leading-[1.45]">
          숨어 있는 문제를 날카롭게 끄집어내고, 그냥 넘기지 않습니다.<br />
          적극적인 소통으로 해결까지 이끌어내는 프론트엔드 개발자 나유형입니다.
        </p>
        <p className="resume-summary mt-7 text-[10.5px] text-[#777]">
          코드의 구조와 유지보수를 함께 고려하며, 더 나은 구현 방법을 고민합니다.
        </p>
      </section>

      <section className="resume-skills-section mt-16">
        <ResumeSectionTitle>기술 스택</ResumeSectionTitle>
        <div className="resume-skill-list space-y-7 pl-14">
          {skillGroups.map((group) => (
            <div key={group.label} className="grid grid-cols-[130px_minmax(0,1fr)] items-center gap-14">
              <h3 className="resume-skill-label text-[12.3px] font-bold">{group.label}</h3>
              <div className="flex flex-wrap gap-5">
                {group.skills.map((skill) => <SkillTag key={skill}>{skill}</SkillTag>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-career-section mt-22">
        <ResumeSectionTitle>경력 사항</ResumeSectionTitle>
        <div className="space-y-24">
          {experiences.slice(0, 2).map((experience) => (
            <ExperienceItem key={experience.company} {...experience} />
          ))}
        </div>
      </section>
    </ResumeSheet>

    <ResumeSheet page={2} totalPages={2}>
      <section className="resume-career-section">
        <ResumeSectionTitle>경력 사항</ResumeSectionTitle>
        <div className="space-y-25">
          {experiences.slice(2).map((experience) => (
            <ExperienceItem key={experience.company} {...experience} />
          ))}
        </div>
      </section>

      <section className="resume-education-section mt-22">
        <ResumeSectionTitle>학력</ResumeSectionTitle>
        <div className="space-y-9 pl-2">
          {educationItems.map((item) => (
            <div key={item.period} className="resume-detail-row grid grid-cols-[105px_95px_75px_1fr] items-baseline gap-8 text-[10.3px]">
              <span className="text-[#999]">{item.period}</span>
              <strong className="resume-detail-title">{item.title}</strong>
              <span>{item.major}</span>
              <span className="text-[#999]">{item.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-course-section mt-24">
        <ResumeSectionTitle>교육</ResumeSectionTitle>
        <div className="resume-detail-row grid grid-cols-[105px_minmax(0,1fr)] gap-8 text-[10.3px]">
          <span className="text-[#999]">{course.period}</span>
          <div>
            <div className="flex flex-wrap items-baseline gap-6">
              <strong className="resume-detail-title text-[12.3px]">{course.title}</strong>
              <span className="text-[9px] text-[#999]">{course.institute}</span>
            </div>
            <ul className="mt-11 space-y-5 pl-6">
              {course.descriptions.map((description) => (
                <li key={description} className="flex gap-8">
                  <span className="mt-[0.55em] h-3 w-3 shrink-0 bg-black" aria-hidden="true" />
                  <span>{description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="resume-certificates-section mt-25">
        <ResumeSectionTitle>자격증</ResumeSectionTitle>
        <div className="space-y-8 pl-2">
          {certificates.map((certificate) => (
            <div key={`${certificate.period}-${certificate.title}`} className="resume-detail-row grid grid-cols-[105px_145px_1fr] items-baseline gap-8 text-[10.3px]">
              <span className="text-[#999]">{certificate.period}</span>
              <strong className="resume-detail-title text-[12.3px]">{certificate.title}</strong>
              <span className="text-[#999]">{certificate.issuer}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-awards-section mt-25">
        <ResumeSectionTitle>수상</ResumeSectionTitle>
        <div className="space-y-9 pl-2">
          {awards.map((award) => (
            <div key={award.period} className="resume-detail-row grid grid-cols-[105px_215px_1fr] items-baseline gap-8 text-[10.3px]">
              <span className="text-[#999]">{award.period}</span>
              <strong className="resume-detail-title text-[12.3px]">{award.title}</strong>
              <span className="text-[#999]">{award.prize}</span>
            </div>
          ))}
        </div>
      </section>
    </ResumeSheet>
  </main>
);

export default ResumePage;
