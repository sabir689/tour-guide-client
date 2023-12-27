import { useLoaderData } from "react-router-dom";

const TGuideTours = () => {
  const tBookings = useLoaderData();

  const groupedBookings = tBookings.reduce((acc, booking) => {
    const touristName = booking.touristName;

    if (!acc[touristName]) {
      acc[touristName] = [];
    }

    acc[touristName].push(booking);

    return acc;
  }, {});

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Hi! Total Tourists: {Object.keys(groupedBookings).length}</h1>
      {Object.keys(groupedBookings).map((touristName) => (
        <div key={touristName} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{touristName}</h2>
          <div className="flex flex-wrap -mx-4">
            {groupedBookings[touristName].map((booking) => (
              <div key={booking._id.$oid} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-2">{booking.tourName}</h3>
                  <p className="text-sm mb-2">Date: {new Date(booking.tourDate).toLocaleDateString()}</p>
                  <p className="text-sm">Price: ${booking.tourPrice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TGuideTours;
