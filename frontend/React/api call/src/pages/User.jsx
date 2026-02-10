import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function User() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const handler = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUser(res.data);
  };

  useEffect(() => {
    handler();
  }, []);

  return (
    <div className="px-10 bg-slate-50 min-h-screen">
      <h2 className="text-3xl mb-6 mt-5 font-semibold text-slate-800">
        Users
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {user.map((items) => (
          <div
            key={items.id}
            className="h-64 w-80 bg-white border border-slate-200 
                       rounded-lg p-5 flex flex-col gap-2 
                       shadow hover:shadow-lg transition"
          >
            <h1 className="text-lg font-bold text-slate-800">
              {items.name}
            </h1>

            <p className="text-slate-600 text-sm">
              <b className="text-slate-800">Address:</b>{" "}
              {items.address.street}, {items.address.city}
            </p>

            <p className="text-slate-600 text-sm">
              <b className="text-slate-800">Email:</b> {items.email}
            </p>

            <p className="text-slate-600 text-sm">
              <b className="text-slate-800">Phone:</b> {items.phone}
            </p>

            <p className="text-pink-500 text-sm">
              <b className="text-slate-800">Website:</b>{" "}
              {items.website}
            </p>

            <button
              className="mt-auto bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded
                         hover:from-pink-600 hover:to-purple-600 transition"
              onClick={() => navigate(`/user/${items.id}`)}
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
