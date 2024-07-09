import { BannerHero } from "../BannerHero";
import { LandingNavbar } from "../LandingNavbar";

const HomeHeader: React.FC = () => {
	return (
		<section className="relative h-screen bg-banner-hero bg-cover bg-center">
			<div className="absolute inset-0 bg-black/50"></div>
			<header className="relative z-10 flex flex-col justify-between h-full">
				<LandingNavbar />
				<BannerHero />
			</header>
		</section>
	);
};

export default HomeHeader;
