
import SectionTitle from "@/components/layout/SectionTitle";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Education from "./Education";

const AboutMe = () => {
  return (
    <div className="w-full">
      <section className="content-container h-auto py-120" id="about">
        <div className="flex justify-between">
          <SectionTitle number="01" title="About Me!" />
          <div>
            <h3 className="text-2xl font-heading font-bold">Fronted Developer & Web Publisher</h3>
            <p className="mt-12 text-base">
              4년간 다양한 웹 서비스를 구축하며, 사용자 경험과 유지보수를 고려한 인터페이스를 만드는 데 집중했습니다.<br />
              React와 TypeScript를 활용한 컴포넌트 기반 개발 경험도 보유하고 있습니다.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-75">
          <Experience/>
          <div className="flex flex-col">
            <Education/>
            <Certifications/>
          </div>
        </div>
      </section>
    </div>
  )
};

export default AboutMe;