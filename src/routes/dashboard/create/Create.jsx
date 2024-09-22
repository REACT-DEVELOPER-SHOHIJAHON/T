import { useCreateUserMutation } from '../../../redux/api/userApi';
import { useState } from 'react';
import { notification } from 'antd';

const Create = () => {
  const [createUser] = useCreateUserMutation();
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createUser({ name, job }).unwrap();

      if (result.id) {
        notification.success({ message: 'User created successfully' });
        setName('');
        setJob('');
      }
    } catch (error) {
      notification.error({ message: 'User creation failed'});
    }
  };

  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">Create User</h2>
        <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input required value={job} onChange={(e) => setJob(e.target.value)} type="text" placeholder="Enter your job" className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors" >
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
