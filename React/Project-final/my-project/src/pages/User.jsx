import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function User() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handler = async () => {

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      setUsers(response.data);

     
  };

  useEffect(() => {
    handler();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-1">Users</h2>
        <p className="text-gray-500">Browse all registered users</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{user.name}</h3>
            <div className="space-y-1 mb-4">
              <p className="text-sm text-gray-600">
                @{user.username}
              </p>
              <p className="text-sm text-gray-600">
                {user.email}
              </p>
              <p className="text-sm text-gray-600">
                {user.phone}
              </p> 
              <p className="text-sm text-gray-600">
                {user.website}
              </p>
            </div>
            <button
              className="w-full py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
              onClick={() => navigate(`/user/${user.id}`)}
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;
