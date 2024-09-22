import { AiOutlineLoading } from "react-icons/ai";
import { useState } from "react";
import { useGetLogInMutation } from '../../../redux/api/authApi';
import { notification } from 'antd';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/slice/authSlice";
import { Link } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [useLogIn, { isLoading }] = useGetLogInMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await useLogIn({ email, password }).unwrap();
      notification.success({ message: 'Log In successful' });
      localStorage.setItem('token', result.token);
      dispatch(logIn({ token: result.token }));
      navigate(`/`);
    } catch (err) {
      notification.error({
        message: (
          <>
            Log In failed: <br />
            {err.data?.error || 'An error occurred.'}
          </>
        ),
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <Link to={"/"} className="block text-center text-3xl font-bold text-gray-900 mb-6">
          Log In
        </Link>
        <form className="space-y-6" onSubmit={handleRegister}>
          <div className="flex flex-col gap-4">
            <input type="email" required className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <input type="password" required className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <p>Don't have an account? <Link to="/auth/signup" className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">Sign Up</Link></p>
          <button type="submit" disabled={isLoading} className="disabled:opacity-20 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
            {isLoading ? <div className="flex items-center">
              <AiOutlineLoading className="animate-spin" />
              <span className="ml-2">Loading...</span>
            </div> : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
