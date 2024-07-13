import { FC } from "react";
import { type HomeProps } from "./propTypes";

import { HomeHeader } from "../../components/HomeHeader";
import { HomeAdvertisement } from "../../components/HomeAdvertisement";
import { advertisements } from "../../services/data";
import { Footer } from "../../components/Footer";
import Faq from "../../components/Faq/Faq"; 

const Home: FC<HomeProps> = ({ isDark = false }) => {
    console.log(`Theme: ${isDark ? "dark" : "light"}`);

    return (
        <>
            <HomeHeader />
            {advertisements.map(
                advertisement => (
                    <HomeAdvertisement
                        key={advertisement.id}
                        title={advertisement.title}
                        description={advertisement.description}
                        thumbnail={advertisement.thumbnail}
                        reverse={advertisement.reverse}
                    />
                )
            )}
            <Faq />
            <Footer />
        </>
    );
};

export default Home;
