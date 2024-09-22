import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Nav = () => {
  const { token } = useSelector(state => state.auth)
  

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to={"/"} className="text-xl font-bold text-blue-600">
          Home
        </Link>
        <ul className="flex space-x-4">
          {
            !token ? (<ul className="flex space-x-4">
              <li>
                <Link to="/auth/login" className="text-gray-700 hover:text-blue-600 transition duration-200">
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/auth/signup" className="text-gray-700 hover:text-blue-600 transition duration-200">
                  Sign Up
                </Link>
              </li>
            </ul>) : ( <li>
                <Link to="/dashboard/profile" className="text-gray-700 hover:text-blue-600 transition duration-200">
                  Profile
                </Link>
              </li>)
          }
        </ul>
      </div>
    </nav>
  );
};

export default Nav;


