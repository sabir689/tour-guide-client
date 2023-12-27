




import TGuide from "../../TGuide/Tour/TGuide";
import Banner from "../Banner/Banner";
import TourTypes from "../TourTypes/TourTypes";
import TouristReview from "../TouristReview/TouristReview";
import UniqueFeature1 from "../../../UniqueFeature/UniqueFeature1";
import UniqueFeature2 from "../../../UniqueFeature/UniqueFeature2";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <UniqueFeature1></UniqueFeature1>
            <TGuide></TGuide>
            <TourTypes></TourTypes>
            <TouristReview></TouristReview>
            <UniqueFeature2></UniqueFeature2>


        </div>
    );
};

export default Home;