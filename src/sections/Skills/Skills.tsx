import SectionTitle from "@/components/layout/SectionTitle";
import SkillBox from "./SkillBox";
import SkillList from "./SkillList";

const Skills = () => (
  <div className="w-full py-70 sm:py-120" id="skills">
    <section className="content-container max-w-1300 rounded-xl bg-gray-dark p-20 sm:p-40">
      <div className="w-full space-y-30 sm:space-y-40">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-end lg:justify-between lg:gap-40">
          <SectionTitle number="02" title="SKILLS" />
          <p className="max-w-660 pb-4 font-body text-sm leading-relaxed text-white sm:text-base lg:text-lg">
            React와 TypeScript 기반으로 컴포넌트 구조와 상태 관리를 중심으로 개발합니다.
          </p>
        </div>
        <SkillBox />
      </div>
    </section>
    <SkillList />
  </div>
);

export default Skills;
