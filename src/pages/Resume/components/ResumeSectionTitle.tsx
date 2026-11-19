interface ResumeSectionTitleProps {
  children: string;
  meta?: string;
}

const ResumeSectionTitle = ({ children, meta }: ResumeSectionTitleProps) => (
  <div className="resume-section-title">
    <span className="resume-section-title__bar" aria-hidden="true" />
    <h2 className="resume-section-title__text">
      {children}
    </h2>
    {meta && <span className="resume-section-title__meta">{meta}</span>}
    <span className="resume-section-title__line" aria-hidden="true" />
  </div>
);

export default ResumeSectionTitle;
