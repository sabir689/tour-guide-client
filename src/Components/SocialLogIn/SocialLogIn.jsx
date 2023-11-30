import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogIn = () => {
    const { googleSignIn } = useAuth()
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email:result.user.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users',userInfo)
                .then(res =>{
                    console.log(res.data);
                    navigate('/')
                })
            })

    }
    return (
        <div className=" text-center">
            <button onClick={handleGoogleSignIn} className="btn px-32">
                <FaGoogle className=""></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogIn;