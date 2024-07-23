import { ButtonFeatures, ButtonSize } from "../config/themes/button";

export const getButtonAppearance = (
  button: ButtonFeatures,
  size: ButtonSize = ButtonSize.Medium,
): string => {
  const buttonSizeClass = {
    [ButtonSize.Small]: "text-base font-medium px-6 py-2",
    [ButtonSize.Medium]: "text-lg font-semibold px-7 py-4",
    [ButtonSize.Large]: "text-2xl font-bold px-16 py-3",
  };
  let buttonClasses = `inline-block border-2 rounded-md shadow ${buttonSizeClass[size]} transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg`; // `inline-block border-2 rounded-sm shadow text-lg font-semibold px-8 py-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg`

  buttonClasses = `${buttonClasses} ${button.BORDER} ${button.COLOR} ${button.BACKGROUND} ${button.HOVER.BORDER} ${button.HOVER.COLOR} ${button.HOVER.BACKGROUND}`;

  return buttonClasses;
};
