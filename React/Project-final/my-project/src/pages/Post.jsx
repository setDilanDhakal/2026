import { useEffect, useState } from "react";
import axios from "axios";

function Post() {
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);

  const handle = async () => {
    const respondPost = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    setPost(respondPost.data);
    console.log(respondPost.data);
    const respondUser = await axios.get(
      `https://jsonplaceholder.typicode.com/users`,
    );
    setUser(respondUser.data);
    console.log(respondUser.data);
  };

  console.log("user id", user.id)
  const getUserName = (userId) => {
    const foundUser = user.find((u) => u.id === userId);
    return foundUser ? foundUser.name : "Loading";
  };

  useEffect(() => {
    handle();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-1">Posts</h2>
        <p className="text-gray-500">Browse all posts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {post.map((postItem) => {
          return (
            <div
              key={postItem.id}
              className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col"
            >
              <h1 className="text-lg font-semibold text-gray-900 mb-2">{postItem.title}</h1>
              <p className="text-xs text-gray-500 mb-3">
                By {getUserName(postItem.userId)}
              </p>
              <p className="text-sm text-gray-600 mb-4 flex-grow">{postItem.body}</p>
              <button className="w-full py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"><a href={`user/${postItem.userId}`}>View Profile</a></button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Post;
