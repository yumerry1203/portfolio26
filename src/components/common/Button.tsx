interface ButtonProps {
  children: React.ReactNode;
  variant?: "gradient" | "white" | "purple";
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
  "aria-haspopup"?: "dialog";
}

const variantStyles = {
  gradient: "bg-gradient border rounded-full",
  white: "bg-white rounded-full",
  purple: "bg-primary rounded-md",
};

const Button = ({
  children,
  variant = "white",
  className = "",
  onClick,
  "aria-label": ariaLabel,
  "aria-haspopup": ariaHasPopup,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-haspopup={ariaHasPopup}
      className={`inline-flex items-center justify-center text-black cursor-pointer ${variantStyles[variant]} ${className}`}
    >
        {children}
    </button>
  );
};

export default Button;
