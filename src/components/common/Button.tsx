interface BadgeProps {
  children: React.ReactNode;
  variant: "gradient" | "white" | "purple" | "purpleLine";
  className?: string;
  onClick?: () => void;
}

const variantStyles = {
  gradient: "bg-gradient border rounded-full",
  white: "bg-white rounded-full",
  purple: "bg-primary rounded-md",
  purpleLine:"rounded-full text-primary border border-primary"
};

const Button = ({
  children,
  variant = "white",
  className = "",
  onClick
}: BadgeProps) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center text-black cursor-pointer ${variantStyles[variant]} ${className}`}
    >
        {children}
    </button>
  );
};

export default Button;
