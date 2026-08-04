interface DotLabelProps {
  variant:
    | "red"
    | "green"
    | "redLine"
    | "purpleLine"
    | "purpleLightLine"
  className?: string;
}

const variantStyles = {
  red: "bg-accent",
  green: "bg-green",
  redLine: "bg-accent border-2 border-white",
  purpleLine: "bg-primary border-2 border-white",
  purpleLightLine: "bg-secondary border-2 border-white",
};

const DotLabel = ({
  variant,
  className = "",
}: DotLabelProps) => {
  return (
    <span
      className={`inline-block rounded-full size-12 ${variantStyles[variant]} ${className}`}
    />
  );
};

export default DotLabel;
