import { BiLogOut } from "react-icons/bi"; 
import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, notification } from 'antd'; // Added notification import
import { logOut } from '../../redux/slice/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const { confirm } = Modal;

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
    notification.success({ message: 'Log Out successful' });
  };

  const showConfirm = () => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: 'Do you want to log out of your account?',
      onOk() {
        handleLogout();
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <Button danger type="primary" onClick={showConfirm} className="hover:bg-red-600 transition-colors w-full flex items-center" >
     <BiLogOut size={20} /> Log Out
    </Button>
  );
};

export default App;
