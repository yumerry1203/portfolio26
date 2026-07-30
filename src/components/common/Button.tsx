interface BadgeProps {
  children: React.ReactNode;
  variant: "gradient" | "white" | "purple" ;
  className?: string;
}

const variantStyles = {
  gradient: "bg-gradient border rounded-full",
  white: "bg-white border rounded-full",
  purple: "bg-purple rounded-md",
};

const Button = ({
  children,
  variant = "white",
  className = "",
}: BadgeProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center px-20 py-12 text-black ${variantStyles[variant]} ${className}`}
    >
        {children}
    </button>
  );
};

export default Button;