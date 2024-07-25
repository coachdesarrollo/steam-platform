import { ButtonHTMLAttributes } from "react";

export enum ButtonVariant {
  Standard = "standard",
  Outline = "outline",
}

export enum ButtonColor {
  Gold = "gold",
  Light = "light",
}

export enum ButtonSize {
  Small = "sm",
  Medium = "md",
  Large = "lg",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor; // Agrega más colores según necesidad
  size?: ButtonSize;
}

const buttonStyles = {
  [ButtonVariant.Outline]: {
    [ButtonColor.Gold]:
      "text-yellow-400 border-yellow-400 hover:text-black hover:bg-yellow-300 hover:border-yellow-300",
    [ButtonColor.Light]:
      "text-white border-white hover:text-black hover:bg-white hover:border-white",
  },
  [ButtonVariant.Standard]: {
    [ButtonColor.Gold]: "text-black bg-yellow-400 border-yellow-400 hover:bg-yellow-300",
    [ButtonColor.Light]:
      "text-black bg-white border-white hover:text-white hover:bg-transparent hover:border-white",
  },
};

const buttonSize = {
  [ButtonSize.Small]: "text-base font-medium px-6 py-2",
  [ButtonSize.Medium]: "text-lg font-semibold px-10 py-4",
  [ButtonSize.Large]: "text-2xl font-bold px-16 py-3",
};

export function Button({
  children,
  type = "button",
  variant = ButtonVariant.Standard,
  color = ButtonColor.Gold,
  size = ButtonSize.Medium,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${buttonStyles[variant][color]} rounded-md border-2 border-solid font-semibold transition duration-300 ${buttonSize[size]} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
