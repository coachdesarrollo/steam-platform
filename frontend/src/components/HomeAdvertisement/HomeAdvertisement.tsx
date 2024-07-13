import { type HomeAdvertisementProps } from "./propTypes";

const HomeAdvertisement: React.FC<HomeAdvertisementProps> = ({
	title,
	description,
	thumbnail,
	reverse = false
}) => (
	<article
		className="grid grid-cols-1 text-center px-12 py-16 lg:grid-cols-2 lg:text-left border-y-4 gap-x-0 lg:gap-x-10 gap-y-16 border-y-zinc-800">
		<section className={`text-center lg:text-right order-last ${reverse ? "lg:order-first" : ""}`}>
			<img
				alt={title}
				src={thumbnail}
				className="inline-block w-10/12 md:w-full shadow-md"
			/>
		</section>
		<section
			className="flex flex-col justify-center text-white">
			<h2 className="text-3xl lg:text-5xl/snug 2xl:text-6xl font-extrabold mb-3">{title}</h2>
			<p className="text-lg/5 lg:text-2xl 2xl:text-3xl">{description}</p>
		</section>
	</article>
);

export default HomeAdvertisement;
