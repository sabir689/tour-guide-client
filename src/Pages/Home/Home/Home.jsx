




import TGuide from "../../TGuide/Tour/TGuide";
import Banner from "../Banner/Banner";
import TourTypes from "../TourTypes/TourTypes";
import TouristReview from "../TouristReview/TouristReview";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TGuide></TGuide>
            <TourTypes></TourTypes>
            <TouristReview></TouristReview>
            
        </div>
    );
};

export default Home;