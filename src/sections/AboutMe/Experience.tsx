import AboutTitle from "./AboutTitle";
import AboutmeCard from "./AboutmeCard";
import IconExperience from "@/assets/images/ico-experience.svg";
import { experiences } from "@/data/AboutMe/aboutme";

const Experience = () => {
  return (
    <div className="w-565">
      <AboutTitle
        title="경력"
        icon={IconExperience}
      />
      <ol className="relative mt-80 pb-8 before:absolute before:inset-y-0 before:left-1/2 before:w-px before:-translate-x-1/2 before:bg-white max-sm:before:left-16">
        {experiences.map((item, index) => {
          const isRight = index % 2 === 0;

          return (
            <li
              key={`${item.date}-${item.title}`}
              className="grid min-h-120 grid-cols-2 max-sm:grid-cols-[3.2rem_1fr]"
            >
              <AboutmeCard
                variant="experience"
                {...item}
                className={
                  isRight
                    ? "col-start-2 pl-52 text-left"
                    : "col-start-1 pr-52 text-right max-sm:col-start-2 max-sm:pl-28 max-sm:pr-0 max-sm:text-left"
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
