import { useEffect, useState } from "react";
import axios from "axios";

function albums() {
  const [albums, setAlbums] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const handler = async () => {
    const respondAlbums = await axios.get(
      "https://jsonplaceholder.typicode.com/albums",
    );
    const usersRes = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    setAlbums(respondAlbums.data);
    setUsers(usersRes.data);

  };

  useEffect(() => {
    handler();
  }, []);

  const getUserName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : "Loading...";
  };



  return (
    <div className="mx-7">
      <h2 className="text-2xl text-neutral-700 font-bold">Albums</h2>
      <p className="text-neutral-500 mb-4">Browse all albums of our users</p>
      <div className="flex flex-wrap justify-center gap-4">
        {albums.map((item) => {
          return (
            <div
              key={item.id}
              className="p-4 border border-neutral-300 rounded shadow-sm w-full md:w-[48%] lg:w-[30%] hover:shadow-xl transition transform-all"
            >
              <h1 className="text-lg font-semibold hover:text-blue-500">
                {item.title}
              </h1>
              <p className="text-neutral-500">By: {getUserName(item.userId)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default albums;
