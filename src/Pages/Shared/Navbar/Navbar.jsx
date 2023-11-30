import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../FirebaseConfig/AuthProvider";


const ProfileDropdown = ({ user, handleLogOut }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleItemClick = () => {
    
    setDropdownVisible(false);
  };

  return (
    <div className="profile-dropdown">
      <div className="profile-info" onClick={toggleDropdown}>
        <span>{user.displayName}</span>
        <img className="rounded-box h-16" src={user.photoURL} alt="User Profile" />
      </div>
      {dropdownVisible && (
        <div className="dropdown-content ">
          <Link to="/dashboard" onClick={handleItemClick}>
           <button className="btn"> Dashboard</button>
          </Link>
          
          <button className="mr-8 btn" onClick={handleLogOut}>Log Out</button>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/community">Community</Link></li>
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/aboutUs">About Us</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      
      {user ? (
        <ProfileDropdown user={user} handleLogOut={handleLogOut} />
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Touristaa</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
