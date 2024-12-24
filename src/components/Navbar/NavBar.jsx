import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import logo from "../../assets/logo.png";
import { Tooltip } from 'react-tooltip'

const NavBar = () => {
  const { user, handleLogout } = useContext(authContext);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  return (
    <div>
      <div className="navbar bg-base-100 w-10/12 mx-auto py-4 bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/campaign">Donation Campaigns</NavLink></li>
              <li><NavLink to="/help">How To Help</NavLink></li>
              <li><NavLink to="/dashboard">Dashboard</NavLink></li>

              {user?.email ? (
                <li><NavLink to="/" onClick={handleLogout} className="text-xl font-bold">Logout</NavLink></li>
              ) : (
                <div>
                  <li><NavLink to="/login" className="mx-5 my-2 btn sm:text-xl font-bold">Login</NavLink></li>
                  <li><NavLink to="/register" className="btn mx-5 my-2 sm:text-xl font-bold">Register</NavLink></li>
                </div>
              )}
            </ul>
          </div>
          <a className=" mx-16 w-full sm:w-3/12 sm:max-w-64 sm:min-w-48">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl bg-transparent active:bg-transparent">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'underline font-bold' : '')}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'underline font-bold' : '')}>About</NavLink></li>
            <li><NavLink to="/assignments" className={({ isActive }) => (isActive ? 'underline font-bold' : '')}>Assignments</NavLink></li>
            <li><NavLink to="/pending-assignments" className={({ isActive }) => (isActive ? 'underline font-bold' : '')}>Pending Assignments</NavLink></li>
            {/* <li><NavLink to="/userprofile" className={({ isActive }) => (isActive ? 'underline font-bold' : '')}>User Profile</NavLink></li> */}
          </ul>
        </div>
        <div className="navbar-end gap-10 mx-10 hidden lg:flex">
          {user?.email ? (
            <div className="flex navbar-end gap-5 mx-10 relative">
              <button onClick={toggleDropdown}>
                <img src={user.photoURL} className="rounded-full w-16 h-16" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} alt="User" />
              </button>
              {isDropdownVisible && (
                <div className="dropdown-content bg-white shadow-lg rounded-box w-58 absolute right-0 mt-16 z-50">
                  <ul className="p-2">
                    <li><NavLink to="/create-assignment" className="block py-1 px-2">Create Assignment</NavLink></li>
                    <li><NavLink to="/" className="block py-1 px-2">My Attempted Assignment</NavLink></li>
                    <li><NavLink to="/update-user" className="block py-1 px-2">Update Profile</NavLink></li>
                  </ul>
                </div>
              )}
                            <NavLink to="/" onClick={handleLogout} className="btn text-xl font-bold">Logout</NavLink>

            </div>
          ) : (
            <div className="sm:gap-10 mx-10">
              <NavLink to="/login" className="mx-5 btn sm:text-xl font-bold">Login</NavLink>
              <NavLink to="/register" className="btn sm:text-xl font-bold">Register</NavLink>
            </div>
          )}
        </div>
      </div>
      <Tooltip id="my-tooltip" className="z-10"/>

    </div>
  );
};

export default NavBar;
