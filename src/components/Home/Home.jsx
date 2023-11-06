import Community from "./Community";
import HomeBanner from "./HomeBanner";
import SuccessStories from "./SuccessStories";
import TabBrowser from "./TabBrowser";
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    DigiM | Home
                </title>
            </Helmet>
            <HomeBanner></HomeBanner>
            <TabBrowser></TabBrowser>
            <SuccessStories></SuccessStories>
            <Community></Community>
        </div>
    );
};

export default Home;