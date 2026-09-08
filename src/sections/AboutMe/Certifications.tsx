import AboutTitle from "./AboutTitle";
import AboutmeCard from "./AboutmeCard";
import IconCerrification from "@/assets/images/icon-certifications.svg";
import { certifications } from "@/data/AboutMe/aboutme";

const Experience = () => {
  return (
    <div className="w-full lg:w-486">
      <div className="about-certification-title">
        <AboutTitle
          title="자격증"
          icon={IconCerrification}
        />
      </div>
      <ol className="mt-16 flex flex-col gap-14 sm:mt-24 sm:gap-20">
        {certifications.map((item) => {
          return (
            <li
              key={item.id}
              className="about-certification-card rounded-md bg-muted px-20 py-14 shadow-[var(--shadow-white)] sm:px-32 sm:py-16"
            >
              <AboutmeCard
                variant="certifications"
                {...item}
              />
            </li>
          );
        })}
      </ol>
    </div>
  )
};

export default Experience;
