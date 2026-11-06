import AboutTitle from "./AboutTitle";
import IconCertification from "@/assets/images/icon-certifications.svg";
import { certifications } from "@/data/AboutMe/aboutme";

const Certifications = () => {
  return (
    <div className="w-full lg:w-486">
      <div className="about-certification-title">
        <AboutTitle
          title="자격증"
          icon={IconCertification}
        />
      </div>
      <ol className="mt-16 flex flex-col gap-8 sm:mt-24 sm:gap-12">
        {certifications.map((item) => (
          <li
            key={item.id}
            className="about-certification-card grid grid-cols-[minmax(0,1fr)_auto] items-center gap-12 py-10 font-body sm:gap-20 sm:py-12"
          >
            <div className="flex min-w-0 items-center gap-10 sm:gap-14">
              <span className="h-18 w-4 shrink-0 bg-secondary sm:h-22" aria-hidden="true" />
              <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-10 sm:gap-y-4">
                <strong className="text-base font-bold leading-tight text-secondary sm:text-lg">
                  {item.title}
                </strong>
                <span className="text-xs font-bold leading-tight text-gray sm:text-sm">
                  {item.description}
                </span>
              </div>
            </div>

            <time className="shrink-0 text-sm font-bold text-white sm:text-base">
              {item.date}
            </time>
          </li>
        ))}
      </ol>
    </div>
  )
};

export default Certifications;
