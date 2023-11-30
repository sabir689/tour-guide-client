import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TDetails = () => {
  const { id } = useParams();
  const [reviewDetails, setReviewDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch('https://tourist-guide-server-tau.vercel.app/reviews');
        const data = await response.json();
        const details = data.find((review) => review._id.toString() === id);
        setReviewDetails(details);
      } catch (error) {
        console.error('Error fetching review details:', error);
      }
    };

    fetchDetails();
  }, [id]);

  return (
    <div className="max-w-2xl mx-auto p-4 ">
      <div className='mt-20'>
        <h2 className="text-3xl font-bold mb-4">Details for Tourist with ID: {id}</h2>
        {reviewDetails ? (
          <>
            <h3 className="text-2xl font-bold mb-2">{reviewDetails.name}</h3>
            <div className="flex space-x-4 mb-4">
              <img
                src={reviewDetails.images1}
                alt={`Review ${id} Image 1`}
                className="w-1/2 h-auto object-cover"
              />
              <img
                src={reviewDetails.images2}
                alt={`Review ${id} Image 2`}
                className="w-1/2 h-auto object-cover"
              />
            </div>
            <p className="text-gray-700 mb-4">{reviewDetails.description}</p>
            <p className="text-lg font-semibold mb-2">Rating: {reviewDetails.rating}</p>

          </>
        ) : (
          <p className="text-gray-700">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default TDetails;
