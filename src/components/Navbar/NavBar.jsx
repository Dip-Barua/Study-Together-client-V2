import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, handleLogout } = useContext(authContext);
  return (
    <div>
      <div className="navbar bg-base-100 w-11/12 mx-auto bg-transparent">
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
              <li>              <NavLink to="/" onClick={handleLogout} className=" text-xl font-bold">Logout</NavLink>
</li>
          ) : (
            <div >
              <li>              <NavLink to="/login" className="mx-5 my-2 btn sm:text-xl font-bold">Login</NavLink>
</li>
<li>              <NavLink to="/register" className="btn mx-5 my-2 sm:text-xl font-bold">Register</NavLink>
</li>
            </div>
          )}
            </ul>
          </div>
          <a className="btn btn-ghost mx-16 w-full sm:w-5/12"><img  alt="Logo" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl  bg-transparent active:bg-transparent">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'underline font-bold' : '')}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'underline font-bold' : '')}>About</NavLink></li>
            <li><NavLink to="/campaign" className={({ isActive }) => (isActive ? 'underline font-bold' : '')}>Donation Campaigns</NavLink></li>
            <li><NavLink to="/help" className={({ isActive }) => (isActive ? 'underline font-bold' : '')}>How To Help</NavLink></li>
            <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'underline font-bold' : '')}>Dashboard</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end gap-10 mx-10 hidden lg:flex">
          {user?.email ? (
            <div className="flex navbar-end gap-5 mx-10">
              <NavLink to="/dashboard">
                <img src={user.photoURL} className="rounded-full w-16 h-16" alt="User" />
              </NavLink>
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
    </div>
  );
};

export default NavBar;