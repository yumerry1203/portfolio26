interface SkillTagProps {
  children: string;
}

const SkillTag = ({ children }: SkillTagProps) => (
  <span className="resume-skill-tag inline-flex items-center rounded-full bg-[#f0f0f0] px-8 py-2 text-[9.2px] font-medium leading-[14px] text-black">
    {children}
  </span>
);

export default SkillTag;
