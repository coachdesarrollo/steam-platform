import { FC, createElement } from "react";
import { type ButtonProps } from "./propTypes";
import { getButtonAppearance } from "../../utils/classFormater";
import {
  THEMES,
  ButtonTheme,
  ButtonStyle,
  ButtonSize,
} from "../../config/themes/button";

const Button: FC<ButtonProps> = ({
  theme = ButtonTheme.Light,
  variant = ButtonStyle.Standard,
  size = ButtonSize.Medium,
  children,
  onClick,
  isLink = false,
  className,
}) => {
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
  console.log(buttonClassNames);
  return createElement(element.type, { ...props }, children);
};

export default Button;
