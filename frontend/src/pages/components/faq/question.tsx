import { PlusIcon } from "@/common/components/icons";

interface QuestionProps {
  answer: string;
  question: string;
}

export function Question({ answer, question }: QuestionProps) {
  return (
    <details className="text-[#EBEBEB] mx-0">
      <summary className="cursor-pointer flex justify-between items-center bg-[#2D2D2D] p-4 hover:bg-[#424141] rounded-sm transition-colors">
        <h2 className="font-semibold cursor-pointer text-[clamp(1rem,4vw,1.5rem)] max-sm:text-[clamp(1rem,3vw,1.3rem)]">
          {question}
        </h2>
        <span>
          <PlusIcon />
        </span>
      </summary>
      <div className="bg-[#3f3f3f] p-4 text-[clamp(1rem,3vw,1.2rem)]">
        {answer}
      </div>
    </details>
  );
}
