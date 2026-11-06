interface ExperienceItemProps {
  period: string;
  company: string;
  role: string;
  note?: string;
  responsibilities: readonly string[];
  projects: string;
}

const ExperienceItem = ({
  period,
  company,
  role,
  note,
  responsibilities,
  projects,
}: ExperienceItemProps) => (
  <section className="resume-experience grid grid-cols-[98px_minmax(0,1fr)] gap-16">
    <p className="resume-experience__period pt-2 text-[10.3px] font-medium text-[#969696]">{period}</p>

    <div className="min-w-0">
      <div className="resume-experience__heading flex flex-wrap items-baseline gap-x-6 gap-y-2 text-[12.3px]">
        <h3 className="font-bold">{company}</h3>
        <span className="font-medium">| {role}</span>
        {note && <span className="resume-experience__note text-[9.2px] text-[#9d9d9d]">{note}</span>}
      </div>

      <div className="mt-8 grid grid-cols-[58px_minmax(0,1fr)] gap-8">
        <strong className="resume-experience__label text-[10.3px]">[담당 업무]</strong>
        <ul className="resume-experience__list space-y-4 text-[10.3px] leading-[1.45]">
          {responsibilities.map((responsibility) => (
            <li key={responsibility} className="flex gap-7">
              <span className="mt-[0.62em] h-3 w-3 shrink-0 bg-black" aria-hidden="true" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="resume-experience__projects mt-10 rounded-md bg-[#f5f5f5] px-12 py-7 text-[10.3px] leading-relaxed">
        <strong className="mr-7">주요 프로젝트 :</strong>
        {projects}
      </div>
    </div>
  </section>
);

export default ExperienceItem;
