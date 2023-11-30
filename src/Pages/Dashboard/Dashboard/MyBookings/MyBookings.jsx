
import { useLoaderData } from "react-router-dom";

const MyBookings = () => {
  const myBookings = useLoaderData();

  const handlePay = (bookingId) => {
    console.log(`Pay button clicked for booking ID: ${bookingId}`);
    
  };

  const handleCancel = (bookingId) => {
    console.log(`Cancel button clicked for booking ID: ${bookingId}`);
    
  };

  const handleApply = (bookingId) => {
    console.log(`Apply button clicked for booking ID: ${bookingId}`);
   
  };

  return (
    <div className="p-32">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold mb-6">
          My Bookings: {myBookings.length}
        </h1>
      </div>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3">Package</th>
            <th className="border p-3">Tour Guide</th>
            <th className="border p-3">Tour Date</th>
            <th className="border p-3">Tour Price</th>
            <th className="border p-3">Status</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {myBookings.map((booking) => (
            <tr key={booking._id} className="border-b">
              <td className="border p-3">{booking.tourName}</td>
              <td className="border p-3">{booking.tourGuide}</td>
              <td className="border p-3">
                {new Date(booking.tourDate).toLocaleDateString()}
              </td>
              <td className="border p-3">${booking.tourPrice}</td>
              <td className="border p-3">{booking.status}</td>
              <td className="border p-3 ">
                {booking.status === "In Review" && (
                  <button onClick={() => handleCancel(booking._id)} className="btn mr-2">
                    Cancel
                  </button>
                )}
                {booking.status === "In Review" && (
                  <button onClick={() => handleApply(booking._id)} className="btn mr-2" disabled>
                    Apply
                  </button>
                )}
                {booking.status === "In Review" && (
                  <button
                    onClick={() => handlePay(booking._id)}
                    className="btn"
                    disabled
                  >
                    Pay
                  </button>
                )}
                {booking.status === "Accepted" && (
                  <button onClick={() => handlePay(booking._id)} className="btn">
                    Pay
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
