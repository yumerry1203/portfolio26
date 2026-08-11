import SectionTitle from "@/components/layout/SectionTitle";
import SkillBox from "./SkillBox";

const Skills = () => {
 
  return (
    <div className="w-full">
      <section className="content-container flex gap-30">
        <div className="space-y-30">
          <SectionTitle number="04" title="SKILLS" />    
          <SkillBox />
        </div>
      </section>
    </div>
  )
};

export default Skills;
