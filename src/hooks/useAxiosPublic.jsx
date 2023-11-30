import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://tourist-guide-server-tau.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;