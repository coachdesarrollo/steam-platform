import { FieldState, Updater } from "@tanstack/react-form";
import { InputHTMLAttributes } from "react";

import { PopoverInputErrors } from "../popover";

interface BasicInputProps extends InputHTMLAttributes<HTMLInputElement> {
  state: FieldState<string>;
  handleChange: (updater: Updater<string>) => void;
  label?: string;
  isRequired?: boolean;
  children?: React.ReactNode;
}

export function BasicInput({
  handleChange,
  state,
  label,
  isRequired = false,
  name,
  type = "text",
  placeholder,
  className,
  children,
}: BasicInputProps) {
  const isError = state.meta.errors.length > 0;

  return (
    <div className="grid gap-2">
      {label && (
        <label
          className={`grid flex-1 gap-2 text-white ${isError && "text-red-600"}`}
          htmlFor={name}
        >
          {label} {isRequired && "*"}
        </label>
      )}
      <div
        className={`flex items-center justify-between rounded-md bg-[#333333] ${isError && "border-red-600"} border-2 border-solid border-transparent pr-2`}
      >
        <input
          className={`flex-1 rounded-md bg-inherit px-4 py-3 text-white outline-none ${className} ${isError && "text-red-600"} `}
          id={name}
          name={name}
          placeholder={placeholder}
          required={isRequired}
          type={type}
          onChange={(e) => handleChange(e.currentTarget.value)}
        />
        {children}

        {isError && <PopoverInputErrors errors={state.meta.errors.toString().split(", ")} />}
      </div>
    </div>
  );
}
