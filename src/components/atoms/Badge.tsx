import React from "react";
import clsx from "clsx";

interface BadgeProps {
  text: string;
  variant?: "primary" | "danger" | "premium";
}

const Badge: React.FC<BadgeProps> = ({
  text,
  variant = "primary",
}) => {
  return (
    <span
      className={clsx(
        "absolute left-2 top-2 z-10 rounded-full px-2 py-1 sm:px-3 sm:py-1.5 sm:text-sm text-[8px] font-semibold",
        {
          "bg-blue-600 text-white": variant === "primary",
          "bg-red-600 text-white": variant === "danger",
          "bg-yellow-600 text-white": variant === "premium",
        }
      )}
    >
      {text}
    </span>
  );
};

export default Badge;
