import { InfoIcon, XIcon } from "../icons";

interface PopoverInputErrorsProps {
  errors: string[];
}

export function PopoverInputErrors({ errors }: PopoverInputErrorsProps) {
  return (
    <>
      <button
        className="text-red-500 hover:bg-red-500/30 group relative h-fit rounded-lg p-1 text-center text-sm font-medium transition duration-150 ease-in"
        type="button"
      >
        <InfoIcon />
        <div className="bg-red-950/90 text-red-400 invisible absolute bottom-auto left-full right-auto top-0 flex w-fit -translate-x-5 flex-col gap-2 rounded-md p-2 opacity-0 transition duration-300 group-hover:visible group-hover:translate-x-1 group-hover:opacity-100 max-md:bottom-auto max-md:left-auto max-md:right-0 max-md:top-full max-md:origin-top-right max-md:-translate-y-5 max-md:group-hover:translate-y-1">
          {errors.map((error) => (
            <div key={error} className="flex items-end gap-0.5">
              <XIcon />
              <p className="text-nowrap text-left text-xs">{error}</p>
            </div>
          ))}
        </div>
      </button>
    </>
  );
}
