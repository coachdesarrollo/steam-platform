import { faq } from "../../data";

import { Question } from "./question";

export function Faq() {
  return (
    <section className="grid gap-10 px-16 py-24 max-sm:px-9">
      <h2 className="text-center text-5xl font-bold text-white">Preguntas Frecuentes</h2>
      <section className="grid gap-8">
        {faq.map(({ question, answer, id }) => (
          <Question key={id} answer={answer} question={question} />
        ))}
      </section>
    </section>
  );
}
