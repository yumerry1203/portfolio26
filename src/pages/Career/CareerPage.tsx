import { Link } from "react-router-dom";

import CareerBulletList from "./components/CareerBulletList";
import CareerProblemTable from "./components/CareerProblemTable";
import CareerProjectHeader from "./components/CareerProjectHeader";
import CareerSectionTitle from "./components/CareerSectionTitle";
import CareerSheet from "./components/CareerSheet";
import CareerTechTags from "./components/CareerTechTags";
import {
  careerSummary,
  cleverse,
  cleverseProblems,
  collaborationCases,
  isp,
  ispProblems,
  landingAudit,
  moggoji,
  moggojiProblems,
} from "./careerData";
import "./CareerPage.css";

const ProjectOverview = ({ overview, skills }: { overview: string; skills: string[] }) => (
  <div className="career-project-overview">
    <h4>프로젝트 개요</h4>
    <p>{overview}</p>
    <h4>사용 기술</h4>
    <CareerTechTags items={skills} />
  </div>
);

const ProjectRole = ({ title, items }: { title: string; items: string[] }) => (
  <section className="career-role">
    <h4>{title}</h4>
    <CareerBulletList items={items} />
  </section>
);

const CareerPage = () => (
  <main className="career-page flex min-h-svh flex-col items-center gap-28 bg-[#ececec] py-32 text-black print:bg-white">
    <nav className="career-page-actions fixed inset-x-20 top-20 z-20 flex items-center justify-between" aria-label="경력기술서 페이지 기능">
      <Link to="/" className="flex size-44 items-center justify-center rounded-full bg-black text-[22px] font-bold leading-none text-white shadow-lg transition-colors hover:bg-primary hover:text-black" aria-label="포트폴리오로 돌아가기">←</Link>
      <button type="button" className="cursor-pointer rounded-full bg-black px-20 py-12 text-[13px] font-bold text-white shadow-lg transition-colors hover:bg-primary hover:text-black" onClick={() => window.print()}>
        PDF로 저장하기
      </button>
    </nav>

    <CareerSheet page={1} totalPages={4}>
      <header className="career-document-header flex items-end justify-between">
        <h1>경력기술서</h1>
        <p><strong>나유형</strong><span>Frontend Developer</span></p>
      </header>

      <section className="career-summary-section">
        <CareerSectionTitle>경력 요약</CareerSectionTitle>
        <div className="career-summary-table">
          <div className="career-summary-head"><span>기간</span><span>회사명</span><span>부서 / 직무</span></div>
          {careerSummary.map((item) => (
            <div key={item.period} className="career-summary-row">
              <span>{item.period}</span>
              <span>{item.company}{item.badge && <em>{item.badge}</em>}</span>
              <span>{item.role}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="career-project-section">
        <CareerSectionTitle>프로젝트</CareerSectionTitle>
        <CareerProjectHeader period={moggoji.period} title={moggoji.title} team={moggoji.team} scope={moggoji.scope} />
        <ProjectOverview overview={moggoji.overview} skills={moggoji.skills} />
        <h4 className="career-subheading">담당 역할</h4>
        <div className="career-role-list">
          {moggoji.roles.map((role) => <ProjectRole key={role.title} {...role} />)}
        </div>
      </section>
    </CareerSheet>

    <CareerSheet page={2} totalPages={4}>
      <CareerSectionTitle>프로젝트</CareerSectionTitle>
      <section className="career-ai-audit">
        <h3>💡 AI 활용 | 랜딩페이지 품질 점검 및 개선</h3>
        <p>AI를 활용해 랜딩페이지의 코드 구조, 인터랙션, SEO 및 웹 성능을 분석한 점검 리포트를 작성하고, 도출된 개선 항목을 직접 검토한 뒤 실제 코드에 반영했습니다.</p>
        <div className="career-audit-list">
          {landingAudit.map((item) => (
            <div key={item.check}><p><strong>점검</strong>{item.check}</p><p><strong>개선</strong>{item.improve}</p></div>
          ))}
        </div>
      </section>
      <section className="career-problem-section">
        <h3>문제 해결 및 개선</h3>
        <CareerProblemTable items={moggojiProblems} />
      </section>

      <section className="career-project-section career-project-section--compact">
        <CareerProjectHeader period={isp.period} title={isp.title} team={isp.team} scope={isp.scope} />
        <ProjectOverview overview={isp.overview} skills={isp.skills} />
        <h4 className="career-subheading">담당 역할</h4>
        <ProjectRole {...isp.roles[0]} />
      </section>
    </CareerSheet>

    <CareerSheet page={3} totalPages={4}>
      <CareerSectionTitle>프로젝트</CareerSectionTitle>
      <ProjectRole {...isp.roles[1]} />
      <section className="career-problem-section career-problem-section--spaced">
        <h3>문제 해결 및 개선</h3>
        <CareerProblemTable items={ispProblems} />
      </section>

      <section className="career-project-section career-project-section--compact">
        <CareerProjectHeader period={cleverse.period} title={cleverse.title} team={cleverse.team} scope={cleverse.scope} />
        <ProjectOverview overview={cleverse.overview} skills={cleverse.skills} />
        <h4 className="career-subheading">담당 역할</h4>
        <ProjectRole {...cleverse.roles[0]} />
      </section>
    </CareerSheet>

    <CareerSheet page={4} totalPages={4}>
      <CareerSectionTitle>프로젝트</CareerSectionTitle>
      <ProjectRole {...cleverse.roles[1]} />
      <section className="career-problem-section career-problem-section--spaced">
        <h3>문제 해결 및 개선</h3>
        <CareerProblemTable items={cleverseProblems} />
      </section>

      <section className="career-collaboration-section">
        <CareerSectionTitle>협업 문제 해결</CareerSectionTitle>
        {collaborationCases.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </article>
        ))}
      </section>
    </CareerSheet>
  </main>
);

export default CareerPage;
