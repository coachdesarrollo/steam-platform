import { HomeNavbar } from "../HomeNavbar";
import { HomeJumbotron } from "../HomeJumbotron";

const HomeHeader: React.FC = () => {
  return (
    <section
      className={`h-screen bg-banner-hero bg-no-repeat bg-cover bg-center bg-black/70 bg-blend-multiply border-b-4 border-y-zinc-800 relative [animation-range:exit] [animation-timeline:view()] animate-scale`}
    >
      <header className="h-full flex flex-col justify-between relative z-10">
        <HomeNavbar />
        <HomeJumbotron />
      </header>
    </section>
  );
};

export default HomeHeader;
