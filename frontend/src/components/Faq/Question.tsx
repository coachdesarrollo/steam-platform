import { FC } from "react";
import "./question.css";
import { PlusIcon } from "../Icons/PlusIcon";

export type Question = {
  question: string;
  answer: string;
};

const Question: FC<Question> = ({ answer, question }) => {
  return (
    <details className="text-[#EBEBEB]">
      <summary className="flex justify-between items-center bg-[#2D2D2D] p-4 hover:bg-[#424141] rounded-sm transition-colors">
        <h2 className="font-semibold cursor-pointer text-[clamp(1rem,4vw,1.5rem)]">
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
};

export default Question;
