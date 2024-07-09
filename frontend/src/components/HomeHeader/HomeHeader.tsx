import { BannerHero } from "../BannerHero";
import { LandingNavbar } from "../LandingNavbar";

const HomeHeader: React.FC = () => {
	return (
		<section className="h-screen border-b-4 border-y-zinc-800 bg-center bg-no-repeat bg-banner-hero bg-black/70 bg-blend-multiply relative">
			<LandingNavbar />
			<BannerHero />
		</section>
	);
};

export default HomeHeader;
