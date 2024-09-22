import { Link } from 'react-router-dom';
import { useGetUsersQuery, useDeleteUserMutation } from '../../redux/api/userApi';
import { Button, notification } from 'antd';
import { AiOutlineLoading } from 'react-icons/ai';

const Users = () => {
    const { data, isLoading: usersIsLoading } = useGetUsersQuery();
    const [deleteUser, { isLoading: deleteUserIsLoading, isSuccess }] = useDeleteUserMutation();
    const users = data?.data;
    if (usersIsLoading) {
        return <p className="flex items-center justify-center h-screen text-gray-500">Loading...</p>;
    }

    const handleDelete = async ({ id }) => {
        await deleteUser({ id }).unwrap();
        if (isSuccess || !isSuccess) {
            notification.success({ message: 'User deleted successfully' });
        }
    }

    return (
        <div className="container max-w-[1440px] mx-auto w-full flex items-center justify-center py-10">
            <div className="grid grid-cols-3 max-w-[980px] gap-6 w-full px-4">
                {users ? (
                    users.map((user) => (
                        <div to={`/details/${user.id}`} key={user.id} className="flex flex-col items-center pb-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200" >
                            <Link to={`/details/${user.id}`} className="flex flex-col items-center w-full px-6 pt-6 pb-4">
                                <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-gray-300" />
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {user.first_name} {user.last_name}
                                </h2>
                                <p className="text-gray-600">{user.email}</p>
                            </Link>
                            <Button {
                                ...(!deleteUserIsLoading ? { disabled: false } : { disabled: true })
                            } className='w-[70px]' onClick={() => handleDelete({ id: user.id })} type="primary" danger>
                                {deleteUserIsLoading ? <div className="flex items-center">
                                <AiOutlineLoading className="animate-spin" />
                                <span className="ml-2"></span>
                            </div> : 'Delete'}</Button>
                        </div>
                    ))
                ) : (
                    <p>null</p>
                )}
            </div>
        </div>
    );
};

export default Users;
