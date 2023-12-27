
import Swal from "sweetalert2";

const MyBookingsCard = ({ booking, bookings, setBookings }) => {
    const { _id, tourName, tourGuide, tourDate, tourPrice } = booking;

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tourist-guide-server-tau.vercel.app/booking/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            );
                            const remaining = bookings.filter(cof => cof._id !== _id);
                            setBookings(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className="card card-side bg-green-300   text-gray-800 shadow-xl">
            

            <div className=" w-full pr-4 py-32">
                <div className="p-4 text-center">
                    <h2 className=" text-bold text-3xl text-center">Package: {tourName}</h2>
                    <p>Tour Guide: {tourGuide}</p>
                    <p>Tour Date: {tourDate}</p>
                    <p>Tour Price: {tourPrice}</p>
                    
                </div>
                
                    <div className="flex justify-center space-y-4">


                        <button className="btn bg-green-600" onClick={() => handleDelete(_id)}>
                            Delete</button>
                    </div>
                
            </div>
        </div>

    );
};

export default MyBookingsCard;
