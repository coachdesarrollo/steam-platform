import { FC, Fragment } from "react";
import { type HomeProps } from "./propTypes";
import { HomeHeader, HomeAbout } from "../../components";

const Home: FC<HomeProps> = ({ isDark = false }) => {
    console.log(`Theme: ${isDark ? "dark" : "light"}`);

    return (
        <Fragment>
            <HomeHeader />

            <HomeAbout
                title="Disfruta en TV"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit."
                thumbnail="https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg"
            />
            <HomeAbout
                title="Descarga tus series para verlas offline"
                description="Guarda tu contenido favorito y tendrás siempre algo para ver."
                thumbnail="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            />
            <HomeAbout
                title="Disfruta donde quieras"
                description="Películas y series ilimitadas en tu teléfono, tablet, laptop y TV."
                thumbnail="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            />
        </Fragment>
    );
};

export default Home;
