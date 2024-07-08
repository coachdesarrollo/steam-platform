import { BannerHero } from "../BannerHero";
import { LandingNavbar } from "../LandingNavbar";

const HomeHeader: React.FC = () => {
	return (
		<header className="relative h-screen bg-banner-hero bg-cover bg-center">
			<div className="absolute inset-0 bg-black/50"></div>
			<div className="relative z-10 flex flex-col justify-between h-full">
				<LandingNavbar />
				<BannerHero />
			</div>
		</header>
	);
};

export default HomeHeader;
