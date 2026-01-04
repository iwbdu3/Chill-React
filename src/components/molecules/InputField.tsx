import type { ReactNode } from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder: string;
  icon?: ReactNode;
}

export default function InputField({
  label,
  type = "text",
  placeholder,
  icon,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs sm:text-sm text-gray-200">{label}</label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-full bg-white/10 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-gray-400 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-red-500"
        />
        {icon && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
}
