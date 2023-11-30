import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';





const TouristReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tourist-guide-server-tau.vercel.app/reviews'); // Update the path accordingly
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching tourist reviews:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="my-20">
      <SectionTitle subHeading="What Our Client Say" heading={'TouristReview'}></SectionTitle>

      <Swiper navigation={true}  modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <Link to={`tDetails/${review._id}`} className="block">
              <div className="flex flex-col items-center mx-24 my-16">
                <div className="text-6xl mt-5 mb-5">
                  <FaQuoteLeft />
                </div>
                <div className="image-slider">
                  {/* Display the two images using images1 and images2 */}
                  <img src={review.images1} alt={`Review ${review._id} Image 1`} />
                </div>
                <p className="py-8">{review.description}</p>
                <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TouristReview;
