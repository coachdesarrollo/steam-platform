import { FC, Fragment } from "react";
import { type HomeProps } from "./propTypes";
import { HomeHeader } from "../../components/HomeHeader";
import { Footer } from "../../components/Footer";

const Home: FC<HomeProps> = ({ isDark = false }) => {
    console.log(`Theme: ${isDark ? "dark" : "light"}`);

    return (
        <Fragment>
            <HomeHeader />
            <Footer/>
        </Fragment>
    );
};

export default Home;
