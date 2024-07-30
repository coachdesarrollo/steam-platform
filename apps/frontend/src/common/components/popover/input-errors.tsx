import { InfoIcon, XIcon } from "../icons";

interface PopoverInputErrorsProps {
  errors: string[];
}

export function PopoverInputErrors({ errors }: PopoverInputErrorsProps) {
  return (
    <>
      <button
        className="group relative h-fit rounded-lg p-1 text-center text-sm font-medium text-red-500 transition duration-150 ease-in hover:bg-red-500/30"
        type="button"
      >
        <InfoIcon />
        <div className="invisible absolute bottom-auto left-full right-auto top-0 flex w-fit -translate-x-5 flex-col gap-2 rounded-md bg-red-950/90 p-2 text-red-400 opacity-0 transition duration-300 group-hover:visible group-hover:translate-x-1 group-hover:opacity-100 max-md:bottom-auto max-md:left-auto max-md:right-0 max-md:top-full max-md:origin-top-right max-md:-translate-y-5 max-md:group-hover:translate-y-1">
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
