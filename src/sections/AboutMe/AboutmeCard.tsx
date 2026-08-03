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
  className?: string;
}

const variantStyles = {
  experience: {
    wrapper: "",
    date: "text-[#f15a42]",
    title: "text-white",
    description: "text-[#999]",
  },
  certifications: {
    wrapper: "rounded-2xl bg-[#4E4E4E]",
    date: "text-secondary",
    title: "text-white",
    description: "text-muted",
  },
  education: {
    wrapper: "rounded-2xl bg-[#4E4E4E]",
    date: "text-secondary",
    title: "text-white",
    description: "text-muted",
  },
};

export default function AboutmeCard({
  variant,
  date,
  title,
  description,
  className = "",
}: AboutmeCardProps) {
  const styles = variantStyles[variant];

  return (
    <article className={`relative ${styles.wrapper} ${className}`}>
      {variant === "experience" && (
        <DotLabel
          variant="redLine"
          className="w-16 h-16"
        />
      )}

      <p className={`text-lg font-bold leading-none ${styles.date}`}>
        {date}
      </p>

      <h4 className={`mt-22 text-base font-bold leading-none ${styles.title}`}>
        {title}
      </h4>

      {description && (
        <p className={`mt-16 text-xs font-bold text-gray leading-none ${styles.description}`}>
          {description}
        </p>
      )}
    </article>
  );
}
