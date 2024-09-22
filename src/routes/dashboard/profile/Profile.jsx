import React from 'react';
import { useGetDetailsQuery } from '../../../redux/api/userApi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Profile = () => {
  const { id } = useSelector(state => state.auth);
  const { data } = useGetDetailsQuery({ id });
  const user = data?.data;

  

  return (
    <div className="w-full flex ">
      <div className='user flex w-full justify-center items-center'>
      {user ? (
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <img
            src={user?.avatar || 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg'}
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-500 object-cover shadow-md"
            alt={`${user.first_name} ${user.last_name}`}
          />
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            {user.first_name} {user.last_name}
          </h1>
          <p className="text-gray-600 text-lg mb-4">{user.email}</p>
        </div>
      ) : (
        <p className="font-semibold text-[24px] ml-2 font-sans text-[#5e5c5c]">
            Register to enter <Link to="/auth/signup" className='text-blue-600 underline'>Sign Up</Link>
        </p>
      )}
      </div>
    </div>
  );
};

export default Profile;
