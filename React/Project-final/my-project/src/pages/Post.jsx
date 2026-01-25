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
    <div className="mx-7">
      <h2 className="text-2xl text-neutral-700 font-bold">Post</h2>
      <p className="text-neutral-500 mb-4">Browse all registered users</p>

      <div className="flex flex-wrap gap-4 justify-center">
        {post.map((postItem) => {
          return (
            <div
              key={postItem.id}
              className="w-full md:w-[48%] lg:w-[30%] p-4 border rounded shadow-sm hover:shadow-xl transition transition-all"
            >
              <h1 className="text-xl font-bold mb-2 hover:text-blue-500 ">{postItem.title}</h1>
              <p className="text-sm text-gray-500 mb-2">
                By: {getUserName(postItem.userId)}
              </p>
              <p className="text-neutral-700">{postItem.body}</p>
              <div className="h-1 w-full bg-neutral-400 my-5"></div>
              <button className="bg-[#576A8F] hover:bg-[#576A7F] w-full py-2 text-white text-xl  rounded-2xl"><a href={`user/${postItem.userId}`}>View User Profile</a></button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Post;
