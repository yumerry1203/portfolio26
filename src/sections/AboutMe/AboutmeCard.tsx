import DotLabel from "@/components/common/DotLabel";

type AboutmeCardVariant =
  | "experience"
  | "certifications"
  | "education";

interface AboutmeCardProps {
  variant: AboutmeCardVariant;
  date: string;
  title: string;
  description?: string;
  employmentType?: string;
  projects?: string[];
  isRight?: boolean;
  className?: string;
}

const variantStyles = {
  experience: {
    background: false,
    color:"text-accent",
    dotLabel:"redLine"
  },
  education: {
    background: true,
    color: "text-primary",
    dotLabel:"purpleLine"
  },
  certifications: {
    background: true,
    color: "text-secondary",
    dotLabel:"purpleLightLine"
  },
} as const;

const AboutmeCard = ({
  variant,
  date,
  title,
  description,
  employmentType,
  projects = [],
  isRight = false,
  className = "",
}: AboutmeCardProps) => {
  const styles = variantStyles[variant];

  return (
    <div className={`relative ${className}` }>
      <div className="flex items-end justify-between">
        <div
          className={`flex items-center gap-12 ${
            variant === "experience" ? "w-full" : ""
          }`}
        >
          <DotLabel
            variant={styles.dotLabel}
            className={
              variant === "experience"
                ? `absolute top-0 h-16 w-16 max-sm:!left-[calc(var(--spacing)*-24)] max-sm:!right-auto ${isRight ? "-left-8" : "-right-8"}`
                : "h-14 w-14 sm:h-16 sm:w-16"
            }
          />

          <p
            className={`${variant === "experience" ? "text-xl" : "text-lg sm:text-xl"} font-bold leading-none ${styles.color} ${
              variant === "experience" ? "w-full" : ""
            } ${
              variant === "experience" && !isRight ? "text-right max-sm:text-left" : ""
            }`}
          >
            {date}
          </p>
          {variant === "certifications" && (
            <div className="hidden text-base font-bold leading-none sm:block">
              {title}
            </div>
          )}
        </div>     
          {variant !== "experience" &&  (
            <p className="text-[1.1rem] font-bold leading-none text-gray sm:text-xs">
              {description}
            </p>
          )}
      </div>
      {variant === "education" && (
        <div className="mt-14 text-sm font-bold leading-none sm:mt-22 sm:text-base">
          {title}
        </div>   
      )}
      {variant === "experience" && (
        <div className={`mt-16 flex flex-wrap items-center gap-8 sm:mt-22 ${!isRight ? "justify-end max-sm:justify-start" : ""}`}>
          <div className="text-base font-bold leading-none">{title}</div>
          {employmentType && (
            <span className="rounded-full bg-gray px-8 py-4 text-xs font-bold leading-none text-black">
              {employmentType}
            </span>
          )}
        </div>
      )}
      {variant === "certifications" && (
        <div className="mt-14 text-sm font-bold leading-none sm:hidden">{title}</div>
      )}
      {variant === "experience" && projects.length > 0 && (
        <ul className="mt-14 space-y-7 text-sm font-bold leading-snug text-gray">
          {projects.map((project) => (
            <li key={project} className={`flex items-start gap-7 max-sm:justify-start max-sm:text-left ${!isRight ? "justify-end text-right" : ""}`}>
              <span className="mt-[0.55em] h-4 w-4 shrink-0 rounded-full bg-gray" aria-hidden="true" />
              <span>{project}</span>
            </li>
          ))}
        </ul>
      )}
      {variant === "experience" && description && (
        <p className="mt-16 text-sm font-bold text-gray leading-none">
          {description}
        </p>
      )}     
    </div>
  );
}
export default AboutmeCard;
