import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useTGuide from "../../../hooks/usetGuide"; // Fix the typo here


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isTGuide] = useTGuide();

    return (
        <div className="flex ">

            <div className="w-64 min-h-screen bg-green-400  text-black">
                <ul className="menu p-4">
                    {
                        isAdmin ? (
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addPack">
                                        <FaCalendar></FaCalendar>
                                        Add Package</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allUsers">
                                        <FaShoppingCart></FaShoppingCart>
                                        Manage Users </NavLink>
                                </li>
                            </>
                        ) : (
                            isTGuide ? (
                                <>
                                    <li>
                                        <NavLink to="/dashboard/userHome">
                                            <FaHome></FaHome>
                                            My Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/assignedTours">
                                            <FaHome></FaHome>
                                            My Assigned Tours</NavLink>
                                    </li>

                                </>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to="/dashboard/userHome">
                                            <FaHome></FaHome>
                                            My Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myBookings">
                                            <FaCalendar></FaCalendar>
                                            My Bookings</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myWishlist">
                                            <FaShoppingCart></FaShoppingCart>
                                            My Wishlist </NavLink>
                                    </li>
                                </>
                            )
                        )
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>

                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
