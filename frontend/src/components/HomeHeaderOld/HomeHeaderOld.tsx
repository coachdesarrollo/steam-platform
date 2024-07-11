import { BannerHeroOld } from "../BannerHeroOld";
import { LandingNavbar } from "../LandingNavbar";

const HomeHeaderOld: React.FC = () => {
	return (
		<section className="h-screen border-b-4 border-y-zinc-800 bg-center bg-no-repeat bg-banner-hero bg-black/70 bg-blend-multiply relative">
			<LandingNavbar />
			<BannerHeroOld />
		</section>
	);
};

export default HomeHeaderOld;
