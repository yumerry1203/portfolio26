import AboutTitle from "./AboutTitle";
import AboutmeCard from "./AboutmeCard";
import IconExperience from "@/assets/images/ico-experience.svg";
import { experiences } from "@/data/AboutMe/aboutme";

const Experience = () => {
  return (
    <div className="w-565">
      <div className="about-experience-title">
        <AboutTitle
          title="경력"
          icon={IconExperience}
        />
      </div>
      <ol className="relative mt-80 flex flex-col gap-16 pb-8">
        <li aria-hidden="true" role="presentation" className="about-experience-line absolute inset-y-0 left-1/2 w-px -translate-x-1/2 origin-top bg-white max-sm:left-16" />
        {experiences.map((item, index) => {
          const isRight = index % 2 === 0;

          return (
            <li
              key={`${item.date}-${item.title}`}
              className="about-experience-card relative z-10 grid min-h-120 grid-cols-2 max-sm:grid-cols-[3.2rem_1fr]"
            >
              <AboutmeCard
                variant="experience"
                {...item}
                isRight={isRight}
                className={
                  isRight
                    ? "col-start-2 pl-52"
                    : "col-start-1 text-right pr-52 max-sm:col-start-2 max-sm:pl-28 max-sm:pr-0 max-sm:text-left"
                }
              />
            </li>
          );
        })}
      </ol>
    </div>
  )
};

export default Experience;
