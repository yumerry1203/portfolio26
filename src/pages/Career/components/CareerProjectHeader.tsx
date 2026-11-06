interface CareerProjectHeaderProps {
  period: string;
  title: string;
  team: string;
  scope: string;
}

const CareerProjectHeader = ({ period, title, team, scope }: CareerProjectHeaderProps) => (
  <header className="career-project-header">
    <p className="career-project-header__period">{period}</p>
    <div className="career-project-header__row">
      <span aria-hidden="true" />
      <h3>{title}</h3>
      <dl>
        <div><dt>프로젝트 구성</dt><dd>{team}</dd></div>
        <div><dt>담당 범위</dt><dd>{scope}</dd></div>
      </dl>
    </div>
  </header>
);

export default CareerProjectHeader;
