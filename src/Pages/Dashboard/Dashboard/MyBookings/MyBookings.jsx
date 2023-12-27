
import { useState } from 'react';
import { Link, useLoaderData } from "react-router-dom";
import MyBookingsCard from "./MyBookingsCard";



const MyBookings = () => {
  const loadedBookings = useLoaderData();
  const [bookings, setBookings] = useState(loadedBookings);
  const totalPrice = bookings.reduce((total, item) => total + parseFloat(item.tourPrice), 0);
  // const totalPrice = bookings.reduce((total, item) => total + (item.tourPrice), 0);

  return (
    <div className='m-20'>


      <div className='flex items-center justify-between'>
        <h1 className='text-4xl text-center text-bold my-20 text-green-300'>My Bookings: {bookings.length}</h1>
        <h2 className='text-4xl text-center text-bold my-20 text-green-300'>Total Price: ${totalPrice}</h2>
        {bookings.length ?
          <Link to="/dashboard/payment">
            <button className="btn text-gray-800  bg-green-500">Payment</button>
          </Link> :
          <button disabled className="btn text-gray-800 bg-green-500">Payment</button>
        }
      </div>

      <div className='grid md:grid-cols-2 gap-4'>

        {bookings.map(booking => (
          <MyBookingsCard
            key={booking._id}
            booking={booking}
            bookings={bookings}
            setBookings={setBookings}
          />
        ))}

      </div>

    </div>
  );
};

export default MyBookings;