import useAuth from "../../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();

    const displayName = user?.displayName || 'User';
    const photoURL = user?.photoURL || ''; // You might want to set a default image URL if photoURL is not available

    return (
        <div>
            
               <div className="flex justify-center"> {photoURL && <img src={photoURL} alt="User" className="ml-2 h-80 rounded-full" />}</div>
               <div className="text-center text-6xl text-green-400">
               <span>Hi, Welcome {displayName}</span>
               </div>

            
        </div>
    );
};

export default UserHome;
