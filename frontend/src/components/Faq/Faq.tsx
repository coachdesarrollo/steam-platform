import { FC } from "react";
import Question from "./Question";
import { faq } from "@/services/data";

const Faq: FC = () => {
  return (
    <section className="px-16 py-24 grid gap-10">
      <h2 className="font-bold text-white text-5xl text-center">
        Preguntas Frecuentes
      </h2>
      <section className="grid gap-2">
        {faq.map(({ question, answer, id }) => (
          <Question answer={answer} question={question} key={id} />
        ))}
      </section>
    </section>
  );
};

export default Faq;
