import { HomeAboutProps } from "./propTypes";

const HomeAbout: React.FC<HomeAboutProps> = ({ title, description, thumbnail }) => {
	// return <section {...props}>{children}</section>;
	return (
		<article className="grid grid-cols-1 text-center px-12 lg:px-18 xl:px-18 py-16 lg:grid-cols-2 lg:text-left border-y-4 gap-x-0 lg:gap-x-10 gap-y-16 border-y-zinc-800">
			<section className="flex flex-col justify-center text-white">
				<h2 className="text-3xl lg:text-5xl 2xl:text-6xl font-bold mb-3">{title}</h2>
				<p className="text-lg/5 lg:text-2xl 2xl:text-3xl">{description}</p>
			</section>
			<section className="text-center lg:text-right">
				<img className="inline-block w-10/12 md:w-full shadow-md" src={thumbnail} alt={title} />
			</section>
		</article>
	);
};

/*
const Title = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
const Content = ({ children, ...props }) => <p {...props}>{children}</p>;
const Thumbnail = ({ children, ...props }) => <img {...props}>{children}</img>;

HomeAbout.Title = Title;
HomeAbout.Content = Title;
HomeAbout.Thumbnail = Thumbnail;
*/

export default HomeAbout;
