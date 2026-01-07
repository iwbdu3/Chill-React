import React from "react";
import clsx from "clsx";

interface BadgeProps {
  text: string;
  variant?: "primary" | "danger";
}

const Badge: React.FC<BadgeProps> = ({
  text,
  variant = "primary",
}) => {
  return (
    <span
      className={clsx(
        "absolute left-2 top-2 z-10 rounded-md px-2 py-1 text-xs font-semibold",
        {
          "bg-blue-600 text-white": variant === "primary",
          "bg-red-600 text-white": variant === "danger",
        }
      )}
    >
      {text}
    </span>
  );
};

export default Badge;
