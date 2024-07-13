import { type HomeAdvertisementProps } from "./propTypes";

const HomeAdvertisement: React.FC<HomeAdvertisementProps> = ({
	title,
	description,
	thumbnail,
	reverse = false
}) => {
	console.log(reverse);
	// TODO
	// si reverse es true -> imagen a la derecha, texto a la izquierda / por defecto es false
	return (
		<article
			className="grid grid-cols-1 text-center px-12 py-16 lg:grid-cols-2 lg:text-left border-y-[.35rem] gap-x-0 lg:gap-x-10 gap-y-16 border-y-zinc-800">
			<section
				className={`text-center lg:text-right order-last lg:order-${reverse ? "la" : "fir"}st`}>
				<img
					alt={title}
					src={thumbnail}
					className="inline-block w-10/12 md:w-full shadow-md" />
			</section>
			<section
				className="flex flex-col justify-center text-white">
				<h2 className="text-3xl lg:text-5xl/snug 2xl:text-6xl font-bold mb-3">{title}</h2>
				<p className="text-lg/5 lg:text-2xl 2xl:text-3xl">{description}</p>
			</section>
		</article>
	);
};

export default HomeAdvertisement;
