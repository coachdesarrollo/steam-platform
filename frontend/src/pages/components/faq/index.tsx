import { faq } from "../../data";
import { Question } from "./question";

export function Faq() {
  return (
    <section className="px-16 py-24 grid gap-10 max-sm:px-9">
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
}
