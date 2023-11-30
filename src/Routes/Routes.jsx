import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import TDetails from "../Pages/Home/TouristReview/TDetails";
import TPackagesDet from "../Pages/TGuide/TPackages/TPackagesDet";
import TGuidesCard from "../Pages/TGuide/Tour/TGuidesCard";
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
                    element:<PrivateRoute> <TGuidesCard></TGuidesCard></PrivateRoute>
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
                    loader:()=> fetch('https://tourist-guide-server-tau.vercel.app/bookings')
                },
                
                {
                    path: "myWishlist",
                    element: <MyWishList></MyWishList>,
                    loader:()=> fetch('https://tourist-guide-server-tau.vercel.app/wishes')
                    
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


            ]
    },
]);
