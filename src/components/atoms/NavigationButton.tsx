import React from "react";
import clsx from "clsx";

interface NavigationButtonProps {
  direction: "left" | "right";
  onClick?: () => void;
  className?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "hidden sm:block absolute top-1/2 -translate-y-1/2 z-10",
        "rounded-full bg-black/60 p-3 text-white",
        "hover:bg-black transition",
        direction === "left" && "left-0",
        direction === "right" && "right-0",
        className
      )}
    >
      {direction === "left" ? "←" : "→"}
    </button>
  );
};

export default NavigationButton;
