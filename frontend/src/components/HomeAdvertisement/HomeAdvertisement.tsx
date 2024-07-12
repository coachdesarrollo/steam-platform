import { type HomeAdvertisementProps } from "./propTypes";
import styles from "./style.module.css";

const HomeAdvertisement: React.FC<HomeAdvertisementProps> = ({
  title,
  description,
  thumbnail,
  reverse = false,
}) => {
  console.log(reverse);
  // TODO
  // si reverse es true -> imagen a la derecha, texto a la izquierda / por defecto es false
  return (
    <article
      className={`flex flex-wrap-reverse lg:grid place-content-center text-center px-12 lg:px-18 xl:px-18 py-16 lg:grid-cols-2 lg:text-left border-y-4 gap-x-0 lg:gap-x-10 gap-y-16 border-y-zinc-800 `}
    >
      <section className="text-center lg:text-right">
        <img
          className={`inline-block w-10/12 md:w-full shadow-md ${styles.image}`}
          src={thumbnail}
          alt={title}
        />
      </section>
      <section
        className={`flex flex-col justify-center text-white ${styles.text}`}
      >
        <h2
          className={`text-3xl lg:text-5xl/snug 2xl:text-6xl font-bold mb-3 text-center `}
        >
          {title}
        </h2>
        <p className="text-lg/5 lg:text-2xl 2xl:text-3xl">{description}</p>
      </section>
    </article>
  );
};

export default HomeAdvertisement;
