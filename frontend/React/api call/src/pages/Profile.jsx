import axios from "axios";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Profile() {
  const { id } = useParams();
  console.log(id);
  const [user, setUser] = useState([]);

  const handler = async () => {
    const data = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    console.log(data);
    setUser(data.data);
  };

  useEffect(() => {
    handler();
  }, []);

  return (
    <>
      <div className="px-10">
        <p className="text-3xl mt-10 p-2">
          <span>Welcome, </span>
          {user.name}
        </p>
        <div>
          <div className="w-full h-20 bg-gradient-to-r from-pink-500 to-purple-500"></div>
          <div className="w-full h-screen shadow-2xl p-10">
            <div className="flex flex-wrap flex-col md:flex-row w-full gap-4">
              <div className="flex-1">
                <h1 className="font-bold text-xl">Contact Information</h1>
                
                <div className="h-1 rounded w-full bg-purple-500"></div>

                <div className="flex gap-2 mt-2 flex-col">
                  <p className="flex items-center gap-2">
                    <MdEmail size={20} className="text-pink-500" />
                    {user.email}
                  </p>

                  <p className="flex items-center gap-2">
                    <MdPhone size={20} className="text-pink-500" />
                    {user.phone}
                  </p>

                  <p className="flex items-center gap-2">
                    <FaUser size={18} className="text-pink-500" />
                    {user.username}
                  </p>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="font-bold text-xl">Address</h1>
                
                <div className="h-1 w-full rounded bg-purple-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
