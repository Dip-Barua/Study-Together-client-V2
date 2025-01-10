import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import logo from '../../assets/logo.png';
import { Tooltip } from 'react-tooltip';
import { useTheme } from '../../ThemeContext';

const NavBar = () => {
  const { user, handleLogout } = useContext(authContext);
  const { theme, toggleTheme } = useTheme(); 

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  return (
    <div className='fixed top-0 z-50 bg-base-100 bg-opacity-80 rounded-b-2xl w-full'>
      <div className={`navbar  w-10/12 mx-auto py-4 ${theme === 'dark' ? '' : 'bg-transparent'} transition-colors`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black'} rounded-box z-50 mt-3 w-52 p-2 shadow-lg`}>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/assignments">Assignments</NavLink></li>
              <li><NavLink to="/pending-assignments">Pending Assignments</NavLink></li>
              <li><NavLink to="/create-assignment">Create Assignment</NavLink></li>
              <li><NavLink to="/my-attempted-assignment">My Attempted Assignment</NavLink></li>
              <li><NavLink to="/update-user">Update Profile</NavLink></li>

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
          <a className="hidden sm:block sm:mx-16 w-full z-10 sm:w-3/12 sm:max-w-64 sm:min-w-48">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <a className="block sm:hidden sm:mx-16 w-6/12 z-10 sm:w-3/12 sm:max-w-64 sm:min-w-48">
          <img src={logo} alt="Logo" />
        </a>
        <div className="navbar-center hidden lg:flex">
          <ul className={`menu menu-horizontal px-1 text-xl bg-transparent active:bg-transparent ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'underline font-bold' : '')}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'underline font-bold' : '')}>About</NavLink></li>
            <li><NavLink to="/assignments" className={({ isActive }) => (isActive ? 'underline font-bold' : '')}>Assignments</NavLink></li>
            {user?.email ? (
              <>
                            <li><NavLink to="/pending-assignments" className={({ isActive }) => (isActive ? 'underline font-bold' : '')}>Pending Assignments</NavLink></li>
                            {/* <li><NavLink to="/create-assignment" className={({ isActive }) => (isActive ? 'underline font-bold' : '')}>Create Assignment</NavLink></li>
                            <li><NavLink to="/my-attempted-assignment" className={({ isActive }) => (isActive ? 'underline font-bold' : '')}>Attempted Assignment</NavLink></li> */}

              </>
            ) : null}
          </ul>
        </div>
        <div className="navbar-end gap-10 mx-10 hidden lg:flex">
          {user?.email ? (
            <div className="flex navbar-end gap-5 mx-10 relative">
              <button onClick={toggleDropdown} className='btn  btn-ghost bg-transparent hover:bg-transparent rounded-full'>
                <img src={user.photoURL} className="rounded-full w-16 h-16" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} alt="User" />
              </button>
              {isDropdownVisible && (
                <div className="dropdown-content bg-gray-200 shadow-lg rounded-box w-58 absolute text-gray-800 right-0 mt-16 z-50">
                  <ul className="p-2">
                    <li><NavLink to="/create-assignment" className="block py-1 px-2">Create Assignment</NavLink></li>
                    <li><NavLink to="/my-attempted-assignment" className="block py-1 px-2">My Attempted Assignment</NavLink></li>
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
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white">
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
      <Tooltip id="my-tooltip" className='z-20 font-bold'/>
    </div>
  );
};

export default NavBar;
