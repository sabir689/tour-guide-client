import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useBookings = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();

    const {refetch, data: booking = [] } = useQuery({
        queryKey: ['booking',user?.email],
        queryFn: async () => {

            const res = await axiosSecure.get(`/booking`)
            return res.data
        }
    })
    return [booking,refetch]
};

export default useBookings;



