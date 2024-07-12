import { FC } from "react";
import "./question.css";
import PlusIcon from "../PlusIcon/PlusIcon";

export type Question = {
  question: string;
  answer: string;
};

const Question: FC<Question> = ({ answer, question }) => {
  return (
    <details className="p-4 bg-[#2D2D2D] text-[#EBEBEB] transition-all duration-300 rounded-md">
      <summary className="flex justify-between items-center">
        <h2 className="text-lg font-bold cursor-pointer">{question}</h2>
        <span>{<PlusIcon />}</span>
      </summary>
      <div className="content">{answer}</div>
    </details>
  );
};

export default Question;
