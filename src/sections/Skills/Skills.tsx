import SectionTitle from "@/components/layout/SectionTitle";
import SkillBox from "./SkillBox";
import SkillList from "./SkillList";

const Skills = () => (
  <div className="w-full py-70 sm:py-120" id="skills">
    <section className="content-container max-w-1300 rounded-xl bg-gray-dark p-20 sm:p-40">
      <div className="w-full space-y-30 sm:space-y-40">
        <SectionTitle number="02" title="SKILLS" />
        <SkillBox />
      </div>
    </section>
    <SkillList />
  </div>
);

export default Skills;
