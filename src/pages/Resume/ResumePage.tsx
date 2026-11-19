import { Link } from "react-router-dom";
import type { ReactNode } from "react";

import ExternalLinkIcon from "@/assets/images/icon-external-link.svg";
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
  introduction,
  otherExperience,
  resumeSkills,
} from "./resumeData";
import "./ResumePage.css";

type ContactIconType = "phone" | "email" | "github";

const ContactIcon = ({ type }: { type: ContactIconType }) => {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.36-3.9-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.04 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A10.96 10.96 0 0 1 12 6.13c.98 0 1.95.13 2.86.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.78 1.06.78 2.14v3.26c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      {type === "phone" ? (
        <path d="M7.2 3.5 9 7 7.5 8.6c.9 1.9 2.5 3.5 4.4 4.4l1.6-1.5 3.5 1.8-.7 3.1c-.2.8-.9 1.3-1.7 1.3C8.2 17.7 3 12.5 3 6.1c0-.8.5-1.5 1.3-1.7l2.9-.9Z" />
      ) : (
        <path d="M3 5h14v10H3V5Zm1 1 6 4.5L16 6" />
      )}
    </svg>
  );
};

const ExternalTextLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noreferrer" className="resume-contact__link">
    {children}
  </a>
);

const ResumePage = () => (
  <main className="resume-page">
    <nav className="resume-page-actions" aria-label="이력서 페이지 기능">
      <Link to="/" className="resume-action-button resume-action-button--back" aria-label="포트폴리오로 돌아가기">
        <span aria-hidden="true">←</span>
      </Link>
      <button type="button" className="resume-action-button resume-action-button--print" onClick={() => window.print()}>
        PDF로 저장하기
      </button>
    </nav>

    <ResumeSheet page={1} totalPages={2}>
      <header className="resume-header">
        <div className="resume-profile-photo">
          <img src={Profile} alt="나유형 프로필" />
        </div>

        <div className="resume-header__content">
          <div className="resume-identity">
            <strong className="resume-name">나유형</strong>
            <span className="resume-role">Frontend Developer</span>
          </div>
          <p className="resume-headline">문제를 먼저 발견하고, 해결까지 연결하는 프론트엔드 개발자 나유형입니다.</p>
          <address className="resume-contact">
            <span className="resume-contact__item"><ContactIcon type="phone" />010.6341.3324</span>
            <a className="resume-contact__item resume-contact__link" href="mailto:moa3627@naver.com">
              <ContactIcon type="email" />moa3627@naver.com
            </a>
            <ExternalTextLink href="https://github.com/yumerry1203">
              <span className="resume-contact__item"><ContactIcon type="github" />https://github.com/yumerry1203</span>
            </ExternalTextLink>
            <ExternalTextLink href="https://yumerry1203.github.io/portfolio26/">
              <span className="resume-contact__item"><img src={ExternalLinkIcon} alt="" />Portfolio</span>
            </ExternalTextLink>
            <ExternalTextLink href="https://yumerry1203.github.io/yum-log/">
              <span className="resume-contact__item"><img src={ExternalLinkIcon} alt="" />Blog</span>
            </ExternalTextLink>
          </address>
        </div>
      </header>

      <div className="resume-skill-tags">
        {resumeSkills.map((skill) => <SkillTag key={skill}>{skill}</SkillTag>)}
      </div>

      <section className="resume-introduction-section">
        <ResumeSectionTitle>소 개</ResumeSectionTitle>
        <div className="resume-introduction-copy">
          {introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="resume-career-section">
        <ResumeSectionTitle meta="(총 4년 7개월)">경력 사항</ResumeSectionTitle>
        <div className="resume-experience-list resume-experience-list--page-1">
          {experiences.slice(0, 2).map((experience) => <ExperienceItem key={experience.company} {...experience} />)}
        </div>
      </section>
    </ResumeSheet>

    <ResumeSheet page={2} totalPages={2}>
      <section className="resume-career-section resume-career-section--continued">
        <ResumeSectionTitle>경력 사항</ResumeSectionTitle>
        <div className="resume-experience-list resume-experience-list--page-2">
          {experiences.slice(2).map((experience) => <ExperienceItem key={experience.company} {...experience} />)}
        </div>

        <div className="resume-other-career">
          <p className="resume-other-career__label">( 기타 경력 )</p>
          <div className="resume-other-career__content">
            <span className="resume-period-text">{otherExperience.period}</span>
            <p><strong>{otherExperience.company}</strong><span> | </span>{otherExperience.role}</p>
          </div>
        </div>
      </section>

      <section className="resume-education-section">
        <ResumeSectionTitle>학력 및 교육</ResumeSectionTitle>
        <div className="resume-detail-list">
          {educationItems.map((item) => (
            <div key={item.period} className="resume-detail-row resume-detail-row--education">
              <span className="resume-period-text">{item.period}</span>
              <strong className="resume-detail-title">{item.title}</strong>
              <span>{item.major}</span>
              <span className="resume-muted-text">{item.detail}</span>
            </div>
          ))}
        </div>

        <div className="resume-course-row">
          <span className="resume-period-text">{course.period}</span>
          <div>
            <div className="resume-course-heading">
              <strong className="resume-detail-title">{course.title}</strong>
              <span className="resume-muted-text">{course.institute}</span>
            </div>
            <ul className="resume-detail-bullets">
              {course.descriptions.map((description) => <li key={description}>{description}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="resume-certificates-section">
        <ResumeSectionTitle>자 격 증</ResumeSectionTitle>
        <div className="resume-detail-list">
          {certificates.map((certificate) => (
            <div key={`${certificate.period}-${certificate.title}`} className="resume-detail-row resume-detail-row--certificate">
              <span className="resume-period-text">{certificate.period}</span>
              <strong className="resume-detail-title">{certificate.title}</strong>
              <span className="resume-muted-text">{certificate.issuer}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-awards-section">
        <ResumeSectionTitle>수 상</ResumeSectionTitle>
        <div className="resume-detail-list">
          {awards.map((award) => (
            <div key={award.period} className="resume-detail-row resume-detail-row--award">
              <span className="resume-period-text">{award.period}</span>
              <strong className="resume-detail-title">{award.title}</strong>
              <span className="resume-muted-text">{award.prize}</span>
            </div>
          ))}
        </div>
      </section>
    </ResumeSheet>
  </main>
);

export default ResumePage;
