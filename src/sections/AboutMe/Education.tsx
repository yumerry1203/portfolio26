import AboutTitle from "./AboutTitle";
import AboutmeCard from "./AboutmeCard";
import IconEducation from "@/assets/images/ico-education.svg"
import { educations } from "@/data/AboutMe/aboutme";

const Education = () => {
  return (
    <div className="w-full lg:w-486">
      <div className="about-education-title">
        <AboutTitle
          title="교육"
          icon={IconEducation}
        />
      </div>
      <ol className="mt-16 flex flex-col gap-14 sm:mt-24 sm:gap-20">
        {educations.map((item) => {
          return (
            <li
              key={item.id}
              className="about-education-card rounded-md bg-muted px-20 py-14 shadow-[var(--shadow-white)] sm:px-32 sm:py-16"
            >
              <AboutmeCard
                variant="education"
                {...item}
              />
            </li>
          );
        })}
      </ol>
    </div>
  )
};

export default Education;
