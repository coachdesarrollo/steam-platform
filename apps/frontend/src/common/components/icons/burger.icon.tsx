export type BurgerIconProps = {
  fill?: string;
  className?: string;
};

export function BurgerIcon({ className, fill = "currentColor" }: BurgerIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill={fill}
      viewBox="0 0 17 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1h15M1 7h15M1 13h15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
