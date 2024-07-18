import { deepFreeze } from "../../utils/objectManipulation";

export enum ButtonTheme {
  Light,
  Dark,
  Gold,
}
export enum ButtonStyle {
  Standard,
  Outline,
}
export enum ButtonSize {
  Small,
  Medium,
  Large,
}

interface ButtonModel {
  readonly COLOR: string;
  readonly BACKGROUND: string;
  readonly BORDER: string;
}
export interface ButtonFeatures extends ButtonModel {
  readonly HOVER: ButtonModel;
}

type ButtonRange = Readonly<{
  [theme in ButtonTheme]: Readonly<{
    [style in ButtonStyle]: ButtonFeatures;
  }>;
}>;

export const THEMES: ButtonRange = deepFreeze({
  [ButtonTheme.Light]: {
    [ButtonStyle.Standard]: {
      COLOR: "text-black",
      BACKGROUND: "bg-white",
      BORDER: "border-white",
      HOVER: {
        COLOR: "hover:text-white",
        BACKGROUND: "hover:bg-transparent",
        BORDER: "hover:border-white",
      },
    },
    [ButtonStyle.Outline]: {
      COLOR: "text-white",
      BACKGROUND: "bg-transparent",
      BORDER: "border-white",
      HOVER: {
        COLOR: "hover:text-black",
        BACKGROUND: "hover:bg-white",
        BORDER: "hover:border-white",
      },
    },
  },
  [ButtonTheme.Dark]: {
    [ButtonStyle.Standard]: {
      COLOR: "text-white",
      BACKGROUND: "bg-black",
      BORDER: "border-black",
      HOVER: {
        COLOR: "hover:text-black",
        BACKGROUND: "hover:bg-white",
        BORDER: "hover:border-white",
      },
    },
    [ButtonStyle.Outline]: {
      COLOR: "text-black",
      BACKGROUND: "bg-transparent",
      BORDER: "border-black",
      HOVER: {
        COLOR: "hover:text-white",
        BACKGROUND: "hover:bg-black",
        BORDER: "hover:border-black",
      },
    },
  },
  [ButtonTheme.Gold]: {
    [ButtonStyle.Standard]: {
      COLOR: "text-black",
      BACKGROUND: "bg-yellow-400",
      BORDER: "border-yellow-400",
      HOVER: {
        COLOR: "hover:text-black",
        BACKGROUND: "hover:bg-yellow-300",
        BORDER: "hover:border-yellow-300",
      },
    },
    [ButtonStyle.Outline]: {
      COLOR: "text-yellow-400",
      BACKGROUND: "bg-transparent",
      BORDER: "border-yellow-400",
      HOVER: {
        COLOR: "hover:text-black",
        BACKGROUND: "hover:bg-yellow-300",
        BORDER: "hover:border-yellow-300",
      },
    },
  },
});
