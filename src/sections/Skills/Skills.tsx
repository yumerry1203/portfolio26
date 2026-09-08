import SectionTitle from "@/components/layout/SectionTitle";
import SkillBox from "./SkillBox";
import SkillList from "./SkillList";

const Skills = () => (
  <div className="w-full py-70 sm:py-120" id="skills">
    <section className="content-container flex max-w-1300 flex-col gap-30 rounded-xl bg-gray-dark p-20 sm:gap-40 sm:p-40 xl:items-start xl:flex-row xl:gap-30">
      <div className="w-full space-y-30 xl:w-408 xl:shrink-0">
        <SectionTitle number="04" title="SKILLS" />
        <SkillBox />
      </div>
      <SkillList />
    </section>
  </div>
);

export default Skills;
