import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TGuidesCard = () => {
  const { id } = useParams(); 
  const [guide, seTGuide] = useState(null);

  useEffect(() => {
    const fetchGuideDetails = async () => {
      try {
        const response = await fetch('https://tourist-guide-server-tau.vercel.app/guides'); 
        const data = await response.json();
        const selectedGuide = data.find((guide) => guide.id === parseInt(id, 10));
        seTGuide(selectedGuide);
      } catch (error) {
        console.error('Error fetching guide details:', error);
      }
    };

    fetchGuideDetails();
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hero-section bg-gray-100 py-10">
      {guide ? (
        <Slider {...settings} className="max-w-screen-xl mx-auto">
          <div className="guide-details bg-white p-8 rounded-md shadow-md">
            <h1 className="text-3xl font-semibold mb-4">{guide.name}</h1>
            <p className="text-gray-600 italic mb-2">{guide.location}</p>
            <p className="font-bold mb-2">Languages: {guide.languages.join(', ')}</p>
            <p className="font-bold mb-2">Rating: {guide.rating}</p>
            <p className="mb-4">{guide.description}</p>
            <img className="w-full max-h-64 object-cover rounded-md" src={guide.image} alt={guide.name} />
          </div>
          
        </Slider>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TGuidesCard;
