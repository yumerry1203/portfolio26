import { Link } from "react-router-dom";

import CareerBulletList from "./components/CareerBulletList";
import CareerProjectHeader from "./components/CareerProjectHeader";
import CareerSectionTitle from "./components/CareerSectionTitle";
import CareerSheet from "./components/CareerSheet";
import CareerTechTags from "./components/CareerTechTags";
import {
  cleverse,
  collaborationCase,
  isp,
  landingAudit,
  moggoji,
  skillGroups,
  type CareerProject,
  type CareerRole,
} from "./careerData";
import "./CareerPage.css";

const ProjectOverview = ({ project }: { project: CareerProject }) => (
  <div className="career-project-overview">
    <h4>프로젝트 개요</h4>
    <p>{project.overview}</p>
    <h4>사용 기술</h4>
    <CareerTechTags items={project.skills} />
  </div>
);

const ProjectOutcomes = ({ items }: { items: string[] }) => (
  <section className="career-outcome-section">
    <h4>성과</h4>
    <ul className="career-outcome-list">
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true" />
          <strong>{item}</strong>
        </li>
      ))}
    </ul>
  </section>
);

const ProjectRole = ({ title, items }: CareerRole) => (
  <section className="career-role">
    <h4>{title}</h4>
    <CareerBulletList items={items} />
  </section>
);

const ProjectDetails = ({ project }: { project: CareerProject }) => (
  <>
    <CareerProjectHeader
      period={project.period}
      title={project.title}
      company={project.company}
      team={project.team}
      scope={project.scope}
    />
    <ProjectOverview project={project} />
    <ProjectOutcomes items={project.outcomes} />
  </>
);

const CareerPage = () => (
  <main className="career-page flex min-h-svh flex-col items-center gap-28 bg-[#ececec] py-32 text-black print:bg-white">
    <nav className="career-page-actions fixed inset-x-20 top-20 z-20 flex items-center justify-between" aria-label="경력기술서 페이지 기능">
      <Link to="/" className="flex size-44 items-center justify-center rounded-full bg-black text-[22px] font-bold leading-none text-white shadow-lg transition-colors hover:bg-primary hover:text-black" aria-label="포트폴리오로 돌아가기">←</Link>
      <button type="button" className="cursor-pointer rounded-full bg-black px-20 py-12 text-[13px] font-bold text-white shadow-lg transition-colors hover:bg-primary hover:text-black" onClick={() => window.print()}>
        PDF로 저장하기
      </button>
    </nav>

    <CareerSheet page={1} totalPages={3}>
      <header className="career-document-header flex items-end justify-between">
        <h1>경력기술서</h1>
        <p><strong>나유형</strong><span>Frontend Developer</span></p>
      </header>

      <section className="career-skills-section">
        <CareerSectionTitle>보유 기술</CareerSectionTitle>
        <div className="career-skill-groups">
          {skillGroups.map((group) => (
            <p key={group.label}><strong>{group.label}:</strong>{group.items}</p>
          ))}
        </div>
      </section>

      <section className="career-project-section">
        <CareerSectionTitle>프로젝트</CareerSectionTitle>
        <ProjectDetails project={moggoji} />
        <h4 className="career-subheading">주요 업무 및 역할</h4>
        <div className="career-role-list">
          {moggoji.roles.slice(0, 2).map((role) => <ProjectRole key={role.title} {...role} />)}
        </div>
      </section>
    </CareerSheet>

    <CareerSheet page={2} totalPages={3}>
      <CareerSectionTitle>프로젝트</CareerSectionTitle>
      <ProjectRole {...moggoji.roles[2]} />

      <section className="career-ai-audit">
        <h3>💡 AI 활용 | 랜딩페이지 품질 점검 및 개선</h3>
        <p>AI를 활용해 랜딩페이지 코드를 분석하고 점검 리포트를 작성한 뒤, 도출된 개선 방안을 직접 검토해 실제 코드에 반영하여 성능을 개선했습니다.</p>
        <div className="career-audit-list">
          {landingAudit.map((item) => (
            <div key={item.check}><p><strong>점검</strong>{item.check}</p><p><strong>개선</strong>{item.improve}</p></div>
          ))}
        </div>
      </section>

      <section className="career-project-section career-project-section--compact">
        <ProjectDetails project={isp} />
        <h4 className="career-subheading">주요 업무 및 역할</h4>
        <div className="career-role-list">
          {isp.roles.map((role) => <ProjectRole key={role.title} {...role} />)}
        </div>
      </section>
    </CareerSheet>

    <CareerSheet page={3} totalPages={3}>
      <CareerSectionTitle>프로젝트</CareerSectionTitle>
      <section className="career-project-section career-project-section--first">
        <ProjectDetails project={cleverse} />
        <h4 className="career-subheading">담당 역할</h4>
        <div className="career-role-list">
          {cleverse.roles.map((role) => <ProjectRole key={role.title} {...role} />)}
        </div>
      </section>

      <section className="career-collaboration-section">
        <h3>💡 협업 및 문제 해결 <span aria-hidden="true">|</span> {collaborationCase.title}</h3>
        <div className="career-collaboration-block">
          <strong>상황</strong>
          <p>{collaborationCase.situation}</p>
        </div>
        <div className="career-collaboration-block">
          <strong>해결 및 대응</strong>
          <CareerBulletList items={collaborationCase.response} />
        </div>
        <div className="career-collaboration-block">
          <strong>결과</strong>
          <p>{collaborationCase.result}</p>
        </div>
      </section>
    </CareerSheet>
  </main>
);

export default CareerPage;
