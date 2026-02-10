import axios from "axios";
import { useEffect, useState } from "react";

function Async() {
  const [users, setUsers] = useState([]);

  const handler = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=10");
    setUsers(res.data);
  };

  useEffect(() => {
    handler();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Users</h1>

      
      <div className="flex flex-wrap justify-center gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className=" w-[30%] bg-white rounded-xl  p-5 "
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-sm text-gray-500">@{user.username}</p>

            <div className="mt-3 text-sm text-gray-700 space-y-1">
              <p> {user.email}</p>
              <p> {user.phone}</p>
              <p className="text-blue-500"> {user.website}</p>
              <p> {user.company.name}</p>
              <p> {user.address.city}</p>
            </div>

            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg ">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Async;
