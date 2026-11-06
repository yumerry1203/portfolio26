interface ResumeSectionTitleProps {
  children: string;
}

const ResumeSectionTitle = ({ children }: ResumeSectionTitleProps) => (
  <div className="resume-section-title mb-16 flex items-center gap-12">
    <span className="h-15 w-3 shrink-0 bg-[#b9d4e5]" aria-hidden="true" />
    <h2 className="resume-section-title__text shrink-0 text-[16.4px] font-bold tracking-[0.04em] text-black">
      {children}
    </h2>
    <span className="h-px flex-1 bg-black" aria-hidden="true" />
  </div>
);

export default ResumeSectionTitle;
