import { FC, Fragment } from "react";
import { type HomeProps } from "./propTypes";
import {
    HomeHeader,
    HomeAbout
} from "../../components";


const Home: FC<HomeProps> = ({ isDark = false }) => {
    console.log(`Theme: ${isDark ? "dark" : "light"}`);

    return (
        <Fragment>
            <HomeHeader />
            <HomeAbout
                title="Disfruta en TV"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus ipsam maxime atque exercitationem natus ducimus minima ipsa doloremque quas! Hic porro voluptate assumenda obcaecati ad in magnam maiores dolor."
                thumbnail="https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg"
            />
        </Fragment>
    );
};

export default Home;
