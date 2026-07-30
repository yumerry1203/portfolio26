interface BadgeProps {
  variant: "red" | "green" | "purpleLine" | "redLine" ;
  className?: string;
}

const variantStyles = {
  red: "bg-accent",
  green: "bg-green",
  purpleLine: "bg-black text-white",
  redLine: "bg-black text-white",
};

const DotLabel = ({
  variant = "red",
  className = "",
}: BadgeProps) => {
  return (
    <span
      className={`line-block rounded-full w-12 h-12 ${variantStyles[variant]} ${className}`}
    >
    </span>
  );
};

export default DotLabel;