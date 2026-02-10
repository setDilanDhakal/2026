import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { GoOrganization } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaFolder } from "react-icons/fa";
import axios from "axios";

function Profile() {
  const { id } = useParams();

  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  const handler = async () => {
    setLoading(true);

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(response.data);

    const postResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${response.data.id}`
    );
    setPosts(postResponse.data);

    const albumResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?userId=${response.data.id}`
    );
    setAlbums(albumResponse.data);

    setLoading(false);
  };

  useEffect(() => {
    handler();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="h-32 w-full bg-linear-to-r from-[#ffb7b7] to-[#383fc8] rounded-lg mb-6"></div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <div className="flex gap-6 flex-wrap items-start">
          <div className="h-24 w-24 bg-center bg-cover rounded-full bg-[url('https://i.pinimg.com/736x/d0/f2/8e/d0f28e75f32f7c0334698787d31b2628.jpg')] shrink-0"></div>
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-semibold text-gray-900">
              {user.name}
            </h2>
            <p className="text-gray-500 text-sm mb-4">@{user.username}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MdEmail />
                <p className="truncate">{user.email}</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaPhoneAlt />
                <p>{user.phone}</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CiGlobe />
                <a
                  href={`https://${user.website}`}
                  className="text-blue-600 hover:text-blue-700 truncate"
                >
                  {user.website}
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CiLocationOn />
                <p>
                  {user.address?.city}, {user.address?.street},{" "}
                  {user.address?.suite}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CiLocationOn />
                <p>
                  {user.address?.zipcode}, {user.address?.geo.lat},{" "}
                  {user.address?.geo.lng}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <GoOrganization />
                <p className="truncate">{user.company?.name}</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <GoOrganization />
                <p className="truncate">
                  {user.company?.catchPhrase}, {user.company?.bs}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Recent Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <a href={`/post/${id}`}>
              <h3 className="font-semibold text-gray-900 text-sm mb-2 hover:text-blue-400">
                {post.title}
              </h3>
            </a>
            <p className="text-sm text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Albums
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {albums.slice(0, 6).map((album) => (
          <div
            key={album.id}
            className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 hover:shadow-md transition-shadow"
          >
            <FaFolder size={20} className="text-gray-400" />
            <h1 className="text-sm font-medium text-gray-900 truncate">
              {album.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
