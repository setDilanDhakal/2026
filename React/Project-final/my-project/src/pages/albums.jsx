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
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-1">Albums</h2>
        <p className="text-gray-500">Browse all albums</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {albums.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <h1 className="text-base font-semibold text-gray-900 mb-1">
                {item.title}
              </h1>
              <p className="text-sm text-gray-500">By {getUserName(item.userId)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default albums;
