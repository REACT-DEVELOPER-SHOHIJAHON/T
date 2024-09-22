import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-9xl font-bold text-gray-700 mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-600 mb-2">Oops! Page not found</p>
      <p className="text-lg text-gray-500 mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition duration-300">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
