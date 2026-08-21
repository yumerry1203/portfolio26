import SectionTitle from "@/components/layout/SectionTitle";
import SkillBox from "./SkillBox";
import SkillList from "./SkillList";

const Skills = () => (
  <div className="w-full py-120" id="skills">
    <section className="content-container flex max-w-1300 flex-col gap-40 rounded-xl bg-gray-dark p-40 xl:items-start xl:flex-row xl:gap-30">
      <div className="space-y-30">
        <SectionTitle number="04" title="SKILLS" />
        <SkillBox />
      </div>
      <SkillList />
    </section>
  </div>
);

export default Skills;
