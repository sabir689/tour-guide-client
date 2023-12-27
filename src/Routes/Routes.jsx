import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import TDetails from "../Pages/Home/TouristReview/TDetails";
import TPackagesDet from "../Pages/TGuide/TPackages/TPackagesDet";

import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Community from "../Pages/Community/Community";
import Blog from "../Blogs/Blog";
import MyBookings from "../Pages/Dashboard/Dashboard/MyBookings/MyBookings";

import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddPack from "../Pages/Dashboard/AddPack/AddPack";
import PrivateRoute from "../FirebaseConfig/PrivateRoute";
import UserHome from "../Pages/Dashboard/Dashboard/UserHome/USerHOme";
import MyWishList from "../Pages/Dashboard/Dashboard/MyBookings/MyWishlist/MyWishlist";
import TGuideTours from "../Pages/Dashboard/TguideTours/TguideTours";
import TGuidesCard from "../Pages/Tguide/Tour/TGuidesCard";
import Contact from "../Pages/Contact/Contact";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
// import TDetails from "../Pages/Home/TouristReview/TDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:
            [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: "/tDetails/:id",
                    element: <PrivateRoute><TDetails></TDetails>,</PrivateRoute>

                },
                {
                    path: "/tour/:id",
                    element: <PrivateRoute><TPackagesDet></TPackagesDet></PrivateRoute>
                },
                {
                    path: "/guides/:id",
                    element:<PrivateRoute><TGuidesCard></TGuidesCard></PrivateRoute>,
                    loader: ({params}) => fetch(`https://tourist-guide-server-tau.vercel.app/guides/${params.id}`)
                },
                {
                    path: "login",
                    element: <LogIn></LogIn>
                },
                {
                    path: "/register",
                    element: <Register></Register>
                },
                {
                    path: "/community",
                    element:<Community></Community>
                },
                {
                    path: "/contact",
                    element:<Contact></Contact>
                },
                {
                    path: "/blogs",
                    element:<Blog></Blog>
                },
            ]
        },
        {
            path: 'dashboard',
            element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            children: [
              // normal user routes
              
                {
                    path: "myBookings",
                    element: <MyBookings></MyBookings>,
                    loader:()=> fetch('https://tourist-guide-server-tau.vercel.app/booking')
                },
                {
                    path: "payment",
                    element: <Payment></Payment>,
                    
                    
                },
                {
                    path: 'paymentHistory',
                    element: <PaymentHistory></PaymentHistory>,
                    loader:()=> fetch('https://tourist-guide-server-tau.vercel.app/payments')

                  },
                
                {
                    path: "myWishlist",
                    element: <MyWishList></MyWishList>,
                    loader:()=> fetch('https://tourist-guide-server-tau.vercel.app/wish')
                    
                },
                {
                    path: "allUsers",
                    element: <AllUsers></AllUsers>
                },
                {
                    path: "addPack",
                    element: <AddPack></AddPack>
                },
                {
                    path: "userHome",
                    element: <UserHome></UserHome>
                },
                {
                    path: "TGuideTours",
                    element: <TGuideTours></TGuideTours>,
                    loader:()=> fetch('https://tourist-guide-server-tau.vercel.app/tBooking')
                },


            ]
    },
]);
