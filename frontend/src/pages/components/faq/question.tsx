import { PlusIcon } from "@/common/components/icons";

interface QuestionProps {
  answer: string;
  question: string;
}

export function Question({ answer, question }: QuestionProps) {
  return (
    <details className="group text-[#EBEBEB]">
      <summary className="flex cursor-pointer items-center justify-between rounded-sm bg-[#2D2D2D] p-4 transition duration-500 hover:bg-[#424141]">
        <h2 className="animate-big-text cursor-pointer font-semibold group-open:animate-small-text">
          {question}
        </h2>
        <span className="transition duration-300 group-open:rotate-45">
          <PlusIcon />
        </span>
      </summary>
      <div className="text-pretty bg-[#3f3f3f] p-4 text-[clamp(1rem,3vw,1.2rem)] text-xl leading-10 text-white/80">
        {answer}
      </div>
    </details>
  );
}
