import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TGuidesCard = () => {
  const { id } = useParams();
  const [guideDetails, setGuideDetails] = useState(null);

  useEffect(() => {
    const fetchGuideDetails = async () => {
      try {
        const response = await fetch(`https://tourist-guide-server-tau.vercel.app/guides/${id}`);
        const data = await response.json();
        setGuideDetails(data);
      } catch (error) {
        console.error('Error fetching guide details:', error);
      }
    };

    fetchGuideDetails();
  }, [id]);

  if (!guideDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-32">
      <div className="flex flex-col items-center">
        <img
          src={guideDetails.image}
          alt={guideDetails.name}
          className="w-32 h-32 object-cover object-center rounded-full mb-4"
        />
        <h1 className="text-2xl font-semibold mb-2">{guideDetails.name}</h1>
        <p className="text-gray-500 mb-4">Location: {guideDetails.location}</p>
      </div>

      <div className="bg-green-300 text-gray-800 p-6 rounded-md mt-4">
        <h2 className="text-lg font-semibold mb-2">Introduction</h2>
        <p className="mb-2">
          <strong>Languages:</strong> {guideDetails.languages}
        </p>
        <p className="mb-2">
          <strong>Description:</strong> {guideDetails.description}
        </p>
        <p className="mb-2">
          <strong>Tour Type:</strong> {guideDetails.tourType}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {guideDetails.email}
        </p>
      </div>
    </div>
  );
};

export default TGuidesCard;

