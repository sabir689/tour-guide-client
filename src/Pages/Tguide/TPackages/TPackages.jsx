import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Packages = () => {
  
  const [tourData, setTourData] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tourist-guide-server-tau.vercel.app/packages');
        const data = await response.json();
        setTourData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tour data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleToggleWishlist = (tour) => {
    const requestBody = {
      tourType: tour.tourType,
      tripTitle: tour.tripTitle,
    };

    fetch('https://tourist-guide-server-tau.vercel.app/wishes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => response.json())
      .then(data => {
        // Update wishlist state based on the response
        setWishlist(prevWishlist => [...prevWishlist, tour.id]);
        console.log(data.message);
      })
      .catch(error => {
        console.error('Error updating wishlist:', error);
      });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Tour Packages</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tourData.map((tour) => (
            <div key={tour.id} className="bg-white rounded-md overflow-hidden shadow-md relative">
              <img src={tour.photo1} alt={`Tour ${tour.id}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{tour.tourType}</h2>
                <h3 className="text-lg mb-2">{tour.tripTitle}</h3>
                <p className="text-gray-700 mb-2">{tour.price}</p>
                <Link
                  to={`/tour/${tour.id}`}
                  className="bg-blue-500 text-white py-2 px-4 rounded-full focus:outline-none inline-block"
                >
                  View Details
                </Link>

                <button
                  onClick={() => handleToggleWishlist(tour)}
                  className={`absolute top-2 right-2 text-2xl ${wishlist.includes(tour.id) ? 'text-red-500' : 'text-gray-500'}`}
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Packages;


