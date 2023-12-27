

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TGuides from '../Tour/TGuides';
import BookingForm from './BookPackages/BookPackages';

const TPackagesDet = () => {
  const { id } = useParams();
  const [tourDetails, setTourDetails] = useState(null);

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const response = await fetch('https://tourist-guide-server-tau.vercel.app/packages');
        const data = await response.json();
        const selectedTour = data.find((tour) => tour.id.toString() === id);
        setTourDetails(selectedTour);
      } catch (error) {
        console.error('Error fetching tour details:', error);
      }
    };

    fetchTourDetails();
  }, [id]);

  if (!tourDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 rounded-box">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} className="carousel-item">
              <img
                className="w-full h-full object-cover rounded"
                src={tourDetails[`photo${index + 1}`]}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-center">
          <img src={tourDetails.photo1} className="max-w-4xl rounded-lg shadow-2xl  lg:mb-0 lg:mr-4" alt="" />

          <div className="text-center lg:text-left">
            <h1 className="text-2xl text-green-300 border-2 rounded-box p-4 hover:bg-green-200 font-bold mb-4">{tourDetails.tripTitle}</h1>
            <p className=" text-green-300">Price: ${tourDetails.price}</p>
            <p className="py-6">{tourDetails.description}</p>

            <div className="mb-4">
              <h2 className="text-2xl text-green-300  font-bold mb-2 ">Activities</h2>
              <ul className=" text-center lg:text-left">
                {tourDetails.activities && Object.values(tourDetails.activities).map((activity, index) => (
                  <li key={index} className="mb-2">{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='border-2'>
        <TGuides />
      </div>


      <BookingForm tourName={tourDetails.tripTitle} tourPrice={tourDetails.price} />

    </div>
  );
};

export default TPackagesDet;
