import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";



const useTGuide = () => {
    const { user } = useAuth();
    console.log(user);
    console.log(user.email);
    const axiosPublic = useAxiosPublic();
    const { data: isTGuide, isPending: isTGuideLoading } = useQuery({
        queryKey: [user?.email, 'isTGuide'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/TGuide/${user.email}`);
            console.log(res.data);
            return res.data?.TGuide;
        }
    })
    return [isTGuide, isTGuideLoading]
};

export default useTGuide;