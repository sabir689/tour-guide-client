import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TGuides = () => {
  const [guides, seTGuides] = useState([]);

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const response = await fetch('https://tourist-guide-server-tau.vercel.app/guides');
        const data = await response.json();
        seTGuides(data);
      } catch (error) {
        console.error('Error fetching guides:', error);
      }
    };

    fetchGuides();
  }, []);

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-semibold mb-6">Tour Guides</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((guide) => (
          <div key={guide.id} className="bg-white rounded-md overflow-hidden shadow-md">
            <img
              src={guide.image}
              alt={guide.name}
              className="w-full h-40 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{guide.name}</h2>
              <p className="text-gray-600 mb-2">{guide.location}</p>
              <p className="text-sm text-gray-700 mb-2">
                Languages: {guide.languages.join(', ')}
              </p>
              <p className="text-sm text-gray-700 mb-2">Rating: {guide.rating}</p>
              <p className="text-sm text-gray-700 mb-4">{guide.description}</p>
              <p className="text-sm text-gray-700 mb-4">{guide.tourType}</p>
              <Link to={`/guides/${guide.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TGuides;
