interface DotLabelProps {
  variant?: "red" | "green" | "purpleLine" | "redLine";
  className?: string;
}

const variantStyles = {
  red: "bg-accent",
  green: "bg-green",
  purpleLine: "bg-black text-white",
  redLine: "bg-accent border-2 border-white",
};

const DotLabel = ({
  variant = "red",
  className = "",
}: DotLabelProps) => {
  return (
    <span
      className={`inline-block rounded-full size-12 ${variantStyles[variant]} ${className}`}
    />
  );
};

export default DotLabel;
