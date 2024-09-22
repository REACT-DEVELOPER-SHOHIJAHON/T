import { useParams } from "react-router-dom";
import { useGetDetailsQuery } from "../../redux/api/userApi";

const Details = () => {
  const { id } = useParams();
  const { data } = useGetDetailsQuery({ id });
  const user = data?.data;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      {user ? (
        <div className="max-w-sm w-full bg-white rounded-lg shadow-md p-6 text-center">
          <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200 object-cover"
          />
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            {user.first_name} {user.last_name}
          </h1>
          <p className="text-gray-600 mb-4">{user.email}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">
            Contact
          </button>
        </div>
      ) : (
        <p className="text-gray-500 text-lg">Loading...</p>
      )}
    </div>
  );
};

export default Details;
