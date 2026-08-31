import AboutTitle from "./AboutTitle";
import AboutmeCard from "./AboutmeCard";
import IconCerrification from "@/assets/images/icon-certifications.svg";
import { certifications } from "@/data/AboutMe/aboutme";

const Experience = () => {
  return (
    <div className="w-486">
      <div className="about-certification-title">
        <AboutTitle
          title="자격증"
          icon={IconCerrification}
        />
      </div>
      <ol className="mt-24 flex flex-col gap-20">
        {certifications.map((item) => {
          return (
            <li
              key={item.id}
              className="about-certification-card bg-muted rounded-md shadow-[var(--shadow-white)] py-16 px-32"
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
