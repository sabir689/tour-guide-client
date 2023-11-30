/* eslint-disable react-hooks/exhaustive-deps */
import  { useState, useEffect } from 'react';

const MyWishList = () => {
  const [wishes, setWishes] = useState([]);
  const [ setLoading] = useState(true); 

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const response = await fetch('https://tourist-guide-server-tau.vercel.app/wishes'); 
        console.log(response);
        const data = await response.json();
        setWishes(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching wishlist data:', error);
        setLoading(false);
      }
    };

    fetchWishes();
  }, []);

  const handleDelete = (id) => {
    console.log(`Deleting wishlist item with id: ${id}`);
    // Add logic to delete the wishlist item
  };

  const handleVisitDetails = (id) => {
    console.log(`Visiting details for wishlist item with id: ${id}`);
    // Add logic to navigate to the package details page
  };

  return (
    <div >
      <h1 className="text-3xl font-semibold mb-6">My Wishlist: {wishes.length}</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3">Tour Type</th>
            <th className="border p-3">Trip Title</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {wishes.map((wish) => (
            <tr key={wish._id} className="border-b">
              <td className="border p-3">{wish.wishlist?.tourType}</td>
              <td className="border p-3">{wish.wishlist?.tripTitle}</td>
              <td className="border p-3 justify-between flex">
                <button className='btn' onClick={() => handleDelete(wish._id)}>Delete</button>
                <button className='btn' onClick={() => handleVisitDetails(wish._id)}>Visit Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyWishList;
