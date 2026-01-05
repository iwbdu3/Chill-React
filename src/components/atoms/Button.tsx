import React from "react";
import clsx from "clsx";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "dark"
  | "light";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  disabled,
  className,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black",

        // Size (Responsive)
        {
          // Small
          "px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm":
            size === "sm",

          // Medium (default)
          "px-3 py-1.5 text-xs sm:px-6 sm:py-3 sm:text-sm":
            size === "md",

          // Large
          "px-4 py-2 text-base sm:px-8 sm:py-4 sm:text-lg":
            size === "lg",
        },

        // Variant
        {
          "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500":
            variant === "primary" && !disabled,

          "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500":
            variant === "secondary" && !disabled,

          "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500":
            variant === "outline" && !disabled,

          "bg-transparent text-white/80 hover:bg-white/10 focus:ring-white/30":
            variant === "ghost" && !disabled,

          "bg-zinc-700 text-white hover:bg-zinc-600 focus:ring-zinc-500":
            variant === "dark" && !disabled,

          "bg-zinc-200 text-zinc-800 hover:bg-zinc-300 focus:ring-zinc-400":
            variant === "light" && !disabled,
        },

        // Disabled
        disabled &&
          "cursor-not-allowed bg-zinc-300 text-zinc-500 border-none hover:bg-zinc-300",

        className
      )}
      {...props}
    >
      {leftIcon && <span className="text-lg">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="text-lg">{rightIcon}</span>}
    </button>
  );
};

export default Button;
