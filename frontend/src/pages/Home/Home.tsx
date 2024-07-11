import { FC, Fragment } from "react";
import { type HomeProps } from "./propTypes";
import { HomeHeader } from "../../components/HomeHeader";

const Home: FC<HomeProps> = ({ isDark = false }) => {
    console.log(`Theme: ${isDark ? "dark" : "light"}`);

    return (
        <Fragment>
            <HomeHeader />
        </Fragment>
    );
};

export default Home;
