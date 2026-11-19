interface SkillTagProps {
  children: string;
}

const SkillTag = ({ children }: SkillTagProps) => (
  <span className="resume-skill-tag">
    {children}
  </span>
);

export default SkillTag;
