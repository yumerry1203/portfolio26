interface CareerProjectHeaderProps {
  period: string;
  title: string;
  company: string;
  team: string;
  scope: string;
}

const CareerProjectHeader = ({ period, title, company, team, scope }: CareerProjectHeaderProps) => (
  <header className="career-project-header">
    <p className="career-project-header__period">{period}</p>
    <div className="career-project-header__row">
      <h3>{title}</h3>
      <dl>
        <div><dt>소속 회사</dt><dd>{company}</dd></div>
        <div><dt>프로젝트 구성</dt><dd>{team}</dd></div>
        <div><dt>담당 범위</dt><dd>{scope}</dd></div>
      </dl>
    </div>
  </header>
);

export default CareerProjectHeader;
