import { FC } from "react";
import type { PlusIconProps } from "./propTypes";

const PlusIcon: FC<PlusIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3em"
      height="1.3em"
      viewBox="0 0 256 256"
      className={className}
    >
      <path
        fill="currentColor"
        d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8"
      />
    </svg>
  );
};

export default PlusIcon;