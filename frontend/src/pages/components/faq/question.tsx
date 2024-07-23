import { PlusIcon } from "@/common/components/icons";

interface QuestionProps {
  answer: string;
  question: string;
}

export function Question({ answer, question }: QuestionProps) {
  return (
    <details className="text-[#EBEBEB] group">
      <summary className="cursor-pointer flex justify-between items-center bg-[#2D2D2D] p-4 hover:bg-[#424141] rounded-sm transition duration-500">
        <h2 className="font-semibold cursor-pointer group-open:animate-small-text animate-big-text">
          {question}
        </h2>
        <span className="group-open:rotate-45 transition duration-300">
          <PlusIcon />
        </span>
      </summary>
      <div className="bg-[#3f3f3f] p-4 text-[clamp(1rem,3vw,1.2rem)] leading-10 text-pretty text-xl text-white/80">
        {answer}
      </div>
    </details>
  );
}
