import { advertisements } from "../../data";

import { Advertisement } from "./advertisment";

export function Advertisements() {
  return (
    <section>
      {advertisements.map((advertisement) => (
        <Advertisement
          key={advertisement.id}
          description={advertisement.description}
          reverse={advertisement.reverse}
          thumbnail={advertisement.thumbnail}
          title={advertisement.title}
        />
      ))}
    </section>
  );
}
