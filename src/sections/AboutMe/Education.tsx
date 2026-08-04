import AboutTitle from "./AboutTitle";
import AboutmeCard from "./AboutmeCard";
import IconEducation from "@/assets/images/ico-education.svg"
import { educations } from "@/data/AboutMe/aboutme";

const Education = () => {
  return (
    <div className="w-486">
      <AboutTitle
        title="교육"
        icon={IconEducation}
      />
      <ol className="mt-24 flex flex-col gap-20">
        {educations.map((item) => {
          return (
            <li
              key={item.id}
              className="bg-muted rounded-md shadow-[var(--shadow-white)] py-16 px-32"
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