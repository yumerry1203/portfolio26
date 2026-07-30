interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "black" | "gradient";
  className?: string;
}

const variantStyles = {
  default: "bg-white text-black",
  black: "bg-black text-white",
  gradient: "bg-gradient text-black",
};

const Badge = ({
  children,
  variant = "default",
  className = "",
}: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-22 py-7 text-xs ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;