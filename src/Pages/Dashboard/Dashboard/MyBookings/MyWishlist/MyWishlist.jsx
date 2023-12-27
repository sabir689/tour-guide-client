/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const MyWishList = () => {
  const [wishes, setWishes] = useState([]);
  const [ setLoading] = useState(true);

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const response = await fetch('https://tourist-guide-server-tau.vercel.app/wish');
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

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tourist-guide-server-tau.vercel.app/wish/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your Wish has been deleted.', 'success');
              const remaining = wishes.filter((wis) => wis._id !== _id);
              setWishes(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">My Wishlist: {wishes.length}</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-green-300">
            <th className="border p-3">Tour Type</th>
            <th className="border p-3">Trip Title</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {wishes.map((wish) => (
            <tr key={wish._id} className="border-b">
              <td className="border p-3">{wish.wishlist?.tourType}</td>
              <td className="border p-3 text-center">{wish.wishlist?.tripTitle}</td>
              <td className="border p-3 justify-center flex">
                <button className="btn bg-green-500 text-gray-800" onClick={() => handleDelete(wish._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyWishList;
