interface BadgeProps {
  children: React.ReactNode;
  variant: "gradient" | "white" | "purple" | "purpleLine";
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onFocus?: () => void;
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
  onClick,
  onMouseEnter,
  onFocus,
}: BadgeProps) => {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      className={`inline-flex items-center justify-center text-black cursor-pointer ${variantStyles[variant]} ${className}`}
    >
        {children}
    </button>
  );
};

export default Button;
