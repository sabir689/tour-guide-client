import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TGuides = () => {
  const [guides, setGuides] = useState([]);
  

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const response = await fetch('https://tourist-guide-server-tau.vercel.app/guides');
        const data = await response.json();
        setGuides(data);
      } catch (error) {
        console.error('Error fetching guides:', error);
      }
    };

    fetchGuides();
  }, []);

  return (
    <div className="container mx-auto overflow-x-auto">
      <h1 className="text-4xl font-semibold mb-6 text-center">Tour Guides</h1>
      <div className="block overflow-x-auto sm:overflow-x-hidden">
        <table className="min-w-full sm:table-fixed border border-gray-300">
          <thead>
            <tr className="bg-green-300">
              <th className="sm:w-1/6 border p-3">Image</th>
              <th className="sm:w-1/6 border p-3">Name</th>
              <th className="sm:w-1/6 border p-3">Location</th>
              <th className="sm:w-1/6 border p-3">Languages</th>
             
              <th className="sm:w-1/6 border p-3">Description</th>
              <th className="sm:w-1/6 border p-3">Tour Type</th>
              <th className="sm:w-1/6 border p-3">View Details</th>
            </tr>
          </thead>
          <tbody>
            {guides.map((guide) => (
              <tr key={guide.id} className="border-b">
                <td className="sm:w-1/6 p-3">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-16 h-16 object-cover object-center rounded-full max-w-full"
                  />
                </td>
                <td className="sm:w-1/6 border p-3">{guide.name}</td>
                <td className="sm:w-1/6 border p-3">{guide.location}</td>
                <td className="sm:w-1/6 border p-3">{guide.languages}</td>
                <td className="sm:w-1/6 border p-3">{guide.description}</td>
                <td className="sm:w-1/6 border p-3">{guide.tourType}</td>
                <td className="sm:w-1/6 border p-3">
                <Link to={`/guides/${guide._id}`}>
                
                    <button className="bg-green-500 text-white px-4 py-2 rounded-full">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TGuides;
