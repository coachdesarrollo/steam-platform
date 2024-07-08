import { ReactNode } from "react";
import { ButtonTheme, ButtonStyle, ButtonSize } from "../../config/themes/button";

export type ButtonProps = {
    theme?: ButtonTheme,
    variant?: ButtonStyle,
    size?: ButtonSize,
    children: ReactNode,
    isLink?: boolean,
    onClick?: () => void
};
