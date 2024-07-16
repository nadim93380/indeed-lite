import FeaturedJobs from "../Components/FeaturedJobs";
import HomeBanner from "../Components/HomeBanner";
import SuccessSection from "../Components/SuccessSection";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <FeaturedJobs></FeaturedJobs>
            <SuccessSection></SuccessSection>
        </div>
    );
};

export default Home;