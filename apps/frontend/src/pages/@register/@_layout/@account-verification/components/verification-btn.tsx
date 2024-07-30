type VerificationBtnProps = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "className" | "onClick" | "disabled" | "children"
>;

export function VerificationBtn({
  type = "button",
  onClick,
  className,
  children,
  disabled,
}: VerificationBtnProps) {
  const sharedClassName =
    "inline-block shadow border-2 rounded-md cursor-pointer text-xl font-semibold px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg";
  const buttonClassName = className ? `${sharedClassName} ${className}` : sharedClassName;

  return (
    <button className={buttonClassName} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
