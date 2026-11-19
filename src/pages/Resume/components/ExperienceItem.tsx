interface ExperienceItemProps {
  period: string;
  company: string;
  role: string;
  context?: string;
  note?: string;
  summary?: string;
  responsibilities: readonly string[];
  projects?: string;
}

const TECH_TERMS = [
  "iOS/AOS 앱 모두 출시 완료 (2026.06.24)",
  "React Native",
  "React, TypeScript",
  "Vue 3, TypeScript",
  "HTML/CSS",
  "JavaScript",
] as const;

const emphasizeTechTerms = (text: string) => {
  const escapedTerms = TECH_TERMS.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escapedTerms.join("|")})`, "g");

  return text.split(pattern).map((part, index) => (
    TECH_TERMS.includes(part as (typeof TECH_TERMS)[number])
      ? <strong key={`${part}-${index}`}>{part}</strong>
      : part
  ));
};

const ExperienceItem = ({
  period,
  company,
  role,
  context,
  note,
  summary,
  responsibilities,
  projects,
}: ExperienceItemProps) => (
  <section className="resume-experience">
    <p className="resume-experience__period">{period}</p>
    <div className="resume-experience__content">
      <div className="resume-experience__heading">
        <h3>{company}</h3>
        <span>| {role}</span>
        {context && <span className="resume-experience__context">{context}</span>}
        {note && <span className="resume-experience__note">{note}</span>}
      </div>

      {summary && <p className="resume-experience__summary">{summary}</p>}

      <div className="resume-experience__work">
        <strong className="resume-experience__label">[담당 업무]</strong>
        <ul className="resume-experience__list">
          {responsibilities.map((responsibility) => (
            <li key={responsibility}>
              <span className="resume-list-square" aria-hidden="true" />
              <span>{emphasizeTechTerms(responsibility)}</span>
            </li>
          ))}
        </ul>
      </div>

      {projects && (
        <div className="resume-experience__projects">
          <strong>주요 프로젝트 :</strong>
          <span>{projects}</span>
        </div>
      )}
    </div>
  </section>
);

export default ExperienceItem;
