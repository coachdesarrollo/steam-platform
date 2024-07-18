import {
  ButtonSize,
  ButtonStyle,
  ButtonTheme,
  THEMES,
} from "@/common/config/themes/button";
import { getButtonAppearance } from "@/common/utils/classFormater";
import { createElement, ReactNode } from "react";

type ButtonProps = {
  theme?: ButtonTheme;
  variant?: ButtonStyle;
  size?: ButtonSize;
  children: ReactNode;
  isLink?: boolean;
  onClick?: () => void;
  className?: string;
};

export function Button({
  theme = ButtonTheme.Light,
  variant = ButtonStyle.Standard,
  size = ButtonSize.Medium,
  children,
  onClick,
  isLink = false,
  className,
}: ButtonProps) {
  const buttonFeatures = THEMES[theme][variant];
  const buttonClassNames = getButtonAppearance(buttonFeatures, size);
  const element = // const type = isLink ? "a" : "button";
    isLink
      ? { type: "a", attribute: "role" }
      : { type: "button", attribute: "type" };
  const props = {
    className: `${buttonClassNames} ${className}`,
    [element.attribute]: "button",
    onClick,
  };
  return createElement(element.type, { ...props }, children);
}
