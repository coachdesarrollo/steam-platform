interface AdvertisementProps {
  title: string;
  description: string;
  thumbnail: string;
  reverse: boolean;
}

export function Advertisement({
  title,
  description,
  thumbnail,
  reverse = false,
}: AdvertisementProps) {
  return (
    <article className="grid grid-cols-1 text-center px-12 py-16 lg:grid-cols-2 lg:text-left border-y-4 gap-x-0 lg:gap-x-10 gap-y-16 border-y-zinc-800">
      <section
        className={`text-center lg:text-right order-last animate-slide [animation-timeline:view()] [animation-range:cover_cover_500px] ${
          reverse ? `lg:order-first -translate-x-full` : `translate-x-full`
        }`}
      >
        <img
          alt={title}
          src={thumbnail}
          className="inline-block w-10/12 md:w-full shadow-md"
        />
      </section>
      <section
        className={`flex flex-col justify-center text-white animate-slide [animation-timeline:view()] [animation-range:cover_cover_500px] ${
          reverse ? `lg:order-first translate-x-full` : `-translate-x-full`
        }`}
      >
        <h2 className="text-3xl lg:text-5xl/snug 2xl:text-6xl font-extrabold mb-3">
          {title}
        </h2>
        <p className="text-lg/5 lg:text-2xl 2xl:text-3xl">{description}</p>
      </section>
    </article>
  );
}
