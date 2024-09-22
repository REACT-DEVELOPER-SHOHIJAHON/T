import { BiLogOut } from "react-icons/bi"; 
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, notification } from 'antd';
import { logOut } from '../../redux/slice/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';


const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut())
    navigate('/');
    notification.success({ message: 'Log Out successful' });
  };

  return (
    <div className="h-screen min-w-64 bg-gray-800 text-white p-4">
      <nav className="flex flex-col space-y-4 pt-10">
        <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`} >
          Home
        </NavLink>
        <NavLink to="/dashboard/profile" className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`} >
          Profile
        </NavLink>
        <NavLink to="/dashboard/create" className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`} >
          Create
        </NavLink>
        <NavLink to="/e" className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`} >
          Notfound
        </NavLink>
        <div className="absolute bottom-10 w-[224px]" >
        <Modal/>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
