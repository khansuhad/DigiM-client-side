import HomeBanner from "./HomeBanner";
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
        </div>
    );
};

export default Home;