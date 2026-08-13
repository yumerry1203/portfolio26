import SectionTitle from "@/components/layout/SectionTitle";
import SkillBox from "./SkillBox";
import SkillList from "./SkillList";


const Skills = () => {
 
  return (
    <div className="w-full py-120" id="skills">
      <section className="content-container p-40 flex flex-col gap-40 xl:flex-row xl:gap-30 max-w-1300 rounded-xl bg-muted ">
        <div className="space-y-30">
          <SectionTitle number="04" title="SKILLS" />    
          <SkillBox />
        </div>
        <SkillList />
      </section>
    </div>
  )
};

export default Skills;
