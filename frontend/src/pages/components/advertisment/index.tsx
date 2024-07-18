import { advertisements } from "../../data";
import { Advertisement } from "./advertisment";

export function Advertisements() {
  return (
    <>
      {advertisements.map((advertisement) => (
        <Advertisement
          key={advertisement.id}
          title={advertisement.title}
          description={advertisement.description}
          thumbnail={advertisement.thumbnail}
          reverse={advertisement.reverse}
        />
      ))}
    </>
  );
}
