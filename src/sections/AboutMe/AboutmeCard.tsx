import DotLabel from "@/components/common/DotLabel";

type AboutmeCardVariant =
  | "experience"
  | "certifications"
  | "education";

interface AboutmeCardProps {
  variant: AboutmeCardVariant;
  date: string;
  title: string;
  description: string;
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
                ? `absolute top-0 h-16 w-16 ${isRight ? "-left-8" : "-right-8"}`
                : "w-16 h-16"
            }
          />

          <p
            className={`text-xl font-bold leading-none ${styles.color} ${
              variant === "experience" ? "w-full" : ""
            } ${
              variant === "experience" && !isRight ? "text-right" : ""
            }`}
          >
            {date}
          </p>
          {variant === "certifications" &&  (
            <div className={`text-base font-bold leading-none `}>
              {title}
            </div>   
          )}  
        </div>     
          {variant !== "experience" &&  (
            <p className="text-xs font-bold text-gray leading-none">
              {description}
            </p>
          )}
      </div>
      {variant !== "certifications" &&  (
        <div className={`mt-22 text-base font-bold leading-none `}>
          {title}
        </div>   
        )
      }
      {variant === "experience" &&  (
        <p className="mt-16 text-sm font-bold text-gray leading-none">
          {description}
        </p>
      )}     
    </div>
  );
}
export default AboutmeCard;
