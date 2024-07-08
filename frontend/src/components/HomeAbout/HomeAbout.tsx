import { HomeAboutProps } from "./propTypes";

const HomeAbout: React.FC<HomeAboutProps> = ({ title, description, thumbnail }) => {
	// return <section {...props}>{children}</section>;
	return (
		<article className="grid grid-cols-2">
			<section className="text-white  flex flex-col justify-center align-middle">
				<h2>{title}</h2>
				<p>{description}</p>
			</section>
			<section className="p-10">
				<img className="rounded-lg shadow-md" src={thumbnail} alt={title} />
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
