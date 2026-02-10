import { useEffect, useState } from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Post() {
  const [post, setPost] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handle = async () => {
    setLoading(true);
    const respondPost = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    setPost(respondPost.data);

    const respondUser = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setUsers(respondUser.data);

    setLoading(false);
  };

  const getUserName = (userId) => {
    const foundUser = users.find((u) => u.id === userId);
    return foundUser ? foundUser.name : "";
  };

  useEffect(() => {
    handle();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-1">Posts</h2>
        <p className="text-gray-500">Browse all posts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {post.slice(0, 30).map((postItem) => (
          <div
            key={postItem.id}
            className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col"
          >
            <h1 className="text-lg font-semibold text-gray-900 mb-2">
              {postItem.title}
            </h1>
            <p className="text-sm text-gray-600 mb-4 grow">{postItem.body}</p>

            <p className="text-xs text-gray-500 mb-3 space-x-2">
              <Link
                to={`/user/${postItem.userId}`}
                className="text-sm text-[#282829] hover:text-[#3b43dd] ml-auto flex items-center"
              >
                <FaUser size={14} className="mx-2" />{" "}
                {getUserName(postItem.userId)}
              </Link>
            </p>

            <Link
              to={`/post/${postItem.id}`}
              className="w-full py-2 rounded-lg bg-purple-500 text-white text-sm font-medium hover:bg-purple-800 transition-colors text-center"
            >
              View Post
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
