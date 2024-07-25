import { FieldState, Updater } from "@tanstack/react-form";
import { InputHTMLAttributes } from "react";

interface BasicInputProps extends InputHTMLAttributes<HTMLInputElement> {
  state: FieldState<string>;
  handleChange: (updater: Updater<string>) => void;
  label: string;
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
  return (
    <label className="grid gap-2" htmlFor={name}>
      <span className="text-white">
        {label} {isRequired && "*"}
      </span>
      <input
        className={`rounded-md bg-[#333333] px-4 py-3 text-white outline-none ${className}`}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={(e) => handleChange(e.currentTarget.value)}
      />
      {children}
      {state.meta.errors.length > 0 && <p className="text-sm text-red-500">{state.meta.errors}</p>}
    </label>
  );
}
