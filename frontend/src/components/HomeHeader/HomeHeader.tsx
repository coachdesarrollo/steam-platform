import { BannerHero } from "../BannerHero";
import { LandingNavbar } from "../LandingNavbar";

const HomeHeader: React.FC = () => {
	return (
		<section className="h-screen bg-banner-hero bg-no-repeat bg-cover bg-center bg-black/70 bg-blend-multiply border-b-4 border-y-zinc-800 relative">
			<div className="h-full flex flex-col justify-between relative z-10">
				<LandingNavbar />
				<BannerHero />
			</div>
		</section>
	);
};

export default HomeHeader;
