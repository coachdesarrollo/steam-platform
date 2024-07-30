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
    <article className="grid grid-cols-1 gap-x-0 gap-y-16 border-y-4 border-y-zinc-800 px-12 py-16 text-center lg:grid-cols-2 lg:gap-x-10 lg:text-left">
      <section
        className={`order-last animate-slide text-center [animation-range:cover_cover_500px] [animation-timeline:view()] lg:text-right ${
          reverse ? `-translate-x-full lg:order-first` : `translate-x-full`
        }`}
      >
        <img alt={title} className="inline-block w-10/12 shadow-md md:w-full" src={thumbnail} />
      </section>
      <section
        className={`flex animate-slide flex-col justify-center text-white [animation-range:cover_cover_500px] [animation-timeline:view()] ${
          reverse ? `translate-x-full lg:order-first` : `-translate-x-full`
        }`}
      >
        <h2 className="mb-3 text-3xl font-extrabold lg:text-5xl/snug 2xl:text-6xl">{title}</h2>
        <p className="text-lg/5 lg:text-2xl 2xl:text-3xl">{description}</p>
      </section>
    </article>
  );
}
